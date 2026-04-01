# New NY Properties — App Entry Details
**For Claude Code in VS Code to add to `public/properties-data.js`**
**Date:** 2026-03-31
**IDs to assign:** p91–p96 (p74–p90 already in app)
**Also update:** p88 (Wilbur Hill) internet score changed from 2 to 10 — ALREADY DONE in properties-data.js

---

## Instructions for Claude Code

1. Read `public/properties-data.js` to understand the existing data format (look at p74–p90 for NY examples)
2. Add these 6 new properties at the end of the PROPERTIES array (before the closing `];`)
3. Add their IDs to the appropriate REGIONS in `public/render.js`
4. Each entry must match the exact field names and data shapes used by `render.js`

---

## p91 — 55 Clinton St, Tully, NY 13159

```javascript
{
  "id": "p91",
  "num": 91,
  "dateAdded": "2026-03-31",
  "navLabel": "Tully",
  "address": "55 Clinton St",
  "city": "Tully",
  "state": "NY",
  "zip": "13159",
  "lat": 42.7970,
  "lng": -76.1100,
  "county": "Onondaga",
  "price": 429000,
  "listingLink": "https://www.zillow.com/homes/55-Clinton-St-Tully-NY_rb/",
  "image": "https://www.trulia.com/pictures/thumbs_6/zillowstatic/fp/d09ea7061a5202dc825f1ce865c83fac-full.webp",
  "beds": 4,
  "bath": 1.5,
  "sqft": 1738,
  "acres": 24.62,
  "acresSub": "Near Syracuse. Triple FTTP options. Tully Elem 7/10.",
  "yearBuilt": 1950,
  "type": "Site-Built",
  "typeBadge": "b-sfr",
  "status": "Active",
  "statusClass": "status-active",
  "statusNote": "19 DOM. FHA listed. Triple fiber: Point Broadband + Verizon 2Gbps + Spectrum Cable. Tully Elem 7/10. Grocery next door.",
  "badges": [],
  "taxRate": 0.025,
  "taxLabel": "Property Tax (Onondaga Co.)",
  "taxAnnual": 7200,
  "hoa": 0,
  "elemSchool": "Tully Elem (7/10)",
  "elemSchoolSub": "Tully CSD — well-regarded rural district",
  "toTown": "~2 min",
  "toTownSub": "to Tully village (grocery next door); ~25 min to Syracuse",
  "scores": {
    "price": 8,
    "acreage": 6,
    "schools": 8,
    "outbldgs": 4,
    "town": 9,
    "hospital": 9,
    "hazards": 8,
    "internet": 10,
    "forested": 5,
    "living": 5
  },
  "offerRange": "$400K - $420K",
  "offerStrategy": "19 DOM — early, limited leverage. FHA eligible. Only 1 full bath limits buyer pool.",
  "offerRationale": [
    "$429K within pre-approval — solid position",
    "Only 1 full bath will deter many families — negotiating point",
    "1950 build needs inspection — leverage on condition findings",
    "FHA listed — financing path confirmed"
  ],
  "tableOfferNote": "Triple FTTP (Verizon 2Gbps!). Tully Elem 7/10. Near Syracuse. Only 1 full bath.",
  "highlight": "Best internet infrastructure in Batch 3 — triple FTTP from Point Broadband, Verizon (2Gbps!), and Spectrum Cable. Tully Elementary 7/10. Grocery store literally next door. Syracuse 25 min with Level I Trauma Center. Walk-out basement. FHA eligible. But only 1 full bath and 1,738 sqft for a family of 4.",
  "highlights": [
    { "icon": "\uD83C\uDF10", "text": "Triple FTTP: Point Broadband 1000/1000, Verizon 2048/2048, Spectrum Cable — best internet in all batches" },
    { "icon": "\uD83C\uDFEB", "text": "Tully Elementary 7/10 — strong school for Theo's kindergarten" },
    { "icon": "\uD83C\uDFD9\uFE0F", "text": "Syracuse ~25 min — Wegmans, Walmart, Level I Trauma Center" },
    { "icon": "\uD83D\uDED2", "text": "Tully Market grocery literally next door at 8 Clinton St" }
  ],
  "proximity": [
    { "icon": "\uD83D\uDED2", "label": "Tully Market (grocery)", "value": "next door", "ref": false },
    { "icon": "\uD83C\uDFD9\uFE0F", "label": "Syracuse", "value": "~25 min", "ref": false },
    { "icon": "\uD83C\uDFE5", "label": "Cortland Regional Medical Center", "value": "~20 min", "ref": false },
    { "icon": "\uD83C\uDFE5", "label": "Upstate University Hospital (Level I Trauma)", "value": "~30 min", "ref": false },
    { "icon": "\uD83C\uDFEB", "label": "Tully Elem (7/10)", "value": "~2 min", "ref": false }
  ],
  "cardPros": [
    { "icon": "\u2713", "text": "Triple FTTP — Verizon 2048/2048, Point Broadband 1000/1000, Spectrum Cable. Best internet in the entire dataset." },
    { "icon": "\u2713", "text": "Tully Elementary 7/10 — strong school, well-regarded rural district" },
    { "icon": "\u2713", "text": "Grocery store next door — Tully Market at 8 Clinton St" },
    { "icon": "\u2713", "text": "Syracuse 25 min — Upstate University Hospital is a Level I Trauma Center" },
    { "icon": "\u2713", "text": "Walk-out basement — strong for FHA and family use" },
    { "icon": "\u2713", "text": "FHA eligible — confirmed in listing terms" },
    { "icon": "\u2713", "text": "$429K within pre-approval, 24.62 acres" }
  ],
  "cardCons": [
    { "icon": "\u2717", "text": "Only 1 full bath + 1 half — family of 4 with 2 young kids needs a second bath" },
    { "icon": "\u2717", "text": "1,738 sqft — on the smaller side for dual remote work + 2 kids" },
    { "icon": "\u2717", "text": "1950 build — full inspection needed (electrical, plumbing, insulation)" },
    { "icon": "\u2717", "text": "24.62 acres limits timber potential for James" },
    { "icon": "\u2717", "text": "No outbuildings confirmed — James needs to build workshop" },
    { "icon": "\u2717", "text": "Onondaga County — outside target counties" }
  ],
  "familyFit": [
    "Tully Elem 7/10 is one of the strongest schools in the entire NY search",
    "Grocery next door + Syracuse 25 min = best daily convenience of any rural property",
    "Triple FTTP means James and Savanah never worry about bandwidth — ever",
    "But only 1 bath and no outbuildings are real limitations"
  ],
  "verifyItems": [
    { "label": "Bath Count", "text": "Only 1 full bath — can the half bath be converted? Cost?" },
    { "label": "Outbuildings", "text": "None confirmed — verify on walkthrough. Zoning for new builds?" },
    { "label": "1950 Build", "text": "Inspect electrical, plumbing, insulation, foundation" },
    { "label": "Taxes", "text": "Verify actual tax bill — Onondaga County, near Syracuse, may be higher than estimated" }
  ],
  "mustDo": [
    { "urgent": true, "text": "Confirm actual annual tax bill — Onondaga County rates near Syracuse can be high" },
    { "urgent": false, "text": "Inspect 1950 systems — electrical panel, plumbing, insulation" },
    { "urgent": false, "text": "Verify half bath can be converted to full (plumbing rough-in?)" },
    { "urgent": false, "text": "Request video walkthrough — house + basement + 24 acres" },
    { "urgent": false, "text": "FEMA flood zone check" }
  ],
  "envHazards": {
    "location": "Onondaga County — Tully, south of Syracuse",
    "pills": [
      { "level": "low", "text": "Flooding — elevated terrain above Onondaga Valley" },
      { "level": "mod", "text": "Ice storms — central NY standard" },
      { "level": "low", "text": "Wildfire — minimal" }
    ],
    "note": "Tully is elevated terrain south of Syracuse. Low hazard profile. Standard ice storm risk."
  }
}
```

