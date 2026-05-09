from pydantic import BaseModel, Field


class ImageMetaUpdate(BaseModel):
    title: str | None = Field(default=None, max_length=120)
    caption: str | None = Field(default=None, max_length=400)
    include_for_ai: bool | None = None


class ReorderRequest(BaseModel):
    image_ids: list[str] = Field(min_length=1)


class Finding(BaseModel):
    title: str
    severity: str
    description: str
    impact: str
    evidence_ids: list[str]
    recommendation: str
    mitre_techniques: list[str]
    confidence: float = Field(ge=0.0, le=1.0)


class ExtractedEntities(BaseModel):
    hosts: list[str] = []
    ips: list[str] = []
    users: list[str] = []
    domains: list[str] = []
    hashes: list[str] = []
    commands: list[str] = []
    tools: list[str] = []
    timestamps: list[str] = []
    attack_technique_hints: list[str] = []


class ReportSections(BaseModel):
    executive_summary: str = ""
    methodology: str = ""
    scope: str = ""
    technical_details: str = ""
    recommendations: str = ""
    appendix: str = ""


class AnalysisResult(BaseModel):
    case_title: str
    summary: str
    findings: list[Finding]
    attack_chain: list[str]
    extracted_entities: ExtractedEntities
    report_sections: ReportSections


class ReviewUpdate(BaseModel):
    case_title: str | None = None
    summary: str | None = None
    findings: list[Finding] | None = None
    attack_chain: list[str] | None = None
    report_sections: ReportSections | None = None
