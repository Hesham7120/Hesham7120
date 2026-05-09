from pathlib import Path
from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "AI Red Team Reporting Assistant"
    app_env: str = Field(default="development")
    debug: bool = Field(default=False)
    host: str = Field(default="0.0.0.0")
    port: int = Field(default=8000)

    base_data_dir: Path = Field(default=Path("project/data"))
    uploads_dir: Path = Field(default=Path("project/data/uploads"))
    processed_dir: Path = Field(default=Path("project/data/processed"))
    ocr_dir: Path = Field(default=Path("project/data/ocr"))
    reports_dir: Path = Field(default=Path("project/data/reports"))
    templates_dir: Path = Field(default=Path("project/data/templates"))

    max_image_dimension: int = Field(default=2200)
    jpeg_quality: int = Field(default=88)
    thumbnail_size: int = Field(default=320)

    ai_provider: str = Field(default="openai_compatible")
    ai_api_key: str | None = Field(default=None)
    ai_base_url: str = Field(default="https://api.openai.com/v1")
    ai_model: str = Field(default="gpt-4.1-mini")
    ai_timeout_seconds: int = Field(default=60)

    analyze_rate_limit_per_minute: int = Field(default=6)
    export_rate_limit_per_minute: int = Field(default=12)

    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")


settings = Settings()