**render.js region:** Add `'p91'` to a new region or existing `'NY — Cortland / Other'`

---

## p92 — 4990 Heelpath Rd, Rome, NY 13440

```javascript
{
  "id": "p92",
  "num": 92,
  "dateAdded": "2026-03-31",
  "navLabel": "Rome",
  "address": "4990 Heelpath Rd",
  "city": "Rome",
  "state": "NY",
  "zip": "13440",
  "lat": 43.2300,
  "lng": -75.4900,
  "county": "Oneida",
  "price": 399900,
  "listingLink": "https://www.zillow.com/homedetails/4990-Heelpath-Rd-Rome-NY-13440/456259780_zpid/",
  "image": "https://www.trulia.com/pictures/thumbs_5/zillowstatic/fp/ecd3ab8ffaf88c685531a35beea2fc05-full.webp",
  "beds": 3,
  "bath": 1.5,
  "sqft": 1960,
  "acres": 62.31,
  "acresSub": "Estate sale. 35x65 pole barn (2,275 sqft). Walnut trees. Multiple ponds. Generac generator.",
  "yearBuilt": 1875,
  "type": "Site-Built",
  "typeBadge": "b-sfr",
  "status": "Active",
  "statusClass": "status-active",
  "statusNote": "8 DOM. Estate sale. 1875 stone foundation. 35x65 pole barn. Walnut trees. Only 1 full bath. NO FHA expected.",
  "badges": ["b-no-fha"],
  "taxRate": 0.025,
  "taxLabel": "Property Tax (Oneida Co.)",
  "taxAnnual": 7956,
  "hoa": 0,
  "elemSchool": "Rome CSD (~4-5/10)",
  "elemSchoolSub": "Rome City CSD — verify specific elementary assignment",
  "toTown": "~15 min",
  "toTownSub": "to Rome (Walmart, hospital, full services)",
  "scores": {
    "price": 10,
    "acreage": 10,
    "schools": 4,
    "outbldgs": 10,
    "town": 8,
    "hospital": 8,
    "hazards": 8,
    "internet": 8,
    "forested": 8,
    "living": 3
  },
  "offerRange": "$350K - $380K",
  "offerStrategy": "Estate sale under $400K with 62 acres. 1875 stone foundation limits buyers. Strong leverage.",
  "offerRationale": [
    "Estate sale — heirs typically motivated to close quickly",
    "Under $400K with 62 acres and 35x65 pole barn is extraordinary value",
    "1875 stone foundation scares most buyers — limited competition",
    "Only 1 full bath further limits buyer pool"
  ],
  "tableOfferNote": "Estate sale. 62 acres, 35x65 pole barn, walnut trees, $399K. 1875 stone foundation. Only 1 bath. NO FHA.",
  "highlight": "62 acres at $399,900 with a 35x65 pole barn (2,275 sqft — best outbuilding in the entire dataset), walnut trees for timber, multiple ponds, Generac generator, and newer septic/roof. Estate sale. Rome Memorial Hospital 15 min (full ED). But 1875 stone foundation and only 1 full bath — NO FHA expected.",
  "highlights": [
    { "icon": "\uD83D\uDD27", "text": "35x65 pole barn (2,275 sqft) — largest dedicated outbuilding in any batch" },
    { "icon": "\uD83C\uDF32", "text": "Walnut trees confirmed — high-value harvestable timber for James" },
    { "icon": "\uD83D\uDCB0", "text": "Estate sale at $399,900 — heirs motivated, 62 acres at ~$6,400/acre" },
    { "icon": "\u26A1", "text": "Generac generator + newer septic (10 yr) + newer roof (7 yr)" }
  ],
  "proximity": [
    { "icon": "\uD83D\uDED2", "label": "Rome (Walmart, full services)", "value": "~15 min", "ref": false },
    { "icon": "\uD83C\uDFE5", "label": "Rome Memorial Hospital (full ED)", "value": "~15 min", "ref": false },
    { "icon": "\uD83C\uDFEB", "label": "Rome CSD (~4-5/10)", "value": "verify assignment", "ref": false }
  ],
  "cardPros": [
    { "icon": "\u2713", "text": "35x65 pole barn (2,275 sqft) — best workshop/barn in the entire dataset" },
    { "icon": "\u2713", "text": "62 acres with walnut trees — high-value timber for James's woodworking" },
    { "icon": "\u2713", "text": "Under $400K, estate sale — heirs motivated, strong negotiating position" },
    { "icon": "\u2713", "text": "Multiple ponds — livestock water, recreation, aesthetics" },
    { "icon": "\u2713", "text": "Generac generator, newer septic (10 yr), newer roof (7 yr) — reduced capital needs" },
    { "icon": "\u2713", "text": "Rome Memorial Hospital 15 min — full ED, not Critical Access" },
    { "icon": "\u2713", "text": "Inground pool included" }
  ],
  "cardCons": [
    { "icon": "\u2717", "text": "Only 1 full bath — hard constraint for family of 4. Adding 2nd bath costs $15K-$30K." },
    { "icon": "\u2717", "text": "1875 stone foundation — mandatory structural inspection. FHA almost certainly ineligible." },
    { "icon": "\u2717", "text": "No garage — must use pole barn for vehicles in winter" },
    { "icon": "\u2717", "text": "Estate sale — probate delays possible, 6-12 month timeline risk" },
    { "icon": "\u2717", "text": "Rome CSD schools average 4-5/10" },
    { "icon": "\u2717", "text": "Spectrum Cable only (no fiber) — upload 35 Mbps" },
    { "icon": "\u2717", "text": "Est. $7,956/yr property taxes" }
  ],
  "familyFit": [
    "35x65 pole barn is James's dream workshop — 2,275 sqft dedicated space from day 1",
    "Walnut trees = high-value timber for furniture making",
    "But only 1 bath + 1875 build + no FHA = significant hurdles",
    "Estate sale could drag — June 2026 move timeline at risk"
  ],
  "verifyItems": [
    { "label": "Structure", "text": "1875 stone foundation — hire structural engineer, not just home inspector" },
    { "label": "Estate Timeline", "text": "Confirm probate status — can this close by June 2026?" },
    { "label": "2nd Bath", "text": "What will a second bathroom addition cost in this structure?" },
    { "label": "Walnut Trees", "text": "Confirm maturity and harvestable volume" },
    { "label": "Outbuildings", "text": "Confirm all structures included in estate sale" }
  ],
  "mustDo": [
    { "urgent": true, "text": "Structural inspection — 1875 stone foundation, mandatory" },
    { "urgent": true, "text": "Confirm estate/probate timeline — can it close by June?" },
    { "urgent": false, "text": "2nd bathroom feasibility and cost estimate" },
    { "urgent": false, "text": "Verify school district assignment for Heelpath Rd" },
    { "urgent": false, "text": "Tax bill from Oneida County: (315) 798-5750" },
    { "urgent": false, "text": "Well condition (age unknown — 1875 property)" }
  ],
  "envHazards": {
    "location": "Oneida County — Rome area, rural farmland",
    "pills": [
      { "level": "low", "text": "Flooding — inland, no river valley" },
      { "level": "mod", "text": "Ice storms — central NY standard" },
      { "level": "low", "text": "Wildfire — minimal" }
    ],
    "note": "Oneida County interior. Low hazard profile. Standard ice storm risk."
  }
}
```

