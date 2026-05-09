import json
import logging
from typing import Any

import requests

logger = logging.getLogger(__name__)


def _default_json(case_title: str, entities: dict[str, list[str]]) -> dict[str, Any]:
    return {
        "case_title": case_title,
        "summary": "Automated draft generated from OCR and metadata. Human review required before client delivery.",
        "findings": [],
        "attack_chain": entities.get("attack_technique_hints", []),
        "extracted_entities": {
            "hosts": entities.get("hosts", []),
            "ips": entities.get("ips", []),
            "users": entities.get("users", []),
            "domains": entities.get("domains", []),
            "hashes": entities.get("hashes", []),
            "commands": entities.get("commands", []),
            "tools": entities.get("tools", []),
            "timestamps": entities.get("timestamps", []),
            "attack_technique_hints": entities.get("attack_technique_hints", []),
        },
        "report_sections": {
            "executive_summary": "",
            "methodology": "Evidence images were preprocessed, OCR-extracted, entity-mined, and AI-assisted.",
            "scope": "Scope must be confirmed by reviewer.",
            "technical_details": "",
            "recommendations": "",
            "appendix": "",
        },
    }


class AIService:
    def __init__(self, api_key: str | None, base_url: str, model: str, timeout_seconds: int):
        self.api_key = api_key
        self.base_url = base_url
        self.model = model
        self.timeout_seconds = timeout_seconds

    def analyze(self, case_title: str, evidence_context: list[dict[str, Any]], entities: dict[str, list[str]]) -> dict[str, Any]:
        baseline = _default_json(case_title=case_title, entities=entities)
        if not self.api_key:
            return baseline

        system_prompt = (
            "You are a red-team reporting assistant. Return ONLY strict JSON with no markdown. "
            "Never make claims without evidence_ids. Include confidence 0-1 for each finding. "
            "If evidence is weak, lower confidence and state uncertainty."
        )
        user_prompt = {
            "schema": baseline,
            "evidence": evidence_context,
            "must_have": [
                "map to attack phases",
                "link each claim to evidence_ids",
                "keep uncertain claims out",
                "include actionable recommendations",
            ],
        }

        headers = {"Authorization": f"Bearer {self.api_key}", "Content-Type": "application/json"}
        payload = {
            "model": self.model,
            "messages": [
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": json.dumps(user_prompt)},
            ],
            "temperature": 0.1,
            "response_format": {"type": "json_object"},
        }
        try:
            resp = requests.post(
                f"{self.base_url}/chat/completions",
                headers=headers,
                json=payload,
                timeout=self.timeout_seconds,
            )
            resp.raise_for_status()
            content = resp.json()["choices"][0]["message"]["content"]
            result = json.loads(content)
            if isinstance(result, dict):
                return result
        except Exception as exc:
            logger.warning("AI call failed, using baseline JSON: %s", exc)
        return baseline
