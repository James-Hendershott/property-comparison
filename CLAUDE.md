# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A single-page property comparison dashboard (`property-comparison.html`) for evaluating 10 real estate listings across WA, ND, and MN. The file is entirely self-contained — no build tools, no JavaScript, no external dependencies beyond Google Fonts and Google Maps embeds.

## Architecture

- **One file:** `property-comparison.html` (~2,355 lines)
- **~600 lines CSS** (lines 9–600): All styles in a single `<style>` block using CSS custom properties (`:root` vars)
- **~1,750 lines HTML** (lines 601–2,355): Header, sticky nav, overview comparison table, then 10 property cards
- **Zero JavaScript** — print button uses inline `onclick="window.print()"`

## Key Patterns

- **CSS custom properties** defined in `:root` (lines 10–28) control the color scheme: `--accent` (green), `--accent2` (orange), `--james` (blue), `--savanah` (brown), `--both` (purple)
- **Property cards** follow a repeating structure: `.card` > `.card-top` (map + header) > `.score-offer-band` > `.highlight-band` > `.card-body` (2-column grid of sections) > `.pros-cons` > `.score-row`
- **Badge classes** indicate list ownership: `.b-james`, `.b-sav`, `.b-both`, `.b-pend`, `.b-mfg`, `.b-sfr`, `.b-oor`
- **Status classes**: `.status-active`, `.status-pending`, `.status-contract`, `.status-unknown`
- **Overview table** (id `overview`, lines 636–837) uses class `.qt` with structured columns: price, monthly est, down payment, beds/bath, sqft, acres, type, built year, drive time, score, offer range, status
- **Maps** are Google Maps Embed API iframes with satellite view, each card has one
- **Nav anchors** use `#p1` through `#p10` matching card `id` attributes
- **Out-of-range properties** (ND/MN) use `.card.oor` class for dimmed styling with an `.oor-banner`
- **Print styles** (line 581) hide nav/maps and prevent card page-breaks

## How to View and Test

Open `property-comparison.html` directly in a browser. No server needed.

## When Adding a New Property

1. Add a row to the overview `<table>` inside `#overview`
2. Add a nav link `<a href="#pN">Name</a>` to the `<nav class="nav">` bar
3. Copy an existing `.card` block, update `id="pN"`, and fill in all sections
4. Update the header subtitle property count ("10 Properties")
