from dataclasses import dataclass, field


@dataclass
class EvidenceImage:
    image_id: str
    filename: str
    title: str
    caption: str
    order: int
    include_for_ai: bool = True
    original_path: str | None = None
    processed_path: str | None = None
    thumbnail_path: str | None = None
    ocr_path: str | None = None


@dataclass
class SessionData:
    session_id: str
    case_title: str
    images: list[EvidenceImage] = field(default_factory=list)