**render.js region:** Add `'p92'` to `'NY — Cortland / Other'` (or create `'NY — Oneida / Other'`)

---

## p93 — 668 Sovocool Hill Rd, Groton, NY 13073

```javascript
{
  "id": "p93",
  "num": 93,
  "dateAdded": "2026-03-31",
  "navLabel": "Groton",
  "address": "668 Sovocool Hill Rd",
  "city": "Groton",
  "state": "NY",
  "zip": "13073",
  "lat": 42.5600,
  "lng": -76.3200,
  "county": "Tompkins",
  "price": 399000,
  "listingLink": "https://www.trulia.com/home/668-sovocool-hill-rd-groton-ny-13073-449413529",
  "image": "https://www.trulia.com/pictures/thumbs_6/zillowstatic/fp/d02477936dfe783f250935fa97f9ecec-full.webp",
  "beds": 5,
  "bath": 2,
  "sqft": 2046,
  "acres": 15,
  "acresSub": "Near Ithaca. 1865 farmhouse. COAL HEAT — NO FHA.",
  "yearBuilt": 1865,
  "type": "Site-Built",
  "typeBadge": "b-sfr",
  "status": "Active",
  "statusClass": "status-active",
  "statusNote": "11 DOM. COAL primary heat — NO FHA. 1865 stone foundation. Near Ithaca/Cortland. Spectrum Cable confirmed.",
  "badges": ["b-no-fha"],
  "taxRate": 0.025,
  "taxLabel": "Property Tax (Tompkins Co.)",
  "taxAnnual": 6000,
  "hoa": 0,
  "elemSchool": "Groton Elem (5/10)",
  "elemSchoolSub": "Groton CSD",
  "toTown": "~10 min",
  "toTownSub": "to Groton village; ~19 min to Cortland; ~30 min to Ithaca",
  "scores": {
    "price": 10,
    "acreage": 6,
    "schools": 5,
    "outbldgs": 7,
    "town": 8,
    "hospital": 7,
    "hazards": 9,
    "internet": 8,
    "forested": 5,
    "living": 3
  },
  "offerRange": "$350K - $380K",
  "offerStrategy": "Coal heat + 1865 build = extremely limited buyer pool. Under $400K with 15 acres near Ithaca.",
  "offerRationale": [
    "Coal heat is an FHA non-starter — most buyers can't finance",
    "1865 stone foundation requires structural inspection",
    "$399K near Ithaca with 15 acres has value for land alone",
    "Heating system replacement ($15K-$25K) must be factored into offer"
  ],
  "tableOfferNote": "Near Ithaca/Cortland. $399K, 15 acres. COAL HEAT — NO FHA. 1865 stone foundation. 5bd/2ba.",
  "highlight": "5 bed/2 bath farmhouse on 15 acres near Ithaca ($399K) with barns, outbuildings, and Spectrum Cable confirmed. But COAL is the primary heat source — FHA non-starter. 1865 stone foundation requires structural inspection. Budget $15K-$25K for heating system replacement.",
  "highlights": [
    { "icon": "\uD83C\uDFD9\uFE0F", "text": "Near Ithaca (~30 min) and Cortland (~19 min) — strong services access" },
    { "icon": "\uD83C\uDFE0", "text": "5 bed / 2 bath — most bedrooms of any property in the dataset" },
    { "icon": "\uD83D\uDCB0", "text": "$399K under FHA pre-approval — if heating system replaced" },
    { "icon": "\uD83C\uDFE5", "text": "Cayuga Medical Center (Ithaca) ~30 min or Guthrie Cortland ~19 min — full ED" }
  ],
  "proximity": [
    { "icon": "\uD83D\uDED2", "label": "Groton village", "value": "~10 min", "ref": false },
    { "icon": "\uD83C\uDFD9\uFE0F", "label": "Cortland", "value": "~19 min", "ref": false },
    { "icon": "\uD83C\uDFD9\uFE0F", "label": "Ithaca", "value": "~30 min", "ref": false },
    { "icon": "\uD83C\uDFE5", "label": "Guthrie Cortland Medical Center", "value": "~19 min", "ref": false },
    { "icon": "\uD83C\uDFEB", "label": "Groton Elem (5/10)", "value": "Groton CSD", "ref": false }
  ],
  "cardPros": [
    { "icon": "\u2713", "text": "$399K under budget with 15 acres near Ithaca — land value alone is strong" },
    { "icon": "\u2713", "text": "5 bed / 2 full bath — most bedrooms in the dataset, family has room to grow" },
    { "icon": "\u2713", "text": "Barns and outbuildings on property" },
    { "icon": "\u2713", "text": "Spectrum Cable 1000/35 confirmed" },
    { "icon": "\u2713", "text": "Cortland 19 min, Ithaca 30 min — two full-service cities nearby" },
    { "icon": "\u2713", "text": "Guthrie Cortland Medical Center 19 min — full ED" }
  ],
  "cardCons": [
    { "icon": "\u2717", "text": "COAL is primary heat source — FHA non-starter. Replacement costs $15K-$25K." },
    { "icon": "\u2717", "text": "1865 stone foundation — mandatory structural engineering inspection" },
    { "icon": "\u2717", "text": "15 acres is at the low end — limited timber and farming potential" },
    { "icon": "\u2717", "text": "Spectrum Cable upload 35 Mbps — test under dual remote work load" },
    { "icon": "\u2717", "text": "Groton Elem 5/10 — average school" },
    { "icon": "\u2717", "text": "Coal heat fuel cost est. $8,000-$12,000/yr" }
  ],
  "familyFit": [
    "Ithaca proximity provides culture, services, and community that most rural properties lack",
    "5 bedrooms means dedicated offices for both James and Savanah",
    "But coal heat replacement is a hard prerequisite — budget $15K-$25K on top of purchase price"
  ],
  "verifyItems": [
    { "label": "COAL HEAT", "text": "Must be replaced before move-in. Get quotes for propane forced air or heat pump system." },
    { "label": "Stone Foundation", "text": "1865 — structural engineer required" },
    { "label": "Outbuildings", "text": "Verify barn conditions and what's included in sale" },
    { "label": "Upload Speed", "text": "Test 35 Mbps under dual video call load" }
  ],
  "mustDo": [
    { "urgent": true, "text": "Get heating system replacement quotes — coal must be replaced ($15K-$25K)" },
    { "urgent": true, "text": "Structural engineer inspection of 1865 stone foundation" },
    { "urgent": false, "text": "Request video walkthrough — house + barns + land" },
    { "urgent": false, "text": "Verify tax bill with Tompkins County" },
    { "urgent": false, "text": "FEMA flood zone check" }
  ],
  "envHazards": {
    "location": "Tompkins County — Groton, between Ithaca and Cortland",
    "pills": [
      { "level": "low", "text": "Flooding — hilltop, inland" },
      { "level": "mod", "text": "Ice storms — central NY standard" },
      { "level": "special", "text": "Coal heat — environmental/health concern, replacement mandatory" }
    ],
    "note": "Inland hilltop location. Low flood risk. Coal heat is the primary environmental/health concern — must be replaced."
  }
}
```

