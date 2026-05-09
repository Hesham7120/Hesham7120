import json
from pathlib import Path
from uuid import uuid4

from app.models.domain import EvidenceImage, SessionData
from app.utils.config import settings


class StorageService:
    def __init__(self):
        self.base = Path(settings.base_data_dir)
        self.base.mkdir(parents=True, exist_ok=True)

    def create_session(self, case_title: str) -> SessionData:
        session_id = uuid4().hex
        session = SessionData(session_id=session_id, case_title=case_title)
        self.save_session(session)
        return session

    def session_dir(self, session_id: str) -> Path:
        return self.base / "uploads" / session_id

    def processed_dir(self, session_id: str) -> Path:
        return self.base / "processed" / session_id

    def ocr_dir(self, session_id: str) -> Path:
        return self.base / "ocr" / session_id

    def reports_dir(self, session_id: str) -> Path:
        return self.base / "reports" / session_id

    def metadata_path(self, session_id: str) -> Path:
        return self.session_dir(session_id) / "metadata.json"

    def analysis_path(self, session_id: str) -> Path:
        return self.reports_dir(session_id) / "analysis.json"

    def save_session(self, session: SessionData) -> None:
        p = self.metadata_path(session.session_id)
        p.parent.mkdir(parents=True, exist_ok=True)
        payload = {
            "session_id": session.session_id,
            "case_title": session.case_title,
            "images": [img.__dict__ for img in session.images],
        }
        p.write_text(json.dumps(payload, indent=2), encoding="utf-8")

    def load_session(self, session_id: str) -> SessionData:
        p = self.metadata_path(session_id)
        if not p.exists():
            raise FileNotFoundError("Session not found")
        payload = json.loads(p.read_text(encoding="utf-8"))
        images = [EvidenceImage(**img) for img in payload.get("images", [])]
        return SessionData(session_id=payload["session_id"], case_title=payload["case_title"], images=images)

    def save_analysis(self, session_id: str, analysis: dict) -> None:
        p = self.analysis_path(session_id)
        p.parent.mkdir(parents=True, exist_ok=True)
        p.write_text(json.dumps(analysis, indent=2), encoding="utf-8")

    def load_analysis(self, session_id: str) -> dict:
        p = self.analysis_path(session_id)
        if not p.exists():
            raise FileNotFoundError("Analysis not found")
        return json.loads(p.read_text(encoding="utf-8"))

    def resolve_report_file(self, session_id: str, filename: str) -> Path:
        return self.reports_dir(session_id) / filename
