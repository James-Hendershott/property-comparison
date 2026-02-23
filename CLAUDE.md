# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A property comparison dashboard for evaluating 16 real estate listings across WA, ID, and MT. Includes a family voting system (1-5 star ratings) so the Hendershott family can rate properties and see aggregate rankings. Served via Express + Docker at `homes.shottsserver.com`.

## Architecture

- **server.js**: Express server serving `public/` as static files with REST API under `/api/`
- **database.js**: SQLite via `sql.js` (pure WASM, no native compilation). Exports `init()`, `getOrCreateUser()`, `castVote()`, `getAllVotes()`, `getRankings()`, `getUsers()`, `createNote()`, `getAllNotes()`, `deleteNote()`, `getPropertyNames()`, `setPropertyName()`, `moveToGraveyard()`, `getGraveyard()`, `restoreFromGraveyard()`. Every write operation calls `save()` which serializes the entire DB to `data/votes.db` via `fs.writeFileSync`.
- **public/index.html**: ~640 lines CSS in `<style>`, ~3,600 lines HTML (16 property cards). CSS custom properties in `:root`. Zero inline JS except `onclick="window.print()"`. This file is a hybrid: properties p1–p7 were hand-written, p8–p16 were injected by `generate-cards.js`, and env hazards were injected by `add-env-hazards.js`. All content is now hand-edited directly — **do not re-run the generator scripts** as they use one-time insertion markers.
- **public/app.js**: Vanilla JS IIFE — user identification (localStorage key `vote_user` + modal), star rating injection into each `.card`, rankings table, overview table augmentation, notes system (per-property), monthly breakdown toggles, graveyard move/restore UI, 30s polling for votes + notes + graveyard
- **public/app.css**: Voting styles (`vote-`), notes styles (`notes-`), monthly breakdown styles (`monthly-`/`mb-`), rankings (`rankings-`), nav user (`nav-user`)

### One-Time Utility Scripts (do not re-run)

- **generate-cards.js**: Generated HTML for properties p8–p16 (nav links, table rows, card blocks) and injected into index.html. Already run; re-running would duplicate content.
- **add-env-hazards.js**: Injected `.env-hazards` sections for all properties (p1–p16) before each `.score-row`. Already run.
- **add-properties.js**: Updated header subtitle and added additional properties. Already run.

### Database Schema

Four tables in `data/votes.db`:
- **users**: `id`, `name` (UNIQUE, COLLATE NOCASE), `created_at`
- **votes**: `id`, `user_id` (FK→users), `property_id` (text like "p1"), `rating` (1–5), `updated_at` — UNIQUE(user_id, property_id) enables upsert
- **notes**: `id`, `user_id` (FK→users), `property_id`, `content`, `created_at`
- **property_names**: `id`, `property_id` (UNIQUE), `name`, `user_id` (FK→users), `updated_at` — custom nicknames for properties
- **graveyard**: `id`, `property_id` (UNIQUE), `user_id` (FK→users), `reason`, `moved_at`

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
| `POST` | `/api/votes` | Cast/update vote: `{ userId, propertyId, rating }` |
| `GET` | `/api/votes` | All votes grouped by property (with averages) |
| `GET` | `/api/rankings` | Properties sorted by avg rating descending |
| `POST` | `/api/notes` | Create note: `{ userId, propertyId, content }` |
| `GET` | `/api/notes` | All notes grouped by property |
| `DELETE` | `/api/notes/:id` | Delete own note: `{ userId }` in body |
| `GET` | `/api/property-names` | All custom property nicknames |
| `POST` | `/api/property-names` | Set/clear nickname: `{ userId, propertyId, name }` (empty name deletes) |
| `POST` | `/api/graveyard` | Move property: `{ userId, propertyId, reason }` |
| `GET` | `/api/graveyard` | List all graveyarded properties |
| `DELETE` | `/api/graveyard/:propertyId` | Restore property from graveyard |

## Key Patterns

- **CSS custom properties** in `:root`: `--accent` (green), `--accent2` (orange), `--james` (blue), `--savanah` (brown), `--both` (purple)
- **Property cards**: `.card` > `.card-top` > `.score-offer-band` > `.highlight-band` > `.card-body` > `.pros-cons` > `.must-do` > `.env-hazards` > `.score-row` > `.vote-row` > `.notes-row`
- **Proximity grid**: `.proximity-grid` (2-col grid) > `.prox-item` (icon + label + value). `.prox-item-ref` for muted reference entries (e.g. Farmington UT drive time). Replaces the old "Location & Schools" card-section.
- **Monthly breakdown**: Each `.card-monthly` has expandable breakdown (`.monthly-toggle` + `.monthly-breakdown`). Calculated at 6.5%/30yr/3.5% down (FHA) with P&I + tax + insurance + PMI (0.55%)
- **MUST DO section**: `.must-do` with `.must-do-grid` (2-col) containing `.must-do-item` elements. Universal + conditional items per property
- **Environmental hazards**: `.env-hazards` section with `.env-pill-low`, `.env-pill-mod`, `.env-pill-high`, `.env-pill-severe`, `.env-pill-special` pills
- **Badge classes**: `.b-pend`, `.b-mfg`, `.b-sfr`, `.b-oor`, `.b-new` (green pulsing), `.b-removed` (gray)
- **Graveyard section**: `#graveyard` below cards — static `.graveyard-card` entries for permanently removed properties + `#graveyard-dynamic` container for DB-driven entries (move/restore via UI)
- **Nav anchors**: `#p1` through `#p20` matching card `id` attributes (gaps for removed properties)
- **Overview table** (id `overview`): class `.qt`, JS adds a "Family" column with avg ratings

## When Adding a New Property

1. Add a row to the overview `<table>` inside `#overview`
2. Add a nav link `<a href="#pN">Name</a>` to the `<nav class="nav">` bar
3. Copy an existing `.card` block, update `id="pN"`, and fill in all sections
4. Update the header subtitle property count
5. Add an `.env-hazards` section (between `.pros-cons` and `.score-row`) with local wildfire, flood, and other hazard data
6. Voting UI is auto-injected by `app.js` for any `.card[id^="p"]`
