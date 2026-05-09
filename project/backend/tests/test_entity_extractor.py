from app.processors.entity_extractor import EntityExtractor


def test_entity_extraction_detects_core_indicators():
    text = """
    host: DC01
    user: corp\\alice
    10.10.10.5 connected to internal.corp.local
    2026-01-01 12:30:20
    powershell -enc AAA
    mimikatz
    """
    entities = EntityExtractor().extract(text)
    assert "10.10.10.5" in entities["ips"]
    assert "internal.corp.local" in entities["domains"]
    assert "corp\\alice" in entities["users"]
    assert "DC01" in entities["hosts"]
    assert any("powershell" in c.lower() for c in entities["commands"])
    assert "mimikatz" in entities["tools"]