**render.js region:** Add `'p93'` to `'NY — Cortland / Other'`

---

## p94 — 223 Bear Swamp Rd, Peru, NY 12972

```javascript
{
  "id": "p94",
  "num": 94,
  "dateAdded": "2026-03-31",
  "navLabel": "Peru",
  "address": "223 Bear Swamp Rd",
  "city": "Peru",
  "state": "NY",
  "zip": "12972",
  "lat": 44.5800,
  "lng": -73.5600,
  "county": "Clinton",
  "price": 525000,
  "listingLink": "https://www.trulia.com/home/223-bear-swamp-rd-peru-ny-12972-215754347",
  "image": "https://www.trulia.com/pictures/thumbs_5/zillowstatic/fp/bd547d1c0b5a29311c933685d987d9bf-full.webp",
  "beds": 4,
  "bath": 3,
  "sqft": 2364,
  "acres": 12.53,
  "acresSub": "2014 build. Radiant floor + ductless. Near Plattsburgh. Verizon FTTP 940/880.",
  "yearBuilt": 2014,
  "type": "Site-Built",
  "typeBadge": "b-sfr",
  "status": "Active",
  "statusClass": "status-active",
  "statusNote": "2 DOM. $525K above comfortable budget. 2014 build. Verizon FTTP + Spectrum. CVPH 20 min. FHA listed. 12.53 acres barely meets minimum.",
  "badges": [],
  "taxRate": 0.025,
  "taxLabel": "Property Tax (Clinton Co.)",
  "taxAnnual": 7500,
  "hoa": 0,
  "elemSchool": "Peru Elem (6/10)",
  "elemSchoolSub": "Peru CSD",
  "toTown": "~15 min",
  "toTownSub": "to Plattsburgh (Walmart, all services)",
  "scores": {
    "price": 4,
    "acreage": 4,
    "schools": 7,
    "outbldgs": 4,
    "town": 8,
    "hospital": 8,
    "hazards": 8,
    "internet": 10,
    "forested": 4,
    "living": 8
  },
  "offerRange": "$490K - $510K",
  "offerStrategy": "$525K above comfortable range. 2 DOM = no leverage yet. Newest build in dataset.",
  "offerRationale": [
    "$525K is $75K above pre-approval — needs significant movement",
    "2014 build is FHA-friendly — minimal condition risk",
    "12.53 acres limits buyer pool vs larger acreage properties",
    "Plattsburgh proximity + Verizon fiber adds value"
  ],
  "tableOfferNote": "2014 build, Verizon FTTP 940/880. $525K above budget. 12.53 acres at minimum. CVPH 20 min.",
  "highlight": "Newest build in the dataset (2014) with 4 bed/3 full bath, radiant floor heat, ductless cooling, and Verizon FTTP 940/880 Mbps. CVPH Level III Trauma Center only 20 min away. Peru Elementary 6/10. But $525K is above the comfortable $500K ceiling and 12.53 acres barely meets the 10-acre minimum.",
  "highlights": [
    { "icon": "\uD83C\uDFE0", "text": "2014 build — newest construction in the entire dataset, move-in ready" },
    { "icon": "\uD83C\uDF10", "text": "Verizon FTTP 940/880 + Spectrum Cable — dual provider, near-gigabit symmetric" },
    { "icon": "\uD83C\uDFE5", "text": "CVPH Level III Trauma Center ~20 min — excellent hospital access" },
    { "icon": "\uD83D\uDD25", "text": "Radiant floor heat + ductless mini-splits — modern comfort" }
  ],
  "proximity": [
    { "icon": "\uD83C\uDFD9\uFE0F", "label": "Plattsburgh", "value": "~15-20 min", "ref": false },
    { "icon": "\uD83C\uDFE5", "label": "CVPH (Level III Trauma)", "value": "~20 min", "ref": false },
    { "icon": "\uD83C\uDFEB", "label": "Peru Elem (6/10)", "value": "Peru CSD", "ref": false }
  ],
  "cardPros": [
    { "icon": "\u2713", "text": "2014 build — modern systems, zero structural concerns, FHA-ready" },
    { "icon": "\u2713", "text": "Verizon FTTP 940/880 — near-gigabit symmetric, excellent for dual remote work" },
    { "icon": "\u2713", "text": "4 bed / 3 full bath — exceeds family requirements" },
    { "icon": "\u2713", "text": "CVPH Level III Trauma Center ~20 min — best hospital for young family" },
    { "icon": "\u2713", "text": "Radiant floor + ductless = efficient heating AND cooling" },
    { "icon": "\u2713", "text": "FHA listed — financing confirmed" }
  ],
  "cardCons": [
    { "icon": "\u2717", "text": "$525,000 above comfortable $500K ceiling — needs $25K+ movement" },
    { "icon": "\u2717", "text": "12.53 acres barely meets 10-acre minimum — limited farming/timber potential" },
    { "icon": "\u2717", "text": "No basement — slab foundation" },
    { "icon": "\u2717", "text": "Only gazebo and sheds for outbuildings — James builds from scratch" },
    { "icon": "\u2717", "text": "2 DOM — zero negotiating leverage" },
    { "icon": "\u2717", "text": "Clinton County outside primary target counties" }
  ],
  "familyFit": [
    "Newest, most move-in-ready home in the search — zero renovation needed",
    "CVPH proximity is ideal for Theo and Sophie's safety",
    "But $525K + only 12 acres = paying premium for the house, not the land"
  ],
  "verifyItems": [
    { "label": "Price", "text": "$525K above comfortable range — monitor for price drop" },
    { "label": "Acreage", "text": "12.53 acres — enough for chickens/goats but tight for horses" },
    { "label": "FHA Limits", "text": "Verify Clinton County FHA loan limit covers $525K" }
  ],
  "mustDo": [
    { "urgent": false, "text": "Monitor price — just listed, may drop in 30-60 days" },
    { "urgent": false, "text": "Verify Clinton County FHA loan limit" },
    { "urgent": false, "text": "Request video walkthrough if price drops below $500K" }
  ],
  "envHazards": {
    "location": "Clinton County — Peru, Champlain Valley",
    "pills": [
      { "level": "low", "text": "Flooding — inland Champlain Valley, low risk" },
      { "level": "mod", "text": "Ice storms — northern NY standard" },
      { "level": "low", "text": "Wildfire — minimal" }
    ],
    "note": "Clinton County Champlain Valley. NOT inside APA Blue Line (confirmed). Low hazard profile."
  }
}
```

