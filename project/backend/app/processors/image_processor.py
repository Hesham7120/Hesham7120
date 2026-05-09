import logging
from pathlib import Path

import cv2
import numpy as np
from PIL import Image, ImageOps

logger = logging.getLogger(__name__)


class ImageProcessor:
    def __init__(self, max_dimension: int, thumbnail_size: int, jpeg_quality: int):
        self.max_dimension = max_dimension
        self.thumbnail_size = thumbnail_size
        self.jpeg_quality = jpeg_quality

    def preprocess(self, input_path: Path, output_path: Path, thumbnail_path: Path) -> None:
        image = Image.open(input_path).convert("RGB")
        image = ImageOps.exif_transpose(image)

        width, height = image.size
        ratio = min(self.max_dimension / max(width, height), 1)
        resized = image.resize((int(width * ratio), int(height * ratio)), Image.Resampling.LANCZOS)

        cv_img = cv2.cvtColor(np.array(resized), cv2.COLOR_RGB2BGR)
        denoised = cv2.fastNlMeansDenoisingColored(cv_img, None, 7, 7, 7, 21)

        sharpen_kernel = np.array([[0, -1, 0], [-1, 5, -1], [0, -1, 0]])
        sharpened = cv2.filter2D(denoised, -1, sharpen_kernel)

        lab = cv2.cvtColor(sharpened, cv2.COLOR_BGR2LAB)
        l, a, b = cv2.split(lab)
        clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))
        l2 = clahe.apply(l)
        normalized = cv2.cvtColor(cv2.merge((l2, a, b)), cv2.COLOR_LAB2BGR)

        out = Image.fromarray(cv2.cvtColor(normalized, cv2.COLOR_BGR2RGB))
        output_path.parent.mkdir(parents=True, exist_ok=True)
        out.save(output_path, format="JPEG", quality=self.jpeg_quality, optimize=True)

        thumb = out.copy()
        thumb.thumbnail((self.thumbnail_size, self.thumbnail_size), Image.Resampling.LANCZOS)
        thumbnail_path.parent.mkdir(parents=True, exist_ok=True)
        thumb.save(thumbnail_path, format="JPEG", quality=80, optimize=True)
        logger.info("Processed image %s", input_path.name)
