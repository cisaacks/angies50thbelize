// Replace with your Google Apps Script Web App URL after you deploy it
const GSCRIPT_URL = "https://script.google.com/macros/s/PASTE_YOUR_DEPLOYMENT_ID/exec";

document.getElementById('year').textContent = new Date().getFullYear();

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
    statusEl.textContent = "Hmm, something went wrong. Please try again later or email us.";
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Send RSVP";
  }
});
