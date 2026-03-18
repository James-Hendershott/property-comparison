# Backlog

Items to address in future sessions. Ordered by priority.

## High Priority

- [ ] **Verify internet at all properties** — Most properties have unverified broadband. Need to check Spectrum/AT&T/Skyrunner at each specific address (not just city-wide stats). Critical for WFH.
- [ ] **Verify livestock covenants** — p62 (Quail Run R15), p50 (Padgett-Burns "RES"), p69 (Patriots Point subdivision). Pull actual recorded covenants from county Register of Deeds.
- [ ] **Clarify modular vs manufactured** — p63 (Hollis Rd, Champion Home Builders) and p69 (Fulbright Rd). Is each built to NC state code on permanent foundation, or HUD-code on chassis? Determines dealbreaker status.
- [ ] **p42 Big Island school zone** — Elementary school shows "TBD — verify". Need to confirm actual school assignment.
- [ ] **Tour scheduling** — Prioritize p63 (Ellenboro, James: 7), then the 4-way tie at rating 6 (Rocky Rd, Toney Rd, Padgett Burns, Quail Run).

## Medium Priority

- [ ] **Compress future walkthrough videos automatically** — Currently manual ffmpeg. Consider a script or hook that auto-compresses when a new raw .mp4 is dropped in.
- [ ] **Missing property images** — Some newer properties still have no listing photo (empty `image` field). Grab from Zillow when available.
- [ ] **Lot-line images on Unraid** — All 18 uploaded locally. Need to verify they're all accessible on the live site.
- [ ] **Proximity data for new properties** — p64-p71 have minimal proximity data (grocery, hospital, etc.). Fill in from Google Maps.
- [ ] **Score tips for new properties** — Some p48-p71 score tips may be generic. Review and update with property-specific details.
- [ ] **FEMA flood zone verification** — All properties show FEMA Zone X from research but should be individually verified at msc.fema.gov.

## Low Priority / Nice to Have

- [ ] **Image gallery per property** — Currently only one photo per card. Could add a carousel or gallery from listing photos.
- [ ] **PDF export from app** — Generate property comparison PDF directly from the web app (currently using Obsidian markdown export).
- [ ] **Comparison mode** — Side-by-side comparison of 2-3 selected properties.
- [ ] **Price history charts** — Visualize price cuts over time for each property.
- [ ] **School district map overlay** — Show school zone boundaries on the Leaflet map.
- [ ] **Realtor brief auto-generation** — Generate the markdown automatically from the live data instead of manually maintaining it.
- [ ] **Mobile video player optimization** — Walkthrough videos on mobile may need adaptive bitrate or smaller resolution.
- [ ] **Dark mode consistency** — Some newer UI elements (modals, lot-line overlay) may not match the dark theme perfectly on all browsers.

## Completed

- [x] Walkthrough video support (inline player, auto-discovery, compression)
- [x] Lot-line image toggle with acreage badge
- [x] Map + Rankings as modals
- [x] Mobile nav dropdown
- [x] Beach → Internet scoring
- [x] Drive → Elementary School on cards
- [x] Address display everywhere (no more p-numbers)
- [x] Dynamic graveyard counts (filter pills, nav groups, region sections)
- [x] Full Zillow data audit for all 18 active properties
- [x] Realtor brief markdown with rankings and offer targets
- [x] 10 new properties added and verified
