// batch2-western.js — 20 western property data objects (p21–p40)
module.exports = [
  // ─── p21 · Republic, WA ───────────────────────────────────────────────
  {
    id: 'p21', num: 21, navLabel: 'Republic',
    address: '30822 Highway 20 E', city: 'Republic', state: 'WA', zip: '99166', county: 'Ferry',
    price: 332500, beds: 3, bath: 2, sqft: '1,344', acres: '20', acresSub: 'est. timbered rural parcel',
    yearBuilt: 1999, type: 'Manufactured', typeBadge: 'b-mfg',
    status: 'Active', statusClass: 'status-active', statusNote: '',
    drive: '~12.5 hr', driveSub: 'from Farmington UT', toTown: '~12 min', toTownSub: 'to Republic',
    tax: '$1,808/yr', taxRate: 0.0094, taxLabel: 'Ferry Co. 0.94%',
    hoa: 0,
    image: '#', listingLink: 'https://www.zillow.com/homes/30822-Highway-20-E-Republic-WA-99166_rb/',
    score: 52,
    scores: {
      price:        { val: 10, max: 15 },
      acreage:      { val: 14, max: 20 },
      privacy:      { val: 8,  max: 10 },
      outbuildings: { val: 3,  max: 15 },
      town:         { val: 7,  max: 15 },
      schools:      { val: 5,  max: 15 },
      practical:    { val: 5,  max: 10 }
    },
    offerRange: '$295,000 – $320,000',
    tableOfferNote: 'Mfg home, remote, poor internet',
    offerRationale: [
      'Manufactured home on 20 acres — land carries most of the value',
      'Very limited internet (satellite/wireless only) reduces buyer pool',
      '6 miles outside Republic with minimal services',
      'Ferry County avg home price well below asking'
    ],
    offerStrategy: 'Lead with cash or strong pre-approval. Emphasize quick close and willingness to accept rural internet limitations.',
    highlight: 'Affordable 20-acre timbered parcel near Republic with a 1999 manufactured home. Best acreage-per-dollar ratio in the batch, but internet and remoteness are real trade-offs.',
    highlights: [
      { icon: '🌲', text: '~20 timbered acres at under $17K/acre' },
      { icon: '💰', text: 'Lowest price point in Batch 2 at $332K' },
      { icon: '🏔️', text: 'Ferry County mountain setting, abundant wildlife' },
      { icon: '🏪', text: 'Republic grocery & hospital within 12 min' },
      { icon: '⚠️', text: '3 active Superfund sites in Republic area' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas', value: '~12 min (Republic)' },
      { icon: '🛒', label: 'Grocery', value: "~12 min (Anderson's, Republic)" },
      { icon: '🏙️', label: 'City', value: '~12 min (Republic, pop ~1,100)' },
      { icon: '🏥', label: 'Hospital', value: '~12 min (Ferry County Memorial, 25-bed CAH)' },
      { icon: '🏫', label: 'Schools', value: 'Republic Elem 4/10, Republic HS 4/10' },
      { icon: '📍', label: 'Farmington UT', value: '~12.5 hr', ref: true }
    ],
    pros: [
      'Large timbered acreage at a low price point',
      'Strong privacy and seclusion — 6 mi from town',
      'Low taxes at $1,808/yr (Ferry Co. 0.94%)',
      'Basic services (grocery, hospital) within 12 min',
      'No HOA, no covenants on rural Ferry County land',
      'Abundant hunting, fishing, OHV opportunities'
    ],
    cons: [
      'Manufactured home — limited appreciation, financing hurdles',
      'Internet is satellite/wireless only — no cable, no fiber',
      '3 active Superfund sites near Republic (mining legacy)',
      'Republic schools rated 4/10 across the board',
      'Very remote — 12.5 hr drive from Farmington',
      'Small town with extremely limited job market',
      'Ferry County population declining'
    ],
    familyFit: [
      'Best for: family prioritizing acreage and budget over amenities',
      'Challenge: poor internet rules out remote work without Starlink',
      'School quality is below average — homeschool may be preferred'
    ],
    verifyBefore: [
      { title: 'Exact acreage', detail: 'Confirm parcel size — estimated at 20 acres' },
      { title: 'Internet options', detail: 'Check Starlink availability and latency; confirm no fiber/cable plans' },
      { title: 'Superfund proximity', detail: 'Verify distance from Hecla Knob Hill, South Penn, Republic Mine Mill sites' },
      { title: 'Well & septic', detail: 'Confirm water source and septic system condition/age' }
    ],
    mustDo: [
      '! Verify Starlink viability — no internet = no remote work',
      'Confirm actual acreage with county assessor',
      'Test well water for mining contaminants (Superfund area)',
      'Inspect manufactured home subfloor, roof, and HUD tags'
    ],
    envHazards: {
      location: 'Republic, Ferry County, WA — NE Washington mining district',
      pills: [
        { level: 'high', text: 'Wildfire — timbered acreage in high-risk zone' },
        { level: 'low', text: 'Flood — upland terrain, minimal flood risk' },
        { level: 'low', text: 'Seismic — low historical seismic activity' },
        { level: 'special', text: 'Superfund — 3 active mining sites in Republic' }
      ],
      note: 'Hecla Knob Hill Mine, South Penn Mine, and Republic Mine Mill are all active Superfund sites. Test well water for heavy metals.'
    }
  },

  // ─── p22 · Kettle Falls 395, WA ──────────────────────────────────────
  {
    id: 'p22', num: 22, navLabel: 'KF 395',
    address: '792 Highway 395 N', city: 'Kettle Falls', state: 'WA', zip: '99141', county: 'Stevens',
    price: 450000, beds: 3, bath: 2, sqft: '2,113', acres: '5', acresSub: 'est. farmhouse w/ shop & barn',
    yearBuilt: 1922, type: 'Site-Built', typeBadge: 'b-sfr',
    status: 'Active', statusClass: 'status-active', statusNote: '199 DOM, $15K price cut',
    drive: '~12 hr', driveSub: 'from Farmington UT', toTown: '~3 min', toTownSub: 'to Kettle Falls',
    tax: '$3,825/yr', taxRate: 0.0085, taxLabel: 'Stevens Co. 0.85%',
    hoa: 0,
    image: 'https://photos.zillowstatic.com/fp/71b0858910ace6a06082c074d092dcbf-cc_ft_768.webp', listingLink: 'https://www.zillow.com/homes/792-Highway-395-N-Kettle-Falls-WA-99141_rb/',
    score: 64,
    scores: {
      price:        { val: 8,  max: 15 },
      acreage:      { val: 8,  max: 20 },
      privacy:      { val: 5,  max: 10 },
      outbuildings: { val: 14, max: 15 },
      town:         { val: 12, max: 15 },
      schools:      { val: 7,  max: 15 },
      practical:    { val: 10, max: 10 }
    },
    offerRange: '$410,000 – $435,000',
    tableOfferNote: '199 DOM, $15K cut, city water, great outbuildings',
    offerRationale: [
      '199 days on market with $15K cut signals motivated seller',
      'City water is a huge plus — eliminates well risk',
      '1922 farmhouse beautifully updated but age adds inspection risk',
      'Outbuilding package (shop, barn, coops, sheds) adds real value'
    ],
    offerStrategy: 'Offer $415K citing DOM and age of structure. Request seller credit for any inspection findings on 100-year-old systems. City water is leverage — fewer unknowns means faster close.',
    highlight: 'Beautifully updated 1922 farmhouse on city water with an exceptional outbuilding package — shop, barn, chicken coop, garden shed. 199 DOM and a price cut make this negotiable.',
    highlights: [
      { icon: '🏚️', text: '1922 farmhouse, beautifully updated interior' },
      { icon: '🔧', text: 'Shop, barn, chicken coop, storage & garden sheds' },
      { icon: '🚰', text: 'City water — no well maintenance or risk' },
      { icon: '📉', text: '199 DOM with $15K price cut from $465K' },
      { icon: '🌐', text: 'Spectrum DSL confirmed — reliable internet' },
      { icon: '🛒', text: 'Harvest Foods grocery 1 mile away' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas', value: '~3 min (Kettle Falls)' },
      { icon: '🛒', label: 'Grocery', value: '~3 min (Harvest Foods, 1 mi)' },
      { icon: '🏙️', label: 'City', value: '~25 min (Colville, pop ~5,000)' },
      { icon: '🏥', label: 'Hospital', value: '~25 min (Providence Mt. Carmel, Colville)' },
      { icon: '🏫', label: 'Schools', value: 'KF Elem 4/10, KF Mid 5/10, KF HS 3-4/10' },
      { icon: '📍', label: 'Farmington UT', value: '~12 hr', ref: true }
    ],
    pros: [
      'City water — rare for rural property, eliminates well issues',
      'Outstanding outbuilding package for homesteading',
      'Beautifully updated interior despite 1922 bones',
      'Spectrum DSL internet confirmed',
      'Walk to Harvest Foods grocery (1 mile)',
      '199 DOM + price cut = strong negotiating position',
      'No HOA — full agricultural freedom'
    ],
    cons: [
      '1922 structure — potential foundation, plumbing, electrical concerns',
      'Only ~5 acres estimated — less land than many competing listings',
      'Highway 395 frontage — road noise, less privacy',
      'Schools rated 3-5/10 across all levels',
      'HIGH-SEVERE wildfire risk (Crown Creek, Katy Creek, Hope fires 2025)',
      'Hospital is 25 min away in Colville',
      'Higher taxes at $3,825/yr'
    ],
    familyFit: [
      'Best for: family wanting turnkey homestead with outbuildings near town',
      'City water and internet make daily life practical',
      'Schools are weak — consider homeschool or Colville options'
    ],
    verifyBefore: [
      { title: 'Exact acreage', detail: 'Confirm parcel size — estimated at 5 acres' },
      { title: 'Foundation & structure', detail: '1922 home — full structural inspection critical' },
      { title: 'Electrical & plumbing', detail: 'Confirm all systems updated to modern code' },
      { title: 'Wildfire mitigation', detail: 'Check defensible space, fire-resistant materials after 2025 fires' }
    ],
    mustDo: [
      '! Full structural inspection — 100+ year old farmhouse',
      '! Verify electrical/plumbing are modernized (not just cosmetic updates)',
      'Confirm Spectrum DSL speeds and reliability',
      'Review 2025 wildfire proximity (Crown Creek, Katy Creek, Hope fires)'
    ],
    envHazards: {
      location: 'Kettle Falls, Stevens County, WA — NE Washington timber country',
      pills: [
        { level: 'severe', text: 'Wildfire — Crown Creek, Katy Creek, Hope fires 2025' },
        { level: 'mod', text: 'Flood — low-moderate, check creek/drainage proximity' },
        { level: 'low', text: 'Seismic — low historical activity' }
      ],
      note: 'Stevens County experienced multiple significant wildfires in 2025. Confirm defensible space and fire-resistant construction. City water provides fire suppression advantage.'
    }
  },

  // ─── p23 · Kettle Falls Eagle, WA ─────────────────────────────────────
  {
    id: 'p23', num: 23, navLabel: 'KF Eagle',
    address: '41 Eagle Ln', city: 'Kettle Falls', state: 'WA', zip: '99141', county: 'Stevens',
    price: 450000, beds: 3, bath: 2, sqft: '1,800', acres: '10', acresSub: 'est. estate w/ pond',
    yearBuilt: 1985, type: 'Site-Built', typeBadge: 'b-sfr',
    status: 'Active', statusClass: 'status-active', statusNote: 'Estate sale — sold AS IS, no disclosures',
    drive: '~12 hr', driveSub: 'from Farmington UT', toTown: '~5 min', toTownSub: 'to Kettle Falls',
    tax: '$3,825/yr', taxRate: 0.0085, taxLabel: 'Stevens Co. 0.85%',
    hoa: 0,
    image: 'https://photos.zillowstatic.com/fp/22f4bf805525d3d446906e5322bde02b-cc_ft_768.webp', listingLink: 'https://washingtonviews.com/listings/residential/41-eagle-ln-kettle-falls-wa-99141',
    score: 55,
    scores: {
      price:        { val: 7,  max: 15 },
      acreage:      { val: 10, max: 20 },
      privacy:      { val: 7,  max: 10 },
      outbuildings: { val: 10, max: 15 },
      town:         { val: 10, max: 15 },
      schools:      { val: 6,  max: 15 },
      practical:    { val: 5,  max: 10 }
    },
    offerRange: '$380,000 – $415,000',
    tableOfferNote: 'Estate sale, AS IS, no disclosures, closing after Apr 15',
    offerRationale: [
      'Estate sale with AS IS condition — no seller disclosures available',
      'Closing restricted to after April 15, 2026 limits buyer pool',
      'Unknown sqft, unknown year built — significant appraisal uncertainty',
      'Pond and 720 sqft shop with RV door add value but need inspection'
    ],
    offerStrategy: 'Open at $385K with strong inspection contingency. Estate sales often accept lower offers for certainty of close. No disclosures = budget for unknowns.',
    highlight: 'Estate property on ~10 acres with a pond, 720 sqft shop (converted to 1bd/1ba guest unit), and covered patio. Sold AS IS with no disclosures — high upside but requires thorough due diligence.',
    highlights: [
      { icon: '🏡', text: 'Estate property on ~10 acres with 1/4 acre pond' },
      { icon: '🔧', text: '720 sqft shop with RV door, converted to 1bd/1ba' },
      { icon: '🪵', text: '570 sqft covered patio for outdoor living' },
      { icon: '⚠️', text: 'Sold AS IS — no seller disclosures' },
      { icon: '📅', text: 'Closing restricted to after April 15, 2026' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas', value: '~5 min (Kettle Falls)' },
      { icon: '🛒', label: 'Grocery', value: '~5 min (Harvest Foods, KF)' },
      { icon: '🏙️', label: 'City', value: '~25 min (Colville, pop ~5,000)' },
      { icon: '🏥', label: 'Hospital', value: '~25 min (Providence Mt. Carmel, Colville)' },
      { icon: '🏫', label: 'Schools', value: 'KF Elem 4/10, KF Mid 5/10, KF HS 3-4/10' },
      { icon: '📍', label: 'Farmington UT', value: '~12 hr', ref: true }
    ],
    pros: [
      '~10 acres with a pond — great for homesteading and recreation',
      '720 sqft shop with RV door doubles as guest quarters',
      '570 sqft covered patio — excellent outdoor living space',
      'Estate sale pricing may be below market for motivated heirs',
      'Near Kettle Falls amenities (grocery, gas, schools)',
      'More acreage than p22 at the same price'
    ],
    cons: [
      'Sold AS IS with zero seller disclosures — major risk',
      'Closing restricted to after April 15, 2026',
      'Square footage and year built are unknown/estimated',
      'Estate properties often have deferred maintenance',
      'Same weak school ratings as all Kettle Falls properties',
      'HIGH-SEVERE wildfire risk (Stevens County 2025 fires)',
      'Unknown water source — well condition uncertain'
    ],
    familyFit: [
      'Best for: family comfortable with renovation risk who wants acreage + pond',
      'Guest unit in shop is great for extended family or rental income',
      'AS IS condition means budget 10-15% for surprises'
    ],
    verifyBefore: [
      { title: 'Full property inspection', detail: 'No disclosures — inspect everything: structure, roof, foundation, HVAC' },
      { title: 'Well & septic', detail: 'Confirm water source, flow rate, septic condition and capacity' },
      { title: 'Actual sqft & year', detail: 'Get county records for true square footage and construction year' },
      { title: 'Shop conversion permits', detail: 'Verify 1bd/1ba shop conversion was permitted and to code' }
    ],
    mustDo: [
      '! Full inspection — AS IS sale with zero disclosures',
      '! Verify shop-to-living conversion is permitted',
      '! Confirm well flow rate and water quality',
      'Get county assessor records for actual sqft and year built',
      'Budget 10-15% of purchase price for unknown repairs'
    ],
    envHazards: {
      location: 'Kettle Falls, Stevens County, WA — NE Washington timber country',
      pills: [
        { level: 'severe', text: 'Wildfire — Crown Creek, Katy Creek, Hope fires 2025' },
        { level: 'mod', text: 'Flood — low-moderate, pond may affect drainage' },
        { level: 'low', text: 'Seismic — low historical activity' }
      ],
      note: 'Same wildfire risk profile as other Kettle Falls properties. Pond may provide limited fire suppression but also affects drainage patterns.'
    }
  },

  // ─── p24 · Kettle Falls 598, WA ──────────────────────────────────────
  {
    id: 'p24', num: 24, navLabel: 'KF 598',
    address: '598 N 395 Hwy', city: 'Kettle Falls', state: 'WA', zip: '99141', county: 'Stevens',
    price: 460000, beds: 3, bath: 3, sqft: '2,672', acres: '10', acresSub: 'est. w/ creek, outbuildings',
    yearBuilt: 1972, type: 'Site-Built', typeBadge: 'b-sfr',
    status: 'Active', statusClass: 'status-active', statusNote: 'Relisted 6 days ago; ~22+ months cumulative DOM',
    drive: '~12 hr', driveSub: 'from Farmington UT', toTown: '~3 min', toTownSub: 'to Kettle Falls',
    tax: '$3,910/yr', taxRate: 0.0085, taxLabel: 'Stevens Co. 0.85%',
    hoa: 0,
    image: 'https://ssl.cdn-redfin.com/photo/241/bigphoto/309/202612309_0.jpg', listingLink: 'https://www.zillow.com/homes/598-N-395-Hwy-Kettle-Falls-WA-99141_rb/',
    score: 62,
    scores: {
      price:        { val: 7,  max: 15 },
      acreage:      { val: 10, max: 20 },
      privacy:      { val: 6,  max: 10 },
      outbuildings: { val: 12, max: 15 },
      town:         { val: 11, max: 15 },
      schools:      { val: 6,  max: 15 },
      practical:    { val: 10, max: 10 }
    },
    offerRange: '$390,000 – $420,000',
    tableOfferNote: '22+ mo DOM, $87K in cuts, 2 wells, creek, Zest $452K',
    offerRationale: [
      'Price slashed from $547K to $460K over 22+ months — extreme motivation',
      'Zestimate at $452,800 confirms current ask is near market',
      '2 dug wells, spring-fed pond, and creek with waterfall are unique water features',
      '1972 construction needs systems inspection but 2,672 sqft is spacious'
    ],
    offerStrategy: 'Offer $400K — this property has been on market 22+ months with $87K in cumulative cuts. Seller is clearly motivated. Creek and dual wells are selling points but also inspection items.',
    highlight: 'Spacious 2,672 sqft home on ~10 acres with a creek running the full property length, spring-fed pond, waterfall, 2 wells, and pole barn. Price slashed $87K over 22 months — motivated seller.',
    highlights: [
      { icon: '💧', text: 'Creek with waterfall running full property length' },
      { icon: '🪨', text: 'Spring-fed pond and 2 dug wells' },
      { icon: '📉', text: '$87K in price cuts: $547K → $460K over 22+ months' },
      { icon: '🔧', text: "18'x20' pole barn with lean-to + outbuildings" },
      { icon: '🏠', text: '2,672 sqft — largest home in KF batch' },
      { icon: '🛁', text: '3 full bathrooms' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas', value: '~3 min (Kettle Falls)' },
      { icon: '🛒', label: 'Grocery', value: '~3 min (Harvest Foods, KF)' },
      { icon: '🏙️', label: 'City', value: '~25 min (Colville, pop ~5,000)' },
      { icon: '🏥', label: 'Hospital', value: '~25 min (Providence Mt. Carmel, Colville)' },
      { icon: '🏫', label: 'Schools', value: 'KF Elem 4/10, KF Mid 5/10, KF HS 3-4/10' },
      { icon: '📍', label: 'Farmington UT', value: '~12 hr', ref: true }
    ],
    pros: [
      'Creek with waterfall + spring-fed pond — outstanding water features',
      '2 dug wells — water redundancy is rare and valuable',
      '2,672 sqft with 3 bathrooms — most space in KF batch',
      '$87K in price cuts over 22 months — highly negotiable',
      'Pole barn with lean-to plus multiple outbuildings',
      'Close to Kettle Falls amenities (3 min to grocery)',
      'Zestimate confirms price near market — not overpriced'
    ],
    cons: [
      '22+ months on market raises questions — what are buyers seeing?',
      '1972 construction — electrical, plumbing, insulation may need updating',
      'Highway 395 frontage — road noise reduces privacy',
      'Dug wells (not drilled) — may have lower reliability and quality',
      'Same weak KF school ratings (3-5/10)',
      'HIGH-SEVERE wildfire risk',
      'Higher price point than p22 with similar location'
    ],
    familyFit: [
      'Best for: family wanting water features, space, and negotiation leverage',
      'Creek and pond are magical for kids but need safety planning',
      '3 bathrooms handle a larger family well'
    ],
    verifyBefore: [
      { title: 'Why 22 months on market?', detail: 'Ask listing agent directly — foundation? Flood? Neighbor issues?' },
      { title: 'Well quality', detail: '2 dug wells — test water quality and flow rate for both' },
      { title: 'Creek flood risk', detail: 'Check if creek has ever flooded the property or access road' },
      { title: '1972 systems', detail: 'Inspect electrical panel, plumbing (galvanized?), insulation, HVAC age' }
    ],
    mustDo: [
      '! Ask agent why property sat 22+ months — there may be a dealbreaker',
      '! Test both dug wells for quality, flow rate, and reliability',
      '! Inspect 1972 electrical panel and plumbing for code compliance',
      'Verify creek does not create flood insurance requirement',
      'Check septic capacity for 3-bathroom home'
    ],
    envHazards: {
      location: 'Kettle Falls, Stevens County, WA — NE Washington timber country',
      pills: [
        { level: 'severe', text: 'Wildfire — Crown Creek, Katy Creek, Hope fires 2025' },
        { level: 'mod', text: 'Flood — creek on property, spring-fed pond' },
        { level: 'low', text: 'Seismic — low historical activity' }
      ],
      note: 'Creek running full property length adds flood consideration. Verify FEMA flood zone status and whether flood insurance is required. Wildfire risk remains severe for Stevens County.'
    }
  },

  // ─── p25 · Goldendale, WA ────────────────────────────────────────────
  {
    id: 'p25', num: 25, navLabel: 'Goldendale',
    address: '355 Tamarack', city: 'Goldendale', state: 'WA', zip: '98620', county: 'Klickitat',
    price: 485000, beds: 3, bath: 2, sqft: '1,714', acres: '5', acresSub: 'est. SkyView Acres lot, Ponderosa Park',
    yearBuilt: 1997, type: 'Site-Built', typeBadge: 'b-sfr',
    status: 'Active', statusClass: 'status-active', statusNote: '85 DOM, cut from $499,900',
    drive: '~12 hr', driveSub: 'from Farmington UT', toTown: '~12 min', toTownSub: 'to Goldendale',
    tax: '$5,189/yr', taxRate: 0.0107, taxLabel: 'Klickitat Co. 1.07%',
    hoa: 324,
    image: 'https://images.remax.com/webapi-properties-nwmls2/611524defa7e7674bf7ecbc555614dab81af005b-1-large.jpeg', listingLink: 'https://www.zillow.com/homes/355-Tamarack-Goldendale-WA-98620_rb/',
    score: 55,
    scores: {
      price:        { val: 6,  max: 15 },
      acreage:      { val: 8,  max: 20 },
      privacy:      { val: 7,  max: 10 },
      outbuildings: { val: 5,  max: 15 },
      town:         { val: 10, max: 15 },
      schools:      { val: 9,  max: 15 },
      practical:    { val: 10, max: 10 }
    },
    offerRange: '$450,000 – $475,000',
    tableOfferNote: '85 DOM, $15K cut, HOA $324/yr, observatory',
    offerRationale: [
      '85 DOM with $15K cut from $499,900 — some flexibility',
      'HOA at $324/yr and higher tax rate (1.07%) add to carrying costs',
      'Custom stick-built 1997 is quality construction but $/sqft is high',
      'Unique observatory feature appeals to niche buyer — limits comps'
    ],
    offerStrategy: 'Offer $455K citing carrying costs (HOA + high tax rate). The observatory is a unique feature that limits comparable sales — use that uncertainty to negotiate.',
    highlight: 'Custom 1997 stick-built home in Ponderosa Park with a roll-off roof observatory for stargazing under some of the darkest skies in the Northwest. HOA is minimal at $27/mo.',
    highlights: [
      { icon: '🔭', text: 'Roll-off open roof observatory — dark sky stargazing' },
      { icon: '🏗️', text: 'Custom stick-built 1997 — quality construction' },
      { icon: '🌲', text: 'Ponderosa Park setting in SkyView Acres' },
      { icon: '📉', text: '85 DOM, reduced $15K from $499,900' },
      { icon: '🏥', text: 'Klickitat Valley Health within 15 min' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas', value: '~12 min (Goldendale)' },
      { icon: '🛒', label: 'Grocery', value: '~12 min (Akins Fresh Markets)' },
      { icon: '🏙️', label: 'City', value: '~12 min (Goldendale, pop ~3,800)' },
      { icon: '🏥', label: 'Hospital', value: '~12 min (Klickitat Valley Health)' },
      { icon: '🏫', label: 'Schools', value: 'Primary 4/10, Middle 3-4/10, HS above avg' },
      { icon: '📍', label: 'Farmington UT', value: '~12 hr', ref: true }
    ],
    pros: [
      'Custom stick-built — superior to manufactured construction',
      'Roll-off observatory is truly unique — dark sky location',
      'Goldendale has decent services (hospital, grocery, schools)',
      'HS rated above average — best secondary school in this batch',
      'Low HOA at $27/mo ($324/yr) with community benefits',
      '1997 build — modern enough to avoid major system concerns'
    ],
    cons: [
      'Highest tax rate in batch at 1.07% ($5,189/yr)',
      'HOA adds ongoing cost and restrictions',
      'Only ~5 acres in a subdivision — less privacy than rural parcels',
      'No notable outbuildings mentioned',
      'HIGH wildfire risk (CWPP designated)',
      'MODERATE seismic risk — closer to Cascadia subduction zone',
      '$283/sqft is expensive for rural WA'
    ],
    familyFit: [
      'Best for: family wanting quality construction and decent schools',
      'Observatory is incredible for STEM education and hobby',
      'HOA subdivision means neighbors — less isolation than other options'
    ],
    verifyBefore: [
      { title: 'Exact acreage', detail: 'Confirm lot size in SkyView Acres subdivision' },
      { title: 'HOA restrictions', detail: 'Review CC&Rs — livestock? Outbuildings? Home business?' },
      { title: 'Observatory condition', detail: 'Inspect roll-off roof mechanism and foundation' },
      { title: 'Seismic retrofit', detail: 'Check if 1997 build meets current seismic standards for Cascadia zone' }
    ],
    mustDo: [
      '! Review HOA CC&Rs for livestock, outbuilding, and business restrictions',
      'Confirm acreage and setback requirements',
      'Inspect observatory roll-off roof mechanism',
      'Verify internet availability (not confirmed)'
    ],
    envHazards: {
      location: 'Goldendale, Klickitat County, WA — south-central WA near Columbia Gorge',
      pills: [
        { level: 'high', text: 'Wildfire — CWPP designated high risk' },
        { level: 'low', text: 'Flood — upland subdivision, minimal risk' },
        { level: 'mod', text: 'Seismic — closer to Cascadia subduction zone' }
      ],
      note: 'Klickitat County has elevated seismic risk compared to NE Washington properties due to proximity to the Cascadia subduction zone. CWPP (Community Wildfire Protection Plan) indicates recognized wildfire risk.'
    }
  },

  // ─── p26 · Priest River, ID ──────────────────────────────────────────
  {
    id: 'p26', num: 26, navLabel: 'Priest River',
    address: '104 Cat Rd', city: 'Priest River', state: 'ID', zip: '83856', county: 'Bonner',
    price: 400000, beds: 4, bath: 2, sqft: '1,500', acres: '10', acresSub: 'est. rural Bonner Co. parcel',
    yearBuilt: 0, type: 'Site-Built', typeBadge: 'b-sfr',
    status: 'Active', statusClass: 'status-active', statusNote: '',
    drive: '~9.5 hr', driveSub: 'from Farmington UT', toTown: '~10 min', toTownSub: 'to Priest River',
    tax: '$1,680/yr', taxRate: 0.0042, taxLabel: 'Bonner Co. 0.42%',
    hoa: 0,
    image: 'https://ssl.cdn-redfin.com/photo/240/bigphoto/651/25-9651_9.jpg', listingLink: 'https://www.redfin.com/WA/Priest-River/104-Cat-Rd-83856/home/',
    score: 54,
    scores: {
      price:        { val: 9,  max: 15 },
      acreage:      { val: 10, max: 20 },
      privacy:      { val: 7,  max: 10 },
      outbuildings: { val: 5,  max: 15 },
      town:         { val: 9,  max: 15 },
      schools:      { val: 4,  max: 15 },
      practical:    { val: 10, max: 10 }
    },
    offerRange: '$365,000 – $390,000',
    tableOfferNote: '4bd under $400K, low taxes, poor HS (1/10)',
    offerRationale: [
      '4 bedrooms at $400K is good value for N Idaho',
      'Bonner County taxes are extremely low at 0.42%',
      'Construction type unknown adds appraisal uncertainty',
      'Lamanna HS rated 1/10 with 67% graduation rate is a dealbreaker for many'
    ],
    offerStrategy: 'Offer $370K citing unknown construction details and school quality concerns. Low taxes are a plus but internet limitations reduce the buyer pool.',
    highlight: 'Four-bedroom home on ~10 acres near Priest River with the lowest tax rate in the batch (0.42%). Budget-friendly N Idaho option, but Lamanna HS at 1/10 is a serious concern for families.',
    highlights: [
      { icon: '🏠', text: '4 bedrooms — most in the batch' },
      { icon: '💰', text: 'Lowest tax rate at 0.42% ($1,680/yr)' },
      { icon: '🌲', text: '~10 acres in rural Bonner County' },
      { icon: '🛒', text: 'Safeway in Priest River — in-town grocery' },
      { icon: '⚠️', text: 'Lamanna HS rated 1/10, 67% grad rate' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas', value: '~10 min (Priest River)' },
      { icon: '🛒', label: 'Grocery', value: '~10 min (Safeway, Priest River)' },
      { icon: '🏙️', label: 'City', value: '~20 mi (Sandpoint, pop ~9,000)' },
      { icon: '🏥', label: 'Hospital', value: '~20 mi (Bonner General, Sandpoint)' },
      { icon: '🏫', label: 'Schools', value: 'PR Elem 5/10, Jr High 5/10, Lamanna HS 1/10' },
      { icon: '📍', label: 'Farmington UT', value: '~9.5 hr', ref: true }
    ],
    pros: [
      'Four bedrooms — handles a larger family',
      'Lowest property tax rate in the batch at 0.42%',
      '~10 acres for $400K — reasonable N Idaho pricing',
      'Safeway grocery in Priest River for everyday needs',
      'Shorter drive from Farmington (~9.5 hr vs 12 hr for WA)',
      'Sandpoint amenities accessible at ~20 mi',
      'No HOA'
    ],
    cons: [
      'Lamanna HS rated 1/10 with only 67% graduation rate',
      'Construction type and year unknown',
      'Limited rural internet — only 19% fiber, 22% cable coverage',
      'Hospital is 20 miles away in Sandpoint',
      'HIGH wildfire risk',
      'No outbuildings mentioned',
      'Priest River is a small town with limited employment'
    ],
    familyFit: [
      'Best for: family prioritizing bedrooms and low taxes over schools',
      'Lamanna HS is a non-starter — homeschool or Sandpoint alternatives needed',
      'Shorter drive from UT is a meaningful quality-of-life factor'
    ],
    verifyBefore: [
      { title: 'Construction type & year', detail: 'Confirm site-built vs manufactured and actual year built' },
      { title: 'Internet options', detail: 'Check Starlink, cable, or fiber availability at this address' },
      { title: 'Exact acreage', detail: 'Confirm parcel size — estimated at 10 acres' },
      { title: 'School alternatives', detail: 'Research Sandpoint school enrollment options or homeschool co-ops' }
    ],
    mustDo: [
      '! Confirm construction type — site-built vs manufactured changes everything',
      '! Research school alternatives to Lamanna HS (1/10)',
      'Verify internet availability — rural Bonner Co. coverage is spotty',
      'Full property inspection — unknown build year means unknown condition'
    ],
    envHazards: {
      location: 'Priest River, Bonner County, ID — N Idaho timber country',
      pills: [
        { level: 'high', text: 'Wildfire — forested N Idaho, high risk' },
        { level: 'low', text: 'Flood — upland terrain, minimal risk' },
        { level: 'low', text: 'Seismic — low historical activity' }
      ],
      note: 'Bonner County is heavily forested with significant wildfire risk. Confirm defensible space and access to fire suppression resources.'
    }
  },

  // ─── p27 · Sandpoint, ID ─────────────────────────────────────────────
  {
    id: 'p27', num: 27, navLabel: 'Sandpoint',
    address: '696 Raven Rdg', city: 'Sandpoint', state: 'ID', zip: '83864', county: 'Bonner',
    price: 475000, beds: 3, bath: 2, sqft: '1,568', acres: '5', acresSub: 'est. ridge lot',
    yearBuilt: 1994, type: 'Site-Built', typeBadge: 'b-sfr',
    status: 'Active', statusClass: 'status-active', statusNote: '$49K cut from $599K (Aug 2024)',
    drive: '~9.5 hr', driveSub: 'from Farmington UT', toTown: '~10 min', toTownSub: 'to Sandpoint',
    tax: '$2,310/yr', taxRate: 0.0042, taxLabel: 'Bonner Co. 0.42%',
    hoa: 0,
    image: 'https://ssl.cdn-redfin.com/photo/240/bigphoto/064/25-11064_2.jpg', listingLink: 'https://www.redfin.com/ID/Sandpoint/696-Raven-Rdg-83864/home/',
    score: 52,
    scores: {
      price:        { val: 4,  max: 15 },
      acreage:      { val: 8,  max: 20 },
      privacy:      { val: 6,  max: 10 },
      outbuildings: { val: 3,  max: 15 },
      town:         { val: 12, max: 15 },
      schools:      { val: 10, max: 15 },
      practical:    { val: 9,  max: 10 }
    },
    offerRange: '$490,000 – $525,000',
    tableOfferNote: '$49K cut, expensive for 1,568 sqft, best ID schools',
    offerRationale: [
      '$49K price cut from $599K shows seller flexibility',
      '$351/sqft is very high for rural Idaho — Sandpoint premium',
      'Best school ratings in the ID batch (above avg elementary & middle)',
      'Only ~5 acres — less land for the highest price in the batch'
    ],
    offerStrategy: 'Offer $500K — significant price cut already occurred but $/sqft remains high. Sandpoint market is cooling. Emphasize cash or strong financing and flexible close timeline.',
    highlight: 'Sandpoint offers the best town amenities and school ratings in the Idaho batch, but at a steep premium. $550K for 1,568 sqft on ~5 acres is the highest $/sqft in the group.',
    highlights: [
      { icon: '🏫', text: 'Best ID schools — Wash Elem & Sandpoint Mid above avg' },
      { icon: '🏙️', text: 'Sandpoint: vibrant town, restaurants, Lake Pend Oreille' },
      { icon: '📉', text: '$49K price cut from $599K' },
      { icon: '💰', text: 'Low taxes — Bonner Co. 0.42% ($2,310/yr)' },
      { icon: '🌐', text: 'Better internet than rural Priest River' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas', value: '~10 min (Sandpoint)' },
      { icon: '🛒', label: 'Grocery', value: '~10 min (multiple in Sandpoint)' },
      { icon: '🏙️', label: 'City', value: '~10 min (Sandpoint, pop ~9,000)' },
      { icon: '🏥', label: 'Hospital', value: '~10 min (Bonner General, Sandpoint)' },
      { icon: '🏫', label: 'Schools', value: 'Wash Elem above avg, Sandpoint Mid above avg, HS 5/10' },
      { icon: '📍', label: 'Farmington UT', value: '~9.5 hr', ref: true }
    ],
    pros: [
      'Best school ratings in the ID batch',
      'Sandpoint is a vibrant town with full services and culture',
      'Lake Pend Oreille recreation nearby',
      'Low Bonner County taxes at 0.42%',
      'Better internet infrastructure than rural alternatives',
      '$49K price cut shows negotiation room',
      'Hospital within 10 min'
    ],
    cons: [
      'Most expensive property in the batch at $550K',
      'Highest $/sqft — $351/sqft for 1,568 sqft',
      'Only ~5 estimated acres — least land per dollar',
      'No significant outbuildings mentioned',
      'HIGH wildfire risk (Sunset Fire Aug 2025)',
      'Sandpoint HS still only 5/10',
      'Sandpoint market has inflated prices due to lifestyle demand'
    ],
    familyFit: [
      'Best for: family prioritizing schools and town quality over acreage',
      'Sandpoint lifestyle is appealing but comes at a cost premium',
      'Less homesteading potential than other options in this batch'
    ],
    verifyBefore: [
      { title: 'Exact acreage', detail: 'Confirm lot size — estimated at 5 acres' },
      { title: 'Outbuildings', detail: 'Confirm if any shop/barn/garage exists on property' },
      { title: 'Wildfire history', detail: 'Check proximity to 2025 Sunset Fire burn area' },
      { title: 'Internet speeds', detail: 'Confirm available ISPs and speeds at this address' }
    ],
    mustDo: [
      '! Verify actual acreage with county records',
      'Confirm internet provider and speeds',
      'Standard home inspection — 1994 build in good shape but 30+ years old',
      'Check Sunset Fire (Aug 2025) proximity and any smoke/ash impact'
    ],
    envHazards: {
      location: 'Sandpoint, Bonner County, ID — N Idaho lake country',
      pills: [
        { level: 'high', text: 'Wildfire — Sunset Fire Aug 2025 nearby' },
        { level: 'low', text: 'Flood — ridge lot, minimal risk' },
        { level: 'low', text: 'Seismic — low historical activity' }
      ],
      note: 'The Sunset Fire in August 2025 burned near Sandpoint. Verify distance from burn area and any ongoing smoke or erosion concerns.'
    }
  },

  // ─── p28 · Saint Maries, ID ──────────────────────────────────────────
  {
    id: 'p28', num: 28, navLabel: 'St. Maries',
    address: '110 Highwood Dr', city: 'Saint Maries', state: 'ID', zip: '83861', county: 'Benewah',
    price: 499000, beds: 3, bath: 2, sqft: '2,100', acres: '10', acresSub: 'est. log home parcel',
    yearBuilt: 1994, type: 'Log Home', typeBadge: 'b-sfr',
    status: 'Active', statusClass: 'status-active', statusNote: 'On/off market since July 2022; $10K buyer incentive',
    drive: '~9 hr', driveSub: 'from Farmington UT', toTown: '~1 mi', toTownSub: 'to Saint Maries',
    tax: '$2,745/yr', taxRate: 0.0055, taxLabel: 'Benewah Co. 0.55%',
    hoa: 0,
    image: 'https://ssl.cdn-redfin.com/photo/240/bigphoto/191/25-11191_2.jpg', listingLink: 'https://www.redfin.com/ID/Saint-Maries/110-Highwood-Dr-83861/home/',
    score: 56,
    scores: {
      price:        { val: 7,  max: 15 },
      acreage:      { val: 10, max: 20 },
      privacy:      { val: 7,  max: 10 },
      outbuildings: { val: 7,  max: 15 },
      town:         { val: 10, max: 15 },
      schools:      { val: 5,  max: 15 },
      practical:    { val: 10, max: 10 }
    },
    offerRange: '$420,000 – $460,000',
    tableOfferNote: 'On/off since 2022, $10K incentive, log home, flood risk',
    offerRationale: [
      'On and off market since July 2022 — extreme motivation, likely stale listing',
      'Seller offering $10K buyer incentive signals desperation',
      'Log home construction limits buyer pool and financing options',
      'SIGNIFICANT flood risk after historic near-record river crest is a dealbreaker for many'
    ],
    offerStrategy: 'Open at $425K and request the $10K incentive on top. Property has been listed for 3.5 years — seller needs this sale. Flood risk and CdA Reservation concerns justify aggressive pricing.',
    highlight: 'Striking 1994 log home on ~10 acres just 1 mile from Saint Maries. Seller has been trying since 2022 and is offering $10K buyer incentive. Flood history and CdA Reservation jurisdiction are the key concerns.',
    highlights: [
      { icon: '🪵', text: '1994 log home construction — unique character' },
      { icon: '💰', text: '$10K buyer incentive from motivated seller' },
      { icon: '📉', text: 'On/off market since July 2022 — 3.5+ years' },
      { icon: '🛒', text: '2 grocery stores within 1 mile' },
      { icon: '🏥', text: 'Benewah Community Hospital ~1 mile (19-bed)' },
      { icon: '⚠️', text: 'SIGNIFICANT flood risk — 100+ homes flooded historically' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas', value: '~1 mi (Saint Maries)' },
      { icon: '🛒', label: 'Grocery', value: '~1 mi (2 stores in St. Maries)' },
      { icon: '🏙️', label: 'City', value: '~1 mi (Saint Maries, pop ~2,500)' },
      { icon: '🏥', label: 'Hospital', value: '~1 mi (Benewah Community, 19-bed)' },
      { icon: '🏫', label: 'Schools', value: 'Heyburn Elem unrated/bottom 6%, St. Maries below avg' },
      { icon: '📍', label: 'Farmington UT', value: '~9 hr', ref: true }
    ],
    pros: [
      'Log home character — beautiful and unique construction',
      '$10K buyer incentive + 3.5 years on market = huge leverage',
      'Walk to town — grocery, hospital, gas all within 1 mile',
      '~10 acres for under $500K in Idaho',
      'Internet options exist (cable 42.5%, DSL 58%, fiber 31%)',
      'Low taxes at 0.55% ($2,745/yr)',
      'Shortest drive from Farmington in the ID batch (~9 hr)'
    ],
    cons: [
      'SIGNIFICANT flood risk — historic near-record crest flooded 100+ homes',
      'On/off market since 2022 — something is turning buyers away',
      'CdA Reservation jurisdiction — may affect permits, utilities, legal issues',
      'Schools are poor — Heyburn Elem bottom 6%, St. Maries below avg',
      'Log homes require specialized maintenance (chinking, staining, pest control)',
      '19-bed hospital is very limited for serious medical needs',
      'Small isolated town with minimal employment'
    ],
    familyFit: [
      'Best for: family drawn to log home living who can manage flood risk',
      'Walkable to town is great for daily life but flood zone is real',
      'Schools are very weak — homeschool planning essential'
    ],
    verifyBefore: [
      { title: 'Flood zone status', detail: 'Get FEMA flood map — is this property in 100-year floodplain?' },
      { title: 'CdA Reservation', detail: 'Verify jurisdictional implications for permits, utilities, and property rights' },
      { title: 'Why 3.5 years?', detail: 'Ask agent directly what has prevented sale since 2022' },
      { title: 'Log home condition', detail: 'Inspect chinking, logs for rot/insects, roof condition, settling' }
    ],
    mustDo: [
      '! Determine FEMA flood zone and flood insurance cost',
      '! Verify CdA Reservation jurisdiction and any restrictions',
      '! Ask why property has been on/off market for 3.5 years',
      '! Specialized log home inspection — rot, insects, chinking, settling',
      'Get flood insurance quote before making offer'
    ],
    envHazards: {
      location: 'Saint Maries, Benewah County, ID — confluence of St. Joe & St. Maries rivers',
      pills: [
        { level: 'high', text: 'Wildfire — forested N Idaho, high risk' },
        { level: 'severe', text: 'Flood — historic near-record crest, 100+ homes flooded' },
        { level: 'low', text: 'Seismic — low historical activity' },
        { level: 'special', text: "CdA Reservation — jurisdiction concerns" }
      ],
      note: 'Saint Maries has experienced historic flooding with near-record river crests affecting 100+ homes. The property may fall within Coeur d\'Alene Reservation boundaries, which can affect permitting and legal jurisdiction.'
    }
  },

  // ─── p29 · Helena, MT ────────────────────────────────────────────────
  {
    id: 'p29', num: 29, navLabel: 'Helena',
    address: '5747 Eagle Ridge Rd', city: 'Helena', state: 'MT', zip: '59602', county: 'Lewis & Clark',
    price: 425000, beds: 4, bath: 2, sqft: '2,446', acres: '5', acresSub: 'est. Eagle Ridge parcel',
    yearBuilt: 1975, type: 'Site-Built', typeBadge: 'b-sfr',
    status: 'Active', statusClass: 'status-active', statusNote: 'Recently listed; Movoto shows $500K — use MLS $425K',
    drive: '~8 hr', driveSub: 'from Farmington UT', toTown: '~12 min', toTownSub: 'to Helena',
    tax: '$1,600/yr', taxRate: 0.0085, taxLabel: 'Lewis & Clark Co. 0.85%',
    hoa: 0,
    image: '#', listingLink: 'https://www.redfin.com/MT/Helena/5747-Eagle-Ridge-Rd-59602/home/',
    score: 66,
    scores: {
      price:        { val: 9,  max: 15 },
      acreage:      { val: 8,  max: 20 },
      privacy:      { val: 6,  max: 10 },
      outbuildings: { val: 6,  max: 15 },
      town:         { val: 13, max: 15 },
      schools:      { val: 14, max: 15 },
      practical:    { val: 10, max: 10 }
    },
    offerRange: '$400,000 – $425,000',
    tableOfferNote: 'Best schools (HS 9/10!), 4bd/2,446 sqft, state capital',
    offerRationale: [
      'Recently listed — less negotiation room, but Movoto/MLS price discrepancy suggests uncertainty',
      '2,446 sqft with 4 bedrooms at $425K is excellent value for a state capital',
      'Helena HS rated 9/10 — best secondary school in the entire batch',
      '1975 build will need systems inspection but bones are solid'
    ],
    offerStrategy: 'Offer $405K if recently listed — tight market but price confusion between $425K and $500K listings may create opportunity. Emphasize strong financing and willingness to close on seller timeline.',
    highlight: 'The standout property in Batch 2. Helena offers a state capital with excellent schools (HS 9/10!), a major hospital, good internet, and the shortest drive from Farmington at ~8 hours. Spacious 2,446 sqft with 4 bedrooms.',
    highlights: [
      { icon: '🏫', text: 'Helena HS 9/10 — best school rating in the entire batch' },
      { icon: '🏥', text: "St. Peter's Health — 47 specialties, 119 physicians" },
      { icon: '🏠', text: '2,446 sqft, 4 bed — most space per dollar' },
      { icon: '🌐', text: 'Spectrum 73% coverage, fiber available' },
      { icon: '🚗', text: 'Shortest drive: ~8 hr from Farmington UT' },
      { icon: '🏛️', text: 'State capital — government jobs, full services' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas', value: '~12 min (Helena)' },
      { icon: '🛒', label: 'Grocery', value: '~12 min (multiple in Helena)' },
      { icon: '🏙️', label: 'City', value: '~12 min (Helena, pop ~34,000, state capital)' },
      { icon: '🏥', label: 'Hospital', value: "~12 min (St. Peter's Health, 47 specialties)" },
      { icon: '🏫', label: 'Schools', value: 'Elem avg ~6/10, Helena HS 9/10, Capital High 7/10' },
      { icon: '📍', label: 'Farmington UT', value: '~8 hr', ref: true }
    ],
    pros: [
      'Helena HS rated 9/10 — exceptional for rural western search',
      "St. Peter's Health: 47 specialties, 119 physicians — real hospital",
      '2,446 sqft with 4 bedrooms at $425K — excellent $/sqft',
      'State capital with government jobs and full city services',
      'Spectrum cable 73% + fiber available — best internet in batch',
      'Shortest drive from Farmington at ~8 hours',
      'Low taxes at $1,600/yr despite state capital location'
    ],
    cons: [
      '1975 construction — electrical, plumbing, insulation may need updating',
      'Only ~5 estimated acres — Helena is more suburban than rural',
      'HIGH wildfire risk (Scratch Gravel Hills WUI, 2012 Corral Fire)',
      'MODERATE seismic risk (M6.2 earthquake in 1935)',
      '2 Superfund sites nearby (Upper Tenmile Creek, Scratchgravel Landfill)',
      'No outbuildings mentioned',
      'Price discrepancy ($425K vs $500K on Movoto) needs clarification'
    ],
    familyFit: [
      'Best for: family where school quality and medical access are top priorities',
      'Helena offers the most "normal" lifestyle of any property in this batch',
      'Less homestead potential but far more practical for daily family life'
    ],
    verifyBefore: [
      { title: 'Correct price', detail: 'Confirm $425K (MLS) vs $500K (Movoto) — which is current?' },
      { title: 'Exact acreage', detail: 'Confirm lot size — 5 acres estimated' },
      { title: 'Superfund proximity', detail: 'Verify distance from Upper Tenmile Creek & Scratchgravel Landfill sites' },
      { title: '1975 systems', detail: 'Inspect electrical, plumbing, HVAC, insulation, and foundation' }
    ],
    mustDo: [
      '! Confirm actual listing price ($425K vs $500K discrepancy)',
      '! Full inspection of 1975 systems — electrical, plumbing, HVAC',
      'Test well water for mining contaminants (Superfund area)',
      'Verify wildfire defensible space in Scratch Gravel Hills WUI'
    ],
    envHazards: {
      location: 'Helena, Lewis & Clark County, MT — state capital, Scratch Gravel Hills',
      pills: [
        { level: 'high', text: 'Wildfire — Scratch Gravel Hills WUI, 2012 Corral Fire' },
        { level: 'low', text: 'Flood — upland Eagle Ridge location' },
        { level: 'mod', text: 'Seismic — M6.2 quake in 1935' },
        { level: 'special', text: 'Superfund — Upper Tenmile Creek & Scratchgravel Landfill' }
      ],
      note: 'Helena experienced a M6.2 earthquake in 1935 and is in a recognized seismic zone. Two Superfund sites (Upper Tenmile Creek Mining Area and Scratchgravel Landfill) are nearby. Test well water.'
    }
  },

  // ─── p30 · Roundup, MT ───────────────────────────────────────────────
  {
    id: 'p30', num: 30, navLabel: 'Roundup',
    address: '119 Log Cabin Rd', city: 'Roundup', state: 'MT', zip: '59072', county: 'Musselshell',
    price: 449900, beds: 3, bath: 2, sqft: '980', acres: '34.64', acresSub: 'confirmed — box canyon parcel',
    yearBuilt: 0, type: 'Site-Built', typeBadge: 'b-sfr',
    status: 'Active', statusClass: 'status-active', statusNote: 'Nicely updated, NOT manufactured',
    drive: '~9 hr', driveSub: 'from Farmington UT', toTown: '~18 min', toTownSub: 'to Roundup',
    tax: '$4,184/yr', taxRate: 0.0093, taxLabel: 'Musselshell Co. 0.93%',
    hoa: 0,
    image: 'https://photos.zillowstatic.com/fp/a05c9ff748a116ef663470cc3328d772-cc_ft_768.webp', listingLink: 'https://www.zillow.com/homes/119-Log-Cabin-Rd-Roundup-MT-59072_rb/',
    score: 65,
    scores: {
      price:        { val: 8,  max: 15 },
      acreage:      { val: 18, max: 20 },
      privacy:      { val: 9,  max: 10 },
      outbuildings: { val: 13, max: 15 },
      town:         { val: 7,  max: 15 },
      schools:      { val: 4,  max: 15 },
      practical:    { val: 6,  max: 10 }
    },
    offerRange: '$410,000 – $440,000',
    tableOfferNote: '34.64 ac confirmed, box canyon, shop w/ HVAC, 980 sqft home',
    offerRationale: [
      '34.64 confirmed acres — best acreage in the entire batch by far',
      'Large shop with electric, heat, and AC is a major asset',
      '980 sqft home is very small for a family — limits buyer pool',
      'Bull Mountains location likely satellite-only internet'
    ],
    offerStrategy: 'Offer $415K — the land and shop carry most of the value. The 980 sqft home is a limitation that reduces competition. Emphasize the small home as a negotiation point while valuing the acreage and outbuildings.',
    highlight: 'The most land in the batch at 34.64 confirmed acres in a private box canyon with a large shop (electric/heat/AC), horse shelters, and chicken coop. The 980 sqft home is small but nicely updated.',
    highlights: [
      { icon: '🏔️', text: '34.64 acres in a box canyon — ultimate privacy' },
      { icon: '🔧', text: 'Large shop with electric, heat, and AC' },
      { icon: '🐴', text: 'Horse shelters and chicken coop included' },
      { icon: '🏠', text: 'Nicely updated home (NOT manufactured)' },
      { icon: '⚠️', text: '980 sqft — smallest home in the batch' },
      { icon: '🔥', text: 'SEVERE wildfire — 100% properties at risk' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas', value: '~18 min (Roundup)' },
      { icon: '🛒', label: 'Grocery', value: "~18 min (Van Dyke's Market, Roundup)" },
      { icon: '🏙️', label: 'City', value: '~50 min (Billings, pop ~120,000)' },
      { icon: '🏥', label: 'Hospital', value: '~18 min (Roundup Memorial, Level 5 trauma)' },
      { icon: '🏫', label: 'Schools', value: 'Roundup Elem avg, Roundup HS 2/10' },
      { icon: '📍', label: 'Farmington UT', value: '~9 hr', ref: true }
    ],
    pros: [
      '34.64 confirmed acres — most land in the entire batch',
      'Box canyon setting — natural privacy and wind protection',
      'Large shop with electric, heat, and AC — year-round workspace',
      'Horse shelters + chicken coop — ready for livestock',
      'Nicely updated home despite small size',
      'Billings (pop ~120K) accessible at ~50 min for major services',
      'No HOA — full agricultural freedom'
    ],
    cons: [
      '980 sqft is very small for a family — may need to add on',
      'SEVERE wildfire risk — 100% of Musselshell properties at risk',
      'Roundup HS rated 2/10',
      'Bull Mountains location likely satellite-only internet',
      'Roundup Memorial is Level 5 trauma — very basic emergency care',
      '~18 min to nearest grocery (Roundup)',
      'Higher taxes at $4,184/yr (0.93%)'
    ],
    familyFit: [
      'Best for: family prioritizing acreage, privacy, and outbuildings over home size',
      '980 sqft will be tight — plan for an addition or use shop as bonus space',
      'Roundup HS at 2/10 means homeschool or Billings commute for secondary'
    ],
    verifyBefore: [
      { title: 'Internet options', detail: 'Bull Mountains likely satellite only — confirm Starlink viability' },
      { title: 'Water source', detail: 'Confirm well depth, flow rate, and quality' },
      { title: 'Road access', detail: 'Verify year-round access — box canyon roads may be seasonal' },
      { title: 'Fire mitigation', detail: 'Assess defensible space in Ponderosa pine/Bull Mountains setting' }
    ],
    mustDo: [
      '! Verify internet — Bull Mountains likely satellite only',
      '! Assess wildfire defensible space — 100% risk rating is serious',
      '! Confirm year-round road access to box canyon',
      'Test well water quality and flow rate',
      'Inspect shop systems (electric, heat, AC) for condition'
    ],
    envHazards: {
      location: 'Roundup, Musselshell County, MT — Bull Mountains/Ponderosa pine',
      pills: [
        { level: 'severe', text: 'Wildfire — 100% properties at risk, Bull Mtns/Ponderosa' },
        { level: 'low', text: 'Flood — box canyon may channel water but upland' },
        { level: 'low', text: 'Seismic — low historical activity' }
      ],
      note: 'Musselshell County rates 100% of properties at wildfire risk. Bull Mountains setting with Ponderosa pines creates extreme fire conditions. Box canyon topography may channel fire — defensible space is critical.'
    }
  },

  // ─── p31 · Moorcroft, WY ─────────────────────────────────────────────
  {
    id: 'p31', num: 31, navLabel: 'Moorcroft',
    address: '91 Juniper Hills Rd', city: 'Moorcroft', state: 'WY', zip: '82721', county: 'Crook',
    price: 479900, beds: 3, bath: 2, sqft: '1,850', acres: '15', acresSub: 'est. Black Hills foothills',
    yearBuilt: 1995, type: 'Site-Built', typeBadge: 'b-sfr',
    status: 'Active', statusClass: 'status-active', statusNote: 'DOM: 329 days, no price reductions',
    drive: '~9 hr', driveSub: 'from Farmington UT', toTown: '~10 min', toTownSub: 'to Moorcroft',
    tax: '$2,400/yr', taxRate: 0.0050, taxLabel: 'Crook Co. 0.50% — no WY income tax',
    hoa: 0,
    image: 'https://ssl.cdn-redfin.com/photo/604/bigphoto/992/25-1992_3.jpg', listingLink: 'https://www.redfin.com/WY/Moorcroft/91-Juniper-Hills-Rd-82721/home/',
    score: 58,
    scores: {
      price:        { val: 7,  max: 15 },
      acreage:      { val: 12, max: 20 },
      privacy:      { val: 7,  max: 10 },
      outbuildings: { val: 5,  max: 15 },
      town:         { val: 8,  max: 15 },
      schools:      { val: 10, max: 15 },
      practical:    { val: 9,  max: 10 }
    },
    offerRange: '$425,000 – $460,000',
    tableOfferNote: '329 DOM, no reductions, WY no income tax',
    offerRationale: [
      '329 days on market with zero price reductions signals seller inflexibility',
      'WY no income tax is a significant financial benefit',
      'Active oil/gas and historic coal mining in area may deter some buyers',
      'Crook County market is thin — limited comparable sales'
    ],
    offerStrategy: 'Start at $425K citing 329 DOM and rural location. Seller has held firm — may need patient negotiation or walking away.',
    highlight: 'Black Hills foothills property on 15 acres with no state income tax. Long DOM suggests room to negotiate despite seller holding firm.',
    highlights: [
      { icon: '🏔️', text: '15 acres in Black Hills foothills' },
      { icon: '💰', text: 'Wyoming — zero state income tax' },
      { icon: '🏫', text: 'Moorcroft schools 5/10 — decent for rural WY' },
      { icon: '⏰', text: '329 DOM — potential negotiation leverage' },
      { icon: '🛢️', text: 'Active oil/gas region — economic activity' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas', value: '~10 min (Moorcroft)' },
      { icon: '🛒', label: 'Grocery', value: "~10 min (Diehl's Supermarket, Moorcroft)" },
      { icon: '🏙️', label: 'City', value: '~45 min (Gillette, pop ~33K)' },
      { icon: '🏥', label: 'Hospital', value: '~25 min (Crook County Hospital, Sundance); ~45 min (Campbell County Memorial, Gillette)' },
      { icon: '🏫', label: 'Schools', value: 'Moorcroft K-8 5/10, Moorcroft HS 5/10' },
      { icon: '📍', label: 'Farmington UT', value: '~9 hr', ref: true }
    ],
    pros: [
      'Wyoming has zero state income tax — significant savings',
      '15 acres in scenic Black Hills foothills',
      'Site-built 1995 home in reasonable condition',
      'Moorcroft schools rated 5/10 — decent for rural area',
      'Active local economy from oil/gas industry',
      'Low property tax rate at 0.50%'
    ],
    cons: [
      '329 days on market — seller refusing to reduce price',
      'Internet likely satellite-only in rural location (98% coverage in town only)',
      'Active oil/gas and historic coal mining in area',
      '9 hr drive from Farmington UT',
      'Moorcroft is very small — limited amenities',
      'Black Hills foothills = 100% wildfire risk zone',
      'Harsh Wyoming winters with high winds'
    ],
    familyFit: [
      'Best for: family wanting tax-free state with rural acreage and decent schools',
      'Challenge: very remote from Farmington, internet likely satellite only',
      'The no-income-tax benefit could offset higher property cost long-term'
    ],
    verifyBefore: [
      { title: 'Exact acreage', detail: 'Confirm parcel size — estimated at 15 acres' },
      { title: 'Internet options', detail: 'Check Starlink viability; confirm 98% coverage applies to this address' },
      { title: 'Oil/gas leases', detail: 'Check for active mineral rights or drilling leases on the parcel' },
      { title: 'Well & septic', detail: 'Confirm water source, flow rate, and septic condition' }
    ],
    mustDo: [
      '! Check mineral rights — active oil/gas region may have subsurface leases',
      'Verify internet options for remote work (satellite/Starlink)',
      'Inspect for coal mining subsidence or contamination',
      'Get wildfire defensible space assessment'
    ],
    envHazards: {
      location: 'Moorcroft, Crook County, WY — Black Hills foothills',
      pills: [
        { level: 'severe', text: 'Wildfire — 100% of area at risk, Black Hills foothills' },
        { level: 'low', text: 'Flood — minor risk' },
        { level: 'mod', text: 'Industrial — active oil/gas, historic coal mining' }
      ],
      note: 'Crook County rates 100% of properties at wildfire risk due to Black Hills Ponderosa pine forests. Active oil and gas drilling in the region — verify mineral rights and proximity to wells.'
    }
  },

  // ─── p32 · Westcliffe, CO ──────────────────────────────────────────────
  {
    id: 'p32', num: 32, navLabel: 'Westcliffe',
    address: '832 Wykagyl Rd', city: 'Westcliffe', state: 'CO', zip: '81252', county: 'Custer',
    price: 420000, beds: 3, bath: 2, sqft: '1,725', acres: '6', acresSub: 'est. mountain parcel',
    yearBuilt: 1985, type: 'Site-Built', typeBadge: 'b-sfr',
    status: 'Active', statusClass: 'status-active', statusNote: 'Multiple price reductions from ~$480K',
    drive: '~9.5 hr', driveSub: 'from Farmington UT', toTown: '~15 min', toTownSub: 'to Westcliffe',
    tax: '$1,680/yr', taxRate: 0.0040, taxLabel: 'Custer Co. 0.40%',
    hoa: 0,
    image: 'https://ssl.cdn-redfin.com/photo/94/bigphoto/167/9299167_0.jpg', listingLink: 'https://www.redfin.com/CO/Westcliffe/832-Wykagyl-Rd-81252/home/',
    score: 56,
    scores: {
      price:        { val: 9,  max: 15 },
      acreage:      { val: 8,  max: 20 },
      privacy:      { val: 8,  max: 10 },
      outbuildings: { val: 4,  max: 15 },
      town:         { val: 7,  max: 15 },
      schools:      { val: 13, max: 15 },
      practical:    { val: 7,  max: 10 }
    },
    offerRange: '$375,000 – $405,000',
    tableOfferNote: 'Multiple reductions from $480K, $/sqft below median',
    offerRationale: [
      'Already reduced $60K from $480K — seller is motivated',
      '$/sqft at $243 vs Westcliffe median $306 — already below market',
      'DOM ~158 days in a slow mountain market',
      '1985 construction may need updates — factor in renovation budget',
      'Satellite internet limits buyer pool'
    ],
    offerStrategy: 'Offer $380K highlighting the $60K in reductions already taken, satellite-only internet, and 1985 construction needing updates. Seller has shown willingness to negotiate.',
    highlight: 'Mountain property on 6 acres near Westcliffe at $243/sqft — well below the $306 median. Multiple price reductions signal motivated seller.',
    highlights: [
      { icon: '💰', text: '$243/sqft vs $306 Westcliffe median — value buy' },
      { icon: '🏔️', text: '6 acres with Sangre de Cristo mountain views' },
      { icon: '📉', text: 'Reduced $60K from original $480K asking' },
      { icon: '🏫', text: 'Custer County HS 7/10 — strong for rural CO' },
      { icon: '🔥', text: 'High wildfire risk zone' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas', value: '~15 min (Westcliffe)' },
      { icon: '🛒', label: 'Grocery', value: '~15 min (Westcliffe Supermarket — limited)' },
      { icon: '🏙️', label: 'City', value: '~45 min (Canon City, pop ~17K)' },
      { icon: '🏥', label: 'Hospital', value: 'Clinic only in Westcliffe; ~45 min (St. Thomas More, Canon City)' },
      { icon: '🏫', label: 'Schools', value: 'Custer Elem 3/10, Middle 3/10, Custer County HS 7/10' },
      { icon: '📍', label: 'Farmington UT', value: '~9.5 hr', ref: true }
    ],
    pros: [
      'Below-market $/sqft ($243 vs $306 median) — genuine value',
      'Seller motivated — $60K in reductions already',
      '6 acres with mountain privacy and Sangre de Cristo views',
      'Custer County HS rated 7/10 — best high school in the area',
      'Low property tax rate at 0.40%',
      'Quiet mountain community with dark sky appeal'
    ],
    cons: [
      'Internet is satellite only at rural address',
      'Elementary and middle schools only 3/10',
      'Hospital is 45 min away in Canon City (clinic only locally)',
      'High wildfire risk zone',
      'Low-moderate seismic risk from Rio Grande Rift',
      '1985 home likely needs updates — plumbing, electrical, insulation',
      'Limited grocery options in Westcliffe'
    ],
    familyFit: [
      'Best for: family wanting mountain living with decent high school at below-market price',
      'Challenge: satellite internet and 45-min hospital drive are serious concerns',
      'Elementary schools at 3/10 may require homeschool supplement'
    ],
    verifyBefore: [
      { title: 'Home condition', detail: '1985 construction — inspect plumbing, electrical, roof, and insulation' },
      { title: 'Internet options', detail: 'Confirm Starlink availability; no cable/fiber expected' },
      { title: 'Water source', detail: 'Verify well flow rate and water quality' },
      { title: 'Wildfire insurance', detail: 'Get quotes — high-risk zone may mean expensive or unavailable coverage' }
    ],
    mustDo: [
      '! Get wildfire insurance quotes before committing — high-risk zone',
      'Full home inspection for 1985 systems (plumbing, electrical, HVAC)',
      'Verify Starlink viability for remote work',
      'Check road maintenance responsibility for Wykagyl Rd'
    ],
    envHazards: {
      location: 'Westcliffe, Custer County, CO — Sangre de Cristo foothills',
      pills: [
        { level: 'high', text: 'Wildfire — high-risk mountain zone' },
        { level: 'low', text: 'Flood — upland terrain' },
        { level: 'mod', text: 'Seismic — low-moderate (Rio Grande Rift)' }
      ],
      note: 'Custer County is in a high wildfire risk zone. The Rio Grande Rift creates low-moderate seismic activity. Nearest full hospital is 45 min in Canon City.'
    }
  },

  // ─── p33 · Canon City, CO ──────────────────────────────────────────────
  {
    id: 'p33', num: 33, navLabel: 'Canon City',
    address: '1410 Ranch Rd', city: 'Canon City', state: 'CO', zip: '81212', county: 'Fremont',
    price: 445000, beds: 3, bath: 2, sqft: '1,407', acres: '40.59', acresSub: 'confirmed — borders BLM land',
    yearBuilt: 1994, type: 'Manufactured', typeBadge: 'b-mfg',
    status: 'Active', statusClass: 'status-active', statusNote: 'DOM: 147 days, no price changes',
    drive: '~8.5 hr', driveSub: 'from Farmington UT', toTown: '~35 min', toTownSub: 'to Canon City',
    tax: '$723/yr', taxRate: 0.0054, taxLabel: 'Fremont Co. ~0.54% (2024 actual $723)',
    hoa: 0,
    image: 'https://ssl.cdn-redfin.com/photo/124/bigphoto/264/7341264_4.jpg', listingLink: 'https://www.redfin.com/CO/Canon-City/1410-Ranch-Rd-81212/home/',
    score: 67,
    scores: {
      price:        { val: 8,  max: 15 },
      acreage:      { val: 18, max: 20 },
      privacy:      { val: 9,  max: 10 },
      outbuildings: { val: 10, max: 15 },
      town:         { val: 6,  max: 15 },
      schools:      { val: 10, max: 15 },
      practical:    { val: 6,  max: 10 }
    },
    offerRange: '$390,000 – $425,000',
    tableOfferNote: 'Mfg home but 40 acres + BLM border, panoramic views',
    offerRationale: [
      '40.59 confirmed acres bordering BLM = exceptional land value at ~$11K/acre',
      'Manufactured home limits appreciation and financing options',
      '35 min from Canon City — very rural with satellite internet likely',
      '147 DOM with no price changes — seller firm but property has been sitting',
      'Panoramic views and 20×40 garage add value above typical mfg home'
    ],
    offerStrategy: 'Lead with $395K citing manufactured home depreciation offset by exceptional land. The 40 acres bordering BLM is the real asset — price the home low and the land fair.',
    highlight: '40+ confirmed acres bordering BLM land with panoramic views including Pikes Peak. Manufactured home, but the land is the star — 20×40 garage and Generac backup included.',
    highlights: [
      { icon: '🏞️', text: '40.59 confirmed acres bordering BLM land' },
      { icon: '🏔️', text: 'Panoramic views including Pikes Peak' },
      { icon: '🔧', text: '20×40 garage + Generac backup generator' },
      { icon: '💰', text: '$723/yr actual taxes — remarkably low' },
      { icon: '🏭', text: 'Manufactured 1994 — limits financing' },
      { icon: '🔥', text: 'High wildfire risk zone' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas', value: '~35 min (Canon City)' },
      { icon: '🛒', label: 'Grocery', value: '~35 min (Safeway/Walmart, Canon City)' },
      { icon: '🏙️', label: 'City', value: '~35 min (Canon City, pop ~17K)' },
      { icon: '🏥', label: 'Hospital', value: '~35 min (St. Thomas More, Canon City)' },
      { icon: '🏫', label: 'Schools', value: 'Lincoln Sci/Tech 6/10, Canon City Mid 6/10, Canon City HS 3/10' },
      { icon: '📍', label: 'Farmington UT', value: '~8.5 hr', ref: true }
    ],
    pros: [
      '40.59 confirmed acres — largest parcel in the batch',
      'Borders BLM land — effectively unlimited open space',
      'Panoramic mountain views including Pikes Peak',
      '20×40 garage and Generac backup generator',
      'Actual taxes only $723/yr — extremely low',
      'Well confirmed at 5 GPM',
      'Site-built acreage nearby sells for much more'
    ],
    cons: [
      'Manufactured home — financing limitations and depreciation',
      '35 min from Canon City for any services',
      'Internet likely satellite only at this distance from town',
      'Canon City HS only 3/10 — weak high school',
      'High wildfire risk zone',
      'Low-moderate flood risk',
      '1994 manufactured home may need roof/system updates'
    ],
    familyFit: [
      'Best for: family wanting maximum acreage and BLM border at an affordable price',
      'Challenge: 35-min drive to everything and satellite internet',
      'Consider this a land purchase with a livable home — not a home purchase with land'
    ],
    verifyBefore: [
      { title: 'Manufactured home condition', detail: 'Full inspection — 1994 mfg home roof, subfloor, HUD tags, plumbing' },
      { title: 'BLM boundary', detail: 'Confirm exact BLM boundary and access — verify no pending land disposals' },
      { title: 'Internet options', detail: 'Starlink viability check — 35 min from town likely means satellite only' },
      { title: 'Road access', detail: 'Verify year-round road access to Ranch Rd — winter snow conditions' }
    ],
    mustDo: [
      '! Inspect manufactured home thoroughly — 1994 HUD code, roof, plumbing, subfloor',
      '! Verify BLM boundary and continued public land access',
      'Confirm well at 5 GPM with independent test',
      'Check wildfire insurance availability and cost'
    ],
    envHazards: {
      location: 'Canon City area, Fremont County, CO — remote ranch land bordering BLM',
      pills: [
        { level: 'high', text: 'Wildfire — high-risk rural zone' },
        { level: 'mod', text: 'Flood — low-moderate risk' },
        { level: 'low', text: 'Seismic — minimal historical activity' }
      ],
      note: 'Remote 40-acre parcel in high wildfire risk zone. BLM border means no development but also no fire breaks from neighbors. Generac backup is a plus for power outages. 35-min drive to any emergency services.'
    }
  },

  // ─── p34 · Coaldale, CO ────────────────────────────────────────────────
  {
    id: 'p34', num: 34, navLabel: 'Coaldale',
    address: '47 Dinkle Ditch Rd', city: 'Coaldale', state: 'CO', zip: '81222', county: 'Fremont',
    price: 499000, beds: 2, bath: 1, sqft: '1,680', acres: '18', acresSub: 'est. — BLM, National Forest & State Land borders',
    yearBuilt: 1978, type: 'Log Home', typeBadge: 'b-sfr',
    status: 'Active', statusClass: 'status-active', statusNote: '$529K → $509K → $499K (−$30K/5.7%). DOM: 206',
    drive: '~9 hr', driveSub: 'from Farmington UT', toTown: '~25 min', toTownSub: 'to Salida',
    tax: '$2,695/yr', taxRate: 0.0054, taxLabel: 'Fremont Co. ~0.54%',
    hoa: 0,
    image: 'https://ap.rdcpix.com/4bd6702ed89407d96c4b0d926ce0b0bdl-m3928604780rd-w1280_h960.webp', listingLink: 'https://www.zillow.com/homes/47-Dinkle-Ditch-Rd-Coaldale-CO-81222_rb/',
    score: 59,
    scores: {
      price:        { val: 6,  max: 15 },
      acreage:      { val: 14, max: 20 },
      privacy:      { val: 9,  max: 10 },
      outbuildings: { val: 8,  max: 15 },
      town:         { val: 7,  max: 15 },
      schools:      { val: 5,  max: 15 },
      practical:    { val: 10, max: 10 }
    },
    offerRange: '$430,000 – $470,000',
    tableOfferNote: 'Log cabin, 2bd/1ba limits buyers, Dinkle Ditch water rights',
    offerRationale: [
      'Already reduced $30K (5.7%) — seller is negotiating',
      'Zestimate at $477,600 supports sub-$480K value',
      'Only 2bd/1ba significantly limits the buyer pool',
      '206 DOM in a niche log cabin market',
      'Water rights (0.25 cfs Dinkle Ditch) add real value'
    ],
    offerStrategy: 'Offer $440K citing 2bd/1ba limitation, 206 DOM, and Zestimate of $477K. The water rights and guest bunkhouse are strong selling points that partially offset the small floor plan.',
    highlight: 'Log cabin on ~18 acres surrounded by BLM, National Forest & State Land with Dinkle Ditch irrigation water rights. Guest bunkhouse above garage. Only 2bd/1ba limits appeal.',
    highlights: [
      { icon: '🪵', text: 'Authentic 1978 log cabin with character' },
      { icon: '🏞️', text: '~18 acres bordered by BLM, USFS & State Land' },
      { icon: '💧', text: 'Dinkle Ditch irrigation water rights (0.25 cfs)' },
      { icon: '🏠', text: 'Guest bunkhouse apartment above garage' },
      { icon: '📉', text: '$30K in price reductions — motivated seller' },
      { icon: '⚠️', text: 'Big Cottonwood Creek flood risk on property' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas', value: '~25 min (Salida)' },
      { icon: '🛒', label: 'Grocery', value: '~25 min (Salida — full grocery options)' },
      { icon: '🏙️', label: 'City', value: '~25 min (Salida, pop ~6K)' },
      { icon: '🏥', label: 'Hospital', value: '~25 min (Heart of the Rockies, Salida)' },
      { icon: '🏫', label: 'Schools', value: 'Cotopaxi Elem (too small for rating), Cotopaxi Jr-Sr HS 2/10 (77 students)' },
      { icon: '📍', label: 'Farmington UT', value: '~9 hr', ref: true }
    ],
    pros: [
      'Surrounded by public lands — BLM, National Forest & State Land',
      'Dinkle Ditch irrigation water rights (0.25 cfs) — rare and valuable',
      'Guest bunkhouse apartment above garage for visitors or rental',
      'Authentic log cabin character in scenic Arkansas River valley',
      '$30K in price reductions — seller negotiating',
      'Heart of the Rockies hospital within 25 min in Salida'
    ],
    cons: [
      'Only 2bd/1ba — too small for most families without addition',
      'Big Cottonwood Creek runs through property — moderate flood risk',
      'Cotopaxi schools rated 2/10 with only 77 students',
      'Internet is satellite/wireless only',
      '1978 construction — log homes need ongoing maintenance',
      '$499K for a 2bd/1ba log cabin is steep even with acreage',
      'Coaldale is extremely small — no local services'
    ],
    familyFit: [
      'Best for: family wanting public land access and water rights, willing to add bedrooms',
      'Challenge: 2bd/1ba is too small for a family — bunkhouse helps but needs conversion',
      'Schools at 2/10 with 77 students mean homeschool is essentially required'
    ],
    verifyBefore: [
      { title: 'Flood risk', detail: 'Big Cottonwood Creek runs through property — get flood zone determination and history' },
      { title: 'Water rights status', detail: 'Verify Dinkle Ditch 0.25 cfs rights are current, transferable, and in good standing' },
      { title: 'Log home condition', detail: '1978 log cabin — inspect for rot, settling, chinking, and insect damage' },
      { title: 'Acreage confirmation', detail: 'Verify actual parcel size — estimated at 18 acres' }
    ],
    mustDo: [
      '! Verify flood insurance requirements — creek runs through property',
      '! Confirm Dinkle Ditch water rights transfer with closing',
      'Full log home inspection — 1978 logs need rot/insect/settling check',
      'Assess feasibility of adding bedrooms/bathroom to the cabin'
    ],
    envHazards: {
      location: 'Coaldale, Fremont County, CO — Arkansas River valley',
      pills: [
        { level: 'mod', text: 'Flood — Big Cottonwood Creek runs through property' },
        { level: 'high', text: 'Wildfire — rural mountain zone' },
        { level: 'low', text: 'Seismic — minimal activity' }
      ],
      note: 'Big Cottonwood Creek running through the property creates moderate flood risk. The rural mountain setting carries high wildfire risk. Coaldale is extremely remote — 25 min to Salida for any services.'
    }
  },

  // ─── p35 · Fort Garland, CO ────────────────────────────────────────────
  {
    id: 'p35', num: 35, navLabel: 'Ft Garland',
    address: '411 Gruenberg Rd', city: 'Fort Garland', state: 'CO', zip: '81133', county: 'Costilla',
    price: 490000, beds: 3, bath: 2, sqft: '1,900', acres: '10', acresSub: 'est. San Luis Valley',
    yearBuilt: 2000, type: 'Log Home', typeBadge: 'b-sfr',
    status: 'Active', statusClass: 'status-active', statusNote: '',
    drive: '~8 hr', driveSub: 'from Farmington UT', toTown: '~5 min', toTownSub: 'to Fort Garland',
    tax: '$2,205/yr', taxRate: 0.0045, taxLabel: 'Costilla Co. 0.45%',
    hoa: 0,
    image: 'https://ssl.cdn-redfin.com/photo/94/bigphoto/481/5282481_3.jpg', listingLink: 'https://www.redfin.com/CO/Fort-Garland/411-Gruenberg-Rd-81133/home/',
    score: 58,
    scores: {
      price:        { val: 8,  max: 15 },
      acreage:      { val: 10, max: 20 },
      privacy:      { val: 8,  max: 10 },
      outbuildings: { val: 6,  max: 15 },
      town:         { val: 8,  max: 15 },
      schools:      { val: 8,  max: 15 },
      practical:    { val: 10, max: 10 }
    },
    offerRange: '$430,000 – $465,000',
    tableOfferNote: 'Log home, fiber internet, Spring Fire burn scar area',
    offerRationale: [
      'Log home on 10 acres in San Luis Valley — limited comparable sales',
      'Spring Fire burn scar area may affect long-term wildfire insurance rates',
      'Sierra Grande schools at 3/10 with 12% math proficiency',
      'Fiber internet (up to 10 Gbps) is a major differentiator for remote work',
      'Greenhouse and wraparound deck add lifestyle value'
    ],
    offerStrategy: 'Offer $440K acknowledging the fiber internet advantage but citing burn scar risk and weak schools. The log home with greenhouse is unique — seller may value a buyer who appreciates the property.',
    highlight: 'Log home with wraparound deck, walk-out basement, and greenhouse on 10 acres. Rare fiber internet up to 10 Gbps via Blanca Networks — best connectivity in any rural property.',
    highlights: [
      { icon: '🌐', text: 'Fiber internet up to 10 Gbps (Blanca Networks) — exceptional' },
      { icon: '🪵', text: 'Log home with wraparound deck and walk-out basement' },
      { icon: '🌿', text: 'Greenhouse for year-round growing' },
      { icon: '🏔️', text: '10 acres in San Luis Valley with mountain views' },
      { icon: '🔥', text: 'Spring Fire burn scar — wildfire/flash flood risk' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas', value: '~5 min (Fort Garland)' },
      { icon: '🛒', label: 'Grocery', value: '~5 min (Fort Market — small); ~27 mi (Safeway, Alamosa)' },
      { icon: '🏙️', label: 'City', value: '~27 mi (Alamosa, pop ~10K)' },
      { icon: '🏥', label: 'Hospital', value: '~27-30 mi (San Luis Valley Health, Alamosa)' },
      { icon: '🏫', label: 'Schools', value: 'Sierra Grande K-12 3/10 (12% math, 22% reading)' },
      { icon: '📍', label: 'Farmington UT', value: '~8 hr', ref: true }
    ],
    pros: [
      'Fiber internet up to 10 Gbps — best rural connectivity found',
      'Log home with wraparound deck, walk-out basement, greenhouse',
      '10 acres in scenic San Luis Valley',
      'Low property tax at 0.45% (Costilla County)',
      'Fort Garland is a small but functioning community',
      'Relatively closer to Farmington at ~8 hr drive'
    ],
    cons: [
      'Sierra Grande schools 3/10 with 12% math proficiency — very poor',
      'Spring Fire burn scar area — ongoing wildfire and flash flood risk',
      'Hospital is 27-30 mi away in Alamosa',
      'Fort Market grocery is small — 27 mi to full grocery in Alamosa',
      'San Luis Valley has extreme temperature swings',
      'Costilla County is one of Colorado\'s poorest counties',
      'Limited local employment opportunities'
    ],
    familyFit: [
      'Best for: remote-working family wanting fast internet with mountain log home lifestyle',
      'Challenge: 3/10 schools with 12% math proficiency — homeschool likely necessary',
      'The fiber internet alone makes this property stand out for remote workers'
    ],
    verifyBefore: [
      { title: 'Spring Fire impact', detail: 'Assess proximity to 2018 Spring Fire burn scar — flash flood and erosion risk' },
      { title: 'Fiber internet confirmation', detail: 'Verify Blanca Networks fiber reaches this specific address and get speed quotes' },
      { title: 'Well & water', detail: 'San Luis Valley has water rights issues — confirm well permit and flow rate' },
      { title: 'Log home condition', detail: 'Year 2000 log home — inspect chinking, settling, and weather exposure' }
    ],
    mustDo: [
      '! Verify fiber internet actually reaches this address (Blanca Networks)',
      '! Check Spring Fire burn scar proximity and flash flood risk assessment',
      'Confirm well water rights in San Luis Valley (known water issues)',
      'Get wildfire insurance quotes — burn scar area may be expensive'
    ],
    envHazards: {
      location: 'Fort Garland, Costilla County, CO — San Luis Valley',
      pills: [
        { level: 'high', text: 'Wildfire — mod-high (Spring Fire burn scar area)' },
        { level: 'mod', text: 'Flood — post-wildfire flash flood risk' },
        { level: 'low', text: 'Seismic — minimal activity' }
      ],
      note: 'The 2018 Spring Fire (108,045 acres) burned nearby, creating ongoing flash flood risk from denuded hillsides. San Luis Valley has known water rights issues. Costilla County is one of Colorado\'s poorest — limited emergency services.'
    }
  },

  // ─── p36 · Fort Garland Rd, CO ────────────────────────────────────────
  {
    id: 'p36', num: 36, navLabel: 'Ft Garland Rd',
    address: '1159 Pfotenhauer Rd', city: 'Fort Garland', state: 'CO', zip: '81133', county: 'Costilla',
    price: 479000, beds: 3, bath: 2, sqft: '1,340', acres: '13', acresSub: 'est. off-grid solar homestead',
    yearBuilt: 1993, type: 'Site-Built', typeBadge: 'b-sfr',
    status: 'Active', statusClass: 'status-active', statusNote: 'Reduced from $489K on 1/13/2026. $5K seller concessions',
    drive: '~8 hr', driveSub: 'from Farmington UT', toTown: '~5 min', toTownSub: 'to Fort Garland',
    tax: '$2,156/yr', taxRate: 0.0045, taxLabel: 'Costilla Co. 0.45%',
    hoa: 0,
    image: 'https://ssl.cdn-redfin.com/photo/94/bigphoto/213/9997213_1.jpg', listingLink: 'https://www.redfin.com/CO/Fort-Garland/1159-Pfotenhauer-Rd-81133/home/',
    score: 62,
    scores: {
      price:        { val: 8,  max: 15 },
      acreage:      { val: 11, max: 20 },
      privacy:      { val: 8,  max: 10 },
      outbuildings: { val: 11, max: 15 },
      town:         { val: 8,  max: 15 },
      schools:      { val: 6,  max: 15 },
      practical:    { val: 10, max: 10 }
    },
    offerRange: '$420,000 – $455,000',
    tableOfferNote: 'Off-grid solar, geodesic domes, $5K concessions offered',
    offerRationale: [
      'Reduced from $489K + $5K seller concessions — motivated',
      'Off-grid solar system (15 panels, 8 batteries, 18kW Generac) has real value',
      '$12K water filtration system adds to infrastructure value',
      '1,340 sqft is small for $479K — paying for the off-grid setup',
      'Same weak school district as p35 (Sierra Grande 3/10)'
    ],
    offerStrategy: 'Offer $430K plus accept the $5K concessions. The off-grid infrastructure is expensive to replicate, but 1,340 sqft is small. Geodesic domes are unique but niche appeal.',
    highlight: 'Off-grid solar homestead on 13 acres with 15 owned panels, 8 batteries, 18kW generator, and $12K water filtration. 40×40 deck with 2 geodesic domes for stargazing and entertainment.',
    highlights: [
      { icon: '☀️', text: 'Off-grid: 15 solar panels, 8 batteries, 18kW Generac' },
      { icon: '🔮', text: '40×40 deck with 2 geodesic domes (stargazing/pool/arcade)' },
      { icon: '💧', text: '$12K water filtration + reverse osmosis system' },
      { icon: '🏞️', text: '13 acres in San Luis Valley' },
      { icon: '📉', text: 'Reduced + $5K seller concessions' },
      { icon: '⚠️', text: 'Same weak schools as Fort Garland (3/10)' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas', value: '~5 min (Fort Garland)' },
      { icon: '🛒', label: 'Grocery', value: '~5 min (Fort Market — small); ~27 mi (Safeway, Alamosa)' },
      { icon: '🏙️', label: 'City', value: '~27 mi (Alamosa, pop ~10K)' },
      { icon: '🏥', label: 'Hospital', value: '~27-30 mi (San Luis Valley Health, Alamosa)' },
      { icon: '🏫', label: 'Schools', value: 'Sierra Grande K-12 3/10 (12% math, 22% reading)' },
      { icon: '📍', label: 'Farmington UT', value: '~8 hr', ref: true }
    ],
    pros: [
      'Fully off-grid with owned solar panels (15), batteries (8), and generator (18kW)',
      'Geodesic domes on 40×40 deck — unique entertainment space',
      '$12K water filtration + RO system already installed',
      '13 acres with privacy in San Luis Valley',
      'Seller motivated — price reduction + $5K concessions',
      'No utility bills — off-grid independence',
      'Low property tax at 0.45%'
    ],
    cons: [
      'Sierra Grande schools 3/10 with 12% math proficiency',
      'Only 1,340 sqft — small for the price with off-grid premium',
      'Hospital 27-30 mi away in Alamosa',
      'Off-grid systems require ongoing maintenance knowledge',
      'Same burn scar and flood risks as Fort Garland area',
      'Geodesic domes are niche — may not add resale value',
      'Internet situation unclear — off-grid may mean satellite only'
    ],
    familyFit: [
      'Best for: family wanting off-grid self-sufficiency with unique entertainment features',
      'Challenge: 1,340 sqft is tight for a family, and 3/10 schools require homeschool',
      'Off-grid lifestyle requires mechanical aptitude and commitment'
    ],
    verifyBefore: [
      { title: 'Solar system condition', detail: 'Age and capacity of 15 panels and 8 batteries — replacement costs can be high' },
      { title: 'Generator maintenance', detail: '18kW Generac propane — service history, run hours, propane cost/logistics' },
      { title: 'Internet options', detail: 'Off-grid likely means satellite — verify Starlink viability' },
      { title: 'Water source', detail: 'Confirm well or cistern system — $12K filtration suggests challenging water' }
    ],
    mustDo: [
      '! Assess solar/battery system age and remaining lifespan — replacement = $30-50K',
      '! Verify internet options for remote work (off-grid = likely satellite only)',
      'Get independent assessment of water quality and filtration system',
      'Confirm propane delivery logistics for 18kW Generac generator'
    ],
    envHazards: {
      location: 'Fort Garland, Costilla County, CO — San Luis Valley (off-grid)',
      pills: [
        { level: 'high', text: 'Wildfire — mod-high (Spring Fire burn scar area)' },
        { level: 'mod', text: 'Flood — post-wildfire flash flood risk' },
        { level: 'special', text: 'Off-grid — solar/battery/generator dependency' }
      ],
      note: 'Same Spring Fire burn scar risks as nearby Fort Garland properties. Off-grid systems add resilience but also maintenance burden. San Luis Valley water rights issues apply.'
    }
  },

  // ─── p37 · Trinidad, CO ────────────────────────────────────────────────
  {
    id: 'p37', num: 37, navLabel: 'Trinidad',
    address: '31300 Timber Canyon Rd', city: 'Trinidad', state: 'CO', zip: '81082', county: 'Las Animas',
    price: 449000, beds: 3, bath: 2, sqft: '2,100', acres: '35', acresSub: 'est. — 7 mi off highway, canyon terrain',
    yearBuilt: 2010, type: 'Log Home', typeBadge: 'b-sfr',
    status: 'Active', statusClass: 'status-active', statusNote: 'DOM: 189. Previously sold 2021 for $350K',
    drive: '~8.5 hr', driveSub: 'from Farmington UT', toTown: '~20 min', toTownSub: 'to Trinidad',
    tax: '$1,228/yr', taxRate: 0.0038, taxLabel: 'Las Animas Co. ~0.38% (actual $1,228)',
    hoa: 0,
    image: 'https://ssl.cdn-redfin.com/photo/94/bigphoto/869/5544869_0.jpg', listingLink: 'https://www.redfin.com/CO/Trinidad/31300-Timber-Canyon-Rd-81082/home/',
    score: 64,
    scores: {
      price:        { val: 8,  max: 15 },
      acreage:      { val: 16, max: 20 },
      privacy:      { val: 9,  max: 10 },
      outbuildings: { val: 9,  max: 15 },
      town:         { val: 8,  max: 15 },
      schools:      { val: 5,  max: 15 },
      practical:    { val: 9,  max: 10 }
    },
    offerRange: '$390,000 – $430,000',
    tableOfferNote: 'Handcrafted log home, sold 2021 for $350K, no covenants',
    offerRationale: [
      'Sold in 2021 for $350K — $99K increase (28%) in 4 years is aggressive for rural CO',
      '189 DOM suggests market disagrees with the pricing',
      'Handcrafted log construction with exotic woods has artisan value',
      'No restrictions/covenants and emergency secondary access road are big positives',
      'Coal mining history and CBM water quality issues lower value'
    ],
    offerStrategy: 'Offer $395K citing 2021 sale at $350K and 189 DOM. Acknowledge craftsmanship but note coal mining water quality concerns. No covenants and guest quarters strengthen the property.',
    highlight: 'Handcrafted log home (2010) on ~35 acres in Timber Canyon — all logs milled on site with hand carvings and exotic woods. Guest quarters, no covenants, and emergency secondary access road.',
    highlights: [
      { icon: '🪵', text: 'Handcrafted log home — logs milled on site, hand carvings' },
      { icon: '🏞️', text: '~35 acres in canyon terrain, 7 mi off highway' },
      { icon: '🏠', text: 'Guest quarters + apartment above garage' },
      { icon: '🚫', text: 'No restrictions or covenants' },
      { icon: '💰', text: 'Sold 2021 for $350K — 28% markup in 4 years' },
      { icon: '⛏️', text: 'Coal mining history — CBM water quality issues' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas', value: '~20 min (Trinidad)' },
      { icon: '🛒', label: 'Grocery', value: '~15-20 min (Safeway, Trinidad)' },
      { icon: '🏙️', label: 'City', value: '~20 min (Trinidad, pop ~8K)' },
      { icon: '🏥', label: 'Hospital', value: '~10+ mi (Mount San Rafael, Trinidad)' },
      { icon: '🏫', label: 'Schools', value: "Fisher's Peak Elem C-, Trinidad Mid C-, Trinidad HS 2/10" },
      { icon: '📍', label: 'Farmington UT', value: '~8.5 hr', ref: true }
    ],
    pros: [
      'Handcrafted log construction with hand carvings and exotic woods — artisan quality',
      '~35 acres in secluded canyon terrain — maximum privacy',
      'Guest quarters + apartment above garage — multi-generational potential',
      'No restrictions or covenants — full freedom',
      'Emergency secondary access road — safety plus',
      'Low taxes at $1,228/yr (Las Animas Co. 0.38%)',
      'Grocery (Safeway) only 15-20 min in Trinidad'
    ],
    cons: [
      'Previously sold for $350K in 2021 — $99K markup is steep',
      '189 DOM — market questioning the price',
      'Trinidad HS rated 2/10 — very weak schools',
      'Coal mining history — coalbed methane water quality issues',
      '7 mi off highway in canyon terrain — road maintenance concerns',
      'Mod-high wildfire risk in canyon setting',
      'Internet likely satellite only at this location'
    ],
    familyFit: [
      'Best for: family wanting artisan craftsmanship, privacy, and no restrictions on 35 acres',
      'Challenge: schools at 2/10 mean homeschool is necessary; water quality needs testing',
      'Guest quarters make this ideal for multi-generational living'
    ],
    verifyBefore: [
      { title: 'Water quality', detail: 'Coal mining and CBM activity — test well water for methane, heavy metals, and TDS' },
      { title: 'Road access', detail: '7 mi off highway — verify year-round passability and maintenance responsibility' },
      { title: 'Acreage confirmation', detail: 'Verify actual parcel size — estimated at 35 acres in canyon terrain' },
      { title: 'Log home inspection', detail: '2010 handcrafted construction — verify structural integrity and exotic wood condition' }
    ],
    mustDo: [
      '! Test well water for methane and heavy metals — coal mining and CBM area',
      '! Verify road access in winter — 7 mi off highway in canyon terrain',
      'Confirm actual acreage with county assessor',
      'Independent appraisal — 2021 sale at $350K is important comp'
    ],
    envHazards: {
      location: 'Trinidad, Las Animas County, CO — Timber Canyon',
      pills: [
        { level: 'high', text: 'Wildfire — mod-high in canyon terrain' },
        { level: 'mod', text: 'Flood — low-moderate canyon drainage' },
        { level: 'mod', text: 'Industrial — coal mining history, CBM water quality' }
      ],
      note: 'Las Animas County has extensive coal mining history with coalbed methane (CBM) extraction. Water quality concerns from methane and heavy metals. Canyon terrain may channel wildfire and complicate evacuation.'
    }
  },

  // ─── p38 · Pagosa Springs, CO ──────────────────────────────────────────
  {
    id: 'p38', num: 38, navLabel: 'Pagosa Springs',
    address: '482 County Road 917', city: 'Pagosa Springs', state: 'CO', zip: '81147', county: 'Archuleta',
    price: 489900, beds: 3, bath: 2, sqft: '2,600', acres: '18', acresSub: 'est. — cross-fenced, national forest on 3 sides',
    yearBuilt: 2001, type: 'Site-Built', typeBadge: 'b-sfr',
    status: 'Active', statusClass: 'status-active', statusNote: '$550K → $525K → $499.9K → $489.9K. DOM: ~23 months! $8K concessions',
    drive: '~8 hr', driveSub: 'from Farmington UT', toTown: '~20 min', toTownSub: 'to Pagosa Springs',
    tax: '$2,107/yr', taxRate: 0.0043, taxLabel: 'Archuleta Co. 0.43%',
    hoa: 0,
    image: 'https://ssl.cdn-redfin.com/photo/365/bigphoto/236/812236_U.jpg', listingLink: 'https://www.redfin.com/CO/Pagosa-Springs/482-County-Road-917-81147/home/',
    score: 60,
    scores: {
      price:        { val: 7,  max: 15 },
      acreage:      { val: 14, max: 20 },
      privacy:      { val: 9,  max: 10 },
      outbuildings: { val: 7,  max: 15 },
      town:         { val: 8,  max: 15 },
      schools:      { val: 8,  max: 15 },
      practical:    { val: 7,  max: 10 }
    },
    offerRange: '$415,000 – $455,000',
    tableOfferNote: '23 months DOM, $60K in cuts, $8K concessions, VA assumable',
    offerRationale: [
      '23 months on market — one of the longest DOMs in any batch',
      '$60K total reductions from $550K + $8K seller concessions',
      'National forest on 3 sides = extreme wildfire risk (99% county at risk)',
      'Oct 2025 flood caused $13M infrastructure damage in the area',
      'VA assumable loan may offer below-market interest rate'
    ],
    offerStrategy: 'Offer $425K citing 23 months DOM, wildfire insurance challenges, and flood damage history. Ask about VA loan assumption terms — could be a significant financial advantage if rate is below current market.',
    highlight: '18 cross-fenced acres surrounded by national forest on 3 sides with 2,600 sqft home. VA assumable loan, 2-car basement garage, metal roof. 23 months DOM with $60K in reductions.',
    highlights: [
      { icon: '🏞️', text: '18 acres cross-fenced, national forest on 3 sides' },
      { icon: '📉', text: '23 months DOM — $60K in reductions + $8K concessions' },
      { icon: '🎖️', text: 'VA assumable loan — potential below-market rate' },
      { icon: '🏗️', text: '2,600 sqft with 2-car basement garage, metal roof' },
      { icon: '🔥', text: 'MAJOR wildfire risk — 99% of county at risk' },
      { icon: '🌊', text: 'Oct 2025 flood — $13M infrastructure damage' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas', value: '~20 min (Pagosa Springs)' },
      { icon: '🛒', label: 'Grocery', value: '~20 min (City Market/Walmart/Natural Grocers, Pagosa Springs)' },
      { icon: '🏙️', label: 'City', value: '~20 min (Pagosa Springs, pop ~2K; Durango ~60 mi)' },
      { icon: '🏥', label: 'Hospital', value: '~20 min (Pagosa Springs Medical Center)' },
      { icon: '🏫', label: 'Schools', value: 'Pagosa Springs Elem 3/10, Mid not rated, HS 5/10 (95% grad rate)' },
      { icon: '📍', label: 'Farmington UT', value: '~8 hr', ref: true }
    ],
    pros: [
      '18 cross-fenced acres with national forest on 3 sides — incredible setting',
      '23 months DOM with $60K in cuts — maximum negotiation leverage',
      'VA assumable loan could provide below-market interest rate',
      '2,600 sqft — largest home in this batch by square footage',
      'Metal roof and 2-car basement garage — quality construction',
      'Pagosa Springs has grocery (Walmart, City Market, Natural Grocers) within 20 min',
      '95% high school graduation rate despite 5/10 rating'
    ],
    cons: [
      'MAJOR wildfire risk — 99% of Archuleta County at risk, forest on 3 sides',
      'Oct 2025 3rd-largest flood in history caused $13M infrastructure damage',
      '23 months DOM raises questions about what other buyers found wrong',
      'Internet likely satellite only — 20 min from town',
      'Elementary school rated 3/10',
      'Wildfire insurance may be extremely expensive or unavailable',
      'National forest = no fire break from neighbors on 3 sides'
    ],
    familyFit: [
      'Best for: family wanting maximum space (2,600 sqft + 18 acres) with national forest access',
      'Challenge: wildfire and flood risk are the most severe of any property in the batch',
      'VA loan assumption could be a major financial advantage if rate is favorable'
    ],
    verifyBefore: [
      { title: 'Wildfire insurance', detail: '99% county risk + forest on 3 sides — get insurance quotes FIRST' },
      { title: 'VA loan assumption', detail: 'Verify loan balance, interest rate, and assumption eligibility/requirements' },
      { title: 'Flood damage assessment', detail: 'Check for Oct 2025 flood damage to property or access roads' },
      { title: 'Why 23 months DOM?', detail: 'Ask agent directly — inspection issues? Title problems? Or just overpriced?' }
    ],
    mustDo: [
      '! Get wildfire insurance quotes BEFORE making offer — 99% county risk',
      '! Investigate Oct 2025 flood impact on this specific property and roads',
      '! Ask VA loan assumption terms — rate, balance, eligibility',
      'Verify internet options — 20 min from town likely means satellite',
      'Investigate why property has been on market 23 months'
    ],
    envHazards: {
      location: 'Pagosa Springs, Archuleta County, CO — national forest border',
      pills: [
        { level: 'severe', text: 'Wildfire — MAJOR: 99% of county at risk, forest on 3 sides' },
        { level: 'mod', text: 'Flood — Oct 2025 3rd-largest flood, $13M infrastructure damage' },
        { level: 'low', text: 'Seismic — minimal activity' }
      ],
      note: 'Archuleta County has 99% wildfire risk with national forest on 3 sides of this property. The Oct 2025 flood was the 3rd-largest in county history with $13M infrastructure damage. Wildfire insurance availability and cost must be verified before proceeding.'
    }
  },

  // ─── p39 · Canyon City, OR ─────────────────────────────────────────────
  {
    id: 'p39', num: 39, navLabel: 'Canyon City',
    address: '60813 Canyon Creek Ln', city: 'Canyon City', state: 'OR', zip: '97820', county: 'Grant',
    price: 346000, beds: 3, bath: 2, sqft: '1,600', acres: '7', acresSub: 'est. — fenced pasture, across from national forest',
    yearBuilt: 1985, type: 'Site-Built', typeBadge: 'b-sfr',
    status: 'Active', statusClass: 'status-active', statusNote: '$384K → $360K → $346K. DOM: 177. Sold 2006 for $249K',
    drive: '~11 hr', driveSub: 'from Farmington UT', toTown: '~3 min', toTownSub: 'to John Day',
    tax: '$2,872/yr', taxRate: 0.0083, taxLabel: 'Grant Co. 0.83% (OR Measure 50)',
    hoa: 0,
    image: 'https://ssl.cdn-redfin.com/photo/84/bigphoto/470/645888470_I.jpg', listingLink: 'https://www.redfin.com/OR/Canyon-City/60813-Canyon-Creek-Ln-97820/home/',
    score: 48,
    scores: {
      price:        { val: 9,  max: 15 },
      acreage:      { val: 8,  max: 20 },
      privacy:      { val: 6,  max: 10 },
      outbuildings: { val: 7,  max: 15 },
      town:         { val: 9,  max: 15 },
      schools:      { val: 6,  max: 15 },
      practical:    { val: 3,  max: 10 }
    },
    offerRange: '$285,000 – $320,000',
    tableOfferNote: 'CRITICAL: likely in 2015 Canyon Creek Complex Fire path',
    offerRationale: [
      'CRITICAL: property on Canyon Creek Ln — likely in or adjacent to 2015 fire that destroyed 43 homes',
      'Already reduced $38K from $384K — seller negotiating',
      'Sold in 2006 for $249K — modest appreciation over 20 years',
      'Post-fire flood risk elevated; potential soil damage',
      '177 DOM in a very small market (Grant County pop ~7K)'
    ],
    offerStrategy: 'Only offer after confirming fire damage status. If confirmed no damage, $300K citing fire risk perception, post-fire flood, and 177 DOM. If any fire damage, walk away or offer land value only.',
    highlight: 'Affordable 7-acre property near John Day with updated interior, shop with animal stalls, and fenced pasture. CRITICAL WARNING: address on Canyon Creek Ln is in the exact path of the 2015 Canyon Creek Complex Fire (110,261 acres, 43 homes destroyed).',
    highlights: [
      { icon: '🔥', text: 'CRITICAL: likely in 2015 Canyon Creek Complex Fire path' },
      { icon: '💰', text: 'Lowest price in batch at $346K — further reduced from $384K' },
      { icon: '🏗️', text: 'Updated interior with shop and animal stalls' },
      { icon: '🌾', text: '7 acres with fenced pasture, across from national forest' },
      { icon: '🏫', text: 'Humbolt Elem above avg, Grant Union Jr/Sr HS average' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas', value: '~3 min (John Day)' },
      { icon: '🛒', label: 'Grocery', value: "~3 min (Chester's Thriftway, John Day)" },
      { icon: '🏙️', label: 'City', value: '~3 min (John Day, pop ~1,700)' },
      { icon: '🏥', label: 'Hospital', value: '~3 min (Blue Mountain Hospital, John Day)' },
      { icon: '🏫', label: 'Schools', value: 'Humbolt Elem above avg, Grant Union Jr/Sr HS avg (42% math, 57% reading)' },
      { icon: '📍', label: 'Farmington UT', value: '~11 hr', ref: true }
    ],
    pros: [
      'Lowest price in the batch at $346K',
      'Excellent proximity — grocery, hospital, schools all within 3 min',
      'Updated interior in reasonable condition',
      'Shop with animal stalls — ready for small livestock',
      'Fenced pasture across from national forest',
      'Schools above average for the area',
      '$38K already reduced — negotiation room remains'
    ],
    cons: [
      'CRITICAL: likely in or adjacent to 2015 Canyon Creek Complex Fire path (110,261 acres, 43 homes destroyed)',
      'Post-fire elevated flood and erosion risk',
      'Possible historical gold mining contamination',
      '11 hr drive from Farmington UT — most remote in batch',
      'Grant County has population of only ~7K — extremely isolated',
      'Very limited internet options expected',
      'Oregon Measure 50 tax rate at 0.83% — higher than CO/WY'
    ],
    familyFit: [
      'Best for: budget-conscious family wanting close-to-town convenience IF fire history checks out',
      'Challenge: fire path location is a potential dealbreaker — must verify before any commitment',
      '11 hr drive from Farmington makes this the most remote option'
    ],
    verifyBefore: [
      { title: '2015 fire damage', detail: 'CRITICAL: verify if property was damaged or rebuilt after Canyon Creek Complex Fire. Check county records for permits/rebuilds' },
      { title: 'Soil and vegetation recovery', detail: 'Assess post-fire soil stability and vegetation regrowth on and near the parcel' },
      { title: 'Gold mining contamination', detail: 'Canyon City was a gold mining town — test soil and water for mercury and heavy metals' },
      { title: 'Internet options', detail: 'Very rural OR — confirm what connectivity exists at this address' }
    ],
    mustDo: [
      '! VERIFY FIRE HISTORY: confirm property status relative to 2015 Canyon Creek Complex Fire',
      '! Test water for gold mining contaminants (mercury, arsenic, heavy metals)',
      'Get post-fire flood risk assessment from county or FEMA',
      'Full home inspection — 1985 home may have been fire-damaged and rebuilt'
    ],
    envHazards: {
      location: 'Canyon City, Grant County, OR — Canyon Creek drainage',
      pills: [
        { level: 'severe', text: 'Wildfire — in path of 2015 Canyon Creek Complex Fire (110,261 acres, 43 homes)' },
        { level: 'high', text: 'Flood — elevated post-fire risk' },
        { level: 'mod', text: 'Mining — historical gold mining contamination possible' }
      ],
      note: 'The 2015 Canyon Creek Complex Fire was the worst in Oregon since 1936, burning 110,261 acres and destroying 43 homes. This property is on Canyon Creek Ln in the exact fire path. Post-fire flood, erosion, and soil damage risks remain elevated. Historical gold mining adds contamination concerns.'
    }
  },

  // ─── p40 · Vale, OR ────────────────────────────────────────────────────
  {
    id: 'p40', num: 40, navLabel: 'Vale',
    address: '3961 John Day Hwy', city: 'Vale', state: 'OR', zip: '97918', county: 'Malheur',
    price: 425000, beds: 4, bath: 2, sqft: '1,705', acres: '6', acresSub: 'est. — horse setup with arena and shop',
    yearBuilt: 2006, type: 'Site-Built', typeBadge: 'b-sfr',
    status: 'Active', statusClass: 'status-active', statusNote: 'DOM: 149. Zestimate: $401,700. Last sold 2014 for $149,900',
    drive: '~11 hr', driveSub: 'from Farmington UT', toTown: '~2 mi', toTownSub: 'to Vale',
    tax: '$984/yr', taxRate: 0.0085, taxLabel: 'Malheur Co. 0.85% (Measure 50 assessed $165K)',
    hoa: 0,
    image: 'https://photos.zillowstatic.com/fp/6ae7c7ea7ba49109d73706746520334a-uncropped_scaled_within_1344_1008.webp', listingLink: 'https://www.zillow.com/homes/3961-John-Day-Hwy-Vale-OR-97918_rb/',
    score: 60,
    scores: {
      price:        { val: 8,  max: 15 },
      acreage:      { val: 8,  max: 20 },
      privacy:      { val: 5,  max: 10 },
      outbuildings: { val: 12, max: 15 },
      town:         { val: 8,  max: 15 },
      schools:      { val: 13, max: 15 },
      practical:    { val: 6,  max: 10 }
    },
    offerRange: '$370,000 – $405,000',
    tableOfferNote: 'Zestimate $401K, sold 2014 for $150K, horse setup, Vale HS 10/10',
    offerRationale: [
      'Zestimate at $401,700 — asking is $23K above automated valuation',
      'Sold in 2014 for $149,900 — 183% increase in 12 years is extreme',
      'Horse arena, 4 stalls, covered hay storage, and 1,600 sqft shop have real value',
      'Vale HS 10/10 is the highest-rated school of ANY property across all batches',
      'Malheur County is economically depressed — limits buyer pool'
    ],
    offerStrategy: 'Offer $385K citing Zestimate at $401K and 2014 sale at $150K. The horse infrastructure and Vale HS 10/10 are genuine value adds. Seller may counter — meet at $400K if needed.',
    highlight: 'Horse-ready property with arena, 4 stalls, covered hay storage, and 1,600 sqft shop with 220V on 6 acres. Vale HS rated 10/10 — the best school rating of any property in any batch.',
    highlights: [
      { icon: '🐴', text: 'Horse setup: arena, 4 stalls, turn-outs, covered hay storage' },
      { icon: '🔧', text: '1,600 sqft shop with 220V power' },
      { icon: '🏫', text: 'Vale HS 10/10 — best school rating in ANY batch!' },
      { icon: '🏠', text: '4bd/2ba — most bedrooms in this batch' },
      { icon: '💰', text: 'Actual taxes only $984/yr (Measure 50 assessed at $165K)' },
      { icon: '⚠️', text: 'Mod-high wildfire, West Nile virus, extreme heat' }
    ],
    proximity: [
      { icon: '⛽', label: 'Gas', value: '~2 mi (Vale)' },
      { icon: '🛒', label: 'Grocery', value: '~2 mi (M&W Market, Vale); ~30 mi (full grocery, Ontario)' },
      { icon: '🏙️', label: 'City', value: '~30 mi (Ontario, pop ~11K)' },
      { icon: '🏥', label: 'Hospital', value: 'Valley Family Health clinic (Vale); ~30 mi/35 min (Saint Alphonsus, Ontario)' },
      { icon: '🏫', label: 'Schools', value: 'Vale Elem not rated, Vale HS 10/10 (74.5% reading, 90% grad rate)' },
      { icon: '📍', label: 'Farmington UT', value: '~11 hr', ref: true }
    ],
    pros: [
      'Vale HS rated 10/10 — best school rating of any property across all batches',
      'Fully set up for horses: arena, 4 stalls with turn-outs, covered hay storage',
      '1,600 sqft shop with 220V — excellent workspace',
      '4 bedrooms — most in this batch',
      'Actual taxes only $984/yr thanks to Measure 50 assessment',
      'Close to Vale services (~2 mi) with Ontario 30 mi away',
      '2006 construction — relatively newer'
    ],
    cons: [
      'Sold in 2014 for $149,900 — $275K increase (183%) raises overpricing concerns',
      'Zestimate at $401,700 — asking $23K above automated valuation',
      '11 hr drive from Farmington UT',
      'West Nile virus risk in Malheur County',
      'Extreme summer heat — Malheur County desert climate',
      'Agricultural chemical exposure from surrounding farmland',
      'Mod-high wildfire risk (2024 Orvad Durkee Fire nearby)',
      'Ontario hospital is 30 mi/35 min away'
    ],
    familyFit: [
      'Best for: horse-owning family wanting the absolute best school district with turnkey equestrian setup',
      'Challenge: 11 hr drive from Farmington, extreme heat, and West Nile virus risk',
      'The 10/10 high school alone makes this worth serious consideration for families with teens'
    ],
    verifyBefore: [
      { title: 'Appraisal vs Zestimate', detail: 'Get independent appraisal — Zestimate $401K vs asking $425K, and 2014 sale at $150K' },
      { title: 'Water rights', detail: 'Verify irrigation water rights for horse pasture — critical in Malheur County desert' },
      { title: 'Shop condition', detail: 'Inspect 1,600 sqft shop — verify 220V service, condition, and any permits' },
      { title: 'Arena and stalls', detail: 'Assess horse infrastructure condition — footing, fencing, drainage' }
    ],
    mustDo: [
      '! Get independent appraisal — 2014 sale at $150K makes $425K asking questionable',
      '! Verify water rights and supply for horse operation in desert climate',
      'Inspect horse infrastructure: arena footing, stall condition, hay storage',
      'Check agricultural chemical exposure from neighboring farmland'
    ],
    envHazards: {
      location: 'Vale, Malheur County, OR — high desert agricultural area',
      pills: [
        { level: 'high', text: 'Wildfire — mod-high (2024 Orvad Durkee Fire nearby)' },
        { level: 'mod', text: 'Flood — moderate risk' },
        { level: 'mod', text: 'Health — West Nile virus, agricultural chemicals, extreme heat' }
      ],
      note: 'Malheur County is high desert with extreme summer temperatures. The 2024 Orvad Durkee Fire burned nearby. West Nile virus is documented in the area. Agricultural chemical runoff from surrounding farmland is a concern for well water quality.'
    }
  },
];