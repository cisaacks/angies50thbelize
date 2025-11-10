// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Sheet embed with cache-busting so font/theme updates appear
const SHEET_BASE = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSt2VU7mk04J142lAtoFfeI8N2fnLIJFJz3m94k-gU5wUHqCe01YTw6bE_SewED--L2WMrgTil2Qz3N/pubhtml?gid=390492827&single=true&widget=true&headers=false";
function loadSheet() {
  const sheetSrc = SHEET_BASE + (SHEET_BASE.includes('?') ? '&' : '?') + 'cache=' + Date.now();
  document.getElementById('sheetFrame').src = sheetSrc;
  const link = document.getElementById('sheetLink');
  if (link) link.href = SHEET_BASE;
}
loadSheet();
document.getElementById('refreshSheet').addEventListener('click', loadSheet);

// RSVP webhook — your provided Web App URL
const GSCRIPT_URL = "https://script.google.com/macros/s/AKfycbxM53oYBet9ZkW5tyrPtaaLSlnniACcl81LxzhsCuDOlnuY_ZCYpk-7WC7x7dw8INNr/exec";

const form = document.getElementById('rsvp-form');
const statusEl = document.getElementById('form-status');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  statusEl.textContent = "";
  submitBtn.disabled = true;
  submitBtn.textContent = "Sending…";
  const fd = new FormData(form);
  const data = Object.fromEntries(fd.entries());
  data.tour_holchan = fd.get('tour_holchan') ? 'yes' : 'no';
  data.timestamp = new Date().toISOString();

  try {
    const res = await fetch(GSCRIPT_URL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('Bad response');
    statusEl.textContent = "Sent! ✅ Thank you — we’ll be in touch.";
    form.reset();
  } catch (err) {
    statusEl.textContent = "Hmm, something went wrong. Please try again or email us.";
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Send RSVP";
  }
});
