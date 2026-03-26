# Angie’s 50th Belize — trip-planning page update

FULL REPLACEMENT FILES

## Included in this package
- `trip-planning.html`
- `README_trip-planning_update.txt`

## Only changes in this version
- Changed:
  - `Akasha Happy Hour (5 PM)` → `Akasha - Happy Hour (5 PM)`
  - `Angie’s Birthday Dinner at Akasha (6 PM)` → `Akasha - Angie’s Birthday Dinner (6 PM)`
- Changed Packing Tips line:
  - `Snorkel gear is optional — our tour will provide snorkel gear.`
- Updated all image paths to point to the main folder instead of `assets`
- Updated AA logo path to point to the main folder instead of `assets`

## Important
Your current HTML now expects these files to be in the SAME folder as `trip-planning.html`:
- `aa_logo.png`
- `pic-1.jpg`
- `pic-2.jpg`
- `pic-3.webp`
- `pic-4.jpg`
- `pic-5.jpg`

## Why the images were not showing
They were previously coded as:
- `assets/pic-1.jpg`
- `assets/aa_logo.png`

But you said you uploaded them into the main folder, not `assets`.

That means they would not appear unless the HTML path matched the folder where the files actually live.

## Deploy
Replace `trip-planning.html`, commit, and let Vercel auto-deploy.
