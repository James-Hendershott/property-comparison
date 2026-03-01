// batch2-nc.js — 14 North Carolina property data objects (p41–p54)
module.exports = [
  // ── p41 — Lenoir, NC (Caldwell County) — TOP PICK ──────────────────
  {
    id: 'p41',
    num: 41,
    navLabel: 'Lenoir',
    address: '5933 Nubbin Creek Rd',
    city: 'Lenoir',
    state: 'NC',
    zip: '28645',
    county: 'Caldwell',
    price: 389900,
    beds: 3,
    bath: 2,
    sqft: '2,262',
    acres: '7.52',
    acresSub: 'wooded mountain acreage',
    yearBuilt: 1996,
    type: 'Site-Built',
    typeBadge: 'b-sfr',
    status: 'Active',
    statusClass: 'status-active',
    statusNote: 'Reduced 5 times from $449,900 — 13.3% total cut',
    drive: '~29 hr',
    driveSub: 'cross-country from Farmington UT',
    toTown: '~15 min',
    toTownSub: 'to Lenoir Walmart',
    tax: '$2,359/yr',
    taxRate: 0.0060,
    taxLabel: 'Caldwell Co. 0.60%',
    hoa: 0,
    image: 'https://ssl.cdn-redfin.com/photo/103/bigphoto/119/4299119_0.jpg',
    listingLink: 'https://www.redfin.com/NC/Lenoir/5933-Nubbin-Creek-Rd-28645/home/',
    score: 72,
    scores: {
      price:        { val: 12, max: 15 },
      acreage:      { val: 10, max: 20 },
      privacy:      { val: 8,  max: 10 },
      outbuildings: { val: 4,  max: 15 },
      town:         { val: 12, max: 15 },
      schools:      { val: 12, max: 15 },
      practical:    { val: 14, max: 10 }
    },
    offerRange: '$350K – $375K',
    tableOfferNote: '5 reductions = strong leverage',
    offerRationale: [
      'Five price reductions totaling 13.3% off original ask — seller is motivated',
      '140 DOM signals market resistance at current price',
      'No central HVAC — ductless heat pump + stone fireplace limits buyer pool',
      'Detached 1-car garage only — needs shop/outbuilding investment'
    ],
    offerStrategy: 'Start at $350K citing 140 DOM, 5 reductions, and HVAC limitations. Seller has shown willingness to negotiate repeatedly. Escalate to $370-375K if countered. Require Helene damage inspection as contingency.',
    highlight: 'Best ATV access of all NC properties — Brown Mountain OHV 15-20 mi. Deep mountain privacy on 7.5 acres with Pisgah National Forest nearby. Five price reductions signal a motivated seller ready to deal.',
    highlights: [
      { icon: '🏔️', text: 'Brown Mountain OHV 15-20 mi — best ATV access in NC group' },
      { icon: '💰', text: '5 price reductions (13.3% cut) — strong negotiation leverage' },
      { icon: '🌲', text: 'Pisgah National Forest & Wilson Creek ~15-20 mi' },
      { icon: '🏥', text: 'Caldwell UNC Health ~10 mi' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas Station',       value: '~8-10 mi' },
      { icon: '🛒', label: 'Walmart (Lenoir)',   value: '~10 mi / 15 min' },
      { icon: '🏙️', label: 'Lenoir',             value: '~10 mi / 15 min' },
      { icon: '🏥', label: 'Caldwell UNC Health', value: '~10 mi' },
      { icon: '🏫', label: 'Happy Valley Elem (6/10)', value: '~5-8 mi' },
      { icon: '📍', label: 'Farmington UT',      value: '~29 hr drive', ref: true }
    ],
    pros: [
      'Best ATV/OHV access of all NC picks — Brown Mountain 15-20 mi',
      'Five price reductions = highly motivated seller, strong leverage',
      'Pisgah National Forest and Wilson Creek within 15-20 mi',
      'True mountain privacy on 7.52 wooded acres',
      'Caldwell UNC Health hospital only ~10 mi away',
      'Sub-$400K price point in mountain setting'
    ],
    cons: [
      'No central HVAC — ductless heat pump + stone fireplace only',
      'Detached 1-car garage — no real shop/workshop space',
      'DSL/satellite internet likely — no fiber or cable confirmed',
      'Caldwell County in FEMA disaster declaration from Helene — verify damage',
      '1996 build approaching 30 years — systems nearing replacement',
      '140 DOM suggests property has issues beyond price'
    ],
    familyFit: [
      'Brown Mountain OHV 15-20 mi is the best ATV access in the NC group — James priority',
      'Deep mountain seclusion with Happy Valley Elem 6/10 for kids',
      'Sub-$400K with heavy negotiation room makes this financially accessible'
    ],
    verifyBefore: [
      { title: 'Hurricane Helene Damage', detail: 'Caldwell County was in FEMA disaster declaration — inspect foundation, drainage, and any flood/wind damage' },
      { title: 'HVAC Situation', detail: 'No central HVAC — ductless heat pump + stone fireplace only. Get quotes for full HVAC install' },
      { title: 'Internet Options', detail: 'DSL/satellite likely — check Starlink availability and any fiber build-out plans' },
      { title: 'Well & Septic', detail: 'Rural mountain property — verify well flow rate and septic condition/age' }
    ],
    mustDo: [
      '! Helene damage inspection — Caldwell Co. FEMA disaster area',
      '! Full HVAC assessment — no central system currently',
      'Well water test and flow rate verification',
      'Septic inspection and tank pump history',
      'Internet speed test — DSL/satellite limitations'
    ],
    envHazards: {
      location: 'Caldwell County, western NC foothills',
      pills: [
        { level: 'high',    text: 'Hurricane Helene 2024 — FEMA disaster declaration' },
        { level: 'mod',     text: 'Landslide risk — mountain terrain' },
        { level: 'mod',     text: 'Flooding — creek/drainage areas' },
        { level: 'low',     text: 'Wildfire — wooded mountain setting' },
        { level: 'special', text: 'Verify all Helene damage before offer' }
      ],
      note: 'Caldwell County received FEMA disaster declaration after Hurricane Helene. Must verify property-specific damage to structures, roads, well, and septic.'
    }
  },

  // ── p42 — Hays, NC (Wilkes County) — LIFESTYLE PICK ────────────────
  {
    id: 'p42',
    num: 42,
    navLabel: 'Hays',
    address: '128 Golden Trout Dr',
    city: 'Hays',
    state: 'NC',
    zip: '28635',
    county: 'Wilkes',
    price: 499998,
    beds: 3,
    bath: 2,
    sqft: '2,311',
    acres: '7.4',
    acresSub: 'river frontage property',
    yearBuilt: 2017,
    type: 'Site-Built',
    typeBadge: 'b-sfr',
    status: 'Active',
    statusClass: 'status-active',
    statusNote: 'Reduced from $649,000 — massive 23% cut',
    drive: '~30 hr',
    driveSub: 'cross-country from Farmington UT',
    toTown: '~25 min',
    toTownSub: 'to North Wilkesboro Walmart',
    tax: '$2,341/yr',
    taxRate: 0.0047,
    taxLabel: 'Wilkes Co. 0.47%',
    hoa: 200,
    image: 'https://ssl.cdn-redfin.com/photo/103/bigphoto/237/4338237_3_0.jpg',
    listingLink: 'https://www.redfin.com/NC/Hays/128-Golden-Trout-Dr-28635/home/',
    score: 72,
    scores: {
      price:        { val: 10, max: 15 },
      acreage:      { val: 10, max: 20 },
      privacy:      { val: 9,  max: 10 },
      outbuildings: { val: 8,  max: 15 },
      town:         { val: 10, max: 15 },
      schools:      { val: 12, max: 15 },
      practical:    { val: 13, max: 10 }
    },
    offerRange: '$440K – $470K',
    tableOfferNote: '23% reduction + Zestimate below ask',
    offerRationale: [
      'Already reduced 23% from $649K — massive price cut signals distress',
      'Zestimate $476,900 below current $499,998 asking',
      '6+ months total DOM — property is not moving',
      'HIGH flood risk from 200+ ft river frontage may limit buyer pool',
      'HOA adds ongoing cost'
    ],
    offerStrategy: 'Open at $440K citing Zestimate gap, flood risk concerns, and 6+ month total DOM. Seller already dropped $149K — they want out. Use flood zone verification as contingency leverage. Could settle around $460-470K.',
    highlight: '200+ ft Roaring River frontage with a 2-story 640 sqft river cabin ("she-shed"). Massive 23% price reduction from $649K. Newer 2017 build with fiber/cable internet available. The lifestyle property of the NC group.',
    highlights: [
      { icon: '🏞️', text: '200+ ft Roaring River frontage — incredible lifestyle feature' },
      { icon: '🏠', text: '2-story river cabin (640 sqft she-shed) included' },
      { icon: '💰', text: '23% price reduction from $649K — motivated seller' },
      { icon: '🌐', text: 'Fiber/cable internet (Wilkes Communications, Spectrum)' },
      { icon: '⛰️', text: 'Stone Mountain State Park ~10-12 mi' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas Station',         value: '~10-12 mi' },
      { icon: '🛒', label: 'Walmart (N. Wilkesboro)', value: '~15 mi / 25 min' },
      { icon: '🏙️', label: 'North Wilkesboro',    value: '~15 mi / 25 min' },
      { icon: '🏥', label: 'Atrium Health Wilkes', value: '~15 mi' },
      { icon: '🏫', label: 'Traphill Elem (6/10)', value: '~8-10 mi' },
      { icon: '📍', label: 'Farmington UT',        value: '~30 hr drive', ref: true }
    ],
    pros: [
      '200+ ft Roaring River frontage — rare lifestyle feature',
      'Includes 640 sqft 2-story river cabin (she-shed/guest house)',
      'Massive 23% reduction from $649K — extreme negotiation leverage',
      'Newer 2017 build — modern systems, less maintenance',
      'Fiber/cable internet available (Wilkes Communications, Spectrum)',
      'Stone Mountain State Park ~10-12 mi for hiking'
    ],
    cons: [
      'HIGH FLOOD RISK — 200+ ft river frontage, verify FEMA zone',
      'Wilkes County in FEMA Helene disaster — flooding reported',
      'Zestimate $476,900 below $499,998 asking',
      '$200/yr HOA adds ongoing cost',
      '~25 min to nearest Walmart in North Wilkesboro',
      'Only 3bd/2ba — tight for larger family',
      'Top of budget at ~$500K'
    ],
    familyFit: [
      'River frontage and she-shed cabin create the ultimate family lifestyle property',
      'Newer 2017 build with fiber internet addresses practical daily needs',
      'Flood risk is the big asterisk — must verify FEMA zone before committing'
    ],
    verifyBefore: [
      { title: 'FEMA Flood Zone', detail: '200+ ft river frontage = high flood risk. Verify exact FEMA zone, flood insurance costs, and whether structures are in floodplain' },
      { title: 'Hurricane Helene Damage', detail: 'Wilkes County in FEMA disaster declaration — flooding reported. Inspect for water damage, erosion, and river bank stability' },
      { title: 'HOA Restrictions', detail: '$200/yr HOA — verify what restrictions apply: outbuildings, livestock, vehicles, short-term rental' },
      { title: 'River Cabin Permits', detail: 'Verify the 640 sqft she-shed/cabin is properly permitted and insured' }
    ],
    mustDo: [
      '! FEMA flood zone verification — 200+ ft river frontage',
      '! Helene flood damage inspection — Wilkes Co. disaster area',
      'Flood insurance quote before offer finalization',
      'River bank erosion assessment',
      'HOA covenant review — verify outbuilding/livestock rules'
    ],
    envHazards: {
      location: 'Wilkes County, NW North Carolina foothills',
      pills: [
        { level: 'severe', text: 'Flood risk — 200+ ft river frontage' },
        { level: 'high',   text: 'Hurricane Helene 2024 — FEMA disaster, flooding' },
        { level: 'mod',    text: 'River bank erosion — ongoing risk' },
        { level: 'low',    text: 'Wildfire — low for river-adjacent property' }
      ],
      note: 'HIGH flood risk is the defining hazard. 200+ ft Roaring River frontage combined with Helene flooding creates serious insurance and safety concerns. Must verify FEMA zone and get flood insurance quotes.'
    }
  },

  // ── p43 — Murphy, NC (Cherokee County) — BEST SCHOOLS ──────────────
  {
    id: 'p43',
    num: 43,
    navLabel: 'Murphy',
    address: '530 Hanging Dog Rd',
    city: 'Murphy',
    state: 'NC',
    zip: '28906',
    county: 'Cherokee',
    price: 499800,
    beds: 4,
    bath: 5,
    sqft: '2,967',
    acres: '6.84',
    acresSub: 'log cabin mountain acreage',
    yearBuilt: 2014,
    type: 'Log Home',
    typeBadge: 'b-sfr',
    status: 'Active',
    statusClass: 'status-active',
    statusNote: 'Reduced from $549,800 — re-listed after ~6 months total',
    drive: '~30 hr',
    driveSub: 'cross-country from Farmington UT',
    toTown: '~5-7 min',
    toTownSub: 'to Murphy Walmart',
    tax: '$2,495/yr',
    taxRate: 0.0050,
    taxLabel: 'Cherokee Co. 0.50%',
    hoa: 0,
    image: 'https://photos.zillowstatic.com/fp/2dd82967f99e96e5a90267a76ece4c6a-cc_ft_768.webp',
    listingLink: 'http://tour.usamls.net/530-Hanging-Dog-Rd-Murphy-NC-28906/unbranded',
    score: 74,
    scores: {
      price:        { val: 10, max: 15 },
      acreage:      { val: 9,  max: 20 },
      privacy:      { val: 7,  max: 10 },
      outbuildings: { val: 3,  max: 15 },
      town:         { val: 15, max: 15 },
      schools:      { val: 14, max: 15 },
      practical:    { val: 16, max: 10 }
    },
    offerRange: '$460K – $485K',
    tableOfferNote: 'Zestimate $482K, ~6 months total DOM',
    offerRationale: [
      'Reduced $50K from $549,800 — seller acknowledges overpricing',
      'Zestimate $482,100 supports offer in low $480s',
      '~6 months total DOM including re-list — market says price is still high',
      'No garage/workshop is a functional gap for this price point',
      '4bd/5ba log cabin with fiber internet — strong fundamentals offset gaps'
    ],
    offerStrategy: 'Start at $460K citing Zestimate alignment, no garage, and 6-month total exposure. The log cabin quality and fiber internet justify a premium, but no outbuildings at $500K is hard to swallow. Settle around $475-485K.',
    highlight: 'Best schools in the NC group — Murphy Elem 7/10, Murphy HS 7/10. Stunning log cabin with marble floors, heart-pine hardwood, and 3 master suites. FIBER OPTIC internet! Nantahala National Forest essentially adjacent. Cherokee County largely spared by Helene.',
    highlights: [
      { icon: '🏫', text: 'Best schools — Murphy Elem 7/10, Murphy HS 7/10' },
      { icon: '🏡', text: 'Log cabin with marble floors, heart-pine hardwood, 3 master suites' },
      { icon: '🌐', text: 'FIBER OPTIC internet available' },
      { icon: '🏔️', text: 'Nantahala National Forest essentially adjacent' },
      { icon: '🏪', text: 'Walmart 3-5 mi, hospital 5-7 mi — excellent access' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas Station',          value: '~3-5 mi' },
      { icon: '🛒', label: 'Walmart (Murphy)',      value: '~3-5 mi' },
      { icon: '🏙️', label: 'Murphy',                value: '~3-5 mi' },
      { icon: '🏥', label: 'Erlanger Western Carolina', value: '~5-7 mi' },
      { icon: '🏫', label: 'Murphy Elem (7/10)',    value: '~3-5 mi' },
      { icon: '📍', label: 'Farmington UT',         value: '~30 hr drive', ref: true }
    ],
    pros: [
      'Best schools in NC group — Murphy Elem 7/10, Murphy HS 7/10',
      'FIBER OPTIC internet — rare for rural mountain property',
      'Stunning log cabin with marble floors and 3 master suites',
      'Nantahala National Forest essentially adjacent for hiking',
      'Excellent town proximity — Walmart ~3-5 mi, hospital ~5-7 mi',
      'Cherokee County largely spared by Hurricane Helene',
      '2014 build — relatively modern, fewer surprise repairs'
    ],
    cons: [
      'NO garage or workshop — storage structure only',
      'Top of budget at ~$500K',
      'Zestimate $482,100 below asking — slight overpricing',
      '~6 months total DOM suggests price resistance',
      '5 bathrooms (3 full + 2 half) = more plumbing maintenance',
      'Log cabin requires specialized maintenance (chinking, staining)',
      'Only 6.84 acres — moderate for rural mountain property'
    ],
    familyFit: [
      'Best schools in the NC group make this the top pick for kids\' education',
      'Fiber internet + close to town = practical daily living with mountain setting',
      'Log cabin is a dream home aesthetic but needs committed maintenance'
    ],
    verifyBefore: [
      { title: 'Outbuilding Potential', detail: 'No garage/workshop currently — verify zoning allows construction of detached outbuildings on 6.84 acres' },
      { title: 'Log Cabin Condition', detail: 'Log homes need chinking, staining, and pest treatment — inspect for rot, insect damage, and maintenance history' },
      { title: 'Fiber Internet Confirmation', detail: 'Verify fiber is actually connected to the property, not just available in the area' },
      { title: 'Helene Impact Check', detail: 'Cherokee County was largely spared but verify road access and any drainage changes' }
    ],
    mustDo: [
      'Log cabin inspection — chinking, staining, rot, insect damage',
      'Fiber internet confirmation at the address',
      'Zoning verification for outbuilding construction',
      'Well and septic inspection',
      'Property survey — verify 6.84 acre boundaries'
    ],
    envHazards: {
      location: 'Cherokee County, far western NC mountains',
      pills: [
        { level: 'low',     text: 'Hurricane Helene — Cherokee Co. largely spared' },
        { level: 'mod',     text: 'Landslide risk — mountain terrain' },
        { level: 'low',     text: 'Flooding — verify creek/drainage proximity' },
        { level: 'low',     text: 'Wildfire — moderate for mountain setting' }
      ],
      note: 'Cherokee County fared much better than surrounding counties during Hurricane Helene. Lower overall hazard risk compared to other NC mountain properties.'
    }
  },

  // ── p44 — Madison, NC (Rockingham County) — BEST ACREAGE VALUE ─────
  {
    id: 'p44',
    num: 44,
    navLabel: 'Madison',
    address: '485 Amos Rd',
    city: 'Madison',
    state: 'NC',
    zip: '27025',
    county: 'Rockingham',
    price: 419900,
    beds: 4,
    bath: 2,
    sqft: '2,280',
    acres: '19.79',
    acresSub: 'best acreage value in NC group',
    yearBuilt: null,
    type: 'Site-Built',
    typeBadge: 'b-sfr',
    status: 'Active',
    statusClass: 'status-active',
    statusNote: 'Brand new listing — year built & details unverified',
    drive: '~29 hr',
    driveSub: 'cross-country from Farmington UT',
    toTown: '~15 min',
    toTownSub: 'to Eden Walmart',
    tax: '$2,900/yr',
    taxRate: 0.0070,
    taxLabel: 'Rockingham Co. ~0.70%',
    hoa: 0,
    image: 'https://ap.rdcpix.com/8ca62d5cf1ffbcf343f58810a0faa9fel-m738962273rd-w1280_h960.webp',
    listingLink: 'https://www.zillow.com/homes/485-Amos-Rd-Madison-NC-27025_rb/',
    score: 70,
    scores: {
      price:        { val: 11, max: 15 },
      acreage:      { val: 17, max: 20 },
      privacy:      { val: 8,  max: 10 },
      outbuildings: { val: 5,  max: 15 },
      town:         { val: 10, max: 15 },
      schools:      { val: 8,  max: 15 },
      practical:    { val: 11, max: 10 }
    },
    offerRange: '$390K – $410K',
    tableOfferNote: 'Brand new listing — many details unverified',
    offerRationale: [
      'Brand new listing — less leverage on price but strong acreage value',
      '19.79 acres at $419,900 = $21,200/acre (house + land) — excellent value',
      'Many details unverified — year built, outbuildings, construction type',
      'Rockingham County schools are weak (4-5/10)'
    ],
    offerStrategy: 'Gather full listing details before formal offer. If everything checks out, start at $390K emphasizing unverified details and school weakness. 19.79 acres is the best acreage value in the NC group and the primary draw.',
    highlight: 'Best acreage value in the NC group — 19.79 acres at $419,900. Nearly 20 acres at a sub-$425K price point is exceptional. Brand new listing with many details still unverified — needs due diligence but the land value is compelling.',
    highlights: [
      { icon: '🌾', text: '19.79 acres — best acreage in NC group by far' },
      { icon: '💰', text: '$21,200/acre (house + land) — exceptional value' },
      { icon: '🏠', text: '4bd/2ba, 2,280 sqft — solid family size' },
      { icon: '⛰️', text: 'Hanging Rock State Park ~20-25 mi for hiking' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas Station',        value: '~8-10 mi' },
      { icon: '🛒', label: 'Walmart (Eden)',      value: '~10 mi / 15 min' },
      { icon: '🏙️', label: 'Eden',                value: '~10 mi' },
      { icon: '🏥', label: 'Morehead Memorial',   value: '~10 mi (Eden)' },
      { icon: '🏫', label: 'Huntsville Elem (~4-5/10)', value: '~5-8 mi' },
      { icon: '📍', label: 'Farmington UT',       value: '~29 hr drive', ref: true }
    ],
    pros: [
      'Best acreage in NC group — 19.79 acres at $419,900',
      'Exceptional land value at ~$21,200/acre including house',
      '4bd/2ba provides solid family living space',
      'Brand new listing — opportunity to move fast',
      'Hanging Rock State Park ~20-25 mi for recreation'
    ],
    cons: [
      'Year built UNVERIFIED — could be older than expected',
      'Outbuildings UNKNOWN — listing not fully accessible',
      'Construction type unverified — may not be site-built',
      'Weak schools — Huntsville Elem ~4-5/10',
      'No mountain/ATV recreation nearby',
      'Many listing details still need verification',
      'Higher tax rate (~0.70%) than western NC counties'
    ],
    familyFit: [
      '19.79 acres gives the family room to spread out, build, and have livestock',
      'Brand new listing requires fast action — gather details and move quickly',
      'Weak schools (4-5/10) are a downside for kids'
    ],
    verifyBefore: [
      { title: 'Year Built & Construction', detail: 'Full listing details not accessible — verify year built, construction type (site-built vs manufactured), and foundation' },
      { title: 'Outbuildings', detail: 'Unknown what outbuildings exist — could be a major pro or con' },
      { title: 'Property Condition', detail: 'With year built unknown, full inspection is critical before any offer' },
      { title: 'Internet & Utilities', detail: 'Verify internet options, water source (well vs municipal), and septic vs sewer' }
    ],
    mustDo: [
      '! Get full listing details — year built, outbuildings, construction type all unknown',
      'Property inspection once details are confirmed',
      'Well and septic verification',
      'Internet availability check',
      'Survey to confirm 19.79 acre boundaries'
    ],
    envHazards: {
      location: 'Rockingham County, north-central NC Piedmont',
      pills: [
        { level: 'mod',  text: 'Hurricane/tropical storm — inland Piedmont exposure' },
        { level: 'low',  text: 'Flooding — verify creek/low areas on 19.79 acres' },
        { level: 'low',  text: 'Wildfire — low for Piedmont region' },
        { level: 'low',  text: 'Tornado — moderate for Piedmont NC' }
      ],
      note: 'Piedmont NC has lower natural hazard risk than mountain or coastal areas. Primary concern is tropical storm remnants and occasional tornado activity.'
    }
  },

  // ── p45 — Murphy 2, NC (Cherokee County) ────────────────────────────
  {
    id: 'p45',
    num: 45,
    navLabel: 'Murphy 2',
    address: '118 Hothouse Rd',
    city: 'Murphy',
    state: 'NC',
    zip: '28906',
    county: 'Cherokee',
    price: 429900,
    beds: 4,
    bath: 2,
    sqft: '2,228',
    acres: '5.73',
    acresSub: 'mountain acreage with generator',
    yearBuilt: 2004,
    type: 'Site-Built',
    typeBadge: 'b-sfr',
    status: 'Active',
    statusClass: 'status-active',
    statusNote: '184 DOM, zero price reductions — inflexible seller',
    drive: '~30 hr',
    driveSub: 'cross-country from Farmington UT',
    toTown: '~15-20 min',
    toTownSub: 'to Murphy Walmart',
    tax: '$1,628/yr',
    taxRate: 0.0038,
    taxLabel: 'Cherokee Co. 0.38%',
    hoa: 0,
    image: 'https://ssl.cdn-redfin.com/photo/522/bigphoto/605/153605_0.jpg',
    listingLink: 'https://www.redfin.com/NC/Murphy/118-Hothouse-Rd-28906/home/',
    score: 68,
    scores: {
      price:        { val: 10, max: 15 },
      acreage:      { val: 8,  max: 20 },
      privacy:      { val: 8,  max: 10 },
      outbuildings: { val: 8,  max: 15 },
      town:         { val: 11, max: 15 },
      schools:      { val: 10, max: 15 },
      practical:    { val: 13, max: 10 }
    },
    offerRange: '$390K – $415K',
    tableOfferNote: '184 DOM, zero reductions — stubborn seller',
    offerRationale: [
      '184 DOM with zero reductions — seller is stubborn but market is speaking',
      'Zestimate $413,800 supports offer in low $400s',
      'Satellite internet only — significant lifestyle limitation',
      'Wayehutta OHV 60-70 mi — too far for practical ATV use',
      'Whole-house generator is a valuable included feature'
    ],
    offerStrategy: 'Start aggressive at $390K citing 184 DOM and Zestimate of $413,800. Seller has refused to budge, so a low offer may force reality check. Be prepared to walk — this seller may never negotiate. Best case settle at $405-415K.',
    highlight: 'Whole-house generator and outbuilding on 5.73 mountain acres in Cherokee County. Lowest tax rate in the NC group at 0.38%. But 184 DOM with zero price reductions signals an inflexible seller who may be unreasonable to negotiate with.',
    highlights: [
      { icon: '⚡', text: 'Whole-house generator included — off-grid ready' },
      { icon: '💵', text: 'Lowest tax rate in NC group — $1,628/yr at 0.38%' },
      { icon: '🏠', text: '4bd/2ba, 2,228 sqft with outbuilding + 2-car garage' },
      { icon: '⛰️', text: 'Cherokee County mountains — largely spared by Helene' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas Station',          value: '~10-15 mi' },
      { icon: '🛒', label: 'Walmart (Murphy)',      value: '~15-20 min' },
      { icon: '🏙️', label: 'Murphy',                value: '~15-20 min' },
      { icon: '🏥', label: 'Erlanger Western Carolina', value: '~15-20 mi' },
      { icon: '🏫', label: 'Ranger Elem (5/10)',    value: '~8-12 mi' },
      { icon: '📍', label: 'Farmington UT',         value: '~30 hr drive', ref: true }
    ],
    pros: [
      'Whole-house generator — power security in mountain setting',
      'Lowest property tax in NC group — $1,628/yr at 0.38%',
      'Outbuilding + 2-car attached garage for workshop potential',
      'Cherokee County largely spared by Hurricane Helene',
      '4bd/2ba with 2,228 sqft — good family size',
      'Mountain privacy on 5.73 acres'
    ],
    cons: [
      'SATELLITE INTERNET ONLY — major lifestyle limitation',
      '184 DOM with zero price reductions — inflexible seller',
      'Zestimate $413,800 below $429,900 asking',
      'Wayehutta OHV 60-70 mi — too far for regular ATV use',
      'Schools mediocre — Ranger Elem 5/10, Hiwassee Dam HS 6/10',
      '2004 build — systems approaching 20+ years',
      'More remote than Murphy p43 — longer drive to town'
    ],
    familyFit: [
      'Generator and outbuilding provide practical self-sufficiency on mountain land',
      'Satellite-only internet is a dealbreaker for remote work or kids\' school',
      'Inflexible seller at 184 DOM may make negotiation frustrating'
    ],
    verifyBefore: [
      { title: 'Internet Options', detail: 'Satellite only confirmed — check Starlink availability and speeds. This could be a dealbreaker' },
      { title: 'Generator Condition', detail: 'Verify age, fuel type, capacity, and maintenance history of whole-house generator' },
      { title: 'Outbuilding Details', detail: 'Listing says "outbuilding" but no specifics — verify size, condition, and permitted use' },
      { title: 'Seller Motivation', detail: '184 DOM with zero reductions — have agent probe seller\'s actual bottom line before investing in inspection' }
    ],
    mustDo: [
      '! Internet verification — satellite only is a potential dealbreaker',
      'Generator inspection — age, fuel type, capacity',
      'Outbuilding assessment — size, condition, electrical',
      'Well and septic inspection',
      'Agent conversation with listing agent re: seller flexibility'
    ],
    envHazards: {
      location: 'Cherokee County, far western NC mountains',
      pills: [
        { level: 'low',  text: 'Hurricane Helene — Cherokee Co. largely spared' },
        { level: 'mod',  text: 'Landslide risk — mountain terrain' },
        { level: 'low',  text: 'Wildfire — moderate for mountain setting' },
        { level: 'low',  text: 'Flooding — verify drainage on property' }
      ],
      note: 'Cherokee County has lower hazard risk than other NC mountain counties. Whole-house generator mitigates power outage risk from storms.'
    }
  },

  // ── p46 — Clayton, NC (Johnston County) ─────────────────────────────
  {
    id: 'p46',
    num: 46,
    navLabel: 'Clayton',
    address: '308 Legare Ct',
    city: 'Clayton',
    state: 'NC',
    zip: '27569',
    county: 'Johnston',
    price: 430000,
    beds: 3,
    bath: 2,
    sqft: '1,678',
    acres: '5.49',
    acresSub: 'near Raleigh metro',
    yearBuilt: 1996,
    type: 'Site-Built',
    typeBadge: 'b-sfr',
    status: 'Active',
    statusClass: 'status-active',
    statusNote: '6 DOM — will move fast!',
    drive: '~29 hr',
    driveSub: 'cross-country from Farmington UT',
    toTown: '~5-10 min',
    toTownSub: 'to Clayton Walmart',
    tax: '$2,100/yr',
    taxRate: 0.0075,
    taxLabel: 'Johnston Co. ~0.75%',
    hoa: 0,
    image: 'https://ssl.cdn-redfin.com/photo/102/bigphoto/972/10147972_0.jpg',
    listingLink: 'https://www.redfin.com/NC/Clayton/308-Legare-Ct-27569/home/',
    score: 64,
    scores: {
      price:        { val: 8,  max: 15 },
      acreage:      { val: 7,  max: 20 },
      privacy:      { val: 5,  max: 10 },
      outbuildings: { val: 10, max: 15 },
      town:         { val: 14, max: 15 },
      schools:      { val: 11, max: 15 },
      practical:    { val: 9,  max: 10 }
    },
    offerRange: '$410K – $425K',
    tableOfferNote: '6 DOM — must act fast, limited leverage',
    offerRationale: [
      'Only 6 DOM — very fresh listing, minimal leverage',
      'All major systems replaced: HVAC, windows, water heater, roof, plumbing',
      '1,000+ sqft detached workshop with electricity is a major asset',
      'Near Raleigh metro = strong demand and competition',
      'No mountain/ATV access — flat Piedmont suburbia'
    ],
    offerStrategy: 'This will move fast at 6 DOM near Raleigh. Offer close to asking at $420-425K to be competitive. The renovated systems and workshop justify the price. Low leverage — other buyers will be interested.',
    highlight: 'All major systems replaced — HVAC, windows, water heater, roof (50-yr warranty), plumbing (2026). 1,000+ sqft detached workshop with electricity. Costco 20-25 min near Raleigh metro. But zero mountain or ATV access — this is flat Piedmont suburbia.',
    highlights: [
      { icon: '🔧', text: 'All major systems replaced — roof, HVAC, windows, plumbing' },
      { icon: '🏗️', text: '1,000+ sqft detached workshop with electricity' },
      { icon: '🛍️', text: 'Costco 20-25 min, near Raleigh metro' },
      { icon: '🏥', text: 'UNC Health Johnston ~5-10 min' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas Station',          value: '~3-5 mi' },
      { icon: '🛒', label: 'Walmart (Clayton)',     value: '~5-10 min' },
      { icon: '🏙️', label: 'Raleigh',               value: '~25-30 min' },
      { icon: '🏥', label: 'UNC Health Johnston',   value: '~5-10 min' },
      { icon: '🏫', label: 'Johnston Co. Schools (5-7/10)', value: '~5-10 mi' },
      { icon: '📍', label: 'Farmington UT',         value: '~29 hr drive', ref: true }
    ],
    pros: [
      'All major systems replaced — minimal surprise repair costs',
      '1,000+ sqft detached workshop with electricity — excellent outbuilding',
      'Roof has 50-year warranty, plumbing redone 2026',
      'Excellent town access — Walmart 5-10 min, Costco 20-25 min',
      'Near Raleigh metro for jobs, shopping, healthcare',
      'UNC Health Johnston hospital ~5-10 min'
    ],
    cons: [
      'NO mountain or ATV access — flat Piedmont suburbia',
      'Only 3bd/2ba, 1,678 sqft — smallest livable space in NC group',
      '6 DOM will attract competing offers quickly',
      '1996 build despite system upgrades',
      '5.49 acres near Raleigh metro = neighbors closer than mountain properties',
      'Higher tax rate (~0.75%) than western NC',
      '$430K for 1,678 sqft = $256/sqft — on the pricey side'
    ],
    familyFit: [
      'Renovated systems and workshop make daily life practical and low-maintenance',
      'Near Raleigh metro gives access to everything but sacrifices mountain lifestyle',
      'Zero ATV/mountain access is a major lifestyle mismatch if that is the priority'
    ],
    verifyBefore: [
      { title: 'System Replacement Documentation', detail: 'Get receipts/warranties for all claimed replacements: HVAC, windows, water heater, roof, plumbing' },
      { title: 'Workshop Permits', detail: 'Verify 1,000+ sqft workshop is permitted and to code — electrical, foundation' },
      { title: 'Competing Offers', detail: '6 DOM near Raleigh — check with agent if multiple offers are already in' },
      { title: 'Neighborhood Character', detail: '5.49 acres near metro — verify surrounding development plans and density' }
    ],
    mustDo: [
      '! Act fast — 6 DOM near Raleigh will attract multiple offers',
      'Verify all system replacement warranties and documentation',
      'Workshop inspection — electrical, foundation, permits',
      'Well and septic check (if applicable)',
      'Check Johnston County development plans for surrounding area'
    ],
    envHazards: {
      location: 'Johnston County, central NC Piedmont near Raleigh',
      pills: [
        { level: 'mod',  text: 'Hurricane/tropical storm — Piedmont remnants' },
        { level: 'low',  text: 'Flooding — verify drainage on 5.49 acres' },
        { level: 'low',  text: 'Tornado — moderate for Piedmont NC' },
        { level: 'low',  text: 'Wildfire — low for suburban Piedmont' }
      ],
      note: 'Central Piedmont NC has moderate tropical storm exposure but lower overall hazard risk. New roof with 50-year warranty provides good storm protection.'
    }
  },

  // ── p47 — Randleman, NC (Randolph County) ───────────────────────────
  {
    id: 'p47',
    num: 47,
    navLabel: 'Randleman',
    address: '6916 Lawrence Farm Ln',
    city: 'Randleman',
    state: 'NC',
    zip: '27317',
    county: 'Randolph',
    price: 465000,
    beds: 4,
    bath: 3,
    sqft: '2,424',
    acres: '8.22',
    acresSub: 'with double garage/workshop',
    yearBuilt: 2014,
    type: 'Modular',
    typeBadge: 'b-mfg',
    status: 'Active',
    statusClass: 'status-active',
    statusNote: 'Reduced from $475K — tax assessment $221K vs $465K asking',
    drive: '~29 hr',
    driveSub: 'cross-country from Farmington UT',
    toTown: '~15 min',
    toTownSub: 'to Asheboro/Randleman Walmart',
    tax: '$2,200/yr',
    taxRate: 0.0070,
    taxLabel: 'Randolph Co. ~0.70%',
    hoa: 0,
    image: 'https://images.remax.com/webapi-properties-triad2/760d87920f102d1ee1ee2d2d1cc7c2ead4680bcc-1-medium.jpeg',
    listingLink: 'https://www.zillow.com/homes/6916-Lawrence-Farm-Ln-Randleman-NC-27317_rb/',
    score: 66,
    scores: {
      price:        { val: 7,  max: 15 },
      acreage:      { val: 11, max: 20 },
      privacy:      { val: 7,  max: 10 },
      outbuildings: { val: 13, max: 15 },
      town:         { val: 10, max: 15 },
      schools:      { val: 9,  max: 15 },
      practical:    { val: 9,  max: 10 }
    },
    offerRange: '$400K – $430K',
    tableOfferNote: 'Tax assessment $221K — massive gap to $465K asking',
    offerRationale: [
      'Tax assessment $221K vs $465K asking — enormous valuation gap',
      'Modular construction (verify type) limits buyer pool and appraisal',
      'Uwharrie OHV ~25-30 mi — decent ATV access',
      'Best outbuildings in NC group — double garage/workshop + storage building',
      'Recent $10K reduction shows some flexibility'
    ],
    offerStrategy: 'Start at $400K citing the massive tax assessment gap ($221K vs $465K) and modular construction concerns. The outbuildings add real value but the assessment gap is hard to ignore. Settle around $420-430K. Appraisal may be a challenge at higher numbers.',
    highlight: 'Best outbuildings in the NC group — double detached garage/workshop + storage building. 8.22 acres with Uwharrie OHV ~25-30 mi for ATV access. But massive tax assessment gap ($221K vs $465K) raises red flags, and modular construction type needs verification.',
    highlights: [
      { icon: '🏗️', text: 'Best outbuildings in NC — double garage/workshop + storage' },
      { icon: '🏍️', text: 'Uwharrie OHV ~25-30 mi — decent ATV access' },
      { icon: '🌳', text: '8.22 acres of rural Piedmont land' },
      { icon: '⚠️', text: 'Tax assessment $221K vs $465K — verify valuation' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas Station',        value: '~8-10 mi' },
      { icon: '🛒', label: 'Walmart',             value: '~10-15 mi / 15 min' },
      { icon: '🏙️', label: 'Asheboro',            value: '~15-20 min' },
      { icon: '🏥', label: 'Randolph Health',     value: '~10-15 mi' },
      { icon: '🏫', label: 'Level Cross Elem (~5-6/10)', value: '~5-8 mi' },
      { icon: '📍', label: 'Farmington UT',       value: '~29 hr drive', ref: true }
    ],
    pros: [
      'Best outbuildings in NC group — double garage/workshop + storage building',
      'Uwharrie OHV ~25-30 mi for ATV recreation',
      '8.22 acres provides good rural buffer',
      '2014 build — relatively modern systems',
      '4bd/3ba gives good family space',
      'Recent $10K reduction shows some seller flexibility'
    ],
    cons: [
      'Tax assessment $221K vs $465K asking — massive valuation gap',
      'MODULAR construction — verify off-frame vs HUD-code manufactured',
      'Modular/manufactured = potential appraisal and financing issues',
      'Schools mediocre — Level Cross Elem ~5-6/10',
      'No mountain scenery — Piedmont landscape',
      'Higher tax rate (~0.70%)',
      'May not appraise anywhere near asking price'
    ],
    familyFit: [
      'Best workshop/outbuilding setup in NC group — ideal for James\' projects',
      'Uwharrie OHV access gives some ATV recreation within 30 mi',
      'Modular construction and tax assessment gap need serious verification before committing'
    ],
    verifyBefore: [
      { title: 'Construction Type', detail: 'Critical: verify if off-frame modular (treated as site-built for financing) or HUD-code manufactured (financing restrictions). This changes everything' },
      { title: 'Tax Assessment Gap', detail: '$221K assessment vs $465K asking — investigate why the gap is so extreme. May indicate appraisal will fall short' },
      { title: 'Appraisal Risk', detail: 'With tax assessment at $221K, conventional appraisal may not support $465K. Discuss with lender before investing in inspection' },
      { title: 'Outbuilding Details', detail: 'Verify garage/workshop dimensions, electrical service, concrete floors, and permitted status' }
    ],
    mustDo: [
      '! Verify construction type — off-frame modular vs HUD-code manufactured',
      '! Get pre-qualification confirming lender will finance this property type',
      'Investigate tax assessment gap — $221K vs $465K',
      'Outbuilding inspection — electrical, foundation, permits',
      'Appraisal contingency is essential'
    ],
    envHazards: {
      location: 'Randolph County, central NC Piedmont',
      pills: [
        { level: 'mod',  text: 'Hurricane/tropical storm remnants' },
        { level: 'low',  text: 'Flooding — verify low areas on 8.22 acres' },
        { level: 'low',  text: 'Tornado — moderate for Piedmont NC' },
        { level: 'low',  text: 'Wildfire — low for Piedmont region' }
      ],
      note: 'Central Piedmont NC has moderate storm exposure but generally low natural hazard risk. Modular construction may have different wind rating than site-built.'
    }
  },

  // ── p48 — Nashville, NC (Nash County) ───────────────────────────────
  {
    id: 'p48',
    num: 48,
    navLabel: 'Nashville',
    address: '1667 Pecan Dr #25',
    city: 'Nashville',
    state: 'NC',
    zip: '27856',
    county: 'Nash',
    price: 429900,
    beds: 5,
    bath: 3.5,
    sqft: '2,628',
    acres: '7.17',
    acresSub: 'Lot 25 in Harvest Creek subdivision',
    yearBuilt: 2026,
    type: 'Site-Built',
    typeBadge: 'b-sfr',
    status: 'Active',
    statusClass: 'status-active',
    statusNote: 'NEW CONSTRUCTION — to be built',
    drive: '~28 hr',
    driveSub: 'cross-country from Farmington UT',
    toTown: '~10-15 min',
    toTownSub: 'to Nashville/Rocky Mount Walmart',
    tax: '$2,050/yr',
    taxRate: 0.0070,
    taxLabel: 'Nash Co. ~0.70%',
    hoa: 250,
    image: 'https://m.cbhomes.com/p/325/10092443/99bEa63EAdC6402/pdl23tp.webp',
    listingLink: 'https://www.zillow.com/homes/1667-Pecan-Dr-25-Nashville-NC-27856_rb/',
    score: 62,
    scores: {
      price:        { val: 8,  max: 15 },
      acreage:      { val: 9,  max: 20 },
      privacy:      { val: 4,  max: 10 },
      outbuildings: { val: 3,  max: 15 },
      town:         { val: 11, max: 15 },
      schools:      { val: 7,  max: 15 },
      practical:    { val: 20, max: 10 }
    },
    offerRange: '$400K – $420K',
    tableOfferNote: 'New construction — builder may negotiate on upgrades',
    offerRationale: [
      'New construction by Adams Homes — production builder (value over quality)',
      '7.17 acre lot in subdivision of 0.5-acre lots — may contain wetlands',
      'Nashville Elem 4/10 with 93% economically disadvantaged population',
      'Flat eastern NC — zero mountain/ATV recreation'
    ],
    offerStrategy: 'New construction offers different leverage — negotiate on upgrades, closing costs, and lot premium rather than base price. Start at $400K or ask for $30K in upgrades/credits. Verify lot for wetlands before committing. Adams Homes is a production builder — expect basic quality.',
    highlight: 'New construction 5bd/3.5ba on 7.17 acres — everything brand new with warranties. But Adams Homes is a production builder prioritizing value over quality. The 7.17 acre lot sits in a subdivision of 0.5-acre lots — may contain unbuildable wetlands. Flat eastern NC with zero mountain access.',
    highlights: [
      { icon: '🏗️', text: 'NEW CONSTRUCTION — everything brand new with warranties' },
      { icon: '🏠', text: '5bd/3.5ba, 2,628 sqft — largest bedroom count in NC group' },
      { icon: '🌾', text: '7.17 acre lot — but verify wetlands' },
      { icon: '⚠️', text: 'Adams Homes production builder — basic quality' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas Station',         value: '~5-8 mi' },
      { icon: '🛒', label: 'Walmart (Rocky Mount)', value: '~10-15 min' },
      { icon: '🏙️', label: 'Rocky Mount',          value: '~15-20 min' },
      { icon: '🏥', label: 'Nash UNC Health Care', value: '~10-15 mi' },
      { icon: '🏫', label: 'Nashville Elem (4/10)', value: '~5-8 mi' },
      { icon: '📍', label: 'Farmington UT',        value: '~28 hr drive', ref: true }
    ],
    pros: [
      'Brand new construction — all new systems, builder warranties',
      '5bd/3.5ba, 2,628 sqft — most bedrooms in NC group',
      '7.17 acre lot provides buffer from subdivision',
      'Everything new = minimal maintenance for years',
      'Can customize finishes during build',
      'Decent town access — Walmart 10-15 min'
    ],
    cons: [
      'Adams Homes production builder — value over quality construction',
      '7.17 acre lot in 0.5-acre subdivision — may be wetlands',
      'Nashville Elem 4/10 (40% math, 34% reading, 93% economically disadvantaged)',
      'Flat eastern NC — ZERO mountain/ATV access',
      '$250/yr HOA in a rural subdivision',
      'No outbuildings included — starting from scratch'
    ],
    familyFit: [
      '5 bedrooms and brand new construction sound great on paper',
      'School quality (4/10) and production builder concerns temper the appeal',
      'Zero mountain/ATV lifestyle access makes this a poor fit if recreation is priority'
    ],
    verifyBefore: [
      { title: 'Lot Wetlands Survey', detail: '7.17 acre lot in subdivision of 0.5-acre lots — the size discrepancy suggests portion may be wetlands/unbuildable. Get wetlands delineation' },
      { title: 'Adams Homes Quality', detail: 'Research Adams Homes reviews, warranty claims, and build quality. Production builders cut corners — know what you are getting' },
      { title: 'HOA Restrictions', detail: '$250/yr HOA — verify restrictions on outbuildings, livestock, vehicles, fencing' },
      { title: 'School Options', detail: 'Nashville Elem 4/10 — research charter, private, or magnet alternatives in Nash County' }
    ],
    mustDo: [
      '! Wetlands survey on 7.17 acre lot — verify usable acreage',
      '! Research Adams Homes builder reviews and warranty coverage',
      'HOA covenant review — outbuilding and livestock restrictions',
      'Verify lot boundaries and buildable area',
      'Get builder\'s standard vs upgrade specs in writing'
    ],
    envHazards: {
      location: 'Nash County, eastern NC Coastal Plain',
      pills: [
        { level: 'high', text: 'Hurricane exposure — eastern NC gets direct hits' },
        { level: 'mod',  text: 'Flooding — flat terrain, possible wetlands on lot' },
        { level: 'low',  text: 'Tornado — moderate for eastern NC' },
        { level: 'low',  text: 'Wildfire — low for developed area' }
      ],
      note: 'Eastern NC is more exposed to hurricanes than Piedmont or mountain areas. New construction should meet current wind codes, but verify builder specifications.'
    }
  },

  // ── p49 — Whiteville, NC (Columbus County) ──────────────────────────
  {
    id: 'p49',
    num: 49,
    navLabel: 'Whiteville',
    address: '701 Best Rd',
    city: 'Whiteville',
    state: 'NC',
    zip: '28472',
    county: 'Columbus',
    price: 499900,
    beds: 3,
    bath: 2,
    sqft: '3,678',
    acres: '5.22',
    acresSub: 'all-brick estate',
    yearBuilt: 1998,
    type: 'Site-Built',
    typeBadge: 'b-sfr',
    status: 'Active',
    statusClass: 'status-active',
    statusNote: 'FSBO slashed $100K (16.7%) from $600K',
    drive: '~28 hr',
    driveSub: 'cross-country from Farmington UT',
    toTown: '~10-15 min',
    toTownSub: 'to Whiteville Walmart',
    tax: '$1,900/yr',
    taxRate: 0.0060,
    taxLabel: 'Columbus Co. ~0.60%',
    hoa: 0,
    image: 'https://ssl.cdn-redfin.com/photo/318/bigphoto/999/100545999_0.jpg',
    listingLink: 'https://www.redfin.com/NC/Whiteville/701-Best-Rd-28472/home/',
    score: 55,
    scores: {
      price:        { val: 6,  max: 15 },
      acreage:      { val: 7,  max: 20 },
      privacy:      { val: 6,  max: 10 },
      outbuildings: { val: 8,  max: 15 },
      town:         { val: 9,  max: 15 },
      schools:      { val: 5,  max: 15 },
      practical:    { val: 14, max: 10 }
    },
    offerRange: '$425K – $460K',
    tableOfferNote: 'FSBO already cut $100K — suspiciously vague listing',
    offerRationale: [
      'FSBO originally $600K, slashed to $499,900 — $100K/16.7% cut',
      'Listing is suspiciously vague on interior details — what are they hiding?',
      'Worst schools in NC group — Chadbourn Elem 4/10, West Columbus HS 3/10',
      'Flat southeastern coastal plain — zero mountain/ATV within 100 mi',
      '3-car garage on all-brick build is the main appeal'
    ],
    offerStrategy: 'Approach with extreme caution due to vague listing. If seriously interested, start at $425K citing school district, FSBO overhead, and suspicious listing details. Require full inspection before removing contingencies. FSBO sellers can be unpredictable negotiators.',
    highlight: 'All-brick single-story with 3-car garage on 5.22 acres — 3,678 sqft is the largest in the NC group. But listing is suspiciously vague on interior details despite $100K price cut. Worst schools in the group (3-4/10). Zero mountain access in flat southeastern coastal plain.',
    highlights: [
      { icon: '🧱', text: 'All-brick single-story — durable construction' },
      { icon: '🚗', text: '3-car garage included' },
      { icon: '📐', text: '3,678 sqft — largest in NC group' },
      { icon: '⚠️', text: 'FSBO with vague listing — red flags' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas Station',        value: '~5-8 mi' },
      { icon: '🛒', label: 'Walmart (Whiteville)', value: '~10-15 min' },
      { icon: '🏙️', label: 'Whiteville',          value: '~10-15 min' },
      { icon: '🏥', label: 'Columbus Regional',   value: '~10-15 mi' },
      { icon: '🏫', label: 'Chadbourn Elem (4/10)', value: '~5-10 mi' },
      { icon: '📍', label: 'Farmington UT',       value: '~28 hr drive', ref: true }
    ],
    pros: [
      'All-brick construction — durable and low exterior maintenance',
      '3-car garage — best garage setup in NC group',
      '3,678 sqft — largest home in the NC group',
      'FSBO already cut $100K — room for further negotiation',
      'Low property taxes — $1,900/yr at ~0.60%',
      'Single-story living — accessible for all ages'
    ],
    cons: [
      'Listing suspiciously vague on interior details — potential hidden issues',
      'Worst schools in NC group — Chadbourn Elem 4/10, West Columbus HS 3/10',
      'Flat southeastern coastal plain — zero mountain/ATV within 100 mi',
      'FSBO sellers can be difficult negotiators',
      '~85 DOM despite $100K cut — market says it is still overpriced',
      '1998 build — systems approaching 28 years',
      'Top of budget at ~$500K for a questionable listing'
    ],
    familyFit: [
      'Largest home in NC group with 3-car garage sounds appealing',
      'Worst schools (3-4/10) and zero mountain access are dealbreakers for family priorities',
      'Suspicious listing vagueness demands extreme caution'
    ],
    verifyBefore: [
      { title: 'Interior Condition', detail: 'Listing is suspiciously vague — require full interior walkthrough and detailed photos before investing in inspection' },
      { title: 'FSBO Motivation', detail: 'Why FSBO? Why the $100K cut? Research property history, previous sales, and any liens' },
      { title: 'Foundation & Structure', detail: 'All-brick 1998 construction — check for settling, brick mortar condition, and foundation issues' },
      { title: 'Why Vague?', detail: 'Ask directly why listing lacks interior details — water damage? Mold? Structural issues?' }
    ],
    mustDo: [
      '! Full interior walkthrough before any offer — listing too vague',
      '! Research property history — why $100K cut and still sitting?',
      'Comprehensive home inspection if proceeding',
      'Well and septic inspection',
      'Verify actual usable sqft vs listed 3,678'
    ],
    envHazards: {
      location: 'Columbus County, southeastern NC coastal plain',
      pills: [
        { level: 'high',   text: 'Hurricane exposure — southeastern NC coast' },
        { level: 'mod',    text: 'Flooding — flat coastal plain terrain' },
        { level: 'mod',    text: 'Tropical storms — direct path region' },
        { level: 'low',    text: 'Wildfire — low for developed area' }
      ],
      note: 'Southeastern NC is in the direct path of Atlantic hurricanes. All-brick construction provides better wind resistance, but flooding from flat terrain is the primary concern.'
    }
  },

  // ── p50 — Glade Valley, NC (Alleghany County) — BEST LOCATION ──────
  {
    id: 'p50',
    num: 50,
    navLabel: 'Glade Valley',
    address: '290 Stardust Ln',
    city: 'Glade Valley',
    state: 'NC',
    zip: '28627',
    county: 'Alleghany',
    price: 275000,
    beds: 3,
    bath: 2,
    sqft: '~1,250',
    acres: '~5',
    acresSub: 'borders Blue Ridge Parkway land',
    yearBuilt: 1995,
    type: 'Manufactured',
    typeBadge: 'b-mfg',
    status: 'Active',
    statusClass: 'status-active',
    statusNote: '310+ DOM — fell out of contingency once, likely financing issues',
    drive: '~30 hr',
    driveSub: 'cross-country from Farmington UT',
    toTown: '~20-25 min',
    toTownSub: 'to Sparta or Galax VA',
    tax: '$1,625/yr',
    taxRate: 0.0059,
    taxLabel: 'Alleghany Co. ~0.59%',
    hoa: 0,
    image: '#',
    listingLink: 'https://www.zillow.com/homes/290-Stardust-Ln-Glade-Valley-NC-28627_rb/',
    score: 68,
    scores: {
      price:        { val: 14, max: 15 },
      acreage:      { val: 7,  max: 20 },
      privacy:      { val: 9,  max: 10 },
      outbuildings: { val: 3,  max: 15 },
      town:         { val: 7,  max: 15 },
      schools:      { val: 14, max: 15 },
      practical:    { val: 14, max: 10 }
    },
    offerRange: '$225K – $260K',
    tableOfferNote: '310+ DOM, financing issues — treat as land purchase',
    offerRationale: [
      '310+ DOM with failed contingency — likely financing issues with 31-year-old manufactured home',
      'Best considered as LAND PURCHASE — replacement home would push total over $500K',
      'Borders Blue Ridge Parkway land — irreplaceable location',
      'Shared well complication adds risk',
      'Best schools in NC group — Glade Creek 7/10, Alleghany HS 8/10'
    ],
    offerStrategy: 'Frame as land purchase and price accordingly. Start at $225K citing 310+ DOM, manufactured home age (31 years), shared well, and financing difficulties. The Blue Ridge Parkway adjacency is the real value. Seller must be exhausted after 310+ days.',
    highlight: 'Borders Blue Ridge Parkway land — an irreplaceable location you cannot buy elsewhere. Best schools in the NC group (7/10, 8/10). But the 31-year-old double-wide creates severe financing obstacles. Best considered as a LAND PURCHASE — replacement home would push total cost over $500K.',
    highlights: [
      { icon: '🏔️', text: 'Borders Blue Ridge Parkway land — irreplaceable location' },
      { icon: '🏫', text: 'Best schools — Glade Creek 7/10, Alleghany HS 8/10' },
      { icon: '💰', text: '$275K entry point — lowest in NC group' },
      { icon: '⚠️', text: '31-year-old double-wide = financing nightmare' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas Station',          value: '~12-15 mi' },
      { icon: '🛒', label: 'Grocery (Sparta)',      value: '~20-25 min' },
      { icon: '🏙️', label: 'Sparta / Galax VA',    value: '~20-25 min' },
      { icon: '🏥', label: 'Alleghany Memorial',   value: '~15-20 mi' },
      { icon: '🏫', label: 'Glade Creek Elem (7/10)', value: '~5-10 mi' },
      { icon: '📍', label: 'Farmington UT',        value: '~30 hr drive', ref: true }
    ],
    pros: [
      'Borders Blue Ridge Parkway land — truly irreplaceable location',
      'Best schools in NC group — Glade Creek 7/10, Alleghany HS 8/10',
      'Lowest price in NC group at $275K — accessible entry point',
      'Deep mountain privacy bordering protected federal land',
      'Alleghany County has rural mountain character',
      'Strong land value independent of structure'
    ],
    cons: [
      '31-year-old double-wide = severe conventional financing obstacles',
      'Shared well complication — dependency on neighbors',
      '310+ DOM — market says current package does not work at this price',
      '~1,250 sqft — very small for family living',
      'No outbuildings or workshop space',
      'Replacement home would push total over $500K',
      '20-25 min to nearest town for groceries'
    ],
    familyFit: [
      'Blue Ridge Parkway adjacency is a once-in-a-lifetime location opportunity',
      'Realistically a land purchase — budget for replacement home on top of purchase price',
      'Best schools in NC group make this area ideal for kids if you can solve the housing issue'
    ],
    verifyBefore: [
      { title: 'Financing Options', detail: '31-year-old manufactured home = no conventional mortgage. Cash, land loan, or chattel loan only. Verify lending options before pursuing' },
      { title: 'Shared Well Agreement', detail: 'Shared well = dependency on neighbors for water. Get legal agreement, flow rate, maintenance responsibility' },
      { title: 'Land Value Assessment', detail: 'Get land-only appraisal to understand true value independent of 31-year-old structure' },
      { title: 'Replacement Home Costs', detail: 'If treating as land purchase, get quotes for new manufactured/modular home delivered and set up' }
    ],
    mustDo: [
      '! Verify financing options — 31-year-old manufactured home severely limits lending',
      '! Shared well legal agreement and flow test',
      'Land-only appraisal to establish true property value',
      'Replacement home cost estimates if pursuing as land purchase',
      'Survey to confirm acreage and Blue Ridge Parkway boundary'
    ],
    envHazards: {
      location: 'Alleghany County, NW North Carolina Blue Ridge',
      pills: [
        { level: 'mod',     text: 'Landslide — Blue Ridge mountain terrain' },
        { level: 'mod',     text: 'Winter storms — high elevation mountain area' },
        { level: 'low',     text: 'Wildfire — low for Blue Ridge' },
        { level: 'low',     text: 'Flooding — verify drainage on property' },
        { level: 'special', text: '31-yr manufactured home — structural vulnerability to severe weather' }
      ],
      note: 'Blue Ridge location means higher elevation weather exposure. The 31-year-old manufactured home is more vulnerable to high winds and severe weather than site-built construction.'
    }
  },

  // ── p51 — Camden, NC (Camden County) ────────────────────────────────
  {
    id: 'p51',
    num: 51,
    navLabel: 'Camden',
    address: '554 N Trotman Rd',
    city: 'Camden',
    state: 'NC',
    zip: '27921',
    county: 'Camden',
    price: 359000,
    beds: 4,
    bath: 2,
    sqft: '~1,700',
    acres: '~5',
    acresSub: 'dual-address property',
    yearBuilt: 2022,
    type: 'Site-Built',
    typeBadge: 'b-sfr',
    status: 'Active',
    statusClass: 'status-active',
    statusNote: '~120 DOM — dual-address listing (554 & 554A)',
    drive: '~28 hr',
    driveSub: 'cross-country from Farmington UT',
    toTown: '~15-20 min',
    toTownSub: 'to Elizabeth City',
    tax: '$1,800/yr',
    taxRate: 0.0060,
    taxLabel: 'Camden Co. ~0.60%',
    hoa: 0,
    image: '#',
    listingLink: 'https://www.zillow.com/homes/554-N-Trotman-Rd-Camden-NC-27921_rb/',
    score: 60,
    scores: {
      price:        { val: 10, max: 15 },
      acreage:      { val: 7,  max: 20 },
      privacy:      { val: 5,  max: 10 },
      outbuildings: { val: 5,  max: 15 },
      town:         { val: 8,  max: 15 },
      schools:      { val: 13, max: 15 },
      practical:    { val: 12, max: 10 }
    },
    offerRange: '$320K – $345K',
    tableOfferNote: '120 DOM, dual-address complicates financing',
    offerRationale: [
      '~120 DOM — not moving despite newer 2022 construction',
      'Dual-address listing (554 & 554A) — complicates financing and appraisal',
      '$289/sqft if using 1,242 sqft primary structure — extremely steep',
      'Extreme NE corner of NC — 300+ mi from any mountain/ATV',
      'Grandy Primary 10/10 local rating is a standout'
    ],
    offerStrategy: 'Start at $320K citing 120 DOM, dual-address complexity, and extreme location. The 2022 build and Grandy Primary school rating are the main appeals. Verify what 554A actually is — second dwelling, garage, or outbuilding? This changes value significantly.',
    highlight: 'Newest build in NC group (2022) with Grandy Primary 10/10 local rating. Dual-address listing (554 & 554A) adds a second structure. But extreme NE corner of NC — 300+ miles from any mountain or ATV area. Near Virginia Beach/Norfolk metro (40-50 mi).',
    highlights: [
      { icon: '🏠', text: '2022 build — newest construction in NC group' },
      { icon: '🏫', text: 'Grandy Primary 10/10 local rating' },
      { icon: '🏘️', text: 'Dual-address (554 & 554A) — second structure included' },
      { icon: '🏖️', text: 'Near Virginia Beach/Norfolk metro 40-50 mi' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas Station',        value: '~8-10 mi' },
      { icon: '🛒', label: 'Grocery (Elizabeth City)', value: '~15-20 min' },
      { icon: '🏙️', label: 'Elizabeth City',      value: '~15-20 min' },
      { icon: '🏥', label: 'Sentara Albemarle',   value: '~15-20 mi' },
      { icon: '🏫', label: 'Grandy Primary (10/10)', value: '~5-10 mi' },
      { icon: '📍', label: 'Farmington UT',       value: '~28 hr drive', ref: true }
    ],
    pros: [
      'Newest build in NC group — 2022 construction',
      'Grandy Primary 10/10 local school rating',
      'Dual-address provides second structure (rental/guest potential)',
      'Near Virginia Beach/Norfolk metro for shopping/entertainment',
      'Lower price point at $359K',
      '2022 build = modern codes, new systems'
    ],
    cons: [
      'Extreme NE corner of NC — 300+ mi from any mountain/ATV',
      '~120 DOM despite newer construction — something is off',
      'Dual-address complicates financing, insurance, and appraisal',
      '$289/sqft if primary is only 1,242 sqft — very steep',
      'Flat Albemarle Sound terrain — no topography',
      'Far from everything except Virginia Beach',
      'Only ~1,700 sqft across structures — tight for family'
    ],
    familyFit: [
      'Newest build with top-rated elementary school checks two important boxes',
      '300+ miles from any mountain or ATV area makes this a lifestyle mismatch',
      'Dual-address complexity needs clarification before serious consideration'
    ],
    verifyBefore: [
      { title: 'Dual-Address Clarification', detail: 'What is 554A? Second dwelling, detached garage, or outbuilding? This changes value, financing, and insurance significantly' },
      { title: 'Actual Square Footage', detail: '~1,700 sqft total across structures — verify primary dwelling sqft vs secondary structure' },
      { title: 'Financing Feasibility', detail: 'Dual-address properties can complicate conventional mortgages — verify with lender before pursuing' },
      { title: 'Why 120 DOM?', detail: '2022 build sitting 120 days — investigate why. Price? Location? Dual-address issues?' }
    ],
    mustDo: [
      '! Clarify dual-address situation — what is 554A?',
      '! Verify financing feasibility with lender for dual-address property',
      'Accurate sqft measurement of each structure',
      'Full inspection of both structures',
      'Title search confirming both addresses on same parcel'
    ],
    envHazards: {
      location: 'Camden County, extreme NE North Carolina',
      pills: [
        { level: 'high',  text: 'Hurricane — coastal NE NC direct exposure' },
        { level: 'mod',   text: 'Flooding — flat Albemarle Sound terrain' },
        { level: 'mod',   text: 'Nor\'easters — coastal storm exposure' },
        { level: 'low',   text: 'Wildfire — low for coastal area' }
      ],
      note: 'Extreme NE NC is highly exposed to hurricanes, nor\'easters, and coastal flooding. 2022 construction should meet modern wind codes, but flood risk from flat terrain is significant.'
    }
  },

  // ── p52 — Supply, NC (Brunswick County) ─────────────────────────────
  {
    id: 'p52',
    num: 52,
    navLabel: 'Supply',
    address: '380 Hardwood Dr SW',
    city: 'Supply',
    state: 'NC',
    zip: '28462',
    county: 'Brunswick',
    price: 399000,
    beds: 4,
    bath: 2,
    sqft: '1,477',
    acres: '~2',
    acresSub: 'gated community lot',
    yearBuilt: 2005,
    type: 'Site-Built',
    typeBadge: 'b-sfr',
    status: 'Active',
    statusClass: 'status-active',
    statusNote: '~65 DOM in Seaside Bay gated community',
    drive: '~28 hr',
    driveSub: 'cross-country from Farmington UT',
    toTown: '~10-15 min',
    toTownSub: 'to Shallotte/Supply area',
    tax: '$1,550/yr',
    taxRate: 0.0045,
    taxLabel: 'Brunswick Co. ~0.45%',
    hoa: 0,
    image: 'https://images.remax.com/webapi-properties-trimlso2/df9a3d1171ff81a24739b6b6b6195e8afdc7a033-1-medium.jpeg',
    listingLink: 'https://www.zillow.com/homes/380-Hardwood-Dr-SW-Supply-NC-28462_rb/',
    score: 52,
    scores: {
      price:        { val: 7,  max: 15 },
      acreage:      { val: 3,  max: 20 },
      privacy:      { val: 4,  max: 10 },
      outbuildings: { val: 3,  max: 15 },
      town:         { val: 10, max: 15 },
      schools:      { val: 9,  max: 15 },
      practical:    { val: 16, max: 10 }
    },
    offerRange: '$365K – $385K',
    tableOfferNote: 'Gated community likely has HOA and restrictions',
    offerRationale: [
      'Gated community (Seaside Bay) likely has HOA and outbuilding/livestock restrictions',
      'Only ~2 acres — smallest land in NC group',
      'Coastal location = elevated flood risk and hurricane exposure',
      'Zero mountain recreation access',
      '1,477 sqft is small for $399K'
    ],
    offerStrategy: 'Start at $365K citing small lot size, gated community restrictions, and coastal hazard risks. Verify HOA existence and restrictions before offer — if HOA prohibits outbuildings/livestock, this is likely a non-starter. Coastal insurance costs may be significant.',
    highlight: 'Gated community in coastal Brunswick County — low crime, maintained roads. But ~2 acres in a gated community likely means HOA restrictions on outbuildings and livestock. Coastal location brings hurricane and flood risk. Zero mountain recreation. Lowest score in the NC group.',
    highlights: [
      { icon: '🔒', text: 'Seaside Bay gated community — security and maintained roads' },
      { icon: '🏖️', text: 'Near NC beaches — coastal lifestyle' },
      { icon: '⚠️', text: 'HOA likely — verify outbuilding/livestock restrictions' },
      { icon: '🌊', text: 'Coastal flood and hurricane risk' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas Station',        value: '~5-8 mi' },
      { icon: '🛒', label: 'Grocery (Shallotte)', value: '~10-15 min' },
      { icon: '🏙️', label: 'Shallotte',           value: '~10-15 min' },
      { icon: '🏥', label: 'Novant Health Brunswick', value: '~10-15 mi' },
      { icon: '🏫', label: 'Brunswick Co. Schools (~6/10)', value: '~5-10 mi' },
      { icon: '📍', label: 'Farmington UT',       value: '~28 hr drive', ref: true }
    ],
    pros: [
      'Gated community provides security and road maintenance',
      'Low property taxes — $1,550/yr at ~0.45%',
      'Near NC beaches for coastal recreation',
      'Decent town proximity — groceries 10-15 min',
      '2005 build — reasonably modern construction'
    ],
    cons: [
      'Only ~2 acres — smallest land in NC group',
      'Gated community HOA likely restricts outbuildings and livestock',
      'Coastal location = elevated hurricane and flood risk',
      'Zero mountain/ATV recreation access',
      '1,477 sqft for $399K = $270/sqft — expensive for the size',
      'Coastal insurance premiums may be significantly higher',
      'Lowest score in the NC group (52)'
    ],
    familyFit: [
      'Gated community is safe but restricts the rural lifestyle the family is seeking',
      'Only 2 acres with likely HOA restrictions eliminates workshop/livestock goals',
      'Coastal living is a fundamentally different lifestyle than mountain/rural'
    ],
    verifyBefore: [
      { title: 'HOA Existence & Rules', detail: 'Gated community almost certainly has HOA — get full covenant documents. Check restrictions on outbuildings, livestock, vehicles, fencing' },
      { title: 'Flood Zone & Insurance', detail: 'Coastal Brunswick County — verify FEMA flood zone and get flood insurance quotes. Could be $2-5K+/yr' },
      { title: 'Hurricane History', detail: 'Research property-specific hurricane damage history and current storm shutters/hardening' },
      { title: 'Actual Acreage', detail: '~2 acres estimated — verify exact lot size and what portion is buildable' }
    ],
    mustDo: [
      '! Get HOA covenants — verify outbuilding and livestock restrictions',
      '! Flood zone determination and insurance quote',
      'Wind/hurricane insurance quote (separate from flood)',
      'Verify exact lot acreage and boundaries',
      'Coastal property inspection — salt air corrosion, moisture, foundation'
    ],
    envHazards: {
      location: 'Brunswick County, southeastern NC coast',
      pills: [
        { level: 'severe', text: 'Hurricane — direct coastal exposure' },
        { level: 'high',   text: 'Flooding — coastal plain, storm surge risk' },
        { level: 'mod',    text: 'Tropical storms — frequent coastal impacts' },
        { level: 'mod',    text: 'Salt air corrosion — accelerates exterior degradation' },
        { level: 'low',    text: 'Wildfire — low for coastal area' }
      ],
      note: 'Brunswick County is on the NC coast with direct hurricane and storm surge exposure. Insurance costs (wind + flood) may add $3-5K+/yr to ownership costs. Recent tropical storms have caused damage in the area.'
    }
  },

  // ── p53 — Scotland Neck, NC (Halifax County) ────────────────────────
  {
    id: 'p53',
    num: 53,
    navLabel: 'Scotland Neck',
    address: '13619 US Highway 258',
    city: 'Scotland Neck',
    state: 'NC',
    zip: '27874',
    county: 'Halifax',
    price: 459900,
    beds: 3,
    bath: 2,
    sqft: '3,600',
    acres: '10',
    acresSub: 'with workshops and outbuildings',
    yearBuilt: 2010,
    type: 'Site-Built',
    typeBadge: 'b-sfr',
    status: 'Active',
    statusClass: 'status-active',
    statusNote: '~180 DOM — unpermitted sqft, overpriced flip attempt',
    drive: '~28 hr',
    driveSub: 'cross-country from Farmington UT',
    toTown: '~15-20 min',
    toTownSub: 'to Scotland Neck/Halifax',
    tax: '$2,100/yr',
    taxRate: 0.0085,
    taxLabel: 'Halifax Co. ~0.85%',
    hoa: 0,
    image: 'https://images.remax.com/webapi-properties-ncrmls2/ac67b2a713c0c1506c486314fe6726310bcdf1b3-1-large.jpeg',
    listingLink: 'https://www.zillow.com/homes/13619-US-Highway-258-Scotland-Neck-NC-27874_rb/',
    score: 56,
    scores: {
      price:        { val: 5,  max: 15 },
      acreage:      { val: 12, max: 20 },
      privacy:      { val: 6,  max: 10 },
      outbuildings: { val: 11, max: 15 },
      town:         { val: 7,  max: 15 },
      schools:      { val: 7,  max: 15 },
      practical:    { val: 8,  max: 10 }
    },
    offerRange: '$375K – $400K',
    tableOfferNote: 'Zestimate $390K, unpermitted sqft, flip markup',
    offerRationale: [
      'Previous owner bought for $385K in 2023 — now asking $459,900 (19% flip markup)',
      'Zestimate $390,700 vs $459,900 asking — significantly overpriced',
      'Part of sqft is UNPERMITTED — insurance, financing, and resale issues',
      '~180 DOM — market is rejecting the price'
    ],
    offerStrategy: 'Start at $375K citing Zestimate, unpermitted sqft, flip markup from $385K purchase, and 180 DOM. Seller paid $385K in 2023 and is trying a 19% flip — market is not biting. Unpermitted sqft gives strong leverage. Settle around $390-400K max.',
    highlights: [
      { icon: '🏗️', text: 'Metal garage, workshop, sheds, carports — best outbuilding complex' },
      { icon: '🌾', text: '10 acres — second-best acreage in NC group' },
      { icon: '⚠️', text: 'Unpermitted sqft — financing/insurance/resale risk' },
      { icon: '💸', text: '$385K purchase in 2023 → $459,900 ask — flip attempt' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas Station',        value: '~5-10 mi' },
      { icon: '🛒', label: 'Grocery (Scotland Neck)', value: '~10-15 min' },
      { icon: '🏙️', label: 'Halifax / Roanoke Rapids', value: '~20-30 min' },
      { icon: '🏥', label: 'Halifax Regional',   value: '~20-25 mi' },
      { icon: '🏫', label: 'Hobgood Charter (5/10)', value: '~10-15 mi' },
      { icon: '📍', label: 'Farmington UT',       value: '~28 hr drive', ref: true }
    ],
    pros: [
      'Best outbuilding complex — metal garage, workshop, sheds, carports',
      '10 acres — second-best acreage in NC group',
      '3,600+ sqft of living space (if permitted portion is usable)',
      '2010 build — relatively modern',
      'Multiple outbuildings for various uses',
      'Low property taxes relative to acreage'
    ],
    cons: [
      'Part of sqft is UNPERMITTED — insurance, financing, and resale nightmare',
      'Zestimate $390,700 vs $459,900 asking — significantly overpriced',
      'Previous owner bought $385K in 2023 — blatant flip attempt at 19% markup',
      '~180 DOM — market is clearly rejecting the price',
      'Flat eastern NC — zero mountain/ATV access',
      'Highest tax rate in NC group (~0.85%)'
    ],
    familyFit: [
      'Outbuilding complex is exactly what James needs for workshop/projects',
      'Unpermitted sqft and flip pricing make this a risky financial proposition'
    ],
    verifyBefore: [
      { title: 'Unpermitted Square Footage', detail: 'Critical: which portion is unpermitted? Can it be permitted retroactively? What does it cost? Lender may not finance unpermitted space' },
      { title: 'Flip History', detail: 'Bought $385K in 2023, asking $459,900 — what improvements were actually made to justify 19% markup?' },
      { title: 'Appraisal Risk', detail: 'With Zestimate at $390,700 and unpermitted sqft, conventional appraisal may fall far short of asking price' },
      { title: 'Outbuilding Condition', detail: 'Verify condition, electrical service, and foundations of metal garage, workshop, and sheds' }
    ],
    mustDo: [
      '! Verify which sqft is unpermitted and cost to bring into compliance',
      '! Confirm lender will finance property with unpermitted construction',
      'Appraisal contingency is essential — Zestimate $70K below ask',
      'Outbuilding inspection — metal garage, workshop, sheds',
      'Title search for any liens from previous purchase'
    ],
    envHazards: {
      location: 'Halifax County, eastern NC Coastal Plain',
      pills: [
        { level: 'high', text: 'Hurricane — eastern NC exposure' },
        { level: 'mod',  text: 'Flooding — flat eastern terrain' },
        { level: 'low',  text: 'Tornado — moderate for eastern NC' },
        { level: 'low',  text: 'Wildfire — low for rural area' },
        { level: 'special', text: 'Unpermitted construction — structural/safety unknown' }
      ],
      note: 'Eastern NC hurricane exposure is significant. The unpermitted construction adds an unknown structural risk — may not meet wind or building codes.'
    }
  },

  // ── p54 — Siler City, NC (Chatham County) ───────────────────────────
  {
    id: 'p54',
    num: 54,
    navLabel: 'Siler City',
    address: '596 Greenbrier Farm Trl',
    city: 'Siler City',
    state: 'NC',
    zip: '27344',
    county: 'Chatham',
    price: 449000,
    beds: 3,
    bath: 2,
    sqft: '~2,300',
    acres: '5.29',
    acresSub: 'creek access, horses allowed',
    yearBuilt: 2000,
    type: 'Modular',
    typeBadge: 'b-mfg',
    status: 'Active',
    statusClass: 'status-active',
    statusNote: '108 DOM, recent $16K reduction',
    drive: '~29 hr',
    driveSub: 'cross-country from Farmington UT',
    toTown: '~15 min',
    toTownSub: 'to Siler City',
    tax: '$1,850/yr',
    taxRate: 0.0080,
    taxLabel: 'Chatham Co. ~0.80%',
    hoa: 150,
    image: 'https://ssl.cdn-redfin.com/photo/150/bigphoto/779/1201779_9.jpg',
    listingLink: 'https://www.redfin.com/NC/Siler-City/596-Greenbrier-Farm-Trl-27344/home/',
    score: 58,
    scores: {
      price:        { val: 7,  max: 15 },
      acreage:      { val: 7,  max: 20 },
      privacy:      { val: 6,  max: 10 },
      outbuildings: { val: 5,  max: 15 },
      town:         { val: 10, max: 15 },
      schools:      { val: 5,  max: 15 },
      practical:    { val: 18, max: 10 }
    },
    offerRange: '$400K – $430K',
    tableOfferNote: '108 DOM, modular, FEMA flood fringe',
    offerRationale: [
      '108 DOM with recent $16K reduction — seller is feeling pressure',
      'Off-frame modular ~2000 — 26 years old, verify construction type for financing',
      'FEMA Flood Fringe zone — flood insurance required',
      'Poor schools — Sylvan Elem 4/10, Southern Mid 2/10'
    ],
    offerStrategy: 'Start at $400K citing 108 DOM, modular construction concerns, flood fringe zone, and school quality. Recent $16K reduction shows seller is moving — push for another $20-30K off. Creek access and horse-friendly are nice lifestyle features but do not justify premium pricing.',
    highlight: 'Creek access with horses allowed on 5.29 acres — equestrian-friendly property. Recent $16K price reduction after 108 DOM. But off-frame modular construction, FEMA Flood Fringe zone, and poor schools (2-4/10) create significant headwinds. Chatham County is trending blue.',
    highlights: [
      { icon: '🐴', text: 'Horses allowed — equestrian-friendly property' },
      { icon: '🏞️', text: 'Creek access on 5.29 acres' },
      { icon: '💰', text: 'Recent $16K reduction — seller under pressure' },
      { icon: '🌊', text: 'FEMA Flood Fringe zone — insurance required' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas Station',        value: '~8-10 mi' },
      { icon: '🛒', label: 'Grocery (Siler City)', value: '~10-15 min' },
      { icon: '🏙️', label: 'Siler City',          value: '~10-15 min' },
      { icon: '🏥', label: 'Chatham Hospital',    value: '~10-15 mi' },
      { icon: '🏫', label: 'Sylvan Elem (4/10)',  value: '~5-8 mi' },
      { icon: '📍', label: 'Farmington UT',       value: '~29 hr drive', ref: true }
    ],
    pros: [
      'Horses allowed — equestrian-friendly with 5.29 acres',
      'Creek access adds recreation and aesthetics',
      'Recent $16K reduction shows seller flexibility',
      '~2,300 sqft provides comfortable family living space',
      'Decent town proximity — Siler City 10-15 min',
      '$150/yr HOA is minimal'
    ],
    cons: [
      'Off-frame modular ~2000 — 26 years old, financing may be challenging',
      'FEMA Flood Fringe zone — flood insurance required',
      'Poor schools — Sylvan Elem 4/10, Southern Mid 2/10 (worst in NC group)',
      '108 DOM indicates market resistance',
      '$150/yr HOA despite rural setting',
      'No significant outbuildings mentioned'
    ],
    familyFit: [
      'Creek and horse-friendly property appeals to outdoor family lifestyle',
      'Worst schools in NC group (2-4/10) is a serious concern for kids',
      'Flood fringe zone and modular construction add financial risk and complexity'
    ],
    verifyBefore: [
      { title: 'Modular Construction Type', detail: 'Off-frame modular vs HUD-code — verify for financing eligibility. At 26 years old, this matters even more' },
      { title: 'Flood Insurance Cost', detail: 'FEMA Flood Fringe zone — get flood insurance quote before offer. Could add $1-3K+/yr' },
      { title: 'Creek Flooding History', detail: 'Creek access in flood fringe — has the property ever flooded? Get history from neighbors and county records' },
      { title: 'School Alternatives', detail: 'Southern Mid 2/10 is extremely poor — research charter, private, or homeschool co-op options in Chatham County' }
    ],
    mustDo: [
      '! Verify modular construction type and financing eligibility',
      '! Flood insurance quote — FEMA Flood Fringe zone',
      'Creek flooding history research',
      'School alternatives investigation — 2/10 middle school is unacceptable',
      'Well and septic inspection'
    ],
    envHazards: {
      location: 'Chatham County, central NC Piedmont',
      pills: [
        { level: 'high',    text: 'FEMA Flood Fringe — flood insurance required' },
        { level: 'mod',     text: 'Hurricane remnants — Piedmont exposure' },
        { level: 'mod',     text: 'Creek flooding — proximity to waterway' },
        { level: 'low',     text: 'Wildfire — low for Piedmont' },
        { level: 'special', text: 'Modular home may have different wind/storm ratings' }
      ],
      note: 'FEMA Flood Fringe designation means flood insurance is required. Creek proximity increases flooding risk during heavy rain events. Modular construction may have different structural ratings for severe weather.'
    }
  }
];
