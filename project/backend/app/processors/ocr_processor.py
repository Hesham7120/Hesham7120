import logging
from pathlib import Path

import pytesseract
from pytesseract import TesseractNotFoundError

logger = logging.getLogger(__name__)


class OCRProcessor:
    def extract_text(self, image_path: Path) -> str:
        try:
            text = pytesseract.image_to_string(str(image_path))
            return text.strip()
        except TesseractNotFoundError:
            logger.warning("Tesseract is not installed; OCR result is empty")
            return ""
        except Exception as exc:
            logger.exception("OCR failed for %s", image_path)
            raise RuntimeError(f"OCR failed: {exc}") from exc
