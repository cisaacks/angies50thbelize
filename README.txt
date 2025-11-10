
# Angie’s 50th — Belize (Single‑File Site)

This package contains a single `index.html` with all images inlined, plus this README.
You can update text, links, or images and redeploy in under a minute.

## How to Deploy (GitHub + Vercel)
1. Open your GitHub repo for the site.
2. Click **Add file → Upload files**, drag **index.html** here (replace existing).
3. Commit. Vercel auto‑redeploys.
4. Hard refresh your live site: **Cmd/Ctrl+Shift+R**.

## Edit Text or Links
- Open `index.html` in any editor.
- Search for the section header you want (e.g., `Trip Hotel`, `Getting There`, `RSVP`).
- Make your edits, save, and redeploy as above.

## Replace Images
All images are embedded as data‑URIs for a zero‑config deploy.
If you want to change a photo, find its `<img ...>` tag and replace the `src` with a hosted URL,
or ask me for a rebuild that inlines any new images you provide.

## Trip Details Sheet
- The embedded Google Sheet uses a "published to web" URL. It is cache‑busted so font/style updates
  should appear after a refresh. There’s also a **Refresh Table** button on the page.

## RSVP Form → Google Sheet
- The “Send RSVP” button posts to your Google Apps Script web app URL.
- If new RSVPs don’t arrive, confirm the deployment settings in Apps Script:
  - **Execute as:** Me (your account)
  - **Who has access:** Anyone (or Anyone with link)
  - Re‑Deploy and open the URL once.
- For CORS edge cases the page also attempts a `no‑cors` fallback.

## Rollback
If you ever need to roll back, just re‑upload an earlier `index.html` version and commit.

Need help? Ping me and I’ll regenerate the single‑file build with your changes.
