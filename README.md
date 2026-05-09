# AI Red Team Reporting Assistant

Production-oriented MVP for automated red-team evidence processing and report generation.

## 1) Architecture

### High-level flow
1. Upload multiple images from Streamlit frontend.
2. Backend stores session and metadata in local folders.
3. Image pipeline standardizes and enhances quality.
4. OCR extracts text from processed images.
5. Entity extraction + attack-phase classification produce structured signals.
6. AI analysis generates strict JSON findings with evidence links.
7. Human review edits report content before export.
8. Export pipeline produces Markdown, DOCX, and PDF.

### Backend modules
- `api/`: REST endpoints
- `services/`: orchestration, storage, AI integration, classification
- `processors/`: image preprocessing, OCR, entity extraction
- `report/`: Markdown/DOCX/PDF rendering
- `schemas/`: request/response validation
- `utils/`: config, logging, errors, rate limiting

### Reliability controls
- File-type validation and metadata validation
- Analyze/export rate limiting
- Evidence validation and confidence downgrade for unsupported claims
- Clear error responses and centralized exception handling

## 2) Folder structure

```text
project/
  backend/
    app/
      main.py
      api/
      services/
      processors/
      models/
      schemas/
      utils/
      report/
    tests/
  frontend/
    streamlit_app.py
  data/
    uploads/
    processed/
    ocr/
    reports/
    templates/
    sample_workflow/
.env.example
README.md
```

## 3) Setup and run

### Prerequisites
- Python 3.11+
- Tesseract OCR installed and available in PATH

### Install
```bash
python -m venv .venv
source .venv/bin/activate
pip install -r project/requirements.txt
cp .env.example .env
```

### Run backend
```bash
PYTHONPATH=project/backend uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

### Run frontend
```bash
streamlit run project/frontend/streamlit_app.py
```

## 4) API endpoints

- `POST /api/v1/workflow/images`
- `GET /api/v1/workflow/sessions/{session_id}`
- `PATCH /api/v1/workflow/sessions/{session_id}/images/{image_id}`
- `DELETE /api/v1/workflow/sessions/{session_id}/images/{image_id}`
- `POST /api/v1/workflow/sessions/{session_id}/images/reorder`
- `POST /api/v1/workflow/sessions/{session_id}/analyze`
- `POST /api/v1/workflow/sessions/{session_id}/review`
- `POST /api/v1/workflow/sessions/{session_id}/export?format_name=docx|pdf|markdown`
- `GET /api/v1/workflow/sessions/{session_id}/exports/{filename}`

## 5) Processing details

### Image preprocessing
- Resize while preserving aspect ratio
- Denoise, sharpen, and normalize contrast (CLAHE)
- Create compressed processed images and thumbnails

### OCR pipeline
- OCR runs on preprocessed images using `pytesseract`
- OCR text saved under `project/data/ocr/<session_id>/`

### AI pipeline
- AI invoked after OCR + metadata extraction
- Only images with `include_for_ai=true` are sent to AI
- Uses strict JSON prompting and evidence-link constraints
- Falls back to deterministic local synthesis if API is unavailable

## 6) Structured JSON output example

```json
{
  "case_title": "Internal Red Team Exercise",
  "summary": "Potential credential access and lateral movement observed.",
  "findings": [
    {
      "title": "Credential Access activity observed",
      "severity": "High",
      "description": "Potential credential dumping behavior identified.",
      "impact": "Adversaries can escalate account compromise.",
      "evidence_ids": ["a1b2c3d4e5f6"],
      "recommendation": "Isolate host and reset affected credentials.",
      "mitre_techniques": ["TA0006"],
      "confidence": 0.78
    }
  ],
  "attack_chain": ["Recon", "Credential Access", "Lateral Movement"],
  "extracted_entities": {
    "hosts": ["DC01"],
    "ips": ["10.10.10.5"],
    "users": ["corp\\alice"],
    "domains": ["corp.example.com"],
    "hashes": [],
    "commands": ["powershell -enc ..."],
    "tools": ["mimikatz"],
    "timestamps": ["2026-01-01 12:30:20"],
    "attack_technique_hints": ["Credential Access"]
  },
  "report_sections": {
    "executive_summary": "...",
    "methodology": "...",
    "scope": "...",
    "technical_details": "...",
    "recommendations": "...",
    "appendix": "..."
  }
}
```

## 7) Human review and anti-hallucination

- Findings must include `evidence_ids`
- Confidence is lowered when evidence links are missing
- Reviewer edits are supported before export

## 8) Input/output examples

### Input
- `png`, `jpg`, `jpeg`, `webp`
- Multi-image batch upload

### Output
- Processed images: `project/data/processed/<session_id>/`
- OCR text: `project/data/ocr/<session_id>/`
- Reports: `project/data/reports/<session_id>/report.md|report.docx|report.pdf`

## 9) Tests

```bash
PYTHONPATH=project/backend pytest -q project/backend/tests
```

## 10) Future development plan

1. Async queue for large batches.
2. Database-backed sessions and users.
3. Rich report template editor.
4. On-image annotation and redaction workflow.
5. Deeper MITRE technique mapping.
6. Reviewer approval workflow and audit trail.
