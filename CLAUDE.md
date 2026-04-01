# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A comprehensive real estate comparison dashboard for evaluating 96 rural property listings across North Carolina and New York (41 active, 55 graveyarded). Includes a family voting system (1-7 star ratings), interactive Leaflet map (modal) with per-state boundary masks, rankings with podium/tier visualization (modal), walkthrough video player, lot-line image toggle, state toggle (NC/NY/All), and aggregate scoring. Served via Express + Docker at `homes.shottsserver.com`.

## Architecture

- **server.js**: Express server serving `public/` as static files, `/walkthrough/` for videos, `/lot-lines/` for images, with REST API under `/api/` (includes `GET /api/walkthroughs` and `GET /api/lot-lines`)
- **database.js**: SQLite via `sql.js` (pure WASM, no native compilation). Exports `init()`, `getOrCreateUser()`, `castVote()`, `getAllVotes()`, `getRankings()`, `getUsers()`, `createNote()`, `getAllNotes()`, `deleteNote()`, `getPropertyNames()`, `setPropertyName()`, `moveToGraveyard()`, `getGraveyard()`, `restoreFromGraveyard()`, `getPropertyEdits()`, `setPropertyEdits()`. Every write operation calls `save()` which serializes the entire DB to `data/votes.db` via `fs.writeFileSync`.
- **public/index.html**: CSS in `<style>`, lightweight HTML (~1,100 lines) — CSS custom properties in `:root`, containers for rendered content, Leaflet map section, internet guide, graveyard, footer. Leaflet CDN loaded in `<head>`.
- **public/properties-data.js**: Single source of truth for all 96 properties as `var PROPERTIES = [...]`. Each property has `state` (NC/NY), `lat`/`lng` for map pins, `dateAdded` for "new" badge, `elemSchool`/`elemSchoolSub` for school display, and scores including `internet` (replaced `beach`). Rendered client-side by `render.js`.
- **public/nc-boundary.js**: Simplified NC state boundary polygon (61 coordinate pairs) for map overlay mask.
- **public/ny-boundary.js**: Simplified NY state boundary polygon (~120 coordinate pairs) for map overlay mask.
- **public/render.js**: Renders nav links (grouped by region with dropdown menus), overview table rows, and property cards from PROPERTIES data. Computes dynamic "NEW" flags from `dateAdded` (2-day window) and auto-adds `b-internet-unknown` badge when `scores.internet === 2`. Emits `data-state` attributes on nav groups, region sections, and table rows.
- **public/app.js**: Vanilla JS IIFE — user identification, 7-star ratings, **rankings modal**, overview table augmentation, notes system, monthly breakdown toggles, graveyard move/restore, property edit modal, **map modal** with Leaflet, **collapsible overview table**, collapsible graveyard, table filtering/sorting, **multi-tag filter bar** (counts exclude graveyarded + respect state filter), **state toggle** (NC/NY/All, defaults NY), **walkthrough video player** (inline on card), **lot-line image toggle** (with acreage badge), **mobile nav toggle**, 30s polling. Map uses per-state boundary masks (NC mask, NY mask, or both). Map popup click closes modal then navigates. Escape key closes modals.
- **public/app.css**: Walkthrough player styles (`walkthrough-btn`, `walkthrough-player`), lot-line styles (`lot-overlay`, `lot-acres-badge`, `lot-toggle-btn`), modal styles (`modal-overlay`, `modal-content`), map popup styles (`map-popup-`), voting styles (`vote-`), notes styles (`notes-`), rankings styles (`rank-podium-`, `rank-tier-`), filter bar (`filter-bar`, `filter-pill`), state toggle (`state-toggle`, `state-btn`), mobile nav (`nav-mobile-toggle`), badge types (`b-internet-unknown`, `b-no-fha`, `b-apa`)

### One-Time Utility Scripts (`scripts/` — do not re-run)

