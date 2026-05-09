import json
from pathlib import Path
from uuid import uuid4

from fastapi import UploadFile

from app.models.domain import EvidenceImage
from app.processors.entity_extractor import EntityExtractor
from app.processors.image_processor import ImageProcessor
from app.processors.ocr_processor import OCRProcessor
from app.report.generator import ReportGenerator
from app.services.ai_service import AIService
from app.services.classification_service import ClassificationService
from app.services.storage_service import StorageService
from app.utils.config import settings
from app.utils.errors import AppError


class WorkflowService:
    def __init__(self):
        self.storage = StorageService()
        self.image_processor = ImageProcessor(
            max_dimension=settings.max_image_dimension,
            thumbnail_size=settings.thumbnail_size,
            jpeg_quality=settings.jpeg_quality,
        )
        self.ocr_processor = OCRProcessor()
        self.entity_extractor = EntityExtractor()
        self.ai_service = AIService(
            api_key=settings.ai_api_key,
            base_url=settings.ai_base_url,
            model=settings.ai_model,
            timeout_seconds=settings.ai_timeout_seconds,
        )
        self.classifier = ClassificationService()
        self.reporter = ReportGenerator()

    def create_session_with_uploads(self, case_title: str, files: list[UploadFile]):
        if not files:
            raise AppError("No files uploaded", status_code=422)

        session = self.storage.create_session(case_title=case_title or "Untitled Red Team Case")
        upload_root = self.storage.session_dir(session.session_id)
        upload_root.mkdir(parents=True, exist_ok=True)

        for idx, file in enumerate(files, start=1):
            ext = file.filename.split(".")[-1].lower() if file.filename else ""
            if ext not in {"png", "jpg", "jpeg", "webp"}:
                raise AppError(f"Unsupported file type: {file.filename}", status_code=422)

            image_id = uuid4().hex[:12]
            original_name = f"{image_id}_{Path(file.filename).name}"
            original_path = upload_root / original_name
            with original_path.open("wb") as f:
                f.write(file.file.read())

            session.images.append(
                EvidenceImage(
                    image_id=image_id,
                    filename=file.filename,
                    title=f"Evidence {idx}",
                    caption="",
                    order=idx,
                    include_for_ai=True,
                    original_path=str(original_path),
                )
            )

        self.storage.save_session(session)
        return session

    def get_session(self, session_id: str):
        return self.storage.load_session(session_id)

    def reorder_images(self, session_id: str, image_ids: list[str]):
        session = self.storage.load_session(session_id)
        existing = {i.image_id: i for i in session.images}
        if set(existing.keys()) != set(image_ids):
            raise AppError("image_ids must include all existing images exactly once", status_code=422)
        ordered = [existing[i] for i in image_ids]
        for idx, img in enumerate(ordered, start=1):
            img.order = idx
        session.images = ordered
        self.storage.save_session(session)
        return session

    def delete_image(self, session_id: str, image_id: str):
        session = self.storage.load_session(session_id)
        session.images = [img for img in session.images if img.image_id != image_id]
        for idx, img in enumerate(session.images, start=1):
            img.order = idx
        self.storage.save_session(session)
        return session

    def update_image_meta(self, session_id: str, image_id: str, updates: dict):
        session = self.storage.load_session(session_id)
        target = next((img for img in session.images if img.image_id == image_id), None)
        if not target:
            raise AppError("Image not found", status_code=404)
        for k, v in updates.items():
            if v is not None:
                setattr(target, k, v)
        self.storage.save_session(session)
        return session

    def analyze(self, session_id: str) -> dict:
        session = self.storage.load_session(session_id)
        if not session.images:
            raise AppError("No images in session", status_code=422)

        evidence_context = []
        merged_entities: dict[str, set[str]] = {}

        for img in sorted(session.images, key=lambda x: x.order):
            if not img.original_path:
                continue
            in_path = Path(img.original_path)
            processed_path = self.storage.processed_dir(session_id) / f"{img.image_id}.jpg"
            thumbnail_path = self.storage.processed_dir(session_id) / "thumbnails" / f"{img.image_id}.jpg"
            self.image_processor.preprocess(in_path, processed_path, thumbnail_path)

            ocr_text = self.ocr_processor.extract_text(processed_path)
            ocr_output_path = self.storage.ocr_dir(session_id) / f"{img.image_id}.txt"
            ocr_output_path.parent.mkdir(parents=True, exist_ok=True)
            ocr_output_path.write_text(ocr_text, encoding="utf-8")

            entities = self.entity_extractor.extract(ocr_text)
            phases = self.classifier.infer_phases(ocr_text)

            img.processed_path = str(processed_path)
            img.thumbnail_path = str(thumbnail_path)
            img.ocr_path = str(ocr_output_path)

            if img.include_for_ai:
                evidence_context.append(
                    {
                        "image_id": img.image_id,
                        "title": img.title,
                        "caption": img.caption,
                        "ocr_excerpt": ocr_text[:4000],
                        "entities": entities,
                        "phases": phases,
                    }
                )

            for key, vals in entities.items():
                merged_entities.setdefault(key, set()).update(vals)

        self.storage.save_session(session)

        merged_entities_list = {k: sorted(v) for k, v in merged_entities.items()}
        ai_result = self.ai_service.analyze(session.case_title, evidence_context, merged_entities_list)

        if not ai_result.get("findings"):
            ai_result["findings"] = self.classifier.synthesize_findings(evidence_context)
        if not ai_result.get("attack_chain"):
            ai_result["attack_chain"] = sorted({p for e in evidence_context for p in e.get("phases", [])})
        ai_result["case_title"] = ai_result.get("case_title") or session.case_title

        for finding in ai_result.get("findings", []):
            evidence_ids = [i for i in finding.get("evidence_ids", []) if any(e["image_id"] == i for e in evidence_context)]
            finding["evidence_ids"] = evidence_ids
            if not evidence_ids:
                finding["confidence"] = min(0.3, float(finding.get("confidence", 0.3)))

        ai_result.setdefault("extracted_entities", {})
        for k in ["hosts", "ips", "users", "domains", "hashes", "commands", "tools", "timestamps", "attack_technique_hints"]:
            ai_result["extracted_entities"].setdefault(k, merged_entities_list.get(k, []))

        ai_result.setdefault("report_sections", {})
        ai_result["report_sections"].setdefault("executive_summary", ai_result.get("summary", ""))
        ai_result["report_sections"].setdefault("methodology", "")
        ai_result["report_sections"].setdefault("scope", "")
        ai_result["report_sections"].setdefault("technical_details", "")
        ai_result["report_sections"].setdefault("recommendations", "")
        ai_result["report_sections"].setdefault("appendix", "")

        self.storage.save_analysis(session_id, ai_result)
        return ai_result

    def apply_review_updates(self, session_id: str, payload: dict) -> dict:
        analysis = self.storage.load_analysis(session_id)
        for key in ["case_title", "summary", "findings", "attack_chain", "report_sections"]:
            if payload.get(key) is not None:
                analysis[key] = payload[key]
        self.storage.save_analysis(session_id, analysis)
        return analysis

    def export(self, session_id: str, format_name: str, template_name: str = "default") -> str:
        analysis = self.storage.load_analysis(session_id)
        reports_dir = self.storage.reports_dir(session_id)
        reports_dir.mkdir(parents=True, exist_ok=True)

        if template_name == "executive_first":
            analysis["report_sections"]["executive_summary"] = (
                "[Executive-First Template] " + analysis["report_sections"].get("executive_summary", "")
            )

        if format_name == "markdown":
            path = self.reporter.to_markdown(analysis, reports_dir / "report.md")
        elif format_name == "docx":
            path = self.reporter.to_docx(analysis, reports_dir / "report.docx")
        elif format_name == "pdf":
            path = self.reporter.to_pdf(analysis, reports_dir / "report.pdf")
        else:
            raise AppError("Unsupported export format", status_code=422)

        manifest = reports_dir / "exports.json"
        exported = []
        if manifest.exists():
            exported = json.loads(manifest.read_text(encoding="utf-8"))
        exported.append(path.name)
        manifest.write_text(json.dumps(sorted(set(exported)), indent=2), encoding="utf-8")
        return path.name