**render.js region:** Add `'p94'` to `'NY — Clinton Co.'`

---

## p95 — 1216 Clauverwie Rd, Middleburgh, NY 12122

```javascript
{
  "id": "p95",
  "num": 95,
  "dateAdded": "2026-03-31",
  "navLabel": "Middleburgh",
  "address": "1216 Clauverwie Rd",
  "city": "Middleburgh",
  "state": "NY",
  "zip": "12122",
  "lat": 42.5400,
  "lng": -74.3300,
  "county": "Schoharie",
  "price": 450000,
  "listingLink": "https://www.trulia.com/home/1216-clauverwie-rd-middleburgh-ny-12122-53746368",
  "image": "https://www.trulia.com/pictures/thumbs_6/zillowstatic/fp/891f0d60fd35f133768c6e123f088827-full.webp",
  "beds": 3,
  "bath": 1.5,
  "sqft": 1536,
  "acres": 90,
  "acresSub": "90 acres across 4 parcels. MIDTEL FTTP 500/100. FEMA flood check mandatory (Schoharie County).",
  "yearBuilt": 1999,
  "type": "Site-Built",
  "typeBadge": "b-sfr",
  "status": "Active",
  "statusClass": "status-active",
  "statusNote": "90+ DOM. 90 acres / 4 parcels. Only 1 full bath. 1,536 sqft. MIDTEL FTTP confirmed. FEMA FLOOD CHECK MANDATORY.",
  "badges": [],
  "taxRate": 0.022,
  "taxLabel": "Property Tax (Schoharie Co.)",
  "taxAnnual": 6000,
  "hoa": 0,
  "elemSchool": "Middleburgh Elem (5/10)",
  "elemSchoolSub": "Middleburgh CSD",
  "toTown": "~5 min",
  "toTownSub": "to Middleburgh village; ~20 min to Cobleskill",
  "scores": {
    "price": 9,
    "acreage": 10,
    "schools": 5,
    "outbldgs": 2,
    "town": 9,
    "hospital": 3,
    "hazards": 4,
    "internet": 10,
    "forested": 8,
    "living": 4
  },
  "offerRange": "$400K - $430K",
  "offerStrategy": "90+ DOM, only 1 bath, 4 separate parcels = complex deal with limited buyers. Leverage.",
  "offerRationale": [
    "90+ DOM — not selling at $450K",
    "Only 1 full bath + 1,536 sqft deters families",
    "4 separate parcels = complex closing, most buyers avoid",
    "Schoharie County flood reputation scares buyers"
  ],
  "tableOfferNote": "90 acres / 4 parcels. MIDTEL FTTP. Only 1 bath. Schoharie flood risk — FEMA check mandatory.",
  "highlight": "90 acres at $450K across 4 parcels with MIDTEL FTTP 500/100 and Middleburgh village 5 min away. 1999 build with full basement. Schoharie County rolling hills — strong hardwood timber potential. But only 1 full bath, 1,536 sqft, and FEMA flood check is mandatory (Schoharie Creek 2011 flood history).",
  "highlights": [
    { "icon": "\uD83C\uDF32", "text": "90 acres — massive acreage with Schoharie County hardwood timber potential" },
    { "icon": "\uD83C\uDF10", "text": "MIDTEL FTTP 500/100 confirmed" },
    { "icon": "\uD83C\uDFD9\uFE0F", "text": "Middleburgh village ~5 min — not isolated" },
    { "icon": "\uD83C\uDFE0", "text": "1999 build with full basement — modern systems" }
  ],
  "proximity": [
    { "icon": "\uD83D\uDED2", "label": "Middleburgh village", "value": "~5 min", "ref": false },
    { "icon": "\uD83D\uDED2", "label": "Cobleskill", "value": "~20 min", "ref": false },
    { "icon": "\uD83C\uDFE5", "label": "Cobleskill Regional Hospital (CAH)", "value": "~20 min", "ref": false },
    { "icon": "\uD83C\uDFE5", "label": "Albany Medical Center", "value": "~45 min", "ref": false }
  ],
  "cardPros": [
    { "icon": "\u2713", "text": "90 acres at $450K — $5,000/acre including 1999 home" },
    { "icon": "\u2713", "text": "MIDTEL FTTP 500/100 confirmed — solid broadband" },
    { "icon": "\u2713", "text": "1999 build — modern mechanicals, full basement" },
    { "icon": "\u2713", "text": "Middleburgh village 5 min — not isolated" },
    { "icon": "\u2713", "text": "Schoharie County rolling hills — excellent timber potential" }
  ],
  "cardCons": [
    { "icon": "\u2717", "text": "FEMA FLOOD CHECK MANDATORY — Schoharie Creek watershed, Hurricane Irene 2011 devastated this area" },
    { "icon": "\u2717", "text": "Only 1 full bath — family of 4 needs 2nd bath" },
    { "icon": "\u2717", "text": "1,536 sqft — small for dual remote work + 2 kids" },
    { "icon": "\u2717", "text": "Cobleskill Hospital is Critical Access only — Albany Med is 45 min" },
    { "icon": "\u2717", "text": "4 separate parcels = complex closing, potential easement issues" },
    { "icon": "\u2717", "text": "MIDTEL upload only 100 Mbps (asymmetric) — test under dual load" }
  ],
  "familyFit": [
    "90 acres of Schoharie County timber is compelling for James",
    "But flood risk + 1 bath + CAH hospital = hard trade-offs for a young family",
    "Only proceed if FEMA confirms house is outside Special Flood Hazard Area"
  ],
  "verifyItems": [
    { "label": "FEMA FLOOD", "text": "MANDATORY — Check msc.fema.gov for Schoharie Creek 100/500-year flood plains" },
    { "label": "4 Parcels", "text": "Confirm all contiguous, accessible, no easement conflicts" },
    { "label": "Bath Addition", "text": "Can 2nd full bath be added? Cost estimate?" },
    { "label": "Upload Speed", "text": "100 Mbps upload — test under dual video call load" }
  ],
  "mustDo": [
    { "urgent": true, "text": "FEMA flood map — Schoharie Creek watershed. Non-negotiable before any interest." },
    { "urgent": true, "text": "Confirm all 4 parcels are contiguous and included" },
    { "urgent": false, "text": "Tax bills for all 4 parcels — check ag exemptions" },
    { "urgent": false, "text": "2nd bath feasibility" },
    { "urgent": false, "text": "Request video walkthrough" }
  ],
  "envHazards": {
    "location": "Schoharie County — Middleburgh, Schoharie Creek watershed",
    "pills": [
      { "level": "high", "text": "Flooding — Schoharie Creek; Hurricane Irene 2011 catastrophic" },
      { "level": "mod", "text": "Ice storms — upstate NY standard" },
      { "level": "special", "text": "FEMA flood map check MANDATORY before any offer" }
    ],
    "note": "Schoharie Creek watershed was devastated by Hurricane Irene in 2011. FEMA flood map verification is absolutely mandatory. If house is in SFHA, this property is uninsurable at reasonable rates."
  }
}
```