All one-time scripts are in the `scripts/` directory. These were used during initial data setup and should never be re-run:
- `generate-cards.js`, `generate-batch2.js`, `generate-batch3.js` — HTML card generators (pre-migration)
- `extract-properties.js` — extracted property data from HTML into `properties-data.js`
- `geocode-properties.js` — geocoded all 47 properties via Nominatim, added `lat`/`lng`
- `gen-realtor-list.js` — generated `realtor-list.txt` from property data
- `slim-html.js` — slimmed HTML after migration to data-driven architecture
- `add-env-hazards.js`, `add-livestock-notes.js`, `add-properties.js` — content injectors
- `audit-update.js`, `overhaul-scores.js`, `fix-nc-monthly.js` — data correction scripts
- `batch2-nc.js`, `batch2-western.js`, `batch3-va.js` — property data source files
- `fix-coordinates.js` — fixed 38 geocoded lat/lng coordinates
- `fill-missing-fields.js` — filled drive/toTown/tax for 29 properties using county tax rates

### Database Schema

Six tables in `data/votes.db`:
- **users**: `id`, `name` (UNIQUE, COLLATE NOCASE), `created_at`
- **votes**: `id`, `user_id` (FK→users), `property_id` (text like "p1"), `rating` (1–7), `updated_at` — UNIQUE(user_id, property_id) enables upsert. Rating scale was migrated from 1-5 to 1-7 (old 3→4, 4→5, 5→7).
- **notes**: `id`, `user_id` (FK→users), `property_id`, `content`, `created_at`
- **property_names**: `id`, `property_id` (UNIQUE), `name`, `user_id` (FK→users), `updated_at` — custom nicknames for properties
- **graveyard**: `id`, `property_id` (UNIQUE), `user_id` (FK→users), `reason`, `moved_at`
- **property_edits**: `id`, `property_id` (UNIQUE), `user_id` (FK→users), `edits` (JSON blob of field overrides), `updated_at`

## Commands

```bash
npm install
npm start          # http://localhost:3000 (PORT env var overrides)
```

Docker deployment (local):
```bash
docker-compose up --build   # http://localhost:3080, maps to container :3000
```

No test framework or linter is configured. There are no build steps — all frontend code is vanilla JS/CSS served as static files.

## Unraid Deployment

**Server:** ShottsServer (Dell PowerEdge R730) — Unraid 7.2.2
**SSH:** `ssh unraid` (configured in `~/.ssh/config`, uses `~/.ssh/id_unraid` key, connects as `root@192.168.1.153`)
**Container name:** `homes-shottsserver`
**App path:** `/mnt/cache/appdata/property-comparison/`
**Volume mounts:** `data/` for DB, `docs/walkthrough-videos/` for videos, `docs/lot-lines/` for images. The `public/` folder is baked into the image.
**Port mapping:** Host 3080 → Container 3000
**Note:** `docker-compose` is not installed on this Unraid; use `docker build` + `docker run` directly.

Deploy steps:
```bash
# 1. SCP individual files to Unraid (don't use `scp -r public/ .../public/` — it nests)
scp public/* root@192.168.1.153:/mnt/cache/appdata/property-comparison/public/

# 2. Rebuild image and restart container
ssh unraid "cd /mnt/cache/appdata/property-comparison && docker build -t property-comparison . && docker stop homes-shottsserver && docker rm homes-shottsserver && docker run -d --name homes-shottsserver --restart unless-stopped -p 3080:3000 -v /mnt/cache/appdata/property-comparison/data:/app/data -v /mnt/cache/appdata/property-comparison/docs/walkthrough-videos:/app/docs/walkthrough-videos -v /mnt/cache/appdata/property-comparison/docs/lot-lines:/app/docs/lot-lines property-comparison"
```

## Prerequisites

The `data/` directory must exist before starting the server (the DB file `data/votes.db` is created at runtime). Docker handles this via `mkdir -p /app/data` in the Dockerfile. Locally, create it manually if missing.

## API Routes

| Method | Endpoint | Purpose |
|--------|----------|---------|
| `POST` | `/api/users` | Get-or-create user by name (case-insensitive) |
| `GET` | `/api/users` | List all users who have voted |
| `POST` | `/api/votes` | Cast/update vote: `{ userId, propertyId, rating }` (rating 1–7) |
| `GET` | `/api/votes` | All votes grouped by property (with averages) |
| `GET` | `/api/rankings` | Properties sorted by avg rating descending |
| `POST` | `/api/notes` | Create note: `{ userId, propertyId, content }` |
| `GET` | `/api/notes` | All notes grouped by property |
| `DELETE` | `/api/notes/:id` | Delete own note: `{ userId }` in body |
| `GET` | `/api/property-names` | All custom property nicknames |
| `POST` | `/api/property-names` | Set/clear nickname: `{ userId, propertyId, name }` (empty name deletes) |
| `POST` | `/api/graveyard` | Move property: `{ userId, propertyId, reason }` |
| `GET` | `/api/graveyard` | List all graveyarded properties |
| `GET` | `/api/property-edits` | All property field overrides (JSON blobs) |
| `POST` | `/api/property-edits` | Upsert field edits: `{ userId, propertyId, edits }` |
| `DELETE` | `/api/graveyard/:propertyId` | Restore property from graveyard |
| `GET` | `/api/walkthroughs` | Map of address→video URL (prefers `-web.mp4`) |
| `GET` | `/api/lot-lines` | Map of address→lot-line image URL |

