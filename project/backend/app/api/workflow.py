from fastapi import APIRouter, File, HTTPException, UploadFile
from fastapi.responses import FileResponse

from app.schemas.workflow import ImageMetaUpdate, ReorderRequest, ReviewUpdate
from app.services.workflow_service import WorkflowService
from app.utils.config import settings
from app.utils.errors import AppError
from app.utils.rate_limit import InMemoryRateLimiter

router = APIRouter(prefix="/api/v1/workflow", tags=["workflow"])
service = WorkflowService()
analyze_limiter = InMemoryRateLimiter(limit_per_minute=settings.analyze_rate_limit_per_minute)
export_limiter = InMemoryRateLimiter(limit_per_minute=settings.export_rate_limit_per_minute)


def to_session_response(session):
    return {
        "session_id": session.session_id,
        "case_title": session.case_title,
        "images": [
            {
                "image_id": i.image_id,
                "filename": i.filename,
                "title": i.title,
                "caption": i.caption,
                "order": i.order,
                "include_for_ai": i.include_for_ai,
            }
            for i in sorted(session.images, key=lambda x: x.order)
        ],
    }


@router.post("/images")
def upload_images(case_title: str = "Untitled Red Team Case", files: list[UploadFile] = File(...)):
    try:
        session = service.create_session_with_uploads(case_title=case_title, files=files)
        return to_session_response(session)
    except AppError as err:
        raise HTTPException(status_code=err.status_code, detail=err.message) from err


@router.get("/sessions/{session_id}")
def get_session(session_id: str):
    try:
        session = service.get_session(session_id)
        return to_session_response(session)
    except FileNotFoundError as err:
        raise HTTPException(status_code=404, detail="Session not found") from err


@router.post("/sessions/{session_id}/images/reorder")
def reorder_images(session_id: str, payload: ReorderRequest):
    try:
        session = service.reorder_images(session_id, payload.image_ids)
        return to_session_response(session)
    except AppError as err:
        raise HTTPException(status_code=err.status_code, detail=err.message) from err


@router.patch("/sessions/{session_id}/images/{image_id}")
def update_image_meta(session_id: str, image_id: str, payload: ImageMetaUpdate):
    try:
        session = service.update_image_meta(session_id, image_id, payload.model_dump(exclude_unset=True))
        return to_session_response(session)
    except AppError as err:
        raise HTTPException(status_code=err.status_code, detail=err.message) from err


@router.delete("/sessions/{session_id}/images/{image_id}")
def delete_image(session_id: str, image_id: str):
    session = service.delete_image(session_id, image_id)
    return to_session_response(session)


@router.post("/sessions/{session_id}/analyze")
def analyze(session_id: str):
    if not analyze_limiter.allow(session_id):
        raise HTTPException(status_code=429, detail="Analyze rate limit exceeded. Try again shortly.")
    try:
        return service.analyze(session_id)
    except AppError as err:
        raise HTTPException(status_code=err.status_code, detail=err.message) from err
    except FileNotFoundError as err:
        raise HTTPException(status_code=404, detail="Session not found") from err


@router.post("/sessions/{session_id}/review")
def review(session_id: str, payload: ReviewUpdate):
    try:
        return service.apply_review_updates(session_id, payload.model_dump(exclude_unset=True))
    except FileNotFoundError as err:
        raise HTTPException(status_code=404, detail="Analysis not found") from err


@router.post("/sessions/{session_id}/export")
def export_report(session_id: str, format_name: str = "docx", template_name: str = "default"):
    if not export_limiter.allow(session_id):
        raise HTTPException(status_code=429, detail="Export rate limit exceeded. Try again shortly.")
    try:
        filename = service.export(session_id, format_name, template_name)
        return {
            "session_id": session_id,
            "filename": filename,
            "download_path": f"/api/v1/workflow/sessions/{session_id}/exports/{filename}",
        }
    except (FileNotFoundError, AppError) as err:
        status = err.status_code if isinstance(err, AppError) else 404
        detail = err.message if isinstance(err, AppError) else "Analysis not found"
        raise HTTPException(status_code=status, detail=detail) from err


@router.get("/sessions/{session_id}/exports/{filename}")
def download_export(session_id: str, filename: str):
    file_path = service.storage.resolve_report_file(session_id, filename)
    if not file_path.exists():
        raise HTTPException(status_code=404, detail="Export file not found")
    return FileResponse(file_path)