**render.js region:** Add `'p95'` to `'NY — Cortland / Other'` (or create `'NY — Schoharie Co.'`)

---

## p96 — 155 John Hill Rd, Burlington Flats, NY 13315

Note: Internet is still UNKNOWN for this property. OEConnect likely serves it (77% coverage in area per BroadbandNow). Score assumes internet at 2/10 until confirmed. Add `"b-internet-unknown"` badge.

```javascript
{
  "id": "p96",
  "num": 96,
  "dateAdded": "2026-03-31",
  "navLabel": "Burlington Flats",
  "address": "155 John Hill Rd",
  "city": "Burlington Flats",
  "state": "NY",
  "zip": "13315",
  "lat": 42.7300,
  "lng": -75.1800,
  "county": "Otsego",
  "price": 449000,
  "listingLink": "https://www.trulia.com/home/155-john-hill-rd-burlington-flats-ny-13315-63535927",
  "image": "https://www.trulia.com/pictures/thumbs_5/zillowstatic/fp/371694efb57ae639838e8a4e7d19688c-full.webp",
  "beds": 4,
  "bath": 2,
  "sqft": 1940,
  "acres": 72.49,
  "acresSub": "1850 farmhouse. Spray foam insulated. Pond. Barns. Near Bassett Medical Center.",
  "yearBuilt": 1850,
  "type": "Site-Built",
  "typeBadge": "b-sfr",
  "status": "Active",
  "statusClass": "status-active",
  "statusNote": "32 DOM. 72.49 acres with pond and barns. 1850 spray foam reno. NO FHA. Internet UNKNOWN — call OEConnect.",
  "badges": ["b-no-fha"],
  "taxRate": 0.025,
  "taxLabel": "Property Tax (Otsego Co.)",
  "taxAnnual": 6000,
  "hoa": 0,
  "elemSchool": "Edmeston Central (~5/10)",
  "elemSchoolSub": "Edmeston CSD or Cherry Valley-Springfield — verify",
  "toTown": "~20 min",
  "toTownSub": "to Cooperstown/Richfield Springs",
  "scores": {
    "price": 8,
    "acreage": 10,
    "schools": 5,
    "outbldgs": 8,
    "town": 7,
    "hospital": 8,
    "hazards": 8,
    "internet": 2,
    "forested": 9,
    "living": 5
  },
  "offerRange": "$400K - $430K",
  "offerStrategy": "72 acres with barns at $449K. 1850 build + no FHA limits buyers. Internet must confirm first.",
  "offerRationale": [
    "$449K for 72 acres with barns and pond is strong value",
    "1850 build + no FHA = very limited buyer pool",
    "Spray foam insulation shows owner investment in the property",
    "Near Bassett Medical Center — world-class for rural area"
  ],
  "tableOfferNote": "72 acres, barns, pond, spray foam reno. 1850 build. NO FHA. Internet UNKNOWN — call OEConnect.",
  "highlight": "72.49 acres with pond, barns, and outbuildings in Otsego County hardwood country. 1850 farmhouse with spray foam insulation. Bassett Medical Center (Cooperstown) ~20 min — excellent hospital. But NO FHA, internet still UNKNOWN (call OEConnect), and 1850 construction requires structural inspection.",
  "highlights": [
    { "icon": "\uD83C\uDF32", "text": "72.49 acres in Otsego County — premier hardwood timber county" },
    { "icon": "\uD83C\uDFE5", "text": "Bassett Medical Center ~20 min — academic/teaching hospital, not CAH" },
    { "icon": "\uD83D\uDD27", "text": "Barns and outbuildings confirmed — workshop potential" },
    { "icon": "\uD83C\uDFDE\uFE0F", "text": "Pond on property — recreation, livestock water" }
  ],
  "proximity": [
    { "icon": "\uD83D\uDED2", "label": "Cooperstown/Richfield Springs", "value": "~20 min", "ref": false },
    { "icon": "\uD83C\uDFE5", "label": "Bassett Medical Center, Cooperstown", "value": "~20 min", "ref": false },
    { "icon": "\uD83C\uDFD9\uFE0F", "label": "Oneonta", "value": "~30 min", "ref": false },
    { "icon": "\uD83C\uDFEB", "label": "Edmeston Central (~5/10)", "value": "verify district", "ref": false }
  ],
  "cardPros": [
    { "icon": "\u2713", "text": "72.49 acres with barns and pond — strong land package for homesteading" },
    { "icon": "\u2713", "text": "Otsego County is NY's premier hardwood timber region — James priority" },
    { "icon": "\u2713", "text": "Bassett Medical Center ~20 min — world-class for a rural hospital" },
    { "icon": "\u2713", "text": "Spray foam insulated 1850 farmhouse — owner invested in energy efficiency" },
    { "icon": "\u2713", "text": "4 bed / 2 full bath — meets family requirements" },
    { "icon": "\u2713", "text": "$449K for 72 acres is strong value" }
  ],
  "cardCons": [
    { "icon": "\u2717", "text": "Internet UNKNOWN — must call OEConnect to confirm before proceeding" },
    { "icon": "\u2717", "text": "NO FHA — Cash/Conventional only" },
    { "icon": "\u2717", "text": "1850 build — structural inspection mandatory despite spray foam" },
    { "icon": "\u2717", "text": "Stone + poured foundation — FHA would flag even if accepted" },
    { "icon": "\u2717", "text": "No central AC — propane/wood baseboard only" },
    { "icon": "\u2717", "text": "Burlington Flats is very rural — 20+ min to any real town" }
  ],
  "familyFit": [
    "72 acres of Otsego hardwood timber is James's sweet spot",
    "Bassett Medical Center proximity is a comfort factor for Theo and Sophie",
    "But internet MUST confirm before this property can be seriously considered"
  ],
  "verifyItems": [
    { "label": "INTERNET", "text": "CRITICAL — Call OEConnect to confirm broadband at 155 John Hill Rd" },
    { "label": "Structure", "text": "1850 build — structural engineer inspection" },
    { "label": "School District", "text": "Verify: Edmeston CSD, Cherry Valley-Springfield, or other?" },
    { "label": "Spray Foam", "text": "Was it applied over existing moisture issues? Infrared inspection." }
  ],
  "mustDo": [
    { "urgent": true, "text": "Call OEConnect — confirm broadband at 155 John Hill Rd, Burlington Flats 13315" },
    { "urgent": true, "text": "If internet PASS: structural inspection of 1850 foundation" },
    { "urgent": false, "text": "Confirm school district assignment" },
    { "urgent": false, "text": "Tax bill from Otsego County: (607) 547-4235" },
    { "urgent": false, "text": "Request video walkthrough — house + barns + pond + timber" }
  ],
  "envHazards": {
    "location": "Otsego County — Burlington Flats, rural hills",
    "pills": [
      { "level": "low", "text": "Flooding — upland location, no river valley" },
      { "level": "mod", "text": "Ice storms — upstate NY standard" },
      { "level": "low", "text": "Wildfire — minimal" }
    ],
    "note": "Otsego County uplands. Low hazard profile. Standard ice storm risk."
  }
}
```

