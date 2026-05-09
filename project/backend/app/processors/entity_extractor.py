import re
from collections import defaultdict

ATTACK_HINTS = {
    "mimikatz": "Credential Access",
    "bloodhound": "Recon",
    "wmic": "Execution",
    "psexec": "Lateral Movement",
    "rundll32": "Execution",
    "schtasks": "Persistence",
    "powershell": "Execution",
    "net user": "Privilege Escalation",
}


class EntityExtractor:
    ip_pattern = re.compile(r"\b(?:\d{1,3}\.){3}\d{1,3}\b")
    domain_pattern = re.compile(r"\b(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}\b")
    hash_pattern = re.compile(r"\b[a-fA-F0-9]{32,64}\b")
    user_pattern = re.compile(r"\b(?:user|username|account)\s*[:=]\s*([\w\\.-]+)", re.IGNORECASE)
    host_pattern = re.compile(r"\b(?:host|computer|server)\s*[:=]\s*([\w.-]+)", re.IGNORECASE)
    timestamp_pattern = re.compile(r"\b\d{4}-\d{2}-\d{2}[ T]\d{2}:\d{2}(?::\d{2})?\b")

    def extract(self, text: str) -> dict[str, list[str]]:
        text_low = text.lower()
        entities: dict[str, set[str]] = defaultdict(set)
        entities["ips"].update(self.ip_pattern.findall(text))
        entities["domains"].update(self.domain_pattern.findall(text))
        entities["hashes"].update(self.hash_pattern.findall(text))
        entities["timestamps"].update(self.timestamp_pattern.findall(text))

        for m in self.user_pattern.findall(text):
            entities["users"].add(m)
        for m in self.host_pattern.findall(text):
            entities["hosts"].add(m)

        commands = []
        for line in text.splitlines():
            stripped = line.strip()
            if stripped.startswith(("$", "#", ">", "C:\\")) or any(tok in stripped.lower() for tok in ["powershell", "cmd.exe", "wmic", "net user"]):
                commands.append(stripped)
        entities["commands"].update(commands)

        for tool in ATTACK_HINTS.keys():
            if tool in text_low:
                entities["tools"].add(tool)
                entities["attack_technique_hints"].add(ATTACK_HINTS[tool])

        return {k: sorted(v) for k, v in entities.items()}
