# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A comprehensive real estate comparison dashboard for evaluating 48 rural property listings in North Carolina. Includes a family voting system (1-7 star ratings), interactive Leaflet map with property pins, and aggregate rankings with podium/tier visualization. Served via Express + Docker at `homes.shottsserver.com`.

## Architecture

- **server.js**: Express server serving `public/` as static files with REST API under `/api/`
- **database.js**: SQLite via `sql.js` (pure WASM, no native compilation). Exports `init()`, `getOrCreateUser()`, `castVote()`, `getAllVotes()`, `getRankings()`, `getUsers()`, `createNote()`, `getAllNotes()`, `deleteNote()`, `getPropertyNames()`, `setPropertyName()`, `moveToGraveyard()`, `getGraveyard()`, `restoreFromGraveyard()`, `getPropertyEdits()`, `setPropertyEdits()`. Every write operation calls `save()` which serializes the entire DB to `data/votes.db` via `fs.writeFileSync`.
- **public/index.html**: CSS in `<style>`, lightweight HTML (~1,100 lines) — CSS custom properties in `:root`, containers for rendered content, Leaflet map section, internet guide, graveyard, footer. Leaflet CDN loaded in `<head>`.
- **public/properties-data.js**: Single source of truth for all 48 properties as `var PROPERTIES = [...]`. Each property has `lat`/`lng` for map pins. Rendered client-side by `render.js`.
- **public/nc-boundary.js**: Simplified NC state boundary polygon (61 coordinate pairs) for map overlay mask.
- **public/render.js**: Renders nav links (grouped by county with dropdown menus), overview table rows, and property cards from PROPERTIES data.
- **public/app.js**: Vanilla JS IIFE — user identification, 7-star ratings, **rankings with podium top-3 + S/A/B/C/D tier groups + voter filtering**, overview table augmentation, notes system, monthly breakdown toggles, graveyard move/restore, property edit modal, **interactive Leaflet map** with NC boundary mask and hover popups, **collapsible overview table**, collapsible graveyard, table filtering/sorting, 30s polling
- **public/app.css**: Map popup styles (`map-popup-`), voting styles (`vote-`), notes styles (`notes-`), monthly breakdown styles (`monthly-`/`mb-`), rankings podium/tier styles (`rank-podium-`, `rank-tier-`, `rank-filter-`, `rank-ring`, `rank-legend-`), collapsible overview (`overview-toggle-`), collapsible graveyard (`graveyard-toggle-`), nav county groups (`nav-group-`), nav user (`nav-user`)

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
**Volume mount:** Only `data/` is mounted (`-v .../data:/app/data`). The `public/` folder is baked into the image.
**Port mapping:** Host 3080 → Container 3000
**Note:** `docker-compose` is not installed on this Unraid; use `docker build` + `docker run` directly.

Deploy steps:
```bash
# 1. SCP individual files to Unraid (don't use `scp -r public/ .../public/` — it nests)
scp public/* root@192.168.1.153:/mnt/cache/appdata/property-comparison/public/

# 2. Rebuild image and restart container
ssh unraid "cd /mnt/cache/appdata/property-comparison && docker build -t property-comparison . && docker stop homes-shottsserver && docker rm homes-shottsserver && docker run -d --name homes-shottsserver --restart unless-stopped -p 3080:3000 -v /mnt/cache/appdata/property-comparison/data:/app/data property-comparison"
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

## Key Patterns

- **CSS custom properties** in `:root`: `--accent` (green), `--accent2` (orange), `--james` (blue), `--savanah` (brown), `--both` (purple). Voter colors: James = `--both` (purple), Savanah = `--accent` (green), others = `--james` (blue).
- **Property cards**: `.card` > `.card-top` > `.score-offer-band` > `.highlight-band` > `.card-body` > `.pros-cons` > `.must-do` > `.env-hazards` > `.score-row` > `.vote-row` > `.notes-row`. Cards use responsive CSS grid (1-col default, 2-col at 1200px+, 3-col at 2000px+).
- **Proximity grid**: `.proximity-grid` (2-col grid) > `.prox-item` (icon + label + value). `.prox-item-ref` for muted reference entries (e.g. Farmington UT drive time). Replaces the old "Location & Schools" card-section.
- **Monthly breakdown**: Each `.card-monthly` has expandable breakdown (`.monthly-toggle` + `.monthly-breakdown`). Calculated at 6.5%/30yr/3.5% down (FHA) with P&I + tax + insurance + PMI (0.55%)
- **MUST DO section**: `.must-do` with `.must-do-grid` (2-col) containing `.must-do-item` elements. Universal + conditional items per property
- **Environmental hazards**: `.env-hazards` section with `.env-pill-low`, `.env-pill-mod`, `.env-pill-high`, `.env-pill-severe`, `.env-pill-special` pills
- **Badge classes**: `.b-pend`, `.b-mfg`, `.b-sfr`, `.b-oor`, `.b-new` (green pulsing), `.b-removed` (gray)
- **Graveyard section**: `#graveyard` below cards — static `.graveyard-card` entries for permanently removed properties + `#graveyard-dynamic` container for DB-driven entries (move/restore via UI)
- **Nav county groups**: Properties grouped by county in nav bar. Multi-property counties render as hover dropdown buttons (`.nav-group` > `.nav-group-btn` + `.nav-group-dropdown`). Single-property counties render as direct links.
- **Nav anchors**: `#p1` through `#p48` matching card `id` attributes (gaps for removed properties)
- **Overview table** (id `overview`): class `.qt`, JS adds a "Family" column with avg ratings. Collapsed by default via `initCollapsibleOverview()`
- **Property map**: Leaflet map (`#property-map`) with circle markers for all non-graveyarded properties. NC boundary mask grays out area outside state. `maxBounds` restricts panning to NC. Hover shows popup with thumbnail + stats. Click navigates to card. Map syncs with graveyard state.
- **Rankings visualization**: Podium top-3 (glassmorphic cards with conic-gradient score rings, medal badges, voter pips). Below: S/A/B/C/D tier groups with thumbnail rows, hover preview cards. Voter filter bar allows filtering by individual voter or "James & Savanah" shortcut.
- **Rating system**: 7-star scale (1=Absolutely not, 2=Not great, 3=Below average, 4=Neutral, 5=Pretty good, 6=Really like it, 7=Love it). Tier thresholds: S≥6.0, A≥5.0, B≥4.0, C≥2.5, D<2.5.
- **Collapsible sections**: Overview table and graveyard both use toggle-bar pattern (starts collapsed, click to expand)

## When Adding a New Property

1. Add property object to `public/properties-data.js` with all required fields including `lat`/`lng`
2. Update the header subtitle property count in `index.html`
3. Nav links, overview table rows, and cards are auto-rendered by `render.js`
4. Voting UI, notes, edit buttons, and map pins are auto-injected by `app.js`
