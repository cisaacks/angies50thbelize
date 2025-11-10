# Angie’s 50th Belize Website (v5)

## Overview
This site shares trip details for **Angie’s 50th** celebration in Belize (Apr 29–May 3, 2026).

## Sections
- Hero / Overview
- Trip Details Sheet (live Google Sheet embed)
- Hotel options: Coco Beach + Belizean Shores
- Flights (American Airlines + Tropic Air)
- Golf Cart Rentals
- **Optional Tour:** Hol Chan Marine Reserve + Shark Ray Alley snorkel
- Photo gallery
- RSVP form to collect names and tour interest

## Google Sheet Embed
1. In Google Sheets → **File → Share → Publish to web → Embed**.
2. Copy the `<iframe>` embed link and replace it in `index.html` under "Trip Details Sheet".

## RSVP Form Setup
1. In your RSVP Google Sheet → **Extensions → Apps Script**.
2. Paste this code:
   ```javascript
   function doPost(e) {
     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
     var data = JSON.parse(e.postData.contents);
     sheet.appendRow([
       new Date(), data.name, data.email, data.party_size, data.lodging, data.tour_holchan, data.notes
     ]);
     return ContentService.createTextOutput(JSON.stringify({ok:true}))
       .setMimeType(ContentService.MimeType.JSON)
       .setHeader('Access-Control-Allow-Origin','*');
   }
   ```
3. Deploy as **Web App → Execute as Me → Anyone**.
4. Copy the Web App URL and paste it into `script.js` as the value for `GSCRIPT_URL`.

## Deploying on Vercel
1. Create a new project on [Vercel](https://vercel.com).
2. Import your GitHub repository with this code.
3. Once deployed, link your custom domain: `angies50thbelize.com`.

All site images are stored in `/assets` and will display correctly after upload.