**render.js region:** Add `'p96'` to `'NY — Otsego Co.'`

---

## render.js Region Updates

Add these IDs to the existing NY regions in `render.js`:

```javascript
{ name: 'NY — Washington Co.',    ids: ['p74','p79','p82'] },                    // unchanged
{ name: 'NY — St. Lawrence Co.', ids: ['p75','p77','p78','p83'] },              // unchanged
{ name: 'NY — Herkimer / Fulton', ids: ['p80','p81'] },                         // unchanged
{ name: 'NY — Jefferson / Lewis', ids: ['p76','p85'] },                         // unchanged
{ name: 'NY — Otsego Co.',       ids: ['p86','p87','p88','p96'] },              // +p96 Burlington Flats
{ name: 'NY — Clinton Co.',      ids: ['p90','p94'] },                          // +p94 Peru
{ name: 'NY — Schoharie Co.',    ids: ['p89','p95'] },                          // NEW region: p89 Gilboa + p95 Middleburgh
{ name: 'NY — Cortland / Other', ids: ['p84','p91','p92','p93'] },              // +p91 Tully, +p92 Rome, +p93 Groton
```

Note: This moves p89 (Gilboa) from `'NY — Cortland / Other'` to the new `'NY — Schoharie Co.'` region.

---

## Geocoding Notes

Coordinates used are approximate (zip centroid or nearby). For precise geocoding, Claude Code should run each address through:
`https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?address=ADDRESS&benchmark=Public_AR_Current&format=json`

Addresses to geocode:
1. 55 Clinton St, Tully, NY 13159
2. 4990 Heelpath Rd, Rome, NY 13440
3. 668 Sovocool Hill Rd, Groton, NY 13073
4. 223 Bear Swamp Rd, Peru, NY 12972
5. 1216 Clauverwie Rd, Middleburgh, NY 12122
6. 155 John Hill Rd, Burlington Flats, NY 13315
