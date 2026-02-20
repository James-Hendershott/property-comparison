# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A property comparison dashboard for evaluating 16 real estate listings across WA, ID, and MT. Includes a family voting system (1-5 star ratings) so the Hendershott family can rate properties and see aggregate rankings. Served via Express + Docker at `homes.shottsserver.com`.

## Architecture

- **server.js**: Express server serving `public/` as static files with REST API under `/api/`
- **database.js**: SQLite via `sql.js` (pure WASM, no native compilation). Exports `init()`, `getOrCreateUser()`, `castVote()`, `getAllVotes()`, `getRankings()`, `getUsers()`, `createNote()`, `getAllNotes()`, `deleteNote()`. Every write operation calls `save()` which serializes the entire DB to `data/votes.db` via `fs.writeFileSync`.
- **public/index.html**: ~640 lines CSS in `<style>`, ~3,600 lines HTML (16 property cards). CSS custom properties in `:root`. Zero inline JS except `onclick="window.print()"`
- **public/app.js**: Vanilla JS IIFE — user identification (localStorage key `vote_user` + modal), star rating injection into each `.card`, rankings table, overview table augmentation, notes system (per-property), monthly breakdown toggles, 30s polling for votes + notes
- **public/app.css**: Voting styles (`vote-`), notes styles (`notes-`), monthly breakdown styles (`monthly-`/`mb-`), rankings (`rankings-`), nav user (`nav-user`)

## Commands

```bash
npm install
npm start          # http://localhost:3000 (PORT env var overrides)
```

Docker deployment:
```bash
docker-compose up --build   # http://localhost:3080, maps to container :3000
```

No test framework or linter is configured. There are no build steps — all frontend code is vanilla JS/CSS served as static files.

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

## Key Patterns

- **CSS custom properties** in `:root`: `--accent` (green), `--accent2` (orange), `--james` (blue), `--savanah` (brown), `--both` (purple)
- **Property cards**: `.card` > `.card-top` > `.score-offer-band` > `.highlight-band` > `.card-body` > `.pros-cons` > `.must-do` > `.env-hazards` > `.score-row` > `.vote-row` > `.notes-row`
- **Monthly breakdown**: Each `.card-monthly` has expandable breakdown (`.monthly-toggle` + `.monthly-breakdown`). Calculated at 6.5%/30yr/3% down with P&I + tax + insurance + PMI (0.55%)
- **MUST DO section**: `.must-do` with `.must-do-grid` (2-col) containing `.must-do-item` elements. Universal + conditional items per property
- **Environmental hazards**: `.env-hazards` section with `.env-pill-low`, `.env-pill-mod`, `.env-pill-high`, `.env-pill-severe`, `.env-pill-special` pills
- **Badge classes**: `.b-pend`, `.b-mfg`, `.b-sfr`, `.b-oor`
- **Nav anchors**: `#p1` through `#p16` matching card `id` attributes
- **Overview table** (id `overview`): class `.qt`, JS adds a "Family" column with avg ratings

## When Adding a New Property

1. Add a row to the overview `<table>` inside `#overview`
2. Add a nav link `<a href="#pN">Name</a>` to the `<nav class="nav">` bar
3. Copy an existing `.card` block, update `id="pN"`, and fill in all sections
4. Update the header subtitle property count
5. Add an `.env-hazards` section (between `.pros-cons` and `.score-row`) with local wildfire, flood, and other hazard data
6. Voting UI is auto-injected by `app.js` for any `.card[id^="p"]`
