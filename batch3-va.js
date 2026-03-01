// batch3-va.js — 17 Virginia property data objects (p55–p71)
module.exports = [
  // ── p55 — Cedar Bluff, VA (Tazewell County) — TOP PICK ──────────────
  {
    id: 'p55',
    num: 55,
    navLabel: 'Cedar Bluff',
    address: '299 Drews Ln',
    city: 'Cedar Bluff',
    state: 'VA',
    zip: '24609',
    county: 'Tazewell',
    price: 395000,
    beds: 6,
    bath: 3.5,
    sqft: '4,600',
    acres: '8.40',
    acresSub: 'mature trees, horses allowed',
    yearBuilt: 1971,
    type: 'Site-Built',
    typeBadge: 'b-sfr',
    status: 'Active',
    statusClass: 'status-active',
    statusNote: 'Reduced from $650K — 39% total cut',
    drive: '~29 hr',
    driveSub: 'cross-country from Farmington UT',
    toTown: '~15 min',
    toTownSub: 'to Richlands',
    tax: '$1,922/yr',
    taxRate: 0.0049,
    taxLabel: 'Tazewell Co. 0.49%',
    hoa: 0,
    image: 'https://www.trulia.com/pictures/thumbs_6/zillowstatic/fp/78fc71bf2dccc9a021df07e73803f755-full.webp',
    listingLink: 'https://www.trulia.com/home/299-drews-ln-cedar-bluff-va-24609',
    score: 78,
    scores: {
      price:        { val: 14, max: 15 },
      acreage:      { val: 14, max: 20 },
      privacy:      { val: 7,  max: 10 },
      outbuildings: { val: 12, max: 15 },
      town:         { val: 12, max: 15 },
      schools:      { val: 14, max: 15 },
      practical:    { val: 5,  max: 10 }
    },
    offerRange: '$300K – $340K',
    tableOfferNote: '39% reduction, $168K prior sale',
    offerRationale: [
      '39% reduction from $650K original — seller desperate after 4+ listing cycles',
      'Previous sale Jan 2024 at $168K — possible flip with 2.35x markup',
      '180+ DOM across multiple listings since 2021',
      '1971 build — 55 years old, major systems likely near end of life',
      'Bed/bath discrepancy between listing data (6/3.5) and description (5/2.5)'
    ],
    offerStrategy: 'Start at $300K citing 4+ listing cycles, $168K prior sale, 55-year-old systems, and 180+ DOM. Seller has been trying to sell since 2021. Require full systems inspection as contingency. Escalate to $330-340K if countered.',
    highlight: 'Best value in entire search at $86/sqft for 4,600 sqft. Best school package (Cedar Bluff Elem 8/10). Public sewer eliminates septic risk. Barn + storage building for immediate livestock. 39% price reduction signals highly motivated seller.',
    highlights: [
      { icon: '🏫', text: 'Cedar Bluff Elem 8/10 — best elementary in entire search' },
      { icon: '💰', text: '$86/sqft — cheapest per-sqft in entire search' },
      { icon: '🏚️', text: 'Barn + storage building for livestock/workshop' },
      { icon: '🌐', text: 'Point Broadband fiber ~83% Tazewell County coverage' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas Station',       value: '~10 mi' },
      { icon: '🛒', label: 'Richlands',          value: '~15 min' },
      { icon: '🏥', label: 'Clinch Valley Medical', value: '~15 min' },
      { icon: '🏫', label: 'Cedar Bluff Elem (8/10)', value: '~10 min' },
      { icon: '🏫', label: 'Richlands MS (7/10)', value: '~15 min' },
      { icon: '📍', label: 'Farmington UT',      value: '~29 hr drive', ref: true }
    ],
    pros: [
      '$86/sqft — cheapest per-sqft in entire search; 4,600 sqft for $395K',
      'Cedar Bluff Elem 8/10, Richlands MS 7/10, Richlands HS 6/10 — best school package',
      'Public sewer — no septic maintenance or failure risk',
      'Large barn + separate storage building for livestock/workshop',
      'Point Broadband fiber available in ~83% of Tazewell County',
      '8.4 acres with mature trees, paved road, horses allowed',
      'Attached 2-car garage + covered porch/patio',
      'Community: 100% walk alone at night, 100% holiday spirit',
      'Property tax only $1,922/yr — low burden',
      '39% price reduction from $650K — highly motivated seller'
    ],
    cons: [
      '1971 build — 55 years old; major systems likely near end of life',
      'Massive price drop ($650K to $395K) raises red flags about condition',
      '180+ DOM across 4+ listing/removal cycles since 2021',
      'Propane heating adds ongoing fuel cost',
      'Previous sale Jan 2024 at $168K — 2.35x markup suggests flip',
      'Bed/bath discrepancy — listing says 5/2.5 but data shows 6/3.5',
      'Split-level 3-story layout may not suit all preferences'
    ],
    familyFit: [
      'Best school ratings in search — 8/10 elem is exceptional for rural VA',
      '100% walk alone at night, 100% holiday spirit — safest community feel',
      'Barn ready for chickens/goats immediately — no building needed',
      '4,600 sqft means every kid gets own room with space to spare',
      'Richlands 15 min: grocery, hardware, medical'
    ],
    verifyBefore: [
      { title: 'Listing History', detail: 'Why listed/delisted 4+ times since 2021 — undisclosed structural issue?' },
      { title: 'Flip Quality', detail: '$168K purchase to $650K listing — were renovations done with permits?' },
      { title: 'Internet', detail: 'Point Broadband fiber covers ~83% of county — verify at THIS address (844-407-6468)' },
      { title: 'Systems Age', detail: '1971 electrical, plumbing, HVAC — all potentially near end of life' },
      { title: 'Hurricane Helene', detail: 'Tazewell County in SW VA — verify any 2024 storm damage' }
    ],
    mustDo: [
      '! Full home inspection — 1971 build, 55 years old',
      '! Verify internet at address — Point Broadband 844-407-6468',
      'County building permit verification for renovations',
      'Verify actual bed/bath count — listing discrepancy',
      'Roof age and condition assessment'
    ],
    envHazards: {
      location: 'Tazewell County, SW Virginia mountains',
      pills: [
        { level: 'mod',     text: 'Hurricane Helene 2024 — verify SW VA damage' },
        { level: 'low',     text: 'Wildfire — wooded mountain setting' },
        { level: 'low',     text: 'Winter storms — mountain elevation' },
        { level: 'special', text: 'Verify 4+ listing cycle history — undisclosed issues?' }
      ],
      note: 'SW Virginia mountain location. Tazewell County may have experienced some effects from Hurricane Helene. Verify property-specific damage and listing history before offer.'
    }
  },

  // ── p56 — Gate City, VA (Scott County) ───────────────────────────────
  {
    id: 'p56',
    num: 56,
    navLabel: 'Gate City',
    address: '2153 Daniel Boone Rd',
    city: 'Gate City',
    state: 'VA',
    zip: '24251',
    county: 'Scott',
    price: 400000,
    beds: 3,
    bath: 2.5,
    sqft: '1,950',
    acres: '48.00',
    acresSub: 'pasture, woods, creek, mountain views',
    yearBuilt: 1969,
    type: 'Site-Built',
    typeBadge: 'b-sfr',
    status: 'Active',
    statusClass: 'status-active',
    statusNote: 'Back on market — reduced $25K from $425K',
    drive: '~29 hr',
    driveSub: 'cross-country from Farmington UT',
    toTown: '~10 min',
    toTownSub: 'to Gate City',
    tax: '$1,377/yr',
    taxRate: 0.0034,
    taxLabel: 'Scott Co. 0.34%',
    hoa: 0,
    image: 'https://www.trulia.com/pictures/thumbs_6/zillowstatic/fp/1aaf57fe1073206bf7295b6046ac9012-full.webp',
    listingLink: 'https://www.trulia.com/home/2153-daniel-boone-rd-gate-city-va-24251',
    score: 77,
    scores: {
      price:        { val: 13, max: 15 },
      acreage:      { val: 20, max: 20 },
      privacy:      { val: 8,  max: 10 },
      outbuildings: { val: 12, max: 15 },
      town:         { val: 11, max: 15 },
      schools:      { val: 9,  max: 15 },
      practical:    { val: 4,  max: 10 }
    },
    offerRange: '$340K – $370K',
    tableOfferNote: '180+ DOM, back on market',
    offerRationale: [
      '$25K price reduction plus back-on-market status — buyer backed out',
      '180+ DOM — extended market time signals overpricing',
      'Only 3 bedrooms in 1969 build — limits buyer pool',
      '"Flood Zone" listed in topography — FEMA verification needed',
      '1969 build with carpet/vinyl throughout — needs updating'
    ],
    offerStrategy: 'Start at $340K citing 180+ DOM, flood zone concerns, 3-bedroom limitation, and 1969 age. Previous buyer backed out — leverage that uncertainty. Require flood zone verification as contingency. Settle around $360-370K.',
    highlight: '48 acres for $400K — best acreage value in entire search at $8,333/acre. Brick colonial with whole-house generator, barn, detached 2-car garage, Little Moccasin Creek access, and mountain views. The ultimate family homestead property.',
    highlights: [
      { icon: '🌾', text: '48 acres — best acreage in entire search ($8,333/acre)' },
      { icon: '🧱', text: 'Brick colonial with whole-house propane generator' },
      { icon: '🏞️', text: 'Little Moccasin Creek direct access — fishing, recreation' },
      { icon: '🏚️', text: 'Barn + detached 2-car garage + carport' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas Station',       value: '~5-8 mi' },
      { icon: '🛒', label: 'Gate City',          value: '~10 min' },
      { icon: '🏥', label: 'Norton Community Hospital', value: '~30 min' },
      { icon: '🏫', label: 'Shoemaker Elem (6/10)', value: '~10 min' },
      { icon: '🏫', label: 'Gate City HS (6/10)', value: '~10 min' },
      { icon: '📍', label: 'Farmington UT',      value: '~29 hr drive', ref: true }
    ],
    pros: [
      '48 acres with pasture, woods, creek — best acreage by far',
      'Brick construction — durable, low-maintenance exterior',
      'Whole-house propane generator — rural reliability solved',
      'Little Moccasin Creek direct access — fishing and recreation',
      'Barn + detached 2-car garage + carport — full outbuilding package',
      'Mountain views from large deck, two brick fireplaces',
      'Property tax only $1,377/yr — very affordable',
      '$25K reduction + back on market — negotiation opportunity'
    ],
    cons: [
      '1969 build — 57 years old; carpet/vinyl throughout',
      '180+ DOM — extended market time',
      'Only 3 bedrooms — may need 4th for growing family',
      '"Flood Zone" listed in topography — FEMA verification critical',
      'Basic kitchen — no dishwasher listed',
      'Septic system on 48 acres — verify condition',
      'Scott County schools 6/10 — adequate but not standout',
      'Cable listed but rural 48 acres may be at edge of service'
    ],
    familyFit: [
      '48 acres is the ultimate family playground — explore for years',
      'Creek for fishing, wading, nature exploration with kids',
      'Barn ready for chickens and goats immediately',
      'Mountain views from deck — family gathering spot',
      'Shoemaker Elem praised for working with special needs'
    ],
    verifyBefore: [
      { title: 'Flood Zone', detail: 'FEMA flood zone verification critical — flood insurance cost could be significant' },
      { title: 'Internet', detail: 'Cable listed but 48 rural acres may be at edge of service — verify at house' },
      { title: 'Previous Buyer', detail: 'Why did previous buyer back out — financing? inspection finding?' },
      { title: '3 Bedrooms', detail: 'Can den/basement legally convert to 4th bedroom?' },
      { title: 'Hurricane Helene', detail: 'SW VA location — verify any 2024 storm damage' }
    ],
    mustDo: [
      '! FEMA flood map verification — "Flood Zone" in listing',
      '! Internet verification at this remote 48-acre property',
      'Full home inspection — 1969 build',
      'Well water test and septic inspection',
      'Verify why previous buyer backed out'
    ],
    envHazards: {
      location: 'Scott County, SW Virginia mountains',
      pills: [
        { level: 'high',    text: 'Flood Zone listed in topography — FEMA verification critical' },
        { level: 'mod',     text: 'Hurricane Helene 2024 — verify SW VA damage' },
        { level: 'low',     text: 'Winter storms — mountain terrain' },
        { level: 'special', text: 'Creek flooding risk — Little Moccasin Creek on property' }
      ],
      note: 'Flood Zone designation in listing topography is a critical risk. FEMA flood map verification and flood insurance cost estimate required before any offer. Creek on property increases flooding exposure.'
    }
  },

  // ── p57 — Galax, VA (Carroll County) ─────────────────────────────────
  {
    id: 'p57',
    num: 57,
    navLabel: 'Galax',
    address: '619 Maplewood Dr',
    city: 'Galax',
    state: 'VA',
    zip: '24333',
    county: 'Carroll',
    price: 460900,
    beds: 3,
    bath: 3.5,
    sqft: '2,712',
    acres: '5.00',
    acresSub: 'wooded end-of-road privacy',
    yearBuilt: 2007,
    type: 'Site-Built',
    typeBadge: 'b-sfr',
    status: 'Active',
    statusClass: 'status-active',
    statusNote: '12+ price reductions from $485K — 80 DOM',
    drive: '~29 hr',
    driveSub: 'cross-country from Farmington UT',
    toTown: '~10 min',
    toTownSub: 'to Galax',
    tax: '$2,141/yr',
    taxRate: 0.0046,
    taxLabel: 'Carroll Co. 0.46%',
    hoa: 17,
    image: 'https://www.trulia.com/pictures/thumbs_6/zillowstatic/fp/853c2a4d66c44b7ae76c311179a48320-full.webp',
    listingLink: 'https://www.trulia.com/home/619-maplewood-dr-galax-va-24333',
    score: 74,
    scores: {
      price:        { val: 9,  max: 15 },
      acreage:      { val: 8,  max: 20 },
      privacy:      { val: 10, max: 10 },
      outbuildings: { val: 8,  max: 15 },
      town:         { val: 13, max: 15 },
      schools:      { val: 10, max: 15 },
      practical:    { val: 16, max: 10 }
    },
    offerRange: '$420K – $445K',
    tableOfferNote: '12+ reductions, prev sale $443K',
    offerRationale: [
      '12+ price reductions from $485K since Dec 2024 — seller losing patience',
      'Previous sale Nov 2023 at $443K — current ask above recent purchase',
      '80 DOM with continuous price drops',
      '$200/yr HOA for road maintenance',
      'Only 5 acres — meets minimum but no expansion room'
    ],
    offerStrategy: 'Start at $420K citing continuous price reductions, 80 DOM, and previous sale at $443K. Seller bought recently and is trying to profit — they may settle near breakeven. Escalate to $440-445K if countered.',
    highlight: 'Modern 2007 custom Cape Cod with HardiPlank + rock exterior — best construction quality in search. End-of-road privacy on 5 wooded acres with trails and fire pit. Zoned HVAC, hardwood floors, granite kitchen. Well-maintained with recent inspections.',
    highlights: [
      { icon: '🏠', text: '2007 custom Cape Cod — HardiPlank + rock, fire-resistant' },
      { icon: '🌲', text: 'End-of-road privacy on 5 wooded acres with trails' },
      { icon: '🔧', text: 'Zoned HVAC, gas lines inspected, HVAC serviced early 2025' },
      { icon: '🎵', text: 'Old Fiddlers Convention, Blue Ridge Music Center, New River Trail nearby' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas Station',       value: '~5-8 mi' },
      { icon: '🛒', label: 'Galax',              value: '~10 min' },
      { icon: '🏥', label: 'Twin County Regional', value: '~15 min' },
      { icon: '🏫', label: 'Oakland Elem (4/10)', value: '~10 min' },
      { icon: '🏫', label: 'Carroll Co HS (6/10)', value: '~15 min' },
      { icon: '📍', label: 'Farmington UT',      value: '~29 hr drive', ref: true }
    ],
    pros: [
      '2007 custom build — newest well-maintained home in group',
      'HardiPlank + rock exterior — fire-resistant, maintenance-free',
      'End-of-road privacy on 5 wooded acres with trails and fire pit',
      '2-car attached garage with extra space + cold storage',
      'Zoned HVAC (heat pump + propane), hardwood floors, granite kitchen',
      'Master suite on main with jet tub and walk-in shower',
      'Bonus room in finished basement — potential 4th bedroom',
      'In-ground dog fence, water filtration/softener system',
      'Gas lines inspected, HVAC serviced early 2025, monthly bug treatment'
    ],
    cons: [
      'Only 5.00 acres — meets minimum, no expansion room',
      '$460,900 highest price relative to acreage in VA group',
      '80 DOM with 12+ price reductions',
      'Carroll County HS 6/10; Oakland Elem only 4/10',
      'No dedicated workshop/shop building',
      'Well water + septic system',
      'Previous sale at $443K — seeking $18K profit in ~2 years',
      '$200/yr HOA for road maintenance'
    ],
    familyFit: [
      'End-of-road means kids play freely without traffic concerns',
      'Trails and fire pit on property for family outdoor time',
      'In-ground dog fence already installed for pets',
      'Old Fiddlers Convention and Blue Ridge Music Center nearby for culture'
    ],
    verifyBefore: [
      { title: 'Internet', detail: 'End-of-road location — verify broadband service at this specific address' },
      { title: 'School Options', detail: 'Oakland Elem only 4/10 — research magnet/charter alternatives' },
      { title: 'Well & Septic', detail: '2007 system ~19 years old — verify condition and capacity' },
      { title: 'Hurricane Helene', detail: 'Carroll County — verify any 2024 storm damage' }
    ],
    mustDo: [
      '! Internet verification — end-of-road location',
      'Well water test and flow rate',
      'Septic inspection — ~19 years old',
      'Private road winter maintenance assessment',
      'School zone verification — Oakland Elem 4/10 concern'
    ],
    envHazards: {
      location: 'Carroll County, Blue Ridge Highlands',
      pills: [
        { level: 'mod', text: 'Hurricane Helene 2024 — verify damage' },
        { level: 'low', text: 'Wildfire — wooded mountain setting' },
        { level: 'low', text: 'Winter storms — Blue Ridge elevation' },
        { level: 'low', text: 'Landslide — mountain terrain' }
      ],
      note: 'Blue Ridge Highland location with moderate weather exposure. Carroll County may have experienced effects from Hurricane Helene. Well-maintained 2007 build with HardiPlank reduces weather vulnerability.'
    }
  },

  // ── p58 — Hot Springs, VA (Bath County) ──────────────────────────────
  {
    id: 'p58',
    num: 58,
    navLabel: 'Hot Springs',
    address: '65 Cubbley Rd',
    city: 'Hot Springs',
    state: 'VA',
    zip: '24445',
    county: 'Bath',
    price: 429900,
    beds: 3,
    bath: 2.5,
    sqft: '2,655',
    acres: '7.34',
    acresSub: 'borders Nature Conservancy',
    yearBuilt: 1986,
    type: 'Site-Built',
    typeBadge: 'b-sfr',
    status: 'Active',
    statusClass: 'status-active',
    statusNote: 'Reduced from $439,900 — 141 DOM',
    drive: '~30 hr',
    driveSub: 'cross-country from Farmington UT',
    toTown: '~5 min',
    toTownSub: 'to Hot Springs',
    tax: '$2,066/yr',
    taxRate: 0.0048,
    taxLabel: 'Bath Co. 0.48%',
    hoa: 0,
    image: 'https://www.trulia.com/pictures/thumbs_6/zillowstatic/fp/e2a2783a4640cec4589ac1b4ce885be3-full.webp',
    listingLink: 'https://www.trulia.com/home/65-cubbley-rd-hot-springs-va-24445',
    score: 73,
    scores: {
      price:        { val: 10, max: 15 },
      acreage:      { val: 10, max: 20 },
      privacy:      { val: 8,  max: 10 },
      outbuildings: { val: 12, max: 15 },
      town:         { val: 10, max: 15 },
      schools:      { val: 11, max: 15 },
      practical:    { val: 12, max: 10 }
    },
    offerRange: '$380K – $410K',
    tableOfferNote: '141 DOM, price reduction',
    offerRationale: [
      '141 DOM — property sitting for nearly 5 months',
      'Price reduced from $439,900 — seller willing to negotiate',
      'Bath County very small/remote — limited buyer pool',
      '1986 build approaching 40 years — cedar siding condition unknown',
      'A-frame/cabin layout may have unusual room configurations'
    ],
    offerStrategy: 'Start at $380K citing 141 DOM, remote Bath County location, and 40-year-old build. Leverage limited buyer pool in this tiny market. Require cedar siding and systems inspection. Settle around $400-410K.',
    highlight: 'Fiber optic confirmed in listing. Public sewer AND water — rarest infrastructure combo in search. Three outbuildings including new 2023 detached garage. Borders Warm Springs Nature Conservancy for permanent privacy. Bath County HS 7/10.',
    highlights: [
      { icon: '🌐', text: 'Fiber Optic Available confirmed in listing' },
      { icon: '🚰', text: 'Public sewer AND water — no well/septic risks' },
      { icon: '🏚️', text: '3 outbuildings incl. new 2023 detached garage with electric' },
      { icon: '🌲', text: 'Borders Warm Springs Nature Conservancy — permanent privacy' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas Station',       value: '~5 min' },
      { icon: '🛒', label: 'Hot Springs',        value: '~5 min' },
      { icon: '🏥', label: 'Bath Community Hospital', value: '~3 mi' },
      { icon: '🏫', label: 'Bath Co HS (7/10)',  value: '~15 min' },
      { icon: '🏨', label: 'Homestead Resort',   value: '~5 min' },
      { icon: '📍', label: 'Farmington UT',      value: '~30 hr drive', ref: true }
    ],
    pros: [
      'Fiber Optic Available — critical for remote work',
      'Public sewer AND water — eliminates well/septic risks entirely',
      '3 outbuildings including new 2023 detached garage with electric',
      'Borders Nature Conservancy — permanent wilderness privacy',
      'Mountain views every direction, finished basement',
      'LG mini-splits installed Spring 2024 — efficient modern HVAC',
      'Bath County HS 7/10 with small personal classes (145-193 students)',
      'Two fireplaces (gas log + wood burning stove)',
      'Large fenced backyard, cedar wood siding'
    ],
    cons: [
      '1986 build — approaching 40 years old',
      'Only 3 bedrooms — may need 4th for growing family',
      '141 DOM with price reduction',
      'Bath County very small/remote — limited services',
      'A-frame/cabin layout may have unusual room configurations',
      'Cedar siding condition after 40 years unknown'
    ],
    familyFit: [
      'Bath County HS 7/10 with small classes — personal attention for kids',
      'Nature Conservancy border means permanent quiet neighbors',
      'Hospital only 3 miles away — closest medical access in VA group',
      'Fiber internet confirmed — supports remote work from day one'
    ],
    verifyBefore: [
      { title: 'Fiber Internet', detail: 'Listed as available — confirm actual service at THIS address, not just area' },
      { title: 'Cedar Siding', detail: '40 years of cedar — inspect for rot, insect damage, maintenance needs' },
      { title: 'Nature Conservancy Border', detail: 'Verify any restrictions on livestock, clearing, or land use near boundary' },
      { title: 'Basement Conversion', detail: 'Can basement legally convert to 4th bedroom?' },
      { title: 'Hurricane Helene', detail: 'Bath County — verify any 2024 storm damage' }
    ],
    mustDo: [
      '! Verify fiber internet at this specific address',
      '! Cedar siding condition inspection — 40 years old',
      'Nature Conservancy boundary restrictions check',
      'Basement 4th bedroom conversion feasibility',
      'Full home inspection — 1986 build'
    ],
    envHazards: {
      location: 'Bath County, Shenandoah Valley',
      pills: [
        { level: 'mod',     text: 'Hurricane Helene 2024 — verify damage' },
        { level: 'low',     text: 'Winter storms — mountain valley' },
        { level: 'low',     text: 'Wildfire — wooded mountain border' },
        { level: 'special', text: 'Nature Conservancy border — verify land use restrictions' }
      ],
      note: 'Shenandoah Valley location with moderate weather exposure. Public water and sewer provide infrastructure resilience. Nature Conservancy border may restrict some activities — verify before purchase.'
    }
  },

  // ── p59 — Hillsville, VA (Carroll County) ────────────────────────────
  {
    id: 'p59',
    num: 59,
    navLabel: 'Hillsville',
    address: '2875 Sylvatus Smith Rd',
    city: 'Hillsville',
    state: 'VA',
    zip: '24343',
    county: 'Carroll',
    price: 379000,
    beds: 3,
    bath: 1,
    sqft: '1,395',
    acres: '25.02',
    acresSub: 'fenced pastures, pole barn, corral',
    yearBuilt: 2007,
    type: 'Site-Built',
    typeBadge: 'b-sfr',
    status: 'Active',
    statusClass: 'status-active',
    statusNote: '$10K reduction — 104/164 cumulative DOM',
    drive: '~29 hr',
    driveSub: 'cross-country from Farmington UT',
    toTown: '~20 min',
    toTownSub: 'to Hillsville',
    tax: '$1,743/yr',
    taxRate: 0.0046,
    taxLabel: 'Carroll Co. 0.46%',
    hoa: 0,
    image: 'https://www.trulia.com/pictures/thumbs_6/zillowstatic/fp/de9601685e90cec720699d4d4c2a9765-full.webp',
    listingLink: 'https://www.trulia.com/home/2875-sylvatus-smith-rd-hillsville-va-24343',
    score: 72,
    scores: {
      price:        { val: 13, max: 15 },
      acreage:      { val: 18, max: 20 },
      privacy:      { val: 8,  max: 10 },
      outbuildings: { val: 10, max: 15 },
      town:         { val: 8,  max: 15 },
      schools:      { val: 9,  max: 15 },
      practical:    { val: 6,  max: 10 }
    },
    offerRange: '$320K – $350K',
    tableOfferNote: 'Only 1 bath, 164 cumulative DOM',
    offerRationale: [
      'Only 1 bathroom — critical limitation for any family',
      '164 cumulative DOM — property keeps cycling',
      '1,395 sqft cabin is small for the price',
      'Oil heating — expensive ongoing fuel cost ($3-5K/yr)',
      'Sylvatus extremely rural — internet likely satellite only'
    ],
    offerStrategy: 'Start at $320K citing single bathroom deal-breaker for most buyers, 164 cumulative DOM, oil heating costs, and internet limitations. The 1-bath issue severely limits the buyer pool — use this as primary leverage. Settle around $340-350K.',
    highlight: '25-acre mini farm with pole barn, corral, fenced pastures, and multiple water sources. Second historic farmhouse included for guests or rental income. Metal roof and new mini-split on 2007 cabin. Best farm-ready property in Virginia group.',
    highlights: [
      { icon: '🌾', text: '25 acres with pole barn, corral, fenced pastures — farm ready' },
      { icon: '💧', text: 'Multiple water sources: well, spring, winding creeks' },
      { icon: '🏠', text: 'Second historic farmhouse — guest house or rental potential' },
      { icon: '🔧', text: 'Metal roof, new mini-split system on 2007 cabin' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas Station',       value: '~15-18 mi' },
      { icon: '🛒', label: 'Hillsville',         value: '~20 min' },
      { icon: '🏥', label: 'Twin County Regional', value: '~25 min' },
      { icon: '🏫', label: 'Hillsville Elem (6/10)', value: '~20 min' },
      { icon: '🏫', label: 'Carroll Co HS (6/10)', value: '~20 min' },
      { icon: '📍', label: 'Farmington UT',      value: '~29 hr drive', ref: true }
    ],
    pros: [
      '25 acres with fenced pastures, pole barn, corral — immediate farming',
      'Multiple water sources: well, spring, winding creeks',
      'Second historic farmhouse — guest house/rental income potential',
      'Metal roof — long-lasting, low maintenance',
      'New mini-split system for efficient heating/cooling',
      '2007 primary cabin — relatively modern',
      'Stream frontage, horses allowed',
      '$379K strong value for 25 acres of farm-ready land'
    ],
    cons: [
      'Only 1 bathroom — CRITICAL limitation for family of 4+',
      '1,395 sqft cabin is small for a family',
      '104/164 cumulative DOM — keeps cycling on/off market',
      'Oil heating — expensive fuel ($3-5K/yr estimated)',
      'No garage — only pole barn for equipment',
      'Carroll County HS 6/10 — adequate not standout',
      'Sylvatus extremely rural — internet likely satellite only',
      'Private road maintenance required'
    ],
    familyFit: [
      '25 acres = ultimate homestead with pastures and barn ready for livestock',
      'Multiple water sources for self-sufficiency',
      'Second farmhouse provides guest quarters or future rental income',
      'Single bathroom is the critical family dealbreaker — renovation needed'
    ],
    verifyBefore: [
      { title: 'Single Bathroom', detail: 'Only 1 bath for entire home — can a 2nd bath be added? Plumbing feasibility and cost' },
      { title: 'Internet', detail: 'Sylvatus is extremely rural — satellite only likely. Verify Starlink or any ISP options' },
      { title: 'Historic Farmhouse', detail: 'Condition of second dwelling — habitable or needs major work?' },
      { title: 'Septic Capacity', detail: 'Can septic handle 2 dwellings? Verify system condition' },
      { title: 'Oil Tank', detail: 'Oil heating tank condition and annual fuel cost estimate' }
    ],
    mustDo: [
      '! Bathroom expansion feasibility — only 1 bath is dealbreaker',
      '! Internet verification — Sylvatus extremely rural',
      'Historic farmhouse structural inspection',
      'Oil tank inspection and annual heating cost estimate',
      'Septic capacity for 2 dwellings'
    ],
    envHazards: {
      location: 'Carroll County (Sylvatus), Blue Ridge Highlands',
      pills: [
        { level: 'mod', text: 'Hurricane Helene 2024 — verify damage' },
        { level: 'mod', text: 'Flooding — multiple creeks and spring on property' },
        { level: 'low', text: 'Wildfire — mountain terrain with forest' },
        { level: 'low', text: 'Winter storms — rural mountain road' }
      ],
      note: 'Rural mountain location in Carroll County. Multiple water sources on property increase flood exposure during heavy rain events. Private road access may be challenging in winter weather.'
    }
  },

  // ── p60 — Hardy, VA (Franklin County) ──────────────────────────────
  {
    id: 'p60',
    num: 60,
    navLabel: 'Hardy',
    address: '5930 Edwardsville Rd',
    city: 'Hardy',
    state: 'VA',
    zip: '24101',
    county: 'Franklin',
    price: 439900,
    beds: 4,
    bath: 1.5,
    sqft: '2,174',
    acres: '10.72',
    acresSub: 'secluded farmhouse acreage',
    yearBuilt: 1923,
    type: 'Site-Built',
    typeBadge: 'b-sfr',
    status: 'Active',
    statusClass: 'status-active',
    statusNote: 'Reduced from $449,750',
    drive: '~29 hr',
    driveSub: 'cross-country from Farmington UT',
    toTown: '~15 min',
    toTownSub: 'to Rocky Mount',
    tax: '$1,206/yr',
    taxRate: 0.0027,
    taxLabel: 'Franklin Co. 0.27%',
    hoa: 0,
    image: 'https://www.trulia.com/pictures/thumbs_5/zillowstatic/fp/68a9fdff85cd5bbd1222cd24b5aeb897-full.webp',
    listingLink: 'https://www.trulia.com/home/5930-edwardsville-rd-hardy-va-24101',
    score: 71,
    scores: {
      price:        { val: 10, max: 15 },
      acreage:      { val: 12, max: 20 },
      privacy:      { val: 8,  max: 10 },
      outbuildings: { val: 10, max: 15 },
      town:         { val: 12, max: 15 },
      schools:      { val: 11, max: 15 },
      practical:    { val: 8,  max: 10 }
    },
    offerRange: '$370K – $400K',
    tableOfferNote: 'Sold for $46K in 2015',
    offerRationale: [
      'Sold for $46K in 2015 — massive appreciation raises questions',
      '1923 original build — 103 years old despite renovations',
      'Only 1.5 bathrooms for 4 bedrooms — needs upgrade',
      'Franklin County HS only 4/10',
      'Vinyl siding over unknown 1923 structure — what is underneath?'
    ],
    offerStrategy: 'Start at $370K citing 1923 bones under renovations, $46K prior sale in 2015, and 1.5 bath limitation. Require structural inspection of original framing. Settle around $390-400K.',
    highlight: 'Former one-room schoolhouse on 10.7 secluded acres with grid-tied solar (2022). Recent upgrades: HVAC 2023, mini-split 2022, well 2024, septic 2023. Near Roanoke (~30 min) and Smith Mountain Lake (~20 min). Oversized 2-car detached garage.',
    highlights: [
      { icon: '☀️', text: 'Grid-tied solar system (2022) — reduces electric bills' },
      { icon: '🔧', text: 'Recent upgrades: HVAC 2023, mini-split 2022, well 2024, septic 2023' },
      { icon: '🏚️', text: 'Oversized 2-car detached garage with covered breezeway' },
      { icon: '🏙️', text: 'Roanoke ~30 min, Smith Mountain Lake ~20 min' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas Station',       value: '~10 mi' },
      { icon: '🛒', label: 'Rocky Mount',        value: '~15 min' },
      { icon: '🏥', label: 'Carilion Franklin',  value: '~20 min' },
      { icon: '🏫', label: 'Windy Gap Elem (7/10)', value: '~10 min' },
      { icon: '🏙️', label: 'Roanoke',            value: '~30 min' },
      { icon: '📍', label: 'Farmington UT',      value: '~29 hr drive', ref: true }
    ],
    pros: [
      '10.72 secluded acres with paved road access',
      'Grid-tied solar system (2022) — ongoing energy savings',
      'Recent upgrades: HVAC 2023, mini-split 2022, well 2024, septic 2023',
      'Oversized 2-car detached garage with covered breezeway',
      'Newer roof — reduced maintenance',
      '4 bedrooms + office space',
      'Windy Gap Elementary 7/10 — solid elementary option',
      'Horses allowed on property',
      'Near Roanoke (~30 min) and Smith Mountain Lake (~20 min)'
    ],
    cons: [
      '1923 original build — 103 years old despite renovations',
      'Only 1.5 bathrooms for 4 bedrooms — needs upgrade',
      'Franklin County HS only 4/10',
      'Sold for $46K in 2015 — raises condition concerns',
      'Vinyl siding over unknown 1923 structure',
      'Electric listed as "0 Phase" — verify capacity',
      'Rapid price appreciation history looks speculative'
    ],
    familyFit: [
      'Windy Gap Elem 7/10 provides good elementary option',
      'Roanoke 30 min for shopping, dining, and medical',
      'Smith Mountain Lake 20 min for family recreation',
      'Solar system reduces ongoing utility costs for budget'
    ],
    verifyBefore: [
      { title: '1923 Structure', detail: 'Original framing, foundation, and structural integrity under vinyl siding' },
      { title: 'Solar System', detail: 'Specs, warranty, inverter age, actual energy production vs claims' },
      { title: 'Prior Sale', detail: 'Why sold for $46K in 2015 — major issues at that time?' },
      { title: 'Electrical', detail: '"0 Phase" electric listed — what does this mean? Verify capacity' },
      { title: 'Hurricane Helene', detail: 'Franklin County — verify any 2024 storm damage' }
    ],
    mustDo: [
      '! Structural inspection of 1923 framing under vinyl siding',
      '! Verify electrical capacity — "0 Phase" concerning',
      'Solar system production verification',
      'County building permits for renovations',
      'Why sold for $46K in 2015'
    ],
    envHazards: {
      location: 'Franklin County, Roanoke corridor',
      pills: [
        { level: 'mod',     text: 'Hurricane Helene 2024 — verify damage' },
        { level: 'mod',     text: 'Structural risk — 1923 build under renovations' },
        { level: 'low',     text: 'Wildfire — wooded rural setting' },
        { level: 'special', text: 'Verify $46K (2015) to $440K — flip quality concerns' }
      ],
      note: 'Original 1923 construction is the primary structural risk. Despite recent system upgrades, the underlying 103-year-old structure needs thorough inspection.'
    }
  },

  // ── p61 — Dugspur, VA (Carroll County) ───────────────────────────────
  {
    id: 'p61',
    num: 61,
    navLabel: 'Dugspur',
    address: '147 Journey Ln',
    city: 'Dugspur',
    state: 'VA',
    zip: '24325',
    county: 'Carroll',
    price: 375000,
    beds: 3,
    bath: 2.5,
    sqft: '2,338',
    acres: '6.32',
    acresSub: 'mountain stream through property',
    yearBuilt: 2016,
    type: 'Site-Built',
    typeBadge: 'b-sfr',
    status: 'Active',
    statusClass: 'status-active',
    statusNote: '38 DOM — fresh listing',
    drive: '~29 hr',
    driveSub: 'cross-country from Farmington UT',
    toTown: '~25 min',
    toTownSub: 'to Hillsville',
    tax: '$1,386/yr',
    taxRate: 0.0037,
    taxLabel: 'Carroll Co. 0.37%',
    hoa: 0,
    image: 'https://www.trulia.com/pictures/thumbs_6/zillowstatic/fp/8b54f29213b11983ce9274043feb1526-full.webp',
    listingLink: 'https://www.trulia.com/home/147-journey-ln-dugspur-va-24325',
    score: 68,
    scores: {
      price:        { val: 13, max: 15 },
      acreage:      { val: 10, max: 20 },
      privacy:      { val: 9,  max: 10 },
      outbuildings: { val: 3,  max: 15 },
      town:         { val: 9,  max: 15 },
      schools:      { val: 9,  max: 15 },
      practical:    { val: 15, max: 10 }
    },
    offerRange: '$340K – $360K',
    tableOfferNote: '38 DOM, no outbuildings',
    offerRationale: [
      'NO outbuildings, garage, or covered parking — major gap requiring $20-40K investment',
      'Unimproved road surface — winter/rain access concerns',
      'Mountain stream through property = flood risk',
      '25 min to Hillsville — furthest from town in group',
      'Block foundation on mountain terrain — verify stability'
    ],
    offerStrategy: 'Start at $340K citing zero outbuildings (need $20-40K for shop/garage), unimproved road access, and stream flood risk. Fresh listing at 38 DOM means less leverage, but the outbuilding gap is a real cost. Settle around $350-360K.',
    highlight: 'Modern 2016 build with whole-house Generac generator, encapsulated crawlspace, and water filter system. Mountain stream runs through 6.3 acres. Affordable at $375K but needs outbuilding investment. Youngest non-new-construction home in Virginia group.',
    highlights: [
      { icon: '💧', text: 'Mountain stream runs through property — natural beauty' },
      { icon: '⚡', text: 'Whole-house Generac generator — rural power reliability' },
      { icon: '🏠', text: '2016 build — only 10 years old, modern construction' },
      { icon: '🛡️', text: 'Encapsulated crawlspace with dehumidifier + water filter' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas Station',       value: '~18-20 mi' },
      { icon: '🛒', label: 'Hillsville',         value: '~25 min' },
      { icon: '🏥', label: 'Twin County Regional', value: '~30 min' },
      { icon: '🏫', label: 'Carroll Co HS (6/10)', value: '~25 min' },
      { icon: '🏫', label: 'Hillsville Elem (6/10)', value: '~20 min' },
      { icon: '📍', label: 'Farmington UT',      value: '~29 hr drive', ref: true }
    ],
    pros: [
      '2016 build — only 10 years old, modern construction',
      'Whole-house Generac generator — power reliability',
      'Encapsulated crawlspace with dehumidifier — moisture protection',
      'Water filter system installed',
      'Mountain stream through property — natural beauty',
      '2,338 sqft with insulated windows',
      'Horses allowed, fenced property with wood fencing',
      '$375K affordable price point'
    ],
    cons: [
      'NO outbuildings, garage, or covered parking at all — major gap',
      'Unimproved road surface — winter/rain access concerns',
      'Stream through property = potential flood risk',
      'Carroll County HS 6/10 — adequate not standout',
      '25 min to Hillsville — furthest from town in group',
      '38 DOM — fresh listing means less negotiation leverage',
      'Block foundation on mountain terrain — verify stability',
      'Need $20-40K budget for shop/garage construction'
    ],
    familyFit: [
      'Mountain stream provides natural play area for kids',
      'Modern 2016 build means fewer maintenance surprises',
      'Generator ensures power reliability in rural mountain setting',
      'Must budget $20-40K for outbuilding — no existing shop or garage'
    ],
    verifyBefore: [
      { title: 'Flood Zone', detail: 'Stream through property — verify FEMA flood zone status' },
      { title: 'Internet', detail: 'Dugspur is extremely rural — verify any broadband options' },
      { title: 'Road Access', detail: 'Unimproved road — how is it in winter/heavy rain?' },
      { title: 'Outbuilding Budget', detail: 'Zero covered parking/shop — estimate $20-40K for garage/shop construction' },
      { title: 'Hurricane Helene', detail: 'Carroll County — verify any 2024 storm damage' }
    ],
    mustDo: [
      '! Flood zone verification — stream through property',
      '! Internet verification — extremely rural Dugspur',
      'Road condition assessment in winter',
      'Budget planning for outbuilding construction ($20-40K)',
      'Block foundation stability inspection'
    ],
    envHazards: {
      location: 'Carroll County (Dugspur), Blue Ridge Highlands',
      pills: [
        { level: 'high', text: 'Stream flooding — water runs through property' },
        { level: 'mod',  text: 'Hurricane Helene 2024 — verify damage' },
        { level: 'mod',  text: 'Road access — unimproved surface, winter concerns' },
        { level: 'low',  text: 'Wildfire — mountain terrain' }
      ],
      note: 'Stream running through property is the primary flood risk. Unimproved road access may be problematic in winter weather. FEMA flood zone verification essential before offer.'
    }
  },

  // ── p62 — Cleveland, VA (Russell County) ─────────────────────────────
  {
    id: 'p62',
    num: 62,
    navLabel: 'Cleveland',
    address: '630 Artrip Rd',
    city: 'Cleveland',
    state: 'VA',
    zip: '24225',
    county: 'Russell',
    price: 439000,
    beds: 4,
    bath: 2,
    sqft: '1,596',
    acres: '11.55',
    acresSub: '1,200 yards Clinch River frontage',
    yearBuilt: 1930,
    type: 'Site-Built',
    typeBadge: 'b-sfr',
    status: 'Active',
    statusClass: 'status-active',
    statusNote: 'Sold $35K (2023), now $439K — 165 DOM',
    drive: '~29 hr',
    driveSub: 'cross-country from Farmington UT',
    toTown: '~15 min',
    toTownSub: 'to Lebanon',
    tax: '$1,537/yr',
    taxRate: 0.0035,
    taxLabel: 'Russell Co. 0.35%',
    hoa: 0,
    image: 'https://www.trulia.com/pictures/thumbs_6/zillowstatic/fp/25beac0813fa8088951da302d5a5edde-full.webp',
    listingLink: 'https://www.trulia.com/home/630-artrip-rd-cleveland-va-24225',
    score: 67,
    scores: {
      price:        { val: 9,  max: 15 },
      acreage:      { val: 13, max: 20 },
      privacy:      { val: 8,  max: 10 },
      outbuildings: { val: 10, max: 15 },
      town:         { val: 11, max: 15 },
      schools:      { val: 8,  max: 15 },
      practical:    { val: 8,  max: 10 }
    },
    offerRange: '$340K – $380K',
    tableOfferNote: '$35K\u2192$439K flip, 165 DOM',
    offerRationale: [
      '$35K purchase in April 2023, now listed at $439K — 12.5x markup is extreme',
      '165 DOM — property not moving at this price',
      '1930 build — 96 years old despite renovations',
      'Only 1,596 sqft for 4 bedrooms — very tight',
      '$275/sqft premium for a 1930 farmhouse is questionable'
    ],
    offerStrategy: 'Start at $340K citing $35K purchase price, 12.5x markup, 165 DOM, and 96-year-old structure. This is clearly a flip — demand to see all permits and inspection reports. Settle around $370-380K.',
    highlight: '1,200 yards of Clinch River frontage — one of the most biodiverse river ecosystems in the US. Brand new kitchen with quartz, both bathrooms remodeled, new metal roof and windows. Multiple parcels with tiny home hookup. Belfast Elk Garden Elem 8/10.',
    highlights: [
      { icon: '🏞️', text: '1,200 yards Clinch River frontage — extraordinary water access' },
      { icon: '🔧', text: 'Brand new kitchen (quartz), both baths remodeled, new metal roof' },
      { icon: '🏫', text: 'Belfast Elk Garden Elem 8/10 — strong elementary' },
      { icon: '🏠', text: 'Multiple parcels + tiny home hookup for guest income' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas Station',       value: '~10 mi' },
      { icon: '🛒', label: 'Lebanon',            value: '~15 min' },
      { icon: '🏥', label: 'Russell Co Medical', value: '~15 min' },
      { icon: '🏫', label: 'Belfast Elk Garden Elem (8/10)', value: '~15 min' },
      { icon: '🏫', label: 'Lebanon HS (3/10)',  value: '~15 min' },
      { icon: '📍', label: 'Farmington UT',      value: '~29 hr drive', ref: true }
    ],
    pros: [
      '1,200 yards Clinch River frontage — extraordinary water access',
      'Clinch River is one of most biodiverse river ecosystems in US',
      'Brand new kitchen with quartz, both bathrooms completely remodeled',
      'New metal roof, updated electrical, new windows',
      'Multiple parcels with tiny home/trailer hookup for guest income',
      'Several outbuildings + original barn',
      'Belfast Elk Garden Elem 8/10',
      'Property tax currently very low ($156/yr on old assessment)'
    ],
    cons: [
      '1930 build — 96 years old despite renovations',
      '$35K to $439K in 2.5 years — 12.5x markup is extreme flip',
      '165 DOM — overpriced for market',
      'Only 1,596 sqft for 4 bedrooms — very tight',
      '$275/sqft premium for 1930 farmhouse',
      'Lebanon HS only 3/10; Lebanon Elem 2/10',
      'HVAC type unspecified — may need full system',
      'No natural gas available'
    ],
    familyFit: [
      'Clinch River provides fishing, wading, nature education for kids',
      'Belfast Elk Garden Elem 8/10 is excellent for elementary years',
      'Lebanon HS 3/10 is a serious concern for high school years',
      'Multiple parcels offer long-term flexibility'
    ],
    verifyBefore: [
      { title: 'Flip Quality', detail: '$35K to $439K — demand all permits, inspection reports, and renovation receipts' },
      { title: 'Flood Risk', detail: '1,200 yards river frontage — FEMA flood zone verification critical' },
      { title: 'HVAC', detail: 'Heating/cooling type unspecified — may need full HVAC installation' },
      { title: 'Structure', detail: '1930 build — inspect original framing, foundation, load-bearing walls' },
      { title: 'Internet', detail: 'Rural Russell County — verify broadband options' }
    ],
    mustDo: [
      '! FEMA flood zone verification — 1,200 yards river frontage',
      '! Renovation permit verification — $35K to $439K flip',
      'Full structural inspection of 1930 framing',
      'HVAC system assessment — type not listed',
      'Well water test and septic inspection'
    ],
    envHazards: {
      location: 'Russell County, SW Virginia mountains',
      pills: [
        { level: 'high',    text: 'Flood risk — 1,200 yards Clinch River frontage' },
        { level: 'mod',     text: 'Hurricane Helene 2024 — verify SW VA damage' },
        { level: 'mod',     text: 'Structural risk — 1930 build, 96 years old' },
        { level: 'special', text: 'Verify all flip renovation permits and quality' }
      ],
      note: 'Clinch River frontage is both the greatest asset and greatest risk. FEMA flood zone verification is critical. The 12.5x price markup from $35K purchase demands thorough permit and quality verification.'
    }
  },

  // ── p63 — Meadows of Dan, VA (Patrick County) ───────────────────────
  {
    id: 'p63',
    num: 63,
    navLabel: 'Meadows of Dan',
    address: '217 Alpine Ridge Ln',
    city: 'Meadows of Dan',
    state: 'VA',
    zip: '24120',
    county: 'Patrick',
    price: 449000,
    beds: 4,
    bath: 3,
    sqft: '1,860',
    acres: '8.80',
    acresSub: 'panoramic Blue Ridge mountain views',
    yearBuilt: 1999,
    type: 'Site-Built',
    typeBadge: 'b-sfr',
    status: 'Active',
    statusClass: 'status-active',
    statusNote: '169 DOM — only 3.4% reduction',
    drive: '~29 hr',
    driveSub: 'cross-country from Farmington UT',
    toTown: '~5 min',
    toTownSub: 'to Meadows of Dan',
    tax: '$1,994/yr',
    taxRate: 0.0044,
    taxLabel: 'Patrick Co. 0.44%',
    hoa: 0,
    image: 'https://www.trulia.com/pictures/thumbs_6/zillowstatic/fp/36464e0b29eccb0a1fd9ff9cef717eeb-full.webp',
    listingLink: 'https://www.trulia.com/home/217-alpine-ridge-ln-meadows-of-dan-va-24120',
    score: 66,
    scores: {
      price:        { val: 10, max: 15 },
      acreage:      { val: 11, max: 20 },
      privacy:      { val: 9,  max: 10 },
      outbuildings: { val: 2,  max: 15 },
      town:         { val: 8,  max: 15 },
      schools:      { val: 13, max: 15 },
      practical:    { val: 13, max: 10 }
    },
    offerRange: '$380K – $410K',
    tableOfferNote: '169 DOM, no outbuildings/garage',
    offerRationale: [
      '169 DOM — nearly 6 months on market',
      'NO outbuildings, NO garage, NO covered parking — biggest gap in search',
      '$449K with zero shop/garage requires $30-50K additional investment',
      'Meadows of Dan extremely small — minimal services',
      'Only 3.4% price reduction — seller not aggressive on price'
    ],
    offerStrategy: 'Start at $380K citing 169 DOM, zero outbuildings (need $30-50K for garage+shop), and remote location. Seller has been patient but 6 months without a sale should create willingness. Settle around $400-410K.',
    highlight: 'Panoramic Blue Ridge mountain views every direction. Just off Blue Ridge Parkway, 1 mile from Chateau Morisette Winery. Full home generator with auto trigger. Patrick County HS 8/10 — best high school rating in entire search. Brick construction, 4 bed/3 bath.',
    highlights: [
      { icon: '🏔️', text: 'Panoramic Blue Ridge mountain views every direction' },
      { icon: '🏫', text: 'Patrick County HS 8/10 — best high school in entire search' },
      { icon: '⚡', text: 'Full home generator with auto trigger' },
      { icon: '🍷', text: '1 mile from Chateau Morisette, near Blue Ridge Parkway' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas Station',       value: '~5 min' },
      { icon: '🛒', label: 'Meadows of Dan',     value: '~5 min' },
      { icon: '🏥', label: 'Pioneer Hospital',   value: '~30 min' },
      { icon: '🏫', label: 'Patrick Co HS (8/10)', value: '~25 min' },
      { icon: '🛣️', label: 'Blue Ridge Parkway', value: '~1 mi' },
      { icon: '📍', label: 'Farmington UT',      value: '~29 hr drive', ref: true }
    ],
    pros: [
      'Panoramic Blue Ridge mountain views every direction',
      'Full home generator with auto trigger — power reliability',
      'Patrick County HS 8/10 — best high school in entire search',
      'Near Blue Ridge Parkway, Chateau Morisette, Mabry Mill',
      'Brick construction — durable, low maintenance',
      '1999 build — solid 27-year-old construction',
      '4 bed/3 bath — best bathroom ratio in VA group',
      'Gas fireplace, spa bath, open floor plan, hardwood floors'
    ],
    cons: [
      'NO outbuildings, NO garage, NO covered parking — biggest gap',
      '169 DOM — nearly 6 months on market',
      '$449K for zero shop/garage — need $30-50K for outbuildings',
      'Meadows of Dan extremely small — minimal services',
      'Pioneer Hospital ~30 min — furthest medical access',
      '1,860 sqft adequate but not spacious',
      'Septic system on mountain terrain',
      'Only 3.4% price reduction — seller not motivated on price'
    ],
    familyFit: [
      'Patrick County HS 8/10 is the best high school for the kids',
      'Blue Ridge Parkway and winery area offers family recreation',
      'Mountain views daily improve quality of life',
      'Must budget $30-50K for garage and shop — no existing outbuildings'
    ],
    verifyBefore: [
      { title: 'Outbuilding Budget', detail: 'Zero garage/shop/parking — estimate $30-50K for construction' },
      { title: 'Internet', detail: 'Blue Ridge elevation — internet extremely uncertain at this location' },
      { title: 'Healthcare', detail: 'Pioneer Hospital ~30 min — nearest medical facility' },
      { title: 'Septic & Well', detail: 'Mountain elevation affects well depth and septic function' },
      { title: 'Hurricane Helene', detail: 'Patrick County — verify any 2024 storm damage' }
    ],
    mustDo: [
      '! Internet verification — Blue Ridge elevation, extremely uncertain',
      '! Budget planning for outbuilding construction ($30-50K)',
      'Well and septic assessment at elevation',
      'Healthcare accessibility evaluation — 30+ min to hospital',
      'Road condition in winter weather'
    ],
    envHazards: {
      location: 'Patrick County, Blue Ridge Parkway area',
      pills: [
        { level: 'mod', text: 'Hurricane Helene 2024 — verify damage' },
        { level: 'mod', text: 'Winter storms — Blue Ridge elevation' },
        { level: 'low', text: 'Wildfire — mountain terrain' },
        { level: 'low', text: 'Landslide — elevated terrain' }
      ],
      note: 'Blue Ridge Parkway elevation means exposure to winter storms and potential ice. Mountain terrain affects well depth and septic function. Verify internet connectivity at this elevation.'
    }
  },

  // ── p64 — Saxe, VA (Charlotte County) ────────────────────────────────
  {
    id: 'p64',
    num: 64,
    navLabel: 'Saxe',
    address: '300 Sondra Ln',
    city: 'Saxe',
    state: 'VA',
    zip: '23967',
    county: 'Charlotte',
    price: 365000,
    beds: 3,
    bath: 2.5,
    sqft: '2,200',
    acres: '13.44',
    acresSub: 'guest cottage + storage buildings',
    yearBuilt: 2014,
    type: 'Site-Built',
    typeBadge: 'b-sfr',
    status: 'Active',
    statusClass: 'status-active',
    statusNote: '180+ DOM — $10K reduction',
    drive: '~30 hr',
    driveSub: 'cross-country from Farmington UT',
    toTown: '~15 min',
    toTownSub: 'to Chase City',
    tax: '$1,022/yr',
    taxRate: 0.0028,
    taxLabel: 'Charlotte Co. 0.28%',
    hoa: 0,
    image: 'https://www.trulia.com/pictures/thumbs_6/zillowstatic/fp/b185a48ea0194f8548dc7bc340985f17-full.webp',
    listingLink: 'https://www.trulia.com/home/300-sondra-ln-saxe-va-23967',
    score: 65,
    scores: {
      price:        { val: 14, max: 15 },
      acreage:      { val: 13, max: 20 },
      privacy:      { val: 7,  max: 10 },
      outbuildings: { val: 9,  max: 15 },
      town:         { val: 9,  max: 15 },
      schools:      { val: 8,  max: 15 },
      practical:    { val: 5,  max: 10 }
    },
    offerRange: '$310K – $340K',
    tableOfferNote: '180+ DOM, flat Piedmont',
    offerRationale: [
      '180+ DOM — property has been sitting for 6+ months',
      'Piedmont VA — flat terrain, not mountain setting family prefers',
      'Charlotte County remote with limited services',
      'Randolph-Henry HS only 3/10 — poor high school',
      'No garage or workshop building despite storage buildings'
    ],
    offerStrategy: 'Start at $310K citing 180+ DOM, Piedmont location (not mountain), limited services, and 3/10 high school. The long market time gives strong leverage. Settle around $330-340K.',
    highlight: 'Private country estate on 13+ acres with guest cottage and Generac whole-house generator. Lowest site-built price at $365K with 2014 construction. Metal roof, central heat/AC, Bacon District Elem 8/10. Multiple storage buildings included.',
    highlights: [
      { icon: '🏠', text: 'Guest cottage with bath — rental income or guest quarters' },
      { icon: '⚡', text: 'Generac whole-house generator installed' },
      { icon: '💰', text: '$365K lowest site-built price with 2014 build' },
      { icon: '🏫', text: 'Bacon District Elem 8/10 — strong elementary' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas Station',       value: '~10-12 mi' },
      { icon: '🛒', label: 'Chase City',         value: '~15 min' },
      { icon: '🏥', label: 'Centra Southside',   value: '~35 min' },
      { icon: '🏫', label: 'Bacon District Elem (8/10)', value: '~15 min' },
      { icon: '🏫', label: 'Randolph-Henry HS (3/10)', value: '~15 min' },
      { icon: '📍', label: 'Farmington UT',      value: '~30 hr drive', ref: true }
    ],
    pros: [
      '13.44 acres well above minimum acreage threshold',
      'Guest cottage with bath — rental income or guest housing',
      'Generac whole-house generator — power reliability',
      '2014 build with metal roof — only 12 years old',
      '2,200 sqft one-level ranch — easy living',
      'Central heat/AC heat pump with thermal windows',
      '$365K — lowest site-built price in entire search',
      'Bacon District Elem 8/10 — strong elementary',
      'Multiple storage buildings included'
    ],
    cons: [
      '180+ DOM — sitting on market 6+ months',
      'Piedmont VA — flat terrain, not mountain setting',
      'Charlotte County remote with limited services',
      'Randolph-Henry HS only 3/10 — poor high school',
      'More open than wooded — less forest privacy',
      'No garage or dedicated workshop building',
      'Saxe very small community — population minimal',
      '~30 hr drive — furthest driving tier'
    ],
    familyFit: [
      'Guest cottage provides space for visiting family or rental income',
      'Bacon District Elem 8/10 good for elementary years',
      'Randolph-Henry HS 3/10 is a serious concern for high school',
      'Flat Piedmont terrain — less mountain character family prefers'
    ],
    verifyBefore: [
      { title: 'Internet', detail: 'Charlotte County rural Piedmont — verify broadband options' },
      { title: 'Why 180+ DOM', detail: 'What is deterring buyers at this price point?' },
      { title: 'Guest Cottage', detail: 'Condition, systems, and septic connection status' },
      { title: 'Storage Buildings', detail: 'Structural condition and usability for workshop/shop' },
      { title: 'Hurricane Helene', detail: 'Charlotte County — verify any 2024 storm effects' }
    ],
    mustDo: [
      '! Internet verification — rural Piedmont location',
      'Guest cottage condition inspection',
      'Storage building structural assessment',
      'Well water test and septic inspection',
      'School district verification — HS 3/10 concern'
    ],
    envHazards: {
      location: 'Charlotte County, Virginia Piedmont',
      pills: [
        { level: 'low', text: 'Hurricane/tropical storms — Piedmont exposure' },
        { level: 'low', text: 'Drought — Piedmont agricultural area' },
        { level: 'low', text: 'Winter storms — moderate' },
        { level: 'special', text: '180+ DOM — investigate why property not selling' }
      ],
      note: 'Piedmont location has lower environmental risk than mountain properties but also lacks the mountain character. Charlotte County is relatively flat with moderate weather exposure.'
    }
  },

  // ── p65 — Louisa, VA (Fluvanna County) ─────────────────────────────
  {
    id: 'p65',
    num: 65,
    navLabel: 'Louisa',
    address: '2019 Bybee Rd',
    city: 'Louisa',
    state: 'VA',
    zip: '23093',
    county: 'Fluvanna',
    price: 479000,
    beds: 3,
    bath: 2,
    sqft: '1,344',
    acres: '10.06',
    acresSub: 'trails, garden, koi pond, putting green',
    yearBuilt: 2007,
    type: 'Site-Built',
    typeBadge: 'b-sfr',
    status: 'Active',
    statusClass: 'status-active',
    statusNote: '25 DOM — fresh listing',
    drive: '~31 hr',
    driveSub: 'cross-country from Farmington UT',
    toTown: '~5 min',
    toTownSub: 'to Zion Crossroads',
    tax: '$2,515/yr',
    taxRate: 0.0053,
    taxLabel: 'Fluvanna Co. 0.53%',
    hoa: 0,
    image: 'https://www.trulia.com/pictures/thumbs_6/zillowstatic/fp/b76e1351217c98767463102e307a39cc-full.webp',
    listingLink: 'https://www.trulia.com/home/2019-bybee-rd-louisa-va-23093',
    score: 64,
    scores: {
      price:        { val: 6,  max: 15 },
      acreage:      { val: 11, max: 20 },
      privacy:      { val: 8,  max: 10 },
      outbuildings: { val: 8,  max: 15 },
      town:         { val: 13, max: 15 },
      schools:      { val: 9,  max: 15 },
      practical:    { val: 9,  max: 10 }
    },
    offerRange: '$440K – $460K',
    tableOfferNote: '25 DOM, $356/sqft — high',
    offerRationale: [
      '$479K for 1,344 sqft = $356/sqft — highest per-sqft in entire search',
      'Only 1,344 sqft above grade — small for price and 3 bed',
      '25 DOM — fresh listing with less negotiation leverage',
      'Fluvanna schools mixed — negative parent reviews across district',
      'Piedmont location — not mountain terrain'
    ],
    offerStrategy: 'Open at $440K citing $356/sqft premium (highest in search), small above-grade sqft, and school concerns. Fresh listing limits leverage but the price-per-sqft is objectively high. Settle around $455-460K.',
    highlight: '10 acres with nature trail, garden, koi pond, and putting green near Charlottesville/UVA (25 min). Fiber optic confirmed in listing. Workshop + sheds for projects. Unfinished basement with bath rough-in for expansion. I-64 access 3 miles away.',
    highlights: [
      { icon: '🌐', text: 'Fiber Optic Available confirmed in listing' },
      { icon: '🏙️', text: 'Charlottesville/UVA ~25 min, Richmond < 1 hr' },
      { icon: '🌳', text: '10 acres with nature trail, garden, koi pond, putting green' },
      { icon: '🔧', text: 'Workshop + sheds + unfinished basement with bath rough-in' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas Station',       value: '~3-5 mi' },
      { icon: '🛒', label: 'Zion Crossroads',    value: '~5 min' },
      { icon: '🏥', label: 'UVA Health',         value: '~25 min' },
      { icon: '🏫', label: 'Fluvanna Co HS (6/10)', value: '~15 min' },
      { icon: '🏙️', label: 'Charlottesville',    value: '~25 min' },
      { icon: '📍', label: 'Farmington UT',      value: '~31 hr drive', ref: true }
    ],
    pros: [
      '10 acres with trails, garden, koi pond, putting green — lifestyle property',
      'Fiber Optic Available confirmed — critical for remote work',
      'Workshop + sheds for projects and storage',
      '25 min to Charlottesville/UVA — excellent urban access',
      '2007 build with HardiPlank siding',
      'Unfinished basement with bath rough-in for expansion',
      'Surveillance security system included',
      'Stream on property, bamboo floors, built-in bookcases',
      'I-64 access only 3 miles from Zion Crossroads'
    ],
    cons: [
      '$479K for 1,344 sqft = $356/sqft — highest price per sqft in search',
      'Only 1,344 sqft above grade — small for a family',
      'Fluvanna schools mixed — negative parent reviews across district',
      'Central Elem and Carrysbrook reviews mention bullying issues',
      'Piedmont location — not mountain terrain',
      '~31 hr drive from Farmington UT',
      '25 DOM — fresh listing, less leverage'
    ],
    familyFit: [
      'Fiber internet confirmed — enables remote work from day one',
      'Charlottesville 25 min provides all urban amenities',
      'UVA Health 25 min — excellent medical access',
      'School quality concerns across Fluvanna district need investigation'
    ],
    verifyBefore: [
      { title: 'Fiber Internet', detail: 'Confirmed in listing — verify actual speeds and provider at this address' },
      { title: 'School Quality', detail: 'Multiple negative parent reviews across Fluvanna district — visit schools' },
      { title: 'Price Justification', detail: '$356/sqft is highest in search — comparable sales analysis needed' },
      { title: 'Well & Septic', detail: 'Rural property — verify condition and capacity' },
      { title: 'Basement Expansion', detail: 'Cost estimate to finish basement and add bath' }
    ],
    mustDo: [
      '! School district investigation — negative parent reviews',
      '! Comparable sales analysis — $356/sqft seems high',
      'Fiber internet speed verification',
      'Well water test and septic inspection',
      'Basement finishing cost estimate'
    ],
    envHazards: {
      location: 'Fluvanna County, Virginia Piedmont',
      pills: [
        { level: 'low', text: 'Hurricane/tropical storms — Piedmont exposure' },
        { level: 'low', text: 'Stream flooding — water on property' },
        { level: 'low', text: 'Winter storms — moderate' }
      ],
      note: 'Piedmont location with relatively low environmental risk. Stream on property is minor flood consideration. Proximity to Charlottesville provides good emergency services access.'
    }
  },

  // ── p66 — Amherst, VA (Amherst County) ──────────────────────────────
  {
    id: 'p66',
    num: 66,
    navLabel: 'Amherst',
    address: '214 Victoria Dr',
    city: 'Amherst',
    state: 'VA',
    zip: '24521',
    county: 'Amherst',
    price: 424500,
    beds: 4,
    bath: 3,
    sqft: '3,004',
    acres: '5.39',
    acresSub: 'private landscaped acres',
    yearBuilt: 2006,
    type: 'Modular',
    typeBadge: 'b-mfg',
    status: 'Active',
    statusClass: 'status-active',
    statusNote: '16 DOM — fresh listing',
    drive: '~30 hr',
    driveSub: 'cross-country from Farmington UT',
    toTown: '~10 min',
    toTownSub: 'to Amherst',
    tax: '$1,203/yr',
    taxRate: 0.0028,
    taxLabel: 'Amherst Co. 0.28%',
    hoa: 25,
    image: 'https://www.trulia.com/pictures/thumbs_6/zillowstatic/fp/f807117c631bf3c1d567b2811efae8f2-full.webp',
    listingLink: 'https://www.trulia.com/home/214-victoria-dr-amherst-va-24521',
    score: 63,
    scores: {
      price:        { val: 10, max: 15 },
      acreage:      { val: 7,  max: 20 },
      privacy:      { val: 6,  max: 10 },
      outbuildings: { val: 13, max: 15 },
      town:         { val: 12, max: 15 },
      schools:      { val: 8,  max: 15 },
      practical:    { val: 7,  max: 10 }
    },
    offerRange: '$380K – $405K',
    tableOfferNote: '16 DOM, modular construction',
    offerRationale: [
      'Modular/ranch construction — not stick-built, limits some buyers',
      '16 DOM — fresh listing with less negotiation leverage',
      '$25/mo HOA ($300/yr road maintenance)',
      'Central Elementary only 2/10 — very weak school',
      'Only 5.39 acres — meets minimum barely'
    ],
    offerStrategy: 'Start at $380K citing modular construction discount, Central Elem 2/10, and HOA cost. Fresh listing limits leverage but modular construction is a real market discount. Settle around $395-405K.',
    highlight: 'Two-story shop/workshop — best dedicated workshop space in entire search. Whole-home generator, massive screened-in porch, true one-level living. 4 bed/3 bath, 3,004 sqft. Amherst MS 8/10. Lynchburg only ~25 min for full urban access.',
    highlights: [
      { icon: '🔧', text: 'Two-story shop/workshop — best dedicated shop in entire search' },
      { icon: '⚡', text: 'Whole-home generator for rural power reliability' },
      { icon: '🏫', text: 'Amherst MS 8/10 — strong middle school' },
      { icon: '🏙️', text: 'Lynchburg ~25 min for urban amenities' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas Station',       value: '~5-8 mi' },
      { icon: '🛒', label: 'Amherst',            value: '~10 min' },
      { icon: '🏥', label: 'Centra Lynchburg',   value: '~25 min' },
      { icon: '🏫', label: 'Amherst MS (8/10)',  value: '~10 min' },
      { icon: '🏫', label: 'Central Elem (2/10)', value: '~10 min' },
      { icon: '📍', label: 'Farmington UT',      value: '~30 hr drive', ref: true }
    ],
    pros: [
      'Two-story shop/workshop — best dedicated shop space in entire search',
      'Whole-home generator — power reliability',
      'Massive screened-in porch for outdoor living',
      'True one-level living — all main floor',
      '4 bed/3 bath, 3,004 sqft — spacious layout',
      '2006 build — relatively modern',
      'Amherst MS 8/10 — strong middle school',
      'Amherst ~10 min, Lynchburg ~25 min for services',
      'Gas log fireplace'
    ],
    cons: [
      'Modular/ranch construction — not stick-built',
      '$25/mo HOA ($300/yr road maintenance)',
      'Central Elementary only 2/10 — very weak school',
      'Amherst HS only 5/10',
      'Only 5.39 acres — meets minimum barely',
      'More landscaped than wooded — limited forest privacy',
      'Ceramic tile + vinyl flooring',
      '16 DOM — fresh listing means less leverage',
      '~30 hr drive from Farmington UT'
    ],
    familyFit: [
      "Two-story shop is James's dream workshop space",
      'Amherst MS 8/10 is great for middle school years',
      'Central Elem 2/10 is a serious concern for elementary years',
      'Screened porch and one-level living great for family use'
    ],
    verifyBefore: [
      { title: 'Modular Quality', detail: 'Verify construction quality — modular builds vary significantly' },
      { title: 'Central Elem 2/10', detail: 'Parents report failures with special needs — investigate alternatives' },
      { title: 'Internet', detail: 'Cable listed — verify actual speeds at this address' },
      { title: 'Well & Septic', detail: 'Verify condition — 2006 system, ~20 years old' },
      { title: 'Hurricane Helene', detail: 'Amherst County — verify any 2024 storm damage' }
    ],
    mustDo: [
      '! School investigation — Central Elem 2/10 with negative reviews',
      '! Modular construction quality inspection',
      'Internet speed verification',
      'Well water test and septic inspection',
      'Shop/workshop structural assessment'
    ],
    envHazards: {
      location: 'Amherst County, Roanoke corridor',
      pills: [
        { level: 'mod', text: 'Hurricane Helene 2024 — verify damage' },
        { level: 'low', text: 'Winter storms — moderate' },
        { level: 'low', text: 'Wildfire — partially wooded' }
      ],
      note: 'Amherst County location with moderate environmental risk. Modular construction may have different structural ratings for severe weather compared to stick-built homes.'
    }
  },

  // ── p67 — Culpeper, VA (Orange County) ──────────────────────────────
  {
    id: 'p67',
    num: 67,
    navLabel: 'Culpeper',
    address: '4496 Rolling Hills Dr',
    city: 'Culpeper',
    state: 'VA',
    zip: '22701',
    county: 'Orange',
    price: 484900,
    beds: 3,
    bath: 2,
    sqft: '1,400',
    acres: '6.00',
    acresSub: 'wooded backdrop with stream',
    yearBuilt: 2024,
    type: 'Site-Built',
    typeBadge: 'b-sfr',
    status: 'Coming Soon',
    statusClass: 'status-active',
    statusNote: 'Relisted — prev listing removed Dec 2025',
    drive: '~31 hr',
    driveSub: 'cross-country from Farmington UT',
    toTown: '~20 min',
    toTownSub: 'to Culpeper',
    tax: '$3,491/yr',
    taxRate: 0.0072,
    taxLabel: 'Orange Co. 0.72%',
    hoa: 0,
    image: 'https://www.trulia.com/pictures/thumbs_6/zillowstatic/fp/be2be15051acc8807a0994236d534a8d-full.webp',
    listingLink: 'https://www.trulia.com/home/4496-rolling-hills-dr-culpeper-va-22701',
    score: 62,
    scores: {
      price:        { val: 7,  max: 15 },
      acreage:      { val: 9,  max: 20 },
      privacy:      { val: 8,  max: 10 },
      outbuildings: { val: 7,  max: 15 },
      town:         { val: 10, max: 15 },
      schools:      { val: 6,  max: 15 },
      practical:    { val: 15, max: 10 }
    },
    offerRange: '$445K – $465K',
    tableOfferNote: 'Relisted, $346/sqft, USDA eligible',
    offerRationale: [
      'Previously listed and removed Dec 2025 — relisting signals difficulty selling',
      '$484,900 for 1,400 sqft = $346/sqft — second highest in search',
      'Only 1,400 sqft above grade — small for the price',
      'Orange County HS only 4/10',
      'Gravel driveway, no garage — only insulated shed'
    ],
    offerStrategy: 'Start at $445K citing prior failed listing, $346/sqft premium, small above-grade sqft, and 4/10 high school. USDA loan eligibility is a plus. Settle around $455-465K.',
    highlight: '2024 new construction — newest home in entire search. Walkout basement fully framed with bath rough-in. Whole-house generator and insulated 12x32 shed with electric AND water. USDA Loan eligible. Additional parcels included. 6 wooded acres with stream.',
    highlights: [
      { icon: '🏗️', text: '2024 new construction — newest in entire search' },
      { icon: '🔧', text: 'Insulated 12x32 shed with electric AND water line' },
      { icon: '⚡', text: 'Whole-house generator installed' },
      { icon: '🏦', text: 'USDA Loan eligible — favorable financing' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas Station',       value: '~12-15 mi' },
      { icon: '🛒', label: 'Culpeper',           value: '~20 min' },
      { icon: '🏥', label: 'Culpeper Medical',   value: '~15 min' },
      { icon: '🏫', label: 'Orange Co HS (4/10)', value: '~20 min' },
      { icon: '🏫', label: 'Unionville Elem',    value: '~15 min' },
      { icon: '📍', label: 'Farmington UT',      value: '~31 hr drive', ref: true }
    ],
    pros: [
      '2024 new construction — everything is brand new',
      'Walkout basement fully framed with bath rough-in for expansion',
      'Whole-house generator — power reliability',
      'Insulated 12x32 shed with electric AND water line',
      '6 acres with wooded backdrop and stream',
      'Hardwood floors, stained wood beams, custom kitchen',
      'USDA Loan eligible — favorable financing terms',
      'Additional parcels included',
      'Rambler/ranch — all main level living'
    ],
    cons: [
      '$484,900 for 1,400 sqft = $346/sqft — second highest in search',
      'Only 1,400 sqft above grade — small for a family',
      'Orange County HS only 4/10',
      'Listed in Orange County but marketed as Culpeper — verify school district',
      'Gravel driveway, no garage',
      'Composition shingle roof (not metal)',
      'Previously listed and removed Dec 2025',
      '~31 hr drive from Farmington UT'
    ],
    familyFit: [
      'Brand new home means zero maintenance surprises initially',
      'USDA loan eligibility could lower financing costs',
      'Basement with bath rough-in provides expansion path for growing family',
      'Orange County HS 4/10 is a concern for high school years'
    ],
    verifyBefore: [
      { title: 'School District', detail: 'Orange County jurisdiction but marketed as Culpeper — verify actual school district' },
      { title: 'No Garage', detail: 'Shed is workshop space but no vehicle garage — driveway only' },
      { title: 'New Construction', detail: 'Verify all permits, final inspections, and warranties' },
      { title: 'Septic', detail: 'Septic capacity may be limited by bedroom count — verify' },
      { title: 'Internet', detail: 'Rural Orange County — verify broadband options at address' }
    ],
    mustDo: [
      '! Verify actual school district — Orange County vs Culpeper',
      '! All construction permits and final inspection certificates',
      'Internet verification at this address',
      'Builder warranty documentation',
      'Septic capacity verification'
    ],
    envHazards: {
      location: 'Orange County, Virginia Piedmont',
      pills: [
        { level: 'low', text: 'Stream flooding — water on property' },
        { level: 'low', text: 'Hurricane/tropical storms — Piedmont' },
        { level: 'low', text: 'Winter storms — moderate' },
        { level: 'special', text: 'New 2024 construction — verify all permits and inspections' }
      ],
      note: 'New construction on Piedmont lot with relatively low environmental risk. Stream on property is minor consideration. New build should have current code compliance — verify all permits.'
    }
  },

  // ── p68 — West Augusta, VA (Augusta County) ─────────────────────────
  {
    id: 'p68',
    num: 68,
    navLabel: 'West Augusta',
    address: '65 Mountain Deer Run',
    city: 'West Augusta',
    state: 'VA',
    zip: '24485',
    county: 'Augusta',
    price: 495000,
    beds: 3,
    bath: 2.5,
    sqft: '2,324',
    acres: '5.02',
    acresSub: 'adjacent to National Forest',
    yearBuilt: 1979,
    type: 'Site-Built',
    typeBadge: 'b-sfr',
    status: 'Active',
    statusClass: 'status-active',
    statusNote: '5 reductions from $600K — 17.5% cut, 134 DOM',
    drive: '~30 hr',
    driveSub: 'cross-country from Farmington UT',
    toTown: '~15 min',
    toTownSub: 'to Churchville',
    tax: '$1,262/yr',
    taxRate: 0.0025,
    taxLabel: 'Augusta Co. 0.25%',
    hoa: 29,
    image: 'https://www.trulia.com/pictures/thumbs_6/zillowstatic/fp/c0286a229d38304a9cf0ba84b8aeb78b-full.webp',
    listingLink: 'https://www.trulia.com/home/65-mountain-deer-run-west-augusta-va-24485',
    score: 60,
    scores: {
      price:        { val: 6,  max: 15 },
      acreage:      { val: 7,  max: 20 },
      privacy:      { val: 9,  max: 10 },
      outbuildings: { val: 8,  max: 15 },
      town:         { val: 10, max: 15 },
      schools:      { val: 7,  max: 15 },
      practical:    { val: 13, max: 10 }
    },
    offerRange: '$380K – $430K',
    tableOfferNote: '5 reductions, $168K prior sale',
    offerRationale: [
      '5 price reductions from $600K to $495K — 17.5% total cut',
      '134 DOM — over 4 months on market',
      'Previous sale Jan 2024 at $168K — 2.95x markup (flip)',
      '$495K most expensive in VA group for only 5.02 acres',
      'Baseboard heating — expensive to operate',
      'HOA $29/mo ($350/yr)'
    ],
    offerStrategy: 'Start at $380K citing $168K prior sale, 5 price reductions, 134 DOM, and baseboard heating costs. This is clearly a flip with 2.95x markup. Demand all renovation permits. Settle around $420-430K.',
    highlight: 'Adjacent to National Forest — permanent wilderness next door. Claimed "torn to studs" renovation with 70 ft of deck and forest views. Two kitchens + separate entrances for multi-generational living. Detached garage, metal roof. Community: 100% quiet, 100% kids play outside.',
    highlights: [
      { icon: '🌲', text: 'Adjacent to National Forest — permanent wilderness neighbor' },
      { icon: '🏠', text: 'Two kitchens + separate entrances — multi-generational ready' },
      { icon: '🏚️', text: 'Detached garage, metal roof, 70 ft deck' },
      { icon: '🤫', text: 'Community: 100% quiet, 100% kids play outside' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas Station',       value: '~10-12 mi' },
      { icon: '🛒', label: 'Churchville',        value: '~15 min' },
      { icon: '🏥', label: 'Augusta Health',     value: '~30 min' },
      { icon: '🏫', label: 'Buffalo Gap HS (5/10)', value: '~15 min' },
      { icon: '🏫', label: 'Churchville Elem (3/10)', value: '~15 min' },
      { icon: '📍', label: 'Farmington UT',      value: '~30 hr drive', ref: true }
    ],
    pros: [
      'Adjacent to National Forest — permanent wilderness neighbor',
      'Fully renovated (claimed torn to studs)',
      '70 ft of deck with forest views',
      'Two kitchens + separate entrances — multi-generational or rental',
      '2,324 sqft with 11 rooms',
      'Detached garage, metal roof',
      'Central AC + heat pump added',
      '100% quiet, 100% kids play outside — ideal community',
      'Property tax only $1,262/yr'
    ],
    cons: [
      '$495K — most expensive in VA group for 5.02 acres',
      '1979 build — 47 years old despite renovation claims',
      '5 price reductions from $600K — 134 DOM',
      '$29/mo HOA ($350/yr)',
      'Buffalo Gap HS only 5/10; Churchville Elem only 3/10',
      'Baseboard heating — expensive to operate',
      'Previous sale Jan 2024 at $168K — 2.95x markup (flip)',
      'Unfinished basement 871 sqft'
    ],
    familyFit: [
      'National Forest next door for hiking, exploring, nature education',
      '100% quiet and 100% kids play outside — family-ideal community',
      'Multi-generational layout useful for extended family',
      'School ratings (3/10 elem, 5/10 HS) are a concern'
    ],
    verifyBefore: [
      { title: 'Renovation Quality', detail: '$168K to $600K listing — verify all permits and quality of "torn to studs" renovation' },
      { title: 'Baseboard Heat Cost', detail: 'Baseboard + electric heat utility costs — get 12-month utility history' },
      { title: 'HOA Restrictions', detail: '$350/yr HOA — verify livestock/ATV restrictions' },
      { title: 'School Quality', detail: 'Churchville Elem 3/10, Buffalo Gap HS 5/10 — visit and evaluate' },
      { title: 'Hurricane Helene', detail: 'Augusta County — verify any 2024 storm damage' }
    ],
    mustDo: [
      '! Verify all renovation permits — $168K to $600K flip',
      '! 12-month utility history — baseboard heating costs',
      'HOA restrictions on livestock/ATVs',
      'School quality evaluation — 3/10 elem is concerning',
      'Foundation and structure inspection — 1979 original'
    ],
    envHazards: {
      location: 'Augusta County, Shenandoah Valley',
      pills: [
        { level: 'mod',     text: 'Hurricane Helene 2024 — verify damage' },
        { level: 'low',     text: 'Wildfire — National Forest adjacent' },
        { level: 'low',     text: 'Winter storms — mountain valley' },
        { level: 'special', text: 'Verify flip renovation quality — $168K to $600K' }
      ],
      note: 'National Forest adjacency means minimal wildfire suppression infrastructure nearby. Shenandoah Valley location with moderate weather exposure. HOA may restrict some activities.'
    }
  },

  // ── p69 — Gloucester, VA (Gloucester County) ─────────────────────────
  {
    id: 'p69',
    num: 69,
    navLabel: 'Gloucester',
    address: '9273 Sheldon Ln',
    city: 'Gloucester',
    state: 'VA',
    zip: '23061',
    county: 'Gloucester',
    price: 425000,
    beds: 3,
    bath: 2.5,
    sqft: '1,887',
    acres: '5.02',
    acresSub: 'wooded Tidewater privacy',
    yearBuilt: 2008,
    type: 'Site-Built',
    typeBadge: 'b-sfr',
    status: 'Active',
    statusClass: 'status-active',
    statusNote: 'Active listing',
    drive: '~32 hr',
    driveSub: 'cross-country from Farmington UT',
    toTown: '~10 min',
    toTownSub: 'to Gloucester Courthouse',
    tax: '$1,999/yr',
    taxRate: 0.0047,
    taxLabel: 'Gloucester Co. 0.47%',
    hoa: 0,
    image: 'https://www.trulia.com/pictures/thumbs_6/zillowstatic/fp/01013501314e064b7fc1ab371508919a-full.webp',
    listingLink: 'https://www.trulia.com/home/9273-sheldon-ln-gloucester-va-23061',
    score: 59,
    scores: {
      price:        { val: 9,  max: 15 },
      acreage:      { val: 7,  max: 20 },
      privacy:      { val: 7,  max: 10 },
      outbuildings: { val: 4,  max: 15 },
      town:         { val: 12, max: 15 },
      schools:      { val: 12, max: 15 },
      practical:    { val: 8,  max: 10 }
    },
    offerRange: '$390K – $410K',
    tableOfferNote: 'Tidewater coastal, not mountain',
    offerRationale: [
      'Tidewater/coastal VA — fundamentally not mountain terrain family prefers',
      'Gloucester HS only 5/10 with very negative student reviews',
      'Only storage shed + playhouse — no real workshop space',
      '~32 hr drive — furthest from Farmington UT',
      'Coastal location = hurricane and flood insurance exposure'
    ],
    offerStrategy: 'Start at $390K citing coastal flood/hurricane risk, Tidewater location (not mountain), Gloucester HS concerns, and no workshop space. Petsworth Elem 9/10 is genuinely exceptional. Settle around $400-410K.',
    highlight: 'Petsworth Elementary 9/10 — highest elementary school rating in entire search. Peasley Middle 7/10. 5 wooded acres with screened porch, attached garage, and playhouse with zip line. Riverside Walter Reed Hospital only ~10 min. 2008 build.',
    highlights: [
      { icon: '🏫', text: 'Petsworth Elem 9/10 — highest elementary in entire search' },
      { icon: '🏫', text: 'Peasley Middle 7/10 — strong middle school' },
      { icon: '🏥', text: 'Riverside Walter Reed Hospital ~10 min' },
      { icon: '🎪', text: 'Playhouse with zip line — kid-ready property' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas Station',       value: '~5-8 mi' },
      { icon: '🛒', label: 'Gloucester Courthouse', value: '~10 min' },
      { icon: '🏥', label: 'Riverside Walter Reed', value: '~10 min' },
      { icon: '🏫', label: 'Petsworth Elem (9/10)', value: '~10 min' },
      { icon: '🏛️', label: 'Williamsburg',       value: '~30 min' },
      { icon: '📍', label: 'Farmington UT',      value: '~32 hr drive', ref: true }
    ],
    pros: [
      'Petsworth Elem 9/10 — highest elementary rating in entire search',
      'Peasley Middle 7/10 — strong middle school',
      '5 wooded acres of privacy',
      'Large screened porch + open deck for outdoor living',
      'Attached garage — weather-protected parking',
      'Playhouse with zip line — kids love it',
      '2008 build — modern construction',
      'Hospital only ~10 min — closest medical in search',
      '87% quiet, 83% holiday spirit — good community',
      'Horses allowed on property'
    ],
    cons: [
      'Tidewater/coastal VA — not mountain terrain at all',
      'Gloucester HS only 5/10 with very negative reviews',
      'Only storage shed + playhouse — no real workshop',
      '~32 hr drive — furthest from Farmington UT in entire search',
      'Coastal = hurricane/flood insurance exposure',
      'No mountain recreation, no ATV trails nearby',
      'Cape Cod style — 2nd floor bedrooms require stairs',
      '1,887 sqft — adequate not spacious',
      'Crawl space foundation in coastal area'
    ],
    familyFit: [
      'Petsworth Elem 9/10 is the absolute best elementary school option',
      'Peasley MS 7/10 carries strong academics through middle school',
      'Gloucester HS 5/10 drops quality for high school years',
      'Coastal location fundamentally different from mountain lifestyle family envisions'
    ],
    verifyBefore: [
      { title: 'Flood Zone', detail: 'Tidewater area — FEMA flood zone and flood insurance costs critical' },
      { title: 'Hurricane Insurance', detail: 'Coastal VA hurricane/wind insurance costs — get estimates' },
      { title: 'Gloucester HS', detail: 'Very negative student reviews — visit school and talk to parents' },
      { title: 'Mountain vs Coast', detail: 'Family wants mountain lifestyle — Tidewater is fundamentally different' },
      { title: 'Internet', detail: 'Verify broadband service at this address' }
    ],
    mustDo: [
      '! FEMA flood zone verification — Tidewater coastal area',
      '! Hurricane/flood insurance cost estimates',
      'School visit — Gloucester HS 5/10 with negative reviews',
      'Family discussion — coastal vs mountain lifestyle preference',
      'Internet verification at address'
    ],
    envHazards: {
      location: 'Gloucester County, Virginia Tidewater',
      pills: [
        { level: 'high', text: 'Hurricane exposure — coastal Tidewater location' },
        { level: 'high', text: 'Flood risk — Tidewater/York River area' },
        { level: 'mod',  text: "Nor'easters — coastal storm exposure" },
        { level: 'special', text: 'Flood insurance likely required — get cost estimate' }
      ],
      note: 'Tidewater coastal location has significantly higher hurricane and flood risk than mountain properties. Flood insurance is likely required. This is fundamentally different terrain from the mountain properties the family prefers.'
    }
  },

  // ── p70 — Ewing, VA (Lee County) ────────────────────────────────────
  {
    id: 'p70',
    num: 70,
    navLabel: 'Ewing',
    address: '788 Dooley Hollow Rd',
    city: 'Ewing',
    state: 'VA',
    zip: '24248',
    county: 'Lee',
    price: 249900,
    beds: 5,
    bath: 2,
    sqft: '2,788',
    acres: '5.00',
    acresSub: 'private mountain land with wildlife',
    yearBuilt: 1961,
    type: 'Site-Built',
    typeBadge: 'b-sfr',
    status: 'Active',
    statusClass: 'status-active',
    statusNote: 'Just listed — 1 day on market',
    drive: '~28 hr',
    driveSub: 'cross-country from Farmington UT',
    toTown: '~10 min',
    toTownSub: 'to Middlesboro KY',
    tax: '$942/yr',
    taxRate: 0.0038,
    taxLabel: 'Lee Co. 0.38%',
    hoa: 0,
    image: 'https://www.trulia.com/pictures/thumbs_6/zillowstatic/fp/8736158f750219be92c248a366d04cc2-full.webp',
    listingLink: 'https://www.trulia.com/home/788-dooley-hollow-rd-ewing-va-24248',
    score: 55,
    scores: {
      price:        { val: 15, max: 15 },
      acreage:      { val: 7,  max: 20 },
      privacy:      { val: 7,  max: 10 },
      outbuildings: { val: 3,  max: 15 },
      town:         { val: 9,  max: 15 },
      schools:      { val: 5,  max: 15 },
      practical:    { val: 9,  max: 10 }
    },
    offerRange: '$180K – $220K',
    tableOfferNote: 'Cash only, 1961 build, $95K prior',
    offerRationale: [
      'Cash/Conventional only — no FHA/VA/USDA = potential condition red flag',
      '1961 build — 65 years old, all systems at or past end of life',
      'Previous sale at $95K in 2021 — 2.6x markup in 5 years',
      'Lee County one of poorest in Virginia — limited services',
      'Thomas Walker HS 4/10; Lee HS 3/10 — weak schools'
    ],
    offerStrategy: "Start at $180K citing cash-only requirement (condition red flag), 1961 age, $95K prior sale, and Lee County poverty. The lowest price in search by $115K is attractive but cash-only suggests lenders won't finance. Settle around $200-220K.",
    highlight: '$249,900 — lowest price in entire search by $115K. Five bedrooms for a large family. Stone fireplace, 3 living rooms, covered patios. Near Cumberland Gap National Historical Park. Deer and turkey on the property. $90/sqft second cheapest in search.',
    highlights: [
      { icon: '💰', text: '$249,900 — lowest price in entire search by $115K' },
      { icon: '🛏️', text: '5 bedrooms, 2 bathrooms — most beds available' },
      { icon: '🦌', text: 'Deer, turkey on property — wildlife paradise' },
      { icon: '🏔️', text: 'Near Cumberland Gap National Historical Park' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas Station',       value: '~8-10 mi' },
      { icon: '🛒', label: 'Middlesboro KY',     value: '~10 min' },
      { icon: '🏥', label: 'Lee Co Hospital',    value: '~20 min' },
      { icon: '🏫', label: 'Thomas Walker HS (4/10)', value: '~15 min' },
      { icon: '🏛️', label: 'Cumberland Gap NHP', value: '~10 min' },
      { icon: '📍', label: 'Farmington UT',      value: '~28 hr drive', ref: true }
    ],
    pros: [
      '$249,900 — lowest price in entire search by $115K',
      '5 bedrooms — most bedrooms available in any property',
      '2,788 sqft at $90/sqft — second cheapest per-sqft',
      '5 acres of private mountain land',
      'Stone fireplace, 3 living rooms, covered patios/decks',
      'Wildlife: deer, turkey regularly on property',
      'Just listed — 1 day on market (first opportunity)',
      'Near LMU and Middlesboro KY services',
      'Cumberland Gap National Historical Park nearby'
    ],
    cons: [
      '1961 build — 65 years old, systems all at or past end of life',
      'Cash/Conventional only — no FHA/VA/USDA financing (condition issue?)',
      'Only 1-car carport — no garage, no shop',
      'Thomas Walker HS 4/10; Lee HS 3/10 — weak schools',
      'Lee County one of poorest in VA — limited services and funding',
      'Laminate + vinyl flooring, wood frame windows',
      'Previous sale at $95K (2021) — 2.6x markup',
      'Very remote — Lee County far SW corner of Virginia',
      'Internet almost certainly satellite only'
    ],
    familyFit: [
      '5 bedrooms means every family member gets their own room',
      'Lowest price frees budget for renovations and improvements',
      'Cumberland Gap nearby for family hiking and history',
      'School quality (3-4/10) is a significant family concern'
    ],
    verifyBefore: [
      { title: 'Cash Only Requirement', detail: "No FHA/VA/USDA = lender won't finance = likely condition issues. Why?" },
      { title: 'Systems Assessment', detail: '1961 build — all electrical, plumbing, HVAC at or past end of life' },
      { title: 'Internet', detail: 'Lee County — almost certainly satellite only. Verify Starlink or any options' },
      { title: 'Well & Septic', detail: '65-year-old rural property — critical infrastructure check' },
      { title: 'Structural', detail: '1961 foundation, roof, framing — comprehensive inspection needed' }
    ],
    mustDo: [
      '! Determine why cash/conventional only — what condition issues?',
      '! Full systems assessment — 65-year-old home',
      '! Internet verification — likely satellite only',
      'Comprehensive structural inspection',
      'Well water test and septic inspection'
    ],
    envHazards: {
      location: 'Lee County, far SW Virginia mountains',
      pills: [
        { level: 'mod',     text: 'Hurricane Helene 2024 — verify SW VA damage' },
        { level: 'mod',     text: 'Structural risk — 1961 build, 65 years old' },
        { level: 'low',     text: 'Wildfire — mountain terrain' },
        { level: 'special', text: 'Cash only financing — investigate condition red flags' }
      ],
      note: 'Far SW Virginia mountain location. 1961 construction is the primary risk — all systems at or past useful life. Cash-only financing requirement strongly suggests condition issues that prevent standard lending.'
    }
  },

  // ── p71 — Burkeville, VA (Nottoway County) ──────────────────────────
  {
    id: 'p71',
    num: 71,
    navLabel: 'Burkeville',
    address: '2240 S Genito Rd',
    city: 'Burkeville',
    state: 'VA',
    zip: '23922',
    county: 'Nottoway',
    price: 455000,
    beds: 4,
    bath: 2,
    sqft: '2,238',
    acres: '24.21',
    acresSub: 'former horse farm, 3 parcels',
    yearBuilt: 2001,
    type: 'Manuf.',
    typeBadge: 'b-mfg',
    status: 'Active',
    statusClass: 'status-active',
    statusNote: '123 DOM — $20K reduction',
    drive: '~30 hr',
    driveSub: 'cross-country from Farmington UT',
    toTown: '~10 min',
    toTownSub: 'to Crewe',
    tax: '$1,593/yr',
    taxRate: 0.0035,
    taxLabel: 'Nottoway Co. 0.35%',
    hoa: 0,
    image: 'https://www.trulia.com/pictures/thumbs_6/zillowstatic/fp/ba6c067ee6467504bc7450f7f55e110b-full.webp',
    listingLink: 'https://www.trulia.com/home/2240-s-genito-rd-burkeville-va-23922',
    score: 52,
    scores: {
      price:        { val: 7,  max: 15 },
      acreage:      { val: 16, max: 20 },
      privacy:      { val: 6,  max: 10 },
      outbuildings: { val: 10, max: 15 },
      town:         { val: 8,  max: 15 },
      schools:      { val: 3,  max: 15 },
      practical:    { val: 2,  max: 10 }
    },
    offerRange: '$370K – $400K',
    tableOfferNote: '123 DOM, manufactured, HS 2/10',
    offerRationale: [
      'Double wide manufactured home — not site-built, limits financing and resale',
      '123 DOM with $20K reduction — not attracting buyers',
      'Nottoway HS 2/10 — worst school rating in entire search',
      'Second dwelling sold as-is — liability concern',
      'Carport + 2 utility buildings do NOT convey with sale'
    ],
    offerStrategy: 'Start at $370K citing manufactured home discount, 2/10 schools, 123 DOM, as-is second dwelling liability, and non-conveying outbuildings. The 24 acres and horse farm infrastructure have value but the manufactured home limits financing. Settle around $390-400K.',
    highlight: 'Former horse farm on 24.21 acres — second most acreage in Virginia group. Large barn + outbuildings with three parcels. Second dwelling included (as-is). Mix of pastures, hardwood forest, and pond. Convenient to Richmond and Farmville.',
    highlights: [
      { icon: '🐴', text: 'Former horse farm — barn, pastures, pond, 24+ acres' },
      { icon: '🏠', text: 'Second dwelling included (as-is) — rental or guest potential' },
      { icon: '📐', text: 'Three parcels — potential to sell portions' },
      { icon: '🌲', text: 'Mix of pastures, hardwood forest, and pond' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas Station',       value: '~5-8 mi' },
      { icon: '🛒', label: 'Crewe',              value: '~10 min' },
      { icon: '🏥', label: 'Centra Southside',   value: '~25 min' },
      { icon: '🏫', label: 'Nottoway HS (2/10)', value: '~15 min' },
      { icon: '🏙️', label: 'Richmond',           value: '~1 hr' },
      { icon: '📍', label: 'Farmington UT',      value: '~30 hr drive', ref: true }
    ],
    pros: [
      '24.21 acres — second most acreage in VA group',
      'Large barn + outbuildings for livestock/equipment',
      'Three parcels — potential to sell portions or tax advantages',
      'Second dwelling included — rental or guest potential',
      'Paved driveway, sunroom + bonus room',
      'Former horse farm infrastructure — fenced pastures',
      'Mix of pastures, hardwood forest, and pond',
      'Convenient to Richmond (~1 hr) and Farmville',
      'Property tax currently very low'
    ],
    cons: [
      'Double wide manufactured home — not site-built',
      'Nottoway HS 2/10 — worst school rating in entire search',
      '123 DOM with $20K reduction — not attracting buyers',
      'Second dwelling sold as-is — unknown condition, liability',
      'Carport + 2 utility buildings do NOT convey with sale',
      'Nottoway County limited services',
      'Piedmont — flat terrain, not mountain setting',
      '$455K for manufactured home on 24 acres — value questionable',
      'Intermediate school 3/10, Middle 3/10 — all schools weak'
    ],
    familyFit: [
      '24 acres provides the family homestead vision with horse farm infrastructure',
      'School ratings 2-3/10 across all levels is a serious dealbreaker for family',
      "Manufactured home may not meet family's long-term housing expectations",
      'Flat Piedmont terrain — not the mountain lifestyle family envisions'
    ],
    verifyBefore: [
      { title: 'Manufactured Home Financing', detail: 'Double wide may limit mortgage options — verify lender requirements' },
      { title: 'School Quality', detail: '2-3/10 across all levels — are there private/charter alternatives?' },
      { title: 'Second Dwelling', detail: 'As-is condition — inspect for liability, code violations, insurance issues' },
      { title: 'Non-Conveying Items', detail: 'Carport + 2 utility buildings do NOT convey — clarify what stays' },
      { title: 'Internet', detail: 'Rural Nottoway County — verify broadband options' }
    ],
    mustDo: [
      '! Manufactured home financing verification — lender limitations',
      '! School investigation — 2-3/10 across all levels',
      'Second dwelling condition and liability assessment',
      'Clarify exactly which outbuildings convey with sale',
      'Internet verification at address'
    ],
    envHazards: {
      location: 'Nottoway County, Virginia Piedmont',
      pills: [
        { level: 'low', text: 'Hurricane/tropical storms — Piedmont exposure' },
        { level: 'low', text: 'Drought — agricultural Piedmont area' },
        { level: 'low', text: 'Winter storms — moderate' },
        { level: 'special', text: 'Manufactured home — different structural ratings for severe weather' }
      ],
      note: 'Piedmont location with relatively low environmental risk. Manufactured/double-wide construction may have different structural ratings for severe weather compared to site-built homes. Verify insurance requirements.'
    }
  }
];
