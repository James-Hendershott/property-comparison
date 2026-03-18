# Changelog

## March 18, 2026

### Data Accuracy Audit
- Verified all 18 active properties against live Zillow listings
- Fixed p17 Celia Creek price $425K→$385K (MOTIVATED SELLER, $40K cut 3/17)
- Fixed p42 Big Island price $449K→$434K (3 cuts in 59 DOM), status Pending→Active
- Fixed p48 Rocky Rd sqft 1,807→2,317, acres 5.5→6.21, tax $1,246→$1,663
- Fixed p50 Padgett Burns yearBuilt 0→1979, schools score 7→5, tax→$2,210
- Fixed p52 Uphill Ln confirmed $349,900 (275 DOM, Zestimate $341K)
- Fixed p62 Quail Run yearBuilt 0→1988, bath 2.5→3, outbuildings score 0→6
- Fixed p63 Ellenboro: MODULAR (not site-built), price $515K→$499,900, sqft→2,052, county→Cleveland
- Fixed p66 Arbor Grove: NOT manufactured (site-built brick), price→$399K, sqft→2,023
- Fixed p67 Bob Falls price $500K→$439,900 (273 DOM, 5 cuts)
- Fixed p68 Crouse status Under Contract→Active (272 DOM)
- Fixed p69 Fulbright: MODULAR, price→$410K, sqft→2,022
- Fixed p70 Glenn Oaks price→$330K, beds 3→4, FLIP $110K→$330K (201%)
- Fixed p71 Valdese price→$420K, sqft→2,172, tax→$3,307
- Fixed 7 incorrect offer ranges (some were above asking price)
- Corrected all internet scores (renamed from Beach category)
- Replaced Drive time with Elementary School on all cards

### New Properties Added (10)
- p63: 3343 Hollis Rd, Ellenboro — $499,900, 15.96 ac (MODULAR, highest-rated)
- p64: 3306 Christie Rd, Hudson — $349,900, 4.48 ac
- p65: 315 Walker Store Rd, Ellenboro — $355,000, 2.88 ac (Cliffside Elem 9/10)
- p66: 753 Arbor Grove Church Rd, Millers Creek — $399,000, 2 ac
- p67: 1246 Bob Falls Rd, Shelby — $439,900, 3 ac (new construction, 273 DOM)
- p68: 5740 Crouse Rd, Crouse — $499,000, 11.48 ac (1940 farmhouse)
- p69: 218 Fulbright Rd, Stony Point — $410,000, 2.32 ac (MODULAR)
- p70: 104 Glenn Oaks Dr, Lawndale — $330,000, 3.28 ac (fully renovated)
- p71: 917 Zeline Ave NE, Valdese — $420,000, 2.5 ac (1901 historic)
- p62: 152 N Quail Run, Forest City — $480,000, 4.23 ac (James's #1 initially)

### Features
- **Walkthrough Videos** — Inline video player on cards. Red "Watch Walkthrough" button on property image. Auto-discovers videos from `docs/walkthrough-videos/`. Prefers compressed `-web.mp4` versions. 3 videos live: Padgett Burns, Big Island, Toney Rd.
- **Lot Line Images** — "Lot Lines" toggle button (top-left of image) swaps between property photo and lot-lines screenshot with bold green acreage badge. 18 images uploaded.
- **Map + Rankings as Modals** — Moved from inline sections to popup overlays triggered by nav icons. Click background or X to close.
- **Mobile Nav Dropdown** — Region buttons collapse into a "Regions" toggle on mobile (≤768px)
- **Dynamic Graveyard Counts** — Nav group counts, filter pill counts, and region section counts now exclude graveyarded properties
- **Beach → Internet Scoring** — Replaced Beach category with Internet (10=fiber confirmed, 1=Starlink only)
- **Drive → Elementary School** — Cards now show assigned elementary school and rating instead of drive time from Farmington
- **Address Display** — All p-number displays replaced with actual street addresses (nav, map, graveyard, tooltips)
- **Realtor Brief** — Obsidian-formatted markdown with property images, listing links, walkthrough links, offer targets, and due diligence checklists. Ranked by James & Savanah ratings.

## March 17, 2026 (Earlier)

### Existing Features
- Data-driven architecture (properties-data.js → render.js → app.js)
- 7-star voting system with likes/dislikes
- Rankings with podium + tier visualization
- Interactive Leaflet map with NC boundary mask
- Collapsible overview table with sorting/filtering
- Property edit modal with field overrides
- Notes system per property
- Monthly payment calculator (FHA terms)
- Environmental hazards section
- Graveyard archive system
- Multi-tag filter bar
- 30-second polling for live updates
