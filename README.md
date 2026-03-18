# Hendershott Family House Hunt 2026

A comprehensive real estate comparison dashboard for evaluating rural property listings in North Carolina. Built for James & Savanah Hendershott's relocation from Farmington, UT.

**Live at:** [homes.shottsserver.com](http://homes.shottsserver.com)

## Features

- **Property Cards** — Detailed cards for each listing with photos, stats, scores, offer ranges, pros/cons, and environmental hazards
- **Family Voting** — 7-star rating system with likes/dislikes. Each family member votes independently.
- **Rankings** — Podium top-3 + S/A/B/C/D tier visualization with voter filtering (opens as modal)
- **Interactive Map** — Leaflet map with NC boundary mask, property pins, hover popups (opens as modal)
- **Walkthrough Videos** — Inline video player on property cards for uploaded walkthrough recordings
- **Lot Line Images** — Toggle between property photo and lot-lines screenshot with acreage badge overlay
- **Overview Table** — Sortable comparison table with price, sqft, acres, scores, offer ranges
- **Filter Bar** — Tag-based filtering: NEW, LIVESTOCK?, 5+ Acres, Manufactured, Site-Built
- **Graveyard** — Archive for removed properties (keeps record without deleting)
- **Property Edits** — Override any property field via edit modal (stored in DB)
- **Notes System** — Per-property family discussion notes
- **Monthly Breakdown** — FHA payment calculator (6.5%/30yr/3.5% down + tax + insurance + PMI)
- **Realtor Brief** — Auto-generated Obsidian markdown with rankings, offer targets, and due diligence checklists
- **Mobile Responsive** — Collapsible nav with region dropdown on mobile

## Tech Stack

- **Backend:** Node.js + Express
- **Database:** SQLite via sql.js (pure WASM, no native compilation)
- **Frontend:** Vanilla JS/CSS (no framework, no build step)
- **Map:** Leaflet.js with OpenStreetMap tiles
- **Deployment:** Docker on Unraid (ShottsServer)
- **Data:** 71 properties in `properties-data.js`, 18 currently active

## Quick Start

```bash
npm install
npm start          # http://localhost:3000
```

Docker:
```bash
docker-compose up --build   # http://localhost:3080
```

## Project Structure

```
public/
  index.html           # CSS + HTML containers + modals
  properties-data.js   # All property data (single source of truth)
  render.js            # Renders cards, nav, table from data
  app.js               # Interactive features, voting, map, rankings
  app.css              # Dynamic UI styles
  nc-boundary.js       # NC state boundary polygon
  score-tips.js        # Score tooltip explanations
server.js              # Express server + API routes
database.js            # SQLite via sql.js
data/                  # Runtime DB (votes.db)
docs/
  walkthrough-videos/  # .mp4 walkthrough recordings
  lot-lines/           # Lot-line screenshot images
  foothills-audit-*.md # Realtor brief (Obsidian markdown)
```

## Adding Content

**New Property:** Add to `properties-data.js` + region in `render.js`

**Walkthrough Video:** Save as `{address-with-dashes}-walkthrough.mp4` in `docs/walkthrough-videos/`. Compressed web versions (`-web.mp4`) are preferred automatically.

**Lot Line Image:** Save as `{address-with-dashes}.png` in `docs/lot-lines/`. Button appears automatically.

**Deploy to Unraid:**
```bash
scp public/* root@192.168.1.153:/mnt/cache/appdata/property-comparison/public/
ssh unraid "cd /mnt/cache/appdata/property-comparison && docker build -t property-comparison . && docker stop homes-shottsserver && docker rm homes-shottsserver && docker run -d --name homes-shottsserver --restart unless-stopped -p 3080:3000 -v /mnt/cache/appdata/property-comparison/data:/app/data -v /mnt/cache/appdata/property-comparison/docs/walkthrough-videos:/app/docs/walkthrough-videos -v /mnt/cache/appdata/property-comparison/docs/lot-lines:/app/docs/lot-lines property-comparison"
```

## Scoring System (10 Categories, 100 Points)

| Category | Max | Measures |
|----------|-----|----------|
| Price | 10 | Value, budget flexibility, negotiation leverage |
| Acreage | 10 | Total acres, usability, flatness |
| Schools | 10 | Assigned school ratings (GreatSchools) |
| Outbuildings | 10 | Shop, barn, garage, workshop |
| Town | 10 | Proximity to groceries, hardware, services |
| Hospital | 10 | Distance to emergency/routine medical |
| Hazards | 10 | Hurricane, flood, landslide, fire risk |
| Internet | 10 | Broadband availability (fiber=10, Starlink-only=1) |
| Forested | 10 | Tree cover, privacy, wooded character |
| Living | 10 | Sqft, bed/bath, interior quality, condition |

## API Routes

| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | /api/users | Get-or-create user |
| GET | /api/users | List all voters |
| POST | /api/votes | Cast/update vote (1-7) |
| GET | /api/votes | All votes by property |
| GET | /api/rankings | Properties sorted by avg rating |
| POST/GET/DELETE | /api/notes | Property discussion notes |
| GET/POST | /api/property-names | Custom nicknames |
| POST/GET/DELETE | /api/graveyard | Archive/restore properties |
| GET/POST | /api/property-edits | Field overrides |
| GET | /api/walkthroughs | Available walkthrough videos |
| GET | /api/lot-lines | Available lot-line images |
