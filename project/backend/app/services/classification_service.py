from collections import defaultdict

PHASE_KEYWORDS = {
    "Recon": ["scan", "nmap", "enumeration", "bloodhound"],
    "Initial Access": ["phish", "exploit", "login", "foothold"],
    "Execution": ["powershell", "wmic", "cmd.exe", "rundll32"],
    "Privilege Escalation": ["sudo", "admin", "token", "net user"],
    "Credential Access": ["mimikatz", "lsass", "sam", "hashdump"],
    "Lateral Movement": ["psexec", "winrm", "smb", "rdp"],
    "Persistence": ["schtasks", "registry", "startup", "service create"],
    "Collection": ["zip", "screenshot", "collect"],
    "Exfiltration": ["upload", "ftp", "http post", "dns tunneling"],
    "Impact": ["ransom", "delete", "encrypt", "shutdown"],
}


class ClassificationService:
    def infer_phases(self, text: str) -> list[str]:
        text_low = text.lower()
        phases = []
        for phase, keywords in PHASE_KEYWORDS.items():
            if any(k in text_low for k in keywords):
                phases.append(phase)
        return phases or ["Recon"]

    def synthesize_findings(self, evidence_items: list[dict]) -> list[dict]:
        grouped: dict[str, list[dict]] = defaultdict(list)
        for item in evidence_items:
            for phase in item.get("phases", ["Recon"]):
                grouped[phase].append(item)

        findings = []
        for phase, items in grouped.items():
            evidence_ids = [i["image_id"] for i in items]
            command_density = sum(1 for i in items if i.get("entities", {}).get("commands"))
            confidence = round(min(0.95, 0.45 + len(items) * 0.1 + command_density * 0.05), 2)
            severity = "Medium"
            if phase in {"Credential Access", "Lateral Movement", "Impact"}:
                severity = "High"
            if phase in {"Privilege Escalation", "Exfiltration"} and len(items) > 1:
                severity = "Critical"

            findings.append(
                {
                    "title": f"{phase} activity observed",
                    "severity": severity,
                    "description": f"Potential {phase.lower()} behavior identified in uploaded evidence.",
                    "impact": "Adversaries may expand control and increase business risk if not remediated.",
                    "evidence_ids": evidence_ids,
                    "recommendation": f"Investigate and contain systems linked to {phase.lower()} indicators.",
                    "mitre_techniques": self._mitre_by_phase(phase),
                    "confidence": confidence,
                }
            )
        return findings

    @staticmethod
    def _mitre_by_phase(phase: str) -> list[str]:
        mapping = {
            "Recon": ["TA0043"],
            "Initial Access": ["TA0001"],
            "Execution": ["TA0002"],
            "Privilege Escalation": ["TA0004"],
            "Credential Access": ["TA0006"],
            "Lateral Movement": ["TA0008"],
            "Persistence": ["TA0003"],
            "Collection": ["TA0009"],
            "Exfiltration": ["TA0010"],
            "Impact": ["TA0040"],
        }
        return mapping.get(phase, [])