## Key Patterns

- **CSS custom properties** in `:root`: `--accent` (green), `--accent2` (orange), `--james` (blue), `--savanah` (brown), `--both` (purple). Voter colors: James = `--both` (purple), Savanah = `--accent` (green), others = `--james` (blue).
- **Property cards**: `.card` > `.card-top` > `.score-offer-band` > `.highlight-band` > `.card-body` > `.pros-cons` > `.must-do` > `.env-hazards` > `.score-row` > `.vote-row` > `.notes-row`. Cards use responsive CSS grid (1-col default, 2-col at 1200px+, 3-col at 2000px+).
- **Proximity grid**: `.proximity-grid` (2-col grid) > `.prox-item` (icon + label + value). `.prox-item-ref` for muted reference entries (e.g. Farmington UT drive time). Replaces the old "Location & Schools" card-section.
- **Monthly breakdown**: Each `.card-monthly` has expandable breakdown (`.monthly-toggle` + `.monthly-breakdown`). Calculated at 6.5%/30yr/3.5% down (FHA) with P&I + tax + insurance + PMI (0.55%)
- **MUST DO section**: `.must-do` with `.must-do-grid` (2-col) containing `.must-do-item` elements. Universal + conditional items per property
- **Environmental hazards**: `.env-hazards` section with `.env-pill-low`, `.env-pill-mod`, `.env-pill-high`, `.env-pill-severe`, `.env-pill-special` pills
- **Badge classes**: `.b-pend`, `.b-mfg`, `.b-sfr`, `.b-oor`, `.b-new` (green pulsing, auto-computed from `dateAdded`), `.b-removed` (gray), `.b-livestock` (livestock policy flag), `.b-internet-unknown` (yellow/orange, auto-added when `scores.internet === 2`), `.b-no-fha` (red outline), `.b-apa` (blue, APA Blue Line). `.badge-added-ago` shows "Added Xd ago" for properties past the 2-day new window.
- **Graveyard section**: `#graveyard` below cards — static `.graveyard-card` entries for permanently removed properties + `#graveyard-dynamic` container for DB-driven entries (move/restore via UI)
- **Nav county groups**: Properties grouped by county in nav bar. Multi-property counties render as hover dropdown buttons (`.nav-group` > `.nav-group-btn` + `.nav-group-dropdown`). Single-property counties render as direct links.
- **Nav anchors**: `#p1` through `#p96` matching card `id` attributes (gaps for removed properties). Nav displays addresses (not p-numbers).
- **State toggle**: `.state-toggle` in nav-left with NC/NY/All buttons. `currentStateFilter` (default `'NY'`) controls visibility of nav groups, region sections, overview table rows, map markers/bounds/mask, and filter pill counts. `applyStateFilter()` orchestrates all UI updates. `data-state` attributes on `.nav-group`, `.region-section`, and `<tr>` enable fast filtering.
- **Walkthrough videos**: `initWalkthroughButtons()` fetches `/api/walkthroughs`, injects red button on card image + inline `<video>` player. Videos in `docs/walkthrough-videos/`, naming: `{address-with-dashes}-walkthrough.mp4`. Compressed `-web.mp4` preferred. Survives card re-renders via `reinjectCardUI()`.
- **Lot-line images**: `initLotLines()` fetches `/api/lot-lines`, injects toggle button (top-left of image) that swaps to lot-line screenshot with green acreage badge overlay. Images in `docs/lot-lines/`, naming: `{address-with-dashes}.png`.
- **Modal overlays**: Rankings and Map open as modals (`#rankings-modal`, `#map-modal`) from nav icons instead of inline sections. Close on background click or X button. Map calls `invalidateSize()` on open.
- **Filter bar**: `#filter-bar` below nav — horizontally scrollable pill buttons for tag-based filtering: NEW, LIVESTOCK?, 5+ Acres, Manufactured, Site-Built. Each filter controls cards, map markers, overview table, and region sections. All filters exclude graveyard items. `initFilterBar()` in app.js. Styles: `.filter-bar`, `.filter-pill`, `.filter-pill-count`, `.filter-pill.active`.
- **Mobile responsive**: `@media (max-width: 768px)` compacts header (reduced padding/fonts), nav (icons only via `.nav-link-text` hidden), filter bar (smaller pills), and cards (single column).
- **Overview table** (id `overview`): class `.qt`, JS adds a "Family" column with avg ratings. Collapsed by default via `initCollapsibleOverview()`
- **Property map**: Leaflet map (`#property-map`) with circle markers for non-graveyarded, state-filtered properties. State boundary masks gray out area outside the active state(s) — NC mask when viewing NC, NY mask when viewing NY, combined mask (both states cut out) when viewing All. `maxBounds` adjusts per state. Hover shows popup with thumbnail + stats. Click closes modal then navigates to card. Map syncs with graveyard and state filter.
- **Rankings visualization**: Podium top-3 (glassmorphic cards with conic-gradient score rings, medal badges, voter pips). Below: S/A/B/C/D tier groups with thumbnail rows, hover preview cards. Voter filter bar allows filtering by individual voter or "James & Savanah" shortcut.
- **Rating system**: 7-star scale (1=Absolutely not, 2=Not great, 3=Below average, 4=Neutral, 5=Pretty good, 6=Really like it, 7=Love it). Tier thresholds: S≥6.0, A≥5.0, B≥4.0, C≥2.5, D<2.5.
- **Collapsible sections**: Overview table and graveyard both use toggle-bar pattern (starts collapsed, click to expand)

