# Angie’s 50th — Belize (Static Site, v7)

This version simplifies image names and adds cache-busting query strings to avoid path/caching issues on Vercel.

## Files
- `index.html`, `style.css`, `script.js`, `README.md`
- `assets/reef.jpg`, `assets/coco.jpg`, `assets/cart.jpg`, `assets/tropic.jpg`, `assets/shores.jpg`

## Deploy
Unzip → upload **everything** (including `/assets`) to GitHub → commit → Vercel redeploys.

## Tip
If an image still doesn’t display, try opening it directly:
`https://YOUR_DOMAIN/assets/reef.jpg`
If that 404s, the `assets` folder isn’t in the repo or the filename differs.
