import json
from io import BytesIO

import requests
import streamlit as st

BACKEND_URL = st.secrets.get("BACKEND_URL", "http://localhost:8000")
ALLOWED_TYPES = ["png", "jpg", "jpeg", "webp"]

st.set_page_config(page_title="AI Red Team Reporting Assistant", layout="wide")
st.title("AI Red Team Reporting Assistant")

if "session_id" not in st.session_state:
    st.session_state.session_id = None
if "analysis" not in st.session_state:
    st.session_state.analysis = None
if "images" not in st.session_state:
    st.session_state.images = []

case_title = st.text_input("Case Title", value="Untitled Red Team Case")
template_name = st.selectbox("Report Template", ["default", "executive_first"])

st.subheader("Upload Evidence")
uploaded_files = st.file_uploader(
    "Drag & drop multiple evidence images (PNG/JPG/JPEG/WEBP)", type=ALLOWED_TYPES, accept_multiple_files=True
)
zip_file = st.file_uploader("Optional: folder upload as ZIP archive", type=["zip"], accept_multiple_files=False)

if st.button("Upload Images"):
    if not uploaded_files:
        st.error("Please select at least one image.")
    else:
        files = [("files", (f.name, BytesIO(f.read()), f"image/{f.type or 'jpeg'}")) for f in uploaded_files]
        response = requests.post(
            f"{BACKEND_URL}/api/v1/workflow/images",
            params={"case_title": case_title},
            files=files,
            timeout=120,
        )
        if response.ok:
            payload = response.json()
            st.session_state.session_id = payload["session_id"]
            st.session_state.images = payload["images"]
            st.success(f"Uploaded {len(payload['images'])} images")
        else:
            st.error(response.text)

if st.session_state.session_id:
    st.subheader("Image Preview & Metadata")
    refreshed = requests.get(f"{BACKEND_URL}/api/v1/workflow/sessions/{st.session_state.session_id}", timeout=60)
    if refreshed.ok:
        st.session_state.images = refreshed.json()["images"]

    for img in st.session_state.images:
        cols = st.columns([3, 2, 2, 1, 1])
        cols[0].write(f"{img['order']}. {img['filename']}")
        new_title = cols[1].text_input(f"Title {img['image_id']}", value=img["title"])
        new_caption = cols[2].text_input(f"Caption {img['image_id']}", value=img["caption"])
        include_for_ai = cols[3].checkbox(f"AI {img['image_id']}", value=img["include_for_ai"])
        if cols[4].button("Delete", key=f"del_{img['image_id']}"):
            requests.delete(
                f"{BACKEND_URL}/api/v1/workflow/sessions/{st.session_state.session_id}/images/{img['image_id']}",
                timeout=60,
            )
            st.rerun()

        if st.button("Save", key=f"save_{img['image_id']}"):
            requests.patch(
                f"{BACKEND_URL}/api/v1/workflow/sessions/{st.session_state.session_id}/images/{img['image_id']}",
                json={"title": new_title, "caption": new_caption, "include_for_ai": include_for_ai},
                timeout=60,
            )

    st.markdown("### Reorder Images")
    order_json = st.text_area(
        "Enter ordered image_ids as JSON array",
        value=json.dumps([i["image_id"] for i in st.session_state.images]),
        height=80,
    )
    if st.button("Apply Order"):
        try:
            ids = json.loads(order_json)
            requests.post(
                f"{BACKEND_URL}/api/v1/workflow/sessions/{st.session_state.session_id}/images/reorder",
                json={"image_ids": ids},
                timeout=60,
            )
            st.success("Order updated")
            st.rerun()
        except Exception as exc:
            st.error(f"Invalid reorder payload: {exc}")

    st.subheader("Analyze")
    if st.button("Analyze Evidence"):
        progress = st.progress(10)
        progress.progress(35)
        analysis_resp = requests.post(
            f"{BACKEND_URL}/api/v1/workflow/sessions/{st.session_state.session_id}/analyze",
            timeout=300,
        )
        progress.progress(90)
        if analysis_resp.ok:
            st.session_state.analysis = analysis_resp.json()
            progress.progress(100)
            st.success("Analysis complete")
        else:
            st.error(analysis_resp.text)

if st.session_state.analysis:
    st.subheader("Human Review Before Export")
    analysis = st.session_state.analysis
    analysis["case_title"] = st.text_input("Reviewed Case Title", value=analysis.get("case_title", ""))
    analysis["summary"] = st.text_area("Reviewed Summary", value=analysis.get("summary", ""), height=120)

    severities = ["Low", "Medium", "High", "Critical"]
    for idx, finding in enumerate(analysis.get("findings", [])):
        st.markdown(f"**Finding {idx + 1}**")
        finding["title"] = st.text_input(f"Finding Title {idx}", value=finding.get("title", ""))
        current_severity = finding.get("severity", "Medium")
        severity_index = severities.index(current_severity) if current_severity in severities else 1
        finding["severity"] = st.selectbox(f"Severity {idx}", severities, index=severity_index)
        finding["description"] = st.text_area(f"Description {idx}", value=finding.get("description", ""), height=80)
        finding["recommendation"] = st.text_area(f"Recommendation {idx}", value=finding.get("recommendation", ""), height=80)
        finding["confidence"] = st.slider(f"Confidence {idx}", 0.0, 1.0, float(finding.get("confidence", 0.5)), 0.01)

    if st.button("Save Reviewed Analysis"):
        review_resp = requests.post(
            f"{BACKEND_URL}/api/v1/workflow/sessions/{st.session_state.session_id}/review",
            json=analysis,
            timeout=120,
        )
        if review_resp.ok:
            st.success("Review changes saved")
            st.session_state.analysis = review_resp.json()
        else:
            st.error(review_resp.text)

    st.subheader("Export")
    export_cols = st.columns(3)
    for fmt, col in zip(["docx", "pdf", "markdown"], export_cols):
        if col.button(f"Export {fmt.upper()}"):
            export_resp = requests.post(
                f"{BACKEND_URL}/api/v1/workflow/sessions/{st.session_state.session_id}/export",
                params={"format_name": fmt, "template_name": template_name},
                timeout=120,
            )
            if export_resp.ok:
                data = export_resp.json()
                st.success(f"Exported: {data['filename']}")
                st.code(f"{BACKEND_URL}{data['download_path']}")
            else:
                st.error(export_resp.text)

if zip_file:
    st.info("Folder upload via ZIP is included as a fallback UX path where browser folder APIs are unavailable.")