## When Adding a New Property

1. Add property object to `public/properties-data.js` with all required fields including `state` (NC/NY), `lat`/`lng`, and `dateAdded` (today's date as `"YYYY-MM-DD"`)
2. Add the property ID to the appropriate region in `render.js` REGIONS array (NC regions have no prefix, NY regions are prefixed `NY —`)
3. Nav links, overview table rows, and cards are auto-rendered by `render.js`
4. Voting UI, notes, edit buttons, and map pins are auto-injected by `app.js`
5. The "NEW" badge is auto-computed from `dateAdded` — properties within 2 days show NEW, older properties show "Added Xd ago". No manual `b-new` badge management needed.
6. The `b-internet-unknown` badge is auto-added when `scores.internet === 2`. No manual badge needed.
7. For NY properties, add `b-no-fha` to badges array if Cash/Conventional only, `b-apa` if inside APA Blue Line.

## Adding Walkthrough Videos

1. Save as `docs/walkthrough-videos/{address-with-dashes}-walkthrough.mp4` (e.g., `142-Padgett-Burns-Rd-walkthrough.mp4`)
2. Compress with ffmpeg: `ffmpeg -i input.mp4 -vf "scale=1920:-2" -c:v libx264 -preset medium -crf 23 -c:a aac -b:a 128k -movflags +faststart output-web.mp4`
3. SCP to Unraid: `scp docs/walkthrough-videos/*-web.mp4 root@192.168.1.153:/mnt/cache/appdata/property-comparison/docs/walkthrough-videos/`
4. Button appears automatically on matching card

## Adding Lot Line Images

1. Save as `docs/lot-lines/{address-with-dashes}.png` (e.g., `142-Padgett-Burns-Rd.png`)
2. SCP to Unraid: `scp docs/lot-lines/*.png root@192.168.1.153:/mnt/cache/appdata/property-comparison/docs/lot-lines/`
3. "Lot Lines" toggle appears automatically on matching card with acreage badge

## Scoring Categories

10 categories, 10 points each, 100 total. `internet` replaced `beach` as of March 18, 2026.
- price, acreage, schools, outbldgs, town, hospital, hazards, **internet**, forested, living
- Internet scale: 10=fiber confirmed at address, 8=cable confirmed, 5=uncertain, 2=broadband unverified (auto-badges as `b-internet-unknown`), 1=no broadband
