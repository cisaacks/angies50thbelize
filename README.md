[README.md](https://github.com/user-attachments/files/23442900/README.md)
# Angie’s 50th — Belize (Static Site)

This folder is deploy‑ready on Vercel/Netlify/GitHub Pages.
No build steps needed — it's plain HTML/CSS/JS.

## Edit
- `index.html` — content and links
- `style.css` — colors and layout
- `script.js` — paste your Google Apps Script Web App URL as `GSCRIPT_URL`

## Google Sheet hookup
1) Create a Google Sheet with headers:
   `timestamp, name, email, party_size, lodging, tour_holchan, tour_secretbeach, notes`
2) In the sheet: Extensions → Apps Script → paste the code from our chat.
3) Deploy → **Web app** → Execute as *Me* → Who has access *Anyone* → **Deploy**.
4) Copy the **Web app URL** and paste it into `script.js` as `GSCRIPT_URL`.
