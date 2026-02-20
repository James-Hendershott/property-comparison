#!/usr/bin/env node
/**
 * generate-cards.js
 * Generates HTML for properties p8–p16 and injects them into public/index.html.
 * Adds: nav links, overview table rows, and full card blocks.
 */

const fs = require('fs');
const path = require('path');

const HTML_PATH = path.join(__dirname, 'public', 'index.html');

// ─── PROPERTY DATA ───────────────────────────────────────────────────────────

const properties = [
  {
    id: 'p8',
    num: 8,
    navLabel: 'Lewiston ID',
    address: '20235 Valley View Dr',
    city: 'Lewiston',
    state: 'ID',
    zip: '83501',
    county: 'Nez Perce County',
    price: 489000,
    priceStr: '$489,000',
    monthly: '~$2,771/mo',
    down3: '$14,670',
    beds: 3,
    bath: 2,
    sqft: '2,112',
    acres: '2.09',
    acresSub: 'Wooded hillside',
    yearBuilt: 1979,
    type: 'Site-Built',
    typeBadge: 'b-sfr',
    status: 'Active',
    statusClass: 'status-active',
    dom: 40,
    drive: '~9 hr',
    toTown: '~20 min',
    toTownSub: 'Lewiston',
    image: 'https://photos.zillowstatic.com/fp/1de6b52619fb77825c6dd50548e9b1f6-uncropped_scaled_within_1536_1152.webp',
    zillowLink: 'https://www.zillow.com/homedetails/20235-Valley-View-Dr-Lewiston-ID-83501/110323333_zpid/',
    tax: '$3,363/yr',
    extraStats: [
      { label: 'Tax', val: '$3,363/yr' },
      { label: 'Status', val: 'Active', valClass: 'status-active' }
    ],
    score: 55,
    scores: {
      price: { val: 8, max: 15 },
      acreage: { val: 2, max: 20 },
      privacy: { val: 6, max: 10 },
      outbuildings: { val: 5, max: 15 },
      town: { val: 14, max: 15 },
      schools: { val: 11, max: 15 },
      practicality: { val: 9, max: 10 }
    },
    offerRange: '$460,000 \u2013 $475,000',
    offerRationale: [
      'Listed $489K but Zestimate only $475.9K \u2014 already priced above market estimate',
      '40 DOM with only 2.09 acres limits buyer pool for rural-minded buyers',
      'Good kitchen reno adds value, but steep hillside lot reduces usable acreage significantly',
      'Comparable Lewiston-area homes with 2+ acres trading $210\u2013$230/sqft \u2192 $460K is fair'
    ],
    offerStrategy: 'Strategy: Open at $455K, target $460\u2013470K. Use steep slope and small lot size as leverage. Inspection contingency on 1979 systems.',
    highlight: 'Renovated kitchen with quartz countertops. Walk-out basement with wood stove and bonus room. Circular driveway, oversized garage, greenhouse. Near Craig Mountain Wildlife Management Area (72,000 acres).',
    propertyHighlights: [
      { icon: '\uD83C\uDFE0', text: 'Recently renovated kitchen with quartz countertops and modern finishes' },
      { icon: '\uD83D\uDEAA', text: 'Walk-out basement with bonus room and wood stove \u2014 extra living space' },
      { icon: '\uD83D\uDE97', text: 'Circular driveway with oversized 2-car garage' },
      { icon: '\uD83C\uDF3F', text: 'Greenhouse on property \u2014 year-round growing potential' },
      { icon: '\uD83C\uDF32', text: 'Wooded 2.09 acres in Waha area above Lewiston valley' },
      { icon: '\uD83D\uDCA7', text: 'Community water system + septic \u2014 no well maintenance' }
    ],
    locationSchools: [
      { icon: '\uD83C\uDFEB', text: 'Lewiston Independent SD \u2014 solid mid-range Idaho district' },
      { icon: '\uD83C\uDFEB', text: 'Multiple school options in Lewiston/Clarkston metro area' },
      { icon: '\uD83C\uDFE5', text: 'St. Joseph Regional Medical Center ~20 min' },
      { icon: '\uD83D\uDED2', text: 'Full services in Lewiston \u2014 Costco, Walmart, Home Depot' },
      { icon: '\uD83C\uDFDE\uFE0F', text: 'Craig Mountain WMA (72,000 acres) for hunting/hiking nearby' }
    ],
    pros: [
      'Beautifully renovated kitchen \u2014 move-in ready upstairs',
      'Lewiston has full big-box services \u2014 best town access of ID listings',
      'Walk-out basement adds functional bonus living space',
      'Community water = no well pump worries',
      'Greenhouse for year-round food production',
      'Oversized garage handles trucks/equipment'
    ],
    cons: [
      'Only 2.09 acres \u2014 smallest lot on entire list by far',
      'Steep hillside limits usable outdoor space for kids/animals',
      'Priced above Zestimate ($475.9K) at $489K',
      'No spring water source \u2014 community water has monthly fees',
      'Waha area is 20 min from Lewiston \u2014 winding mountain road',
      '1979 build \u2014 verify plumbing, electrical, roof condition'
    ],
    familyFit: [
      'Full Lewiston services nearby make daily family life convenient',
      'School options are better than most rural listings on this list',
      'Bonus basement room works great as playroom or teen hangout'
    ],
    verifyBefore: [
      'Septic system age and condition \u2014 hillside can complicate drainage',
      'Community water fees and any use restrictions',
      'Road condition to property in winter \u2014 steep grades + snow/ice'
    ],
    tableOfferNote: 'Zestimate $475.9K under asking; 40 DOM, steep slope'
  },
  {
    id: 'p9',
    num: 9,
    navLabel: 'Kamiah ID',
    address: '2223 Glenwood Rd',
    city: 'Kamiah',
    state: 'ID',
    zip: '83536',
    county: 'Idaho County',
    price: 439000,
    priceStr: '$439,000',
    monthly: '~$2,293/mo',
    down3: '$13,170',
    beds: 2,
    bath: 2,
    sqft: '1,851',
    acres: '22',
    acresSub: 'Heavily timbered',
    yearBuilt: 1980,
    type: 'Log Home',
    typeBadge: 'b-sfr',
    status: 'Active',
    statusClass: 'status-active',
    dom: 312,
    drive: '~9.5 hr',
    toTown: '~15 min',
    toTownSub: 'Kamiah',
    image: 'https://photos.zillowstatic.com/fp/ba0a4a0194639c05ce92ac4ecde1bbd7-uncropped_scaled_within_1536_1152.webp',
    zillowLink: 'https://www.zillow.com/homedetails/2223-Glenwood-Rd-Kamiah-ID-83536/123354602_zpid/',
    tax: '$379/yr',
    extraStats: [
      { label: 'Tax', val: '$379/yr', valSub: 'Very low!' },
      { label: 'Status', val: 'Active', valClass: 'status-active' }
    ],
    score: 76,
    scores: {
      price: { val: 10, max: 15 },
      acreage: { val: 18, max: 20 },
      privacy: { val: 9, max: 10 },
      outbuildings: { val: 12, max: 15 },
      town: { val: 8, max: 15 },
      schools: { val: 7, max: 15 },
      practicality: { val: 6, max: 10 }
    },
    offerRange: '$380,000 \u2013 $400,000',
    offerRationale: [
      '312 DOM is extreme \u2014 this property has been sitting for nearly a year, massive negotiating leverage',
      'Only 2 bedrooms severely limits the buyer pool \u2014 families and investors both pass',
      'Property taxes of only $379/yr suggest very low assessed value vs. asking price',
      'Log home on 22 timbered acres is a unique niche \u2014 but niche = fewer buyers'
    ],
    offerStrategy: 'Strategy: Open at $370K citing 312 DOM. Target $385\u2013395K. Seller has been waiting almost a year \u2014 they will negotiate. Include financing contingency.',
    highlight: 'Authentic log home on 22 timbered acres with spring water. Bunkhouse, large shop, multiple outbuildings. Large pond with wildlife. Only $379/yr in taxes. Ductless mini-split + hardwood floors + granite.',
    propertyHighlights: [
      { icon: '\uD83C\uDFE0', text: 'Authentic log home with hardwood floors and granite countertops' },
      { icon: '\uD83C\uDF32', text: '22 heavily timbered acres with Lolo Creek drainage views' },
      { icon: '\uD83D\uDCA7', text: 'Spring water source \u2014 no municipal water dependency' },
      { icon: '\uD83C\uDFD7\uFE0F', text: 'Bunkhouse for guests + large shop + multiple outbuildings' },
      { icon: '\uD83D\uDC3F\uFE0F', text: 'Large pond with abundant wildlife \u2014 nature at your doorstep' },
      { icon: '\u2744\uFE0F', text: 'Ductless mini-split heating/cooling \u2014 efficient + modern' }
    ],
    locationSchools: [
      { icon: '\uD83C\uDFEB', text: 'Kamiah Joint SD \u2014 small rural Idaho district' },
      { icon: '\uD83C\uDFEB', text: 'Kamiah Elementary and Kamiah High School nearby' },
      { icon: '\uD83C\uDFE5', text: 'Syringa Hospital (Grangeville) ~45 min' },
      { icon: '\uD83D\uDED2', text: 'Kamiah has basic groceries; Grangeville ~45 min for more' },
      { icon: '\uD83C\uDFDE\uFE0F', text: 'Nez Perce-Clearwater National Forest surrounds the area' }
    ],
    pros: [
      '22 acres of timber \u2014 among the highest acreage on the list',
      'Property taxes only $379/yr \u2014 lowest on entire list by huge margin',
      'Spring water source eliminates well pump costs and failure risk',
      'Bunkhouse + shop + outbuildings = excellent infrastructure',
      'Hot tub, large master suite, granite \u2014 quality interior finishes',
      '312 DOM = extreme negotiation leverage for a low offer'
    ],
    cons: [
      'Only 2 bedrooms \u2014 too small for a growing family without major renovation',
      '1,511 sqft above ground \u2014 compact main living space',
      'Kamiah is remote \u2014 limited services, 45 min to larger town',
      'Log home maintenance is ongoing and specialized',
      'Schools are very small rural \u2014 limited programs and activities',
      '9.5 hour drive from Farmington \u2014 among the farthest'
    ],
    familyFit: [
      'Pond and 22 acres are a nature playground for kids',
      'Bunkhouse works for guests/grandparents visiting',
      '2 bedrooms is a serious constraint \u2014 would need to finish basement or add on'
    ],
    verifyBefore: [
      'Spring water quality and flow rate \u2014 get tested and verified year-round',
      'Log home condition \u2014 check for rot, insect damage, chinking condition',
      'Road access in winter \u2014 Glenwood Rd maintenance and plowing'
    ],
    tableOfferNote: '312 DOM extreme leverage; only 2 beds limits buyers'
  },
  {
    id: 'p10',
    num: 10,
    navLabel: 'West Richland',
    address: '84609 N Yakima River Dr',
    city: 'West Richland',
    state: 'WA',
    zip: '99353',
    county: 'Benton County',
    price: 410000,
    priceStr: '$410,000',
    monthly: '~$2,274/mo',
    down3: '$12,300',
    beds: 3,
    bath: 2,
    sqft: '1,340',
    acres: '4.15',
    acresSub: 'River frontage',
    yearBuilt: 1967,
    type: 'Site-Built',
    typeBadge: 'b-sfr',
    status: 'Active',
    statusClass: 'status-active',
    dom: 23,
    drive: '~7.5 hr',
    toTown: '~10 min',
    toTownSub: 'West Richland',
    image: 'https://photos.zillowstatic.com/fp/4b3dc7dd01dd061c8c1d4d994ca3ee6f-cc_ft_1152.webp',
    zillowLink: 'https://www.zillow.com/homedetails/84609-N-Yakima-River-Dr-West-Richland-WA-99353/205017796_zpid/',
    tax: '$3,422/yr',
    extraStats: [
      { label: 'Water', val: 'Well + Septic' },
      { label: 'Status', val: 'Active', valClass: 'status-active' }
    ],
    score: 71,
    scores: {
      price: { val: 9, max: 15 },
      acreage: { val: 4, max: 20 },
      privacy: { val: 7, max: 10 },
      outbuildings: { val: 8, max: 15 },
      town: { val: 15, max: 15 },
      schools: { val: 12, max: 15 },
      practicality: { val: 8, max: 10 }
    },
    offerRange: '$375,000 \u2013 $395,000',
    offerRationale: [
      'Motivated seller explicitly stated \u2014 rare to see that in listing language',
      'Zestimate $406.1K is below asking; 1967 build adds inspection risk',
      'Only 1,340 sqft is very small for a 3-bed \u2014 limits buyer pool',
      'Yakima River frontage is genuinely rare and adds premium \u2014 but house is the weak link'
    ],
    offerStrategy: 'Strategy: Open at $370K citing motivated seller, small sqft, and 1967 age. Target $380\u2013390K. River frontage keeps floor higher. Get inspection fast.',
    highlight: 'YAKIMA RIVER FRONTAGE on 4+ acres. Guest house with bedroom/bath + RV hookups. Detached garage with finished space above. Motivated seller. Shortest drive from Farmington at ~7.5 hours.',
    propertyHighlights: [
      { icon: '\uD83C\uDF0A', text: 'Yakima River frontage \u2014 rare waterfront property with fishing/recreation access' },
      { icon: '\uD83C\uDFE0', text: 'Guest house with bedroom + bathroom + RV hookups' },
      { icon: '\uD83D\uDE97', text: 'Detached garage with finished space above \u2014 studio or office potential' },
      { icon: '\uD83D\uDD25', text: 'Wood burning fireplace + stainless steel appliances' },
      { icon: '\uD83D\uDCE6', text: 'Two storage containers for equipment/tool storage' },
      { icon: '\u23F1\uFE0F', text: 'Shortest drive from Farmington UT at ~7.5 hours' }
    ],
    locationSchools: [
      { icon: '\uD83C\uDFEB', text: 'Richland SD \u2014 highly rated WA district, GreatSchools 7\u20138/10' },
      { icon: '\uD83C\uDFEB', text: 'Good K\u201312 options in Richland/West Richland area' },
      { icon: '\uD83C\uDFE5', text: 'Kadlec Regional Medical Center ~20 min (Level II trauma)' },
      { icon: '\uD83D\uDED2', text: 'Tri-Cities metro ~20 min \u2014 full big-box retail and services' },
      { icon: '\uD83C\uDFDE\uFE0F', text: 'Yakima River recreation corridor \u2014 kayaking, tubing, fishing' }
    ],
    pros: [
      'Yakima River frontage is genuinely rare \u2014 can\u2019t buy that later',
      'Shortest drive from Farmington UT (~7.5 hrs) of all listings',
      'Tri-Cities metro nearby \u2014 best town access and schools on the list',
      'Guest house adds income potential or guest accommodation',
      'Motivated seller = maximum negotiating leverage',
      'Well water + septic = no municipal water bills'
    ],
    cons: [
      'Only 1,340 sqft \u2014 smallest house on the entire list',
      '1967 build \u2014 oldest WA property; plumbing/electrical concerns',
      'Only 4.15 acres \u2014 limited space for large homestead plans',
      'Crawl space foundation \u2014 potential moisture/flooding issues near river',
      'Tri-Cities area is semi-arid \u2014 very different feel from PNW forests',
      'Flood zone risk with river frontage \u2014 verify FEMA maps and insurance costs'
    ],
    familyFit: [
      'River frontage is a dream for kids \u2014 fishing, swimming, exploring',
      'Tri-Cities has excellent schools, sports, activities for family',
      'Guest house gives space for visitors without crowding the main home'
    ],
    verifyBefore: [
      'FEMA flood zone designation \u2014 could dramatically increase insurance costs',
      'Well water quality near agricultural river \u2014 test for nitrates and pesticides',
      '1967 electrical and plumbing \u2014 may need full update for modern family use'
    ],
    tableOfferNote: 'Motivated seller, Zestimate $406K, small 1,340 sqft'
  },
  {
    id: 'p11',
    num: 11,
    navLabel: 'Colville 1334',
    address: '1334 Clugston-Onion Cr Rd #1',
    city: 'Colville',
    state: 'WA',
    zip: '99114',
    county: 'Stevens County',
    price: 400000,
    priceStr: '$400,000',
    monthly: '~$2,217/mo',
    down3: '$12,000',
    beds: 3,
    bath: 2,
    sqft: '2,640',
    acres: '7.03',
    acresSub: 'Fenced pasture',
    yearBuilt: 1992,
    type: 'Site-Built',
    typeBadge: 'b-sfr',
    status: 'Active',
    statusClass: 'status-active',
    dom: 98,
    drive: '~9.5 hr',
    toTown: '~20 min',
    toTownSub: 'Colville',
    image: 'https://photos.zillowstatic.com/fp/4c4e8f32ae24e0a8269e59e7f35fe1bc-cc_ft_1152.webp',
    zillowLink: 'https://www.zillow.com/homedetails/1334-Clugston-Onion-Creek-Rd-1-Colville-WA-99114/458193718_zpid/',
    tax: '$2,808/yr',
    extraStats: [
      { label: 'Generator', val: 'Generac', valSub: 'Hardwired' },
      { label: 'Status', val: 'Active', valClass: 'status-active' }
    ],
    score: 80,
    scores: {
      price: { val: 12, max: 15 },
      acreage: { val: 10, max: 20 },
      privacy: { val: 7, max: 10 },
      outbuildings: { val: 13, max: 15 },
      town: { val: 12, max: 15 },
      schools: { val: 10, max: 15 },
      practicality: { val: 9, max: 10 }
    },
    offerRange: '$370,000 \u2013 $385,000',
    offerRationale: [
      '98 DOM = strong leverage \u2014 approaching 100-day mark with no takers',
      '$152/sqft for 2,640 sqft is exceptional value \u2014 best price-per-sqft on the list',
      'Radiant floor heat, Generac generator, horse-ready stalls = premium features already included',
      '7 acres fenced/cross-fenced prime pasture \u2014 ready for animals day one'
    ],
    offerStrategy: 'Strategy: Open at $365K citing 98 DOM. Target $375\u2013380K. This is a strong-value property \u2014 don\u2019t lowball too aggressively or you\u2019ll lose it. Inspection on shared well.',
    highlight: 'Best price-per-sqft on the list at $152/sqft. 2,640 sqft with radiant floor heat, Generac generator (hardwired), horse-ready stalls, 7 acres fenced pasture, fruit trees, and mountain views. On paved county road 13 miles from Colville.',
    propertyHighlights: [
      { icon: '\uD83C\uDFE0', text: 'Updated kitchen with pantry \u2014 primary bedroom + laundry on main level' },
      { icon: '\uD83D\uDD25', text: 'Radiant floor heat throughout \u2014 superior comfort in cold winters' },
      { icon: '\u26A1', text: 'Generac generator hardwired \u2014 whole-house backup power' },
      { icon: '\uD83D\uDC34', text: 'Attached flexible space with box stalls \u2014 horse-ready from day one' },
      { icon: '\uD83C\uDF33', text: 'Fruit trees, garden space, 7 acres fenced/cross-fenced prime pasture' },
      { icon: '\uD83C\uDFDE\uFE0F', text: 'Mountain and territorial views from paved county road' }
    ],
    locationSchools: [
      { icon: '\uD83C\uDFEB', text: 'Colville SD \u2014 GreatSchools 5\u20136/10, solid for rural WA' },
      { icon: '\uD83C\uDFEB', text: 'Colville Junior High and Colville High School' },
      { icon: '\uD83C\uDFE5', text: 'Providence Mount Carmel Hospital ~20 min (Colville)' },
      { icon: '\uD83D\uDED2', text: 'Colville has grocery, hardware, medical \u2014 full small-town services' },
      { icon: '\uD83D\uDEE3\uFE0F', text: '13 miles on paved county road \u2014 easy year-round access' }
    ],
    pros: [
      '$152/sqft is the best value on the list for a site-built home',
      'Radiant floor heat + Generac generator = winter-ready infrastructure',
      'Horse-ready stalls and 7 acres fenced pasture \u2014 livestock from day one',
      '98 DOM gives real negotiating leverage on price',
      'Primary bedroom + laundry on main level \u2014 practical family layout',
      'Owned propane tank \u2014 no rental fees, buy propane at market rate'
    ],
    cons: [
      'Shared drilled well \u2014 need to verify GPM and sharing agreement terms',
      '1992 build approaching 35 years \u2014 check roof, HVAC, septic age',
      '7 acres is mid-range \u2014 not the large acreage some buyers seek',
      '~9.5 hr drive from Farmington \u2014 among the farther listings',
      'Colville area job market is limited \u2014 need remote work or commute plan',
      'Stevens County has cold, snowy winters \u2014 4WD essential Nov\u2013Mar'
    ],
    familyFit: [
      'Horse stalls and fenced pasture are perfect for kids who want animals',
      'Radiant heat means warm floors for toddlers crawling around',
      'Fruit trees and garden give kids hands-on growing experience'
    ],
    verifyBefore: [
      'Shared well agreement \u2014 who pays for maintenance? What\u2019s the GPM allocation?',
      'Septic permit and last inspection date \u2014 permitted system per listing',
      'Roof age on 1992 build \u2014 may be approaching replacement window'
    ],
    tableOfferNote: '98 DOM, $152/sqft best value; 2,640 sqft site-built'
  },
  {
    id: 'p12',
    num: 12,
    navLabel: 'Clayton Furze',
    address: '4583 Furze Rd',
    city: 'Clayton',
    state: 'WA',
    zip: '99110',
    county: 'Stevens County',
    price: 479000,
    priceStr: '$479,000',
    monthly: '~$2,626/mo',
    down3: '$14,370',
    beds: 3,
    bath: 2,
    sqft: '1,665',
    acres: '7.71',
    acresSub: 'Cross-fenced',
    yearBuilt: 1994,
    type: 'Site-Built',
    typeBadge: 'b-sfr',
    status: 'Active',
    statusClass: 'status-active',
    dom: 18,
    drive: '~8.5 hr',
    toTown: '~20 min',
    toTownSub: 'Deer Park',
    image: 'https://photos.zillowstatic.com/fp/88ff28359c526ee3e8235b10e1624cdc-uncropped_scaled_within_1536_1152.webp',
    zillowLink: 'https://www.zillow.com/homedetails/4583-Furze-Rd-Clayton-WA-99110/108189390_zpid/',
    tax: '$2,576/yr',
    extraStats: [
      { label: 'Heat', val: 'Propane + Wood' },
      { label: 'Status', val: 'Active', valClass: 'status-active' }
    ],
    score: 74,
    scores: {
      price: { val: 8, max: 15 },
      acreage: { val: 10, max: 20 },
      privacy: { val: 9, max: 10 },
      outbuildings: { val: 12, max: 15 },
      town: { val: 11, max: 15 },
      schools: { val: 10, max: 15 },
      practicality: { val: 8, max: 10 }
    },
    offerRange: '$460,000 \u2013 $475,000',
    offerRationale: [
      'Only 18 DOM \u2014 fresh listing with limited leverage for aggressive offers',
      'Zestimate $477.8K is nearly at asking price \u2014 market agrees with pricing',
      'FHA/VA/USDA eligible = broader buyer pool = less room to negotiate',
      'Barn + shop + 3-bay equipment shed is a strong outbuilding package for the price'
    ],
    offerStrategy: 'Strategy: Open at $455K. Target $465\u2013470K. Fresh listing limits leverage. Focus on inspection findings for credits rather than big price reduction.',
    highlight: 'Secluded ranch on 7.71 cross-fenced acres. Barn, garage/shop, 3-bay equipment shed, chicken coop. Metal roof, wood stove, covered deck. Minutes from Hwy 395. FHA/VA/USDA eligible. Spokane ~45 min.',
    propertyHighlights: [
      { icon: '\uD83C\uDFE0', text: 'Secluded ranch among trees \u2014 genuine privacy on 7.71 acres' },
      { icon: '\uD83D\uDC34', text: 'Barn + cross-fenced acreage ideal for horses or livestock' },
      { icon: '\uD83D\uDD27', text: '3-bay equipment shed + garage/shop \u2014 excellent outbuilding package' },
      { icon: '\uD83D\uDD25', text: 'Wood stove in family room + propane heater \u2014 dual heating' },
      { icon: '\uD83D\uDCBC', text: 'Dedicated office space (could be converted to 4th bedroom)' },
      { icon: '\uD83D\uDC14', text: 'Chicken coop + covered deck for outdoor living' }
    ],
    locationSchools: [
      { icon: '\uD83C\uDFEB', text: 'Deer Park SD \u2014 GreatSchools 5\u20136/10' },
      { icon: '\uD83C\uDFEB', text: 'Deer Park Elementary/Middle/High School ~20 min' },
      { icon: '\uD83C\uDFE5', text: 'MultiCare Deaconess Hospital (Spokane) ~45 min' },
      { icon: '\uD83D\uDED2', text: 'Deer Park has groceries/hardware; Spokane full services ~45 min' },
      { icon: '\uD83D\uDEE3\uFE0F', text: 'Minutes from Hwy 395 \u2014 good regional access' }
    ],
    pros: [
      'True seclusion among trees with excellent privacy',
      'Barn + shop + 3-bay shed = one of the best outbuilding packages',
      '7.71 cross-fenced acres \u2014 horse/livestock ready immediately',
      'Metal roof = 40\u201350 year lifespan, low maintenance',
      'Spokane within 45 min for employment, medical, big-box retail',
      'FHA/VA/USDA eligible \u2014 flexible financing options'
    ],
    cons: [
      '1,665 sqft is modest for the $479K price point',
      'Only 18 DOM \u2014 minimal negotiating leverage on price',
      'Epoxy countertops are polarizing \u2014 may want to budget for replacement',
      'Vinyl siding is functional but less charming than wood or cement',
      'Clayton is very small \u2014 Deer Park 20 min for basic services',
      'Propane heat can be expensive in cold Stevens County winters'
    ],
    familyFit: [
      'Cross-fenced acreage is perfect for kids to have horses/animals',
      'Dedicated office converts to bedroom as family grows',
      'Chicken coop and covered deck foster outdoor family lifestyle'
    ],
    verifyBefore: [
      'Well GPM and water quality \u2014 not mentioned in listing',
      'Septic age and type \u2014 1994 system may be approaching replacement',
      'Propane costs in winter \u2014 get seller\u2019s utility bills for realistic budget'
    ],
    tableOfferNote: 'Fresh listing (18 DOM), Zestimate $477.8K near asking'
  },
  {
    id: 'p13',
    num: 13,
    navLabel: 'Eureka MT',
    address: '2801 US Highway 93 S',
    city: 'Eureka',
    state: 'MT',
    zip: '59917',
    county: 'Lincoln County',
    price: 499000,
    priceStr: '$499,000',
    monthly: '~$2,706/mo',
    down3: '$14,970',
    beds: 3,
    bath: 2,
    sqft: '1,144',
    acres: '12.27',
    acresSub: 'Wooded, no covenants',
    yearBuilt: 2006,
    type: 'Site-Built',
    typeBadge: 'b-sfr',
    status: 'Active',
    statusClass: 'status-active',
    dom: 631,
    drive: '~8 hr',
    toTown: '~10 min',
    toTownSub: 'Eureka',
    image: 'https://photos.zillowstatic.com/fp/63d95c6096b74432a101867334e9efdb-cc_ft_1152.webp',
    zillowLink: 'https://www.zillow.com/homedetails/2801-Us-Highway-93-S-Eureka-MT-59917/92069757_zpid/',
    tax: '$1,610/yr',
    extraStats: [
      { label: 'Tax', val: '$1,610/yr', valSub: 'Low' },
      { label: 'Status', val: 'Active', valClass: 'status-active' }
    ],
    score: 70,
    scores: {
      price: { val: 6, max: 15 },
      acreage: { val: 14, max: 20 },
      privacy: { val: 9, max: 10 },
      outbuildings: { val: 11, max: 15 },
      town: { val: 10, max: 15 },
      schools: { val: 8, max: 15 },
      practicality: { val: 6, max: 10 }
    },
    offerRange: '$380,000 \u2013 $420,000',
    offerRationale: [
      '631 DOM is the highest on the list by far \u2014 extreme leverage; this has been listed nearly 2 years',
      '$436/sqft for only 1,144 sqft is dramatically overpriced for Lincoln County MT',
      'Tax assessed value is only $54,960 \u2014 massive gap between assessment and asking price',
      'Log cabin + quonset with living quarters + greenhouse is unique but hard to comp'
    ],
    offerStrategy: 'Strategy: Open at $360K citing 631 DOM and $55K tax assessment. Target $390\u2013410K. Seller has been waiting nearly 2 years \u2014 they need to sell. Be patient.',
    highlight: '12 wooded acres with views and NO covenants. Log cabin with utilities. 30x40 quonset with living quarters. Greenhouse, multiple sheds. 500+ ft Hwy 93 frontage. Minutes from Eureka; <1 hr from Whitefish/Kalispell.',
    propertyHighlights: [
      { icon: '\uD83C\uDF32', text: '12.27 wooded acres with views and total seclusion feel' },
      { icon: '\uD83D\uDCDC', text: 'NO covenants \u2014 complete freedom to build, modify, use as you wish' },
      { icon: '\uD83C\uDFE0', text: 'Log cabin with power, water, heat \u2014 open floor plan' },
      { icon: '\uD83C\uDFED', text: '30x40 quonset with living quarters \u2014 workshop + guest space' },
      { icon: '\uD83C\uDF3F', text: 'Greenhouse + multiple sheds for homestead operations' },
      { icon: '\uD83D\uDEE3\uFE0F', text: '500+ feet of Hwy 93 frontage \u2014 easy access, potential commercial value' }
    ],
    locationSchools: [
      { icon: '\uD83C\uDFEB', text: 'Eureka SD \u2014 small rural Montana district' },
      { icon: '\uD83C\uDFEB', text: 'Lincoln County schools \u2014 GreatSchools 5\u20136/10' },
      { icon: '\uD83C\uDFE5', text: 'Cabinet Peaks Medical Center (Libby) ~45 min; Kalispell ~50 min' },
      { icon: '\uD83D\uDED2', text: 'Eureka has basic services; Whitefish/Kalispell ~50 min for full retail' },
      { icon: '\uD83C\uDFBF', text: 'Near Whitefish Mountain Resort \u2014 skiing, outdoor recreation hub' }
    ],
    pros: [
      '631 DOM = most leverage of any property on the list',
      'No covenants \u2014 rare freedom for building, animals, business use',
      '12+ wooded acres with views and genuine mountain seclusion',
      'Quonset with living quarters is essentially a second dwelling',
      'Near Whitefish/Kalispell \u2014 world-class outdoor recreation area',
      'Low taxes ($1,610/yr) keep ongoing costs manageable'
    ],
    cons: [
      'Only 1,144 sqft main house \u2014 too small for most families',
      '$436/sqft is absurdly high \u2014 deeply overpriced at asking',
      'Tax assessment of $54,960 vs. $499K asking is a red flag',
      'Highway frontage means road noise \u2014 less private than it appears',
      'Lincoln County is remote \u2014 limited job market and services',
      'Multiple structures may have permit/code compliance issues'
    ],
    familyFit: [
      'Whitefish area is a dream for outdoor family \u2014 skiing, hiking, lakes',
      'No covenants means kids can have any animals, build forts, explore freely',
      '1,144 sqft is a real challenge for a family \u2014 quonset quarters help but aren\u2019t ideal'
    ],
    verifyBefore: [
      'Why 631 DOM? \u2014 investigate if there are hidden issues (zoning, access, contamination)',
      'Permit status on all structures \u2014 log cabin, quonset, greenhouse',
      'Well/septic status and water quality \u2014 Hwy 93 proximity may affect groundwater'
    ],
    tableOfferNote: '631 DOM extreme leverage; $436/sqft way overpriced'
  },
  {
    id: 'p14',
    num: 14,
    navLabel: 'Cusick',
    address: '151 Park Ln',
    city: 'Cusick',
    state: 'WA',
    zip: '99119',
    county: 'Pend Oreille County',
    price: 475000,
    priceStr: '$475,000',
    monthly: '~$2,612/mo',
    down3: '$14,250',
    beds: 3,
    bath: 2,
    sqft: '1,512',
    acres: '5',
    acresSub: 'Fenced garden',
    yearBuilt: 1997,
    type: 'Site-Built',
    typeBadge: 'b-sfr',
    status: 'Active',
    statusClass: 'status-active',
    dom: 6,
    drive: '~9 hr',
    toTown: '~10 min',
    toTownSub: 'Ione',
    image: 'https://photos.zillowstatic.com/fp/26e2174fa80a63e52d3a54b0c3438260-cc_ft_1152.webp',
    zillowLink: 'https://www.zillow.com/homedetails/151-Park-Ln-Cusick-WA-99119/108180230_zpid/',
    tax: '$2,773/yr',
    extraStats: [
      { label: 'Well', val: 'New', valSub: 'Whole-house filtration' },
      { label: 'Status', val: 'Active', valClass: 'status-active' }
    ],
    score: 73,
    scores: {
      price: { val: 8, max: 15 },
      acreage: { val: 6, max: 20 },
      privacy: { val: 7, max: 10 },
      outbuildings: { val: 11, max: 15 },
      town: { val: 10, max: 15 },
      schools: { val: 9, max: 15 },
      practicality: { val: 9, max: 10 }
    },
    offerRange: '$445,000 \u2013 $460,000',
    offerRationale: [
      'Brand new listing (6 DOM) \u2014 very limited leverage for aggressive offers',
      'Zestimate $458.8K is under asking by $16K \u2014 market says lower',
      '$314/sqft is high for 1,512 sqft \u2014 paying premium for condition and improvements',
      'New well, new HVAC, whole-house filtration = significant recent investment by seller'
    ],
    offerStrategy: 'Strategy: Open at $440K. Target $450\u2013455K. Seller invested heavily in improvements \u2014 they expect full value. Focus on comps showing $314/sqft is above area median.',
    highlight: 'Beautifully maintained with new furnace/heat pump/AC, new well, whole-house water filtration. Custom trim, bamboo hardwood, ADA-accessible primary. 30x40 shop with loft. Fenced garden, berries, chicken coop. Community boat launch access.',
    propertyHighlights: [
      { icon: '\uD83C\uDFE0', text: 'Beautifully maintained \u2014 custom trim, bamboo hardwood floors throughout' },
      { icon: '\u2744\uFE0F', text: 'Brand new furnace, heat pump, and AC \u2014 zero HVAC worries' },
      { icon: '\uD83D\uDCA7', text: 'New well + whole-house water filtration system' },
      { icon: '\u267F', text: 'ADA-accessible primary suite \u2014 future-proofed for aging in place' },
      { icon: '\uD83D\uDD27', text: '30x40 shop with lean-to, loft, wood stove, furnace \u2014 heated workspace' },
      { icon: '\uD83C\uDF3F', text: 'Fenced garden, raised beds, berries, chicken coop \u2014 homestead-ready' }
    ],
    locationSchools: [
      { icon: '\uD83C\uDFEB', text: 'Cusick SD \u2014 small rural Washington district' },
      { icon: '\uD83C\uDFEB', text: 'Cusick Elementary and Cusick Jr/Sr High School' },
      { icon: '\uD83C\uDFE5', text: 'Newport Hospital & Health Services ~30 min' },
      { icon: '\uD83D\uDED2', text: 'Ione ~10 min for basics; Newport ~30 min for full services' },
      { icon: '\uD83D\uDEA3', text: 'Tiger Slough area \u2014 community boat launch for Pend Oreille River access' }
    ],
    pros: [
      'Move-in ready \u2014 new HVAC, new well, modern finishes throughout',
      '30x40 heated shop is a serious workshop/garage space',
      'Fenced garden with established berries and raised beds',
      'ADA-accessible primary \u2014 practical for multi-generational living',
      'Community boat launch access \u2014 river recreation built in',
      'Underground dog fence \u2014 pet-friendly property from day one'
    ],
    cons: [
      '$314/sqft is high for only 1,512 sqft in Pend Oreille County',
      'Only 5 acres \u2014 limits large-scale homestead ambitions',
      'Brand new listing (6 DOM) \u2014 almost no negotiating leverage',
      'Cusick is very small and remote \u2014 limited school programs',
      'Zestimate $458.8K is $16K below asking \u2014 priced above market',
      '~9 hr drive from Farmington \u2014 longer commute for family visits'
    ],
    familyFit: [
      'Best maintained property on the list \u2014 zero renovation stress for a busy family',
      'Chicken coop and garden teach kids responsibility and food production',
      'Pend Oreille River access for kayaking, fishing, and summer swimming'
    ],
    verifyBefore: [
      'Cusick SD quality and class sizes \u2014 very small school, verify fit for your kids',
      'Internet options in Tiger Slough area \u2014 Starlink may be only option',
      'Carport storage room condition \u2014 verify if it\u2019s properly weatherproofed'
    ],
    tableOfferNote: 'Brand new (6 DOM), Zestimate $458.8K, $314/sqft high'
  },
  {
    id: 'p15',
    num: 15,
    navLabel: 'Tonasket',
    address: '43 Oakes Dr',
    city: 'Tonasket',
    state: 'WA',
    zip: '98855',
    county: 'Okanogan County',
    price: 459900,
    priceStr: '$459,900',
    monthly: '~$2,667/mo',
    down3: '$13,797',
    beds: 3,
    bath: 3,
    sqft: '3,216',
    acres: '4.04',
    acresSub: 'Crumbacher Estates',
    yearBuilt: 1977,
    type: 'Log Home',
    typeBadge: 'b-sfr',
    status: 'Active',
    statusClass: 'status-active',
    dom: 112,
    drive: '~10 hr',
    toTown: '~15 min',
    toTownSub: 'Tonasket',
    image: 'https://photos.zillowstatic.com/fp/dbadc12768f4ce224c429c93e62f4dea-uncropped_scaled_within_1536_1152.webp',
    zillowLink: 'https://www.zillow.com/homedetails/43-Oakes-Dr-Tonasket-WA-98855/102639823_zpid/',
    tax: '$3,068/yr',
    extraStats: [
      { label: 'HOA', val: '$1,200/yr', valSub: 'Water included' },
      { label: 'Status', val: 'Active', valClass: 'status-active' }
    ],
    score: 77,
    scores: {
      price: { val: 11, max: 15 },
      acreage: { val: 5, max: 20 },
      privacy: { val: 8, max: 10 },
      outbuildings: { val: 10, max: 15 },
      town: { val: 10, max: 15 },
      schools: { val: 8, max: 15 },
      practicality: { val: 9, max: 10 }
    },
    offerRange: '$420,000 \u2013 $440,000',
    offerRationale: [
      '112 DOM + Zestimate of $443.1K (under asking) = solid negotiating position',
      '$143/sqft is the best value per square foot for a log home \u2014 3,216 sqft is massive',
      'HOA ($1,200/yr) may deter some buyers \u2014 reduces competition',
      'Dirt road access and 1977 age give inspection leverage for further discount'
    ],
    offerStrategy: 'Strategy: Open at $415K citing 112 DOM and Zestimate. Target $425\u2013435K. Exceptional sqft value. Use HOA and dirt road access as negotiating points.',
    highlight: 'Authentic log home with 3,216 sqft at only $143/sqft \u2014 best value per square foot on the list. Floor-to-ceiling windows, vaulted ceilings, exposed beams. 3-bay carport + 576 sqft detached garage + barn with fenced pasture. HOA includes water.',
    propertyHighlights: [
      { icon: '\uD83C\uDFE0', text: 'Authentic log home \u2014 3,216 sqft at incredible $143/sqft value' },
      { icon: '\uD83C\uDF1F', text: 'Floor-to-ceiling windows, vaulted ceilings, exposed beams \u2014 stunning interior' },
      { icon: '\uD83D\uDD25', text: 'Rock mantle with pellet stove \u2014 cozy winter heating' },
      { icon: '\uD83D\uDE97', text: '3-bay carport + 576 sqft detached garage with wood stove' },
      { icon: '\uD83D\uDC34', text: 'Barn with fenced pasture for horses/livestock' },
      { icon: '\uD83C\uDFE2', text: 'Downstairs: workshop, living room, bathroom \u2014 multi-level living' }
    ],
    locationSchools: [
      { icon: '\uD83C\uDFEB', text: 'Tonasket SD \u2014 GreatSchools 4\u20135/10' },
      { icon: '\uD83C\uDFEB', text: 'Tonasket Elementary/Middle/High School' },
      { icon: '\uD83C\uDFE5', text: 'North Valley Hospital (Tonasket) ~15 min' },
      { icon: '\uD83D\uDED2', text: 'Tonasket has groceries and basic services ~15 min' },
      { icon: '\uD83C\uDF32', text: 'Okanogan National Forest access \u2014 hiking, hunting, recreation' }
    ],
    pros: [
      '$143/sqft \u2014 best price per square foot for a log home anywhere on the list',
      '3,216 sqft gives abundant space for a growing family',
      'Floor-to-ceiling windows and vaulted ceilings = breathtaking character',
      'Barn + carport + detached garage = solid outbuilding package',
      'HOA includes water \u2014 no well pump to maintain',
      '112 DOM provides good leverage for negotiation'
    ],
    cons: [
      'Only 4.04 acres \u2014 HOA community may have land use restrictions',
      'HOA of $1,200/yr adds to ongoing costs',
      'Dirt road access \u2014 could be challenging in winter',
      '1977 log home \u2014 nearly 50 years old, maintenance concerns',
      '~10 hours from Farmington \u2014 the longest drive on the list',
      'Tonasket is small and remote with limited services/jobs'
    ],
    familyFit: [
      'Massive 3,216 sqft with loft gives every kid their own space',
      'Log cabin character is magical for children \u2014 feels like a storybook home',
      'Barn and fenced pasture let kids have horses from day one'
    ],
    verifyBefore: [
      'HOA rules and restrictions \u2014 what animals allowed? Building restrictions?',
      'Dirt road winter maintenance \u2014 who plows? Is it passable Dec\u2013Mar?',
      'Log home chinking and structural condition \u2014 50-year-old logs need expert evaluation'
    ],
    tableOfferNote: '112 DOM, Zestimate $443K, $143/sqft best log value'
  },
  {
    id: 'p16',
    num: 16,
    navLabel: 'Davenport',
    address: '31600 Sontag Rdg E',
    city: 'Davenport',
    state: 'WA',
    zip: '99122',
    county: 'Lincoln County',
    price: 419900,
    priceStr: '$419,900',
    monthly: '~$2,403/mo',
    down3: '$12,597',
    beds: 3,
    bath: 2,
    sqft: '\u2014',
    acres: '12.5',
    acresSub: 'Pine forest',
    yearBuilt: 2023,
    type: 'Site-Built',
    typeBadge: 'b-sfr',
    status: 'Active',
    statusClass: 'status-active',
    dom: 176,
    drive: '~8.5 hr',
    toTown: '~20 min',
    toTownSub: 'Davenport',
    image: 'https://photos.zillowstatic.com/fp/5f4eb27460b8ff760df84ade36307449-cc_ft_1152.webp',
    zillowLink: 'https://www.zillow.com/homedetails/31600-Sontag-Rdg-E-Davenport-WA-99122/441260275_zpid/',
    tax: '$2,172/yr',
    extraStats: [
      { label: 'HOA', val: '$1,300/yr', valSub: 'Gated community' },
      { label: 'Status', val: 'Active', valClass: 'status-active' }
    ],
    score: 72,
    scores: {
      price: { val: 9, max: 15 },
      acreage: { val: 14, max: 20 },
      privacy: { val: 8, max: 10 },
      outbuildings: { val: 3, max: 15 },
      town: { val: 9, max: 15 },
      schools: { val: 9, max: 15 },
      practicality: { val: 7, max: 10 }
    },
    offerRange: '$385,000 \u2013 $405,000',
    offerRationale: [
      '176 DOM is strong leverage \u2014 nearly 6 months on market with no takers',
      'Sqft not disclosed is suspicious \u2014 likely a smaller home than expected',
      'HOA ($1,300/yr) for gated community limits buyer pool who want unrestricted land',
      'Zestimate $414.7K is close but 176 DOM says market isn\u2019t biting at this price'
    ],
    offerStrategy: 'Strategy: Open at $380K citing 176 DOM and undisclosed sqft. Target $390\u2013400K. Gated community HOA is a dealbreaker for many rural buyers = leverage.',
    highlight: 'Custom built 2023 in gated Hawk Creek Ranch Estates. 12.5 acres of western pine forest. Southern exposure with territorial views. Community amenities: lodge, pool, hot tub, sports courts. Near Lake Roosevelt. Fiber cement exterior, metal roof.',
    propertyHighlights: [
      { icon: '\uD83C\uDFE0', text: 'Custom built 2023 \u2014 newest construction on the entire list' },
      { icon: '\uD83C\uDF32', text: '12.5 acres of western pine forest with southern exposure' },
      { icon: '\uD83C\uDFDE\uFE0F', text: 'Territorial views from Sontag Ridge \u2014 panoramic landscape' },
      { icon: '\uD83C\uDFCA', text: 'Gated community with lodge, pool, hot tub, sports courts' },
      { icon: '\uD83D\uDE90', text: 'RV hookups for camping guests or travel trailer storage' },
      { icon: '\uD83C\uDFA3', text: 'Near Lake Roosevelt Recreation Area \u2014 fishing, boating, kayaking' }
    ],
    locationSchools: [
      { icon: '\uD83C\uDFEB', text: 'Davenport SD \u2014 GreatSchools 5\u20137/10' },
      { icon: '\uD83C\uDFEB', text: 'Davenport Elementary and Davenport High School' },
      { icon: '\uD83C\uDFE5', text: 'Lincoln Hospital (Davenport) ~20 min; Spokane ~1 hr' },
      { icon: '\uD83D\uDED2', text: 'Davenport has basic services; Spokane ~1 hr for full retail' },
      { icon: '\uD83D\uDEA3', text: 'Lake Roosevelt and Hawk Creek for outdoor recreation' }
    ],
    pros: [
      'Built 2023 \u2014 zero deferred maintenance, modern code compliance',
      '12.5 acres of pine forest with genuine seclusion',
      'Gated community amenities (pool, lodge, sports courts) are a bonus',
      'Metal roof + fiber cement exterior = extremely low maintenance',
      'Horses allowed \u2014 community supports rural lifestyle',
      '176 DOM gives strong negotiation leverage'
    ],
    cons: [
      'Sqft not disclosed \u2014 major red flag, likely smaller than expected',
      'HOA $1,300/yr adds $108/mo to ongoing costs',
      'No outbuildings \u2014 lowest score in that category on the list',
      'Gated community has rules \u2014 may limit homestead flexibility',
      'Davenport is small \u2014 Spokane 1 hr for significant services',
      'Propane + heat pump \u2014 propane costs can spike in cold winters'
    ],
    familyFit: [
      'Community pool and sports courts are huge for kids in summer',
      'Brand new home means no renovation stress \u2014 move in and live',
      'Lake Roosevelt access for family fishing, camping, boating weekends'
    ],
    verifyBefore: [
      'Exact square footage \u2014 non-disclosure is a dealbreaker concern',
      'HOA rules in detail \u2014 what animals, building, business uses are allowed?',
      'Well/septic vs. community systems \u2014 what\u2019s the water source?'
    ],
    tableOfferNote: '176 DOM, sqft unknown (suspicious), HOA limits buyers'
  }
];

// ─── HTML GENERATORS ─────────────────────────────────────────────────────────

function pct(val, max) {
  return Math.round((val / max) * 100);
}

function generateNavLinks() {
  return properties.map(p =>
    `  <a href="#${p.id}">${p.navLabel}</a>`
  ).join('\n');
}

function generateTableRow(p) {
  const typeBadgeLabel = p.type === 'Log Home' ? 'Log Home' : p.type === 'Site-Built' ? 'Site-Built' : 'Manuf.';
  const totalScore = p.scores.price.val + p.scores.acreage.val + p.scores.privacy.val +
    p.scores.outbuildings.val + p.scores.town.val + p.scores.schools.val + p.scores.practicality.val;

  return `        <tr>
          <td>${p.num}</td>
          <td><a href="#${p.id}">${p.address}, ${p.city} ${p.state}</a></td>
          <td class="td-price">${p.priceStr}</td>
          <td class="td-mo">${p.monthly}</td>
          <td>${p.down3}</td>
          <td>${p.beds} / ${p.bath}</td>
          <td>${p.sqft}</td>
          <td>${p.acres}</td>
          <td><span class="badge ${p.typeBadge}">${typeBadgeLabel}</span></td>
          <td>${p.yearBuilt}</td>
          <td>${p.drive}</td>
          <td><strong style="color:var(--accent)">${p.score}</strong>/100</td>
          <td style="white-space:nowrap"><strong>${p.offerRange}</strong><br><span style="font-size:0.72rem;color:var(--muted)">${p.tableOfferNote}</span></td>
          <td><span class="${p.statusClass}">${p.status}</span></td>
        </tr>`;
}

function generateCard(p) {
  const typeBadgeLabel = p.type === 'Log Home' ? 'Log Home' : p.type === 'Site-Built' ? 'Site-Built' : 'Manuf.';
  const totalScore = p.scores.price.val + p.scores.acreage.val + p.scores.privacy.val +
    p.scores.outbuildings.val + p.scores.town.val + p.scores.schools.val + p.scores.practicality.val;

  // Build extra stats
  const statsHTML = [
    `        <div class="stat"><div class="stat-label">Beds/Bath</div><div class="stat-val">${p.beds} / ${p.bath}</div></div>`,
    `        <div class="stat"><div class="stat-label">Sq Ft</div><div class="stat-val">${p.sqft}</div></div>`,
    `        <div class="stat"><div class="stat-label">Acres</div><div class="stat-val">${p.acres}</div><div class="stat-sub">${p.acresSub}</div></div>`,
    `        <div class="stat"><div class="stat-label">Built</div><div class="stat-val">${p.yearBuilt}</div></div>`,
    `        <div class="stat"><div class="stat-label">Drive</div><div class="stat-val">${p.drive}</div><div class="stat-sub">Google Maps</div></div>`,
    `        <div class="stat"><div class="stat-label">To Town</div><div class="stat-val">${p.toTown}</div><div class="stat-sub">${p.toTownSub}</div></div>`,
  ];

  for (const es of p.extraStats) {
    let valHTML = es.valClass
      ? `<div class="stat-val ${es.valClass}">${es.val}</div>`
      : `<div class="stat-val">${es.val}</div>`;
    let subHTML = es.valSub ? `<div class="stat-sub">${es.valSub}</div>` : '';
    statsHTML.push(`        <div class="stat"><div class="stat-label">${es.label}</div>${valHTML}${subHTML}</div>`);
  }

  // Mini bars for score-offer-band
  const miniBarData = [
    { label: 'Price', ...p.scores.price },
    { label: 'Acreage', ...p.scores.acreage },
    { label: 'Privacy', ...p.scores.privacy },
    { label: 'Outbldgs', ...p.scores.outbuildings },
    { label: 'Town', ...p.scores.town },
    { label: 'Schools', ...p.scores.schools },
    { label: 'Practical', ...p.scores.practicality },
  ];

  const miniBarsHTML = miniBarData.map(b =>
    `        <div class="sob-mini-bar"><div class="sob-mini-label"><span>${b.label}</span><span>${b.val}/${b.max}</span></div><div class="sob-mini-track"><div class="sob-mini-fill" style="width:${pct(b.val, b.max)}%"></div></div></div>`
  ).join('\n');

  // Offer rationale bullets
  const rationaleHTML = p.offerRationale.map(r => `          <li>${r}</li>`).join('\n');

  // Property highlights
  const highlightsHTML = p.propertyHighlights.map(h =>
    `        <li><span class="li-icon">${h.icon}</span> ${h.text}</li>`
  ).join('\n');

  // Location & Schools
  const locationHTML = p.locationSchools.map(l =>
    `        <li><span class="li-icon">${l.icon}</span> ${l.text}</li>`
  ).join('\n');

  // Pros
  const prosHTML = p.pros.map(pr =>
    `        <li><span class="li-icon">\u2713</span> ${pr}</li>`
  ).join('\n');

  // Cons
  const consHTML = p.cons.map(c =>
    `        <li><span class="li-icon">\u2717</span> ${c}</li>`
  ).join('\n');

  // Family fit notes
  const familyHTML = p.familyFit.map((f, i) => {
    const border = i < p.familyFit.length - 1
      ? 'border-bottom:1px solid rgba(0,0,0,0.05);'
      : '';
    return `        <li style="font-size:0.85rem;padding:0.25rem 0;${border}">${f}</li>`;
  }).join('\n');

  // Verify before offering
  const verifyHTML = p.verifyBefore.map((v, i) => {
    const border = i < p.verifyBefore.length - 1
      ? 'border-bottom:1px solid rgba(0,0,0,0.05);'
      : '';
    return `        <li style="font-size:0.85rem;padding:0.25rem 0;${border}">${v}</li>`;
  }).join('\n');

  // Score row bars
  const scoreBarData = [
    { label: 'Price Value', ...p.scores.price },
    { label: 'Acreage', ...p.scores.acreage },
    { label: 'Trees/Privacy', ...p.scores.privacy },
    { label: 'Outbuildings', ...p.scores.outbuildings },
    { label: 'Town Proximity', ...p.scores.town },
    { label: 'Schools', ...p.scores.schools },
    { label: 'Practicality', ...p.scores.practicality },
  ];

  const scoreBarsHTML = scoreBarData.map(b =>
    `      <div class="score-item"><div class="score-item-label"><span>${b.label}</span><span>${b.val}/${b.max}</span></div><div class="score-track"><div class="score-fill" style="width:${pct(b.val, b.max)}%"></div></div></div>`
  ).join('\n');

  const cityLabel = `${p.city.toUpperCase()} ${p.state.toUpperCase()}`;

  return `
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     PROPERTY #${p.num} \u2014 ${cityLabel}
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="card" id="${p.id}">
  <div class="card-top">
    <div class="card-map">
      <img
        loading="lazy"
        src="${p.image}"
        alt="${p.address}, ${p.city} ${p.state}"
        style="width:100%;height:100%;object-fit:cover;min-height:240px;">
      <div class="map-overlay">
        <a class="photo-btn" href="${p.zillowLink}" target="_blank">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
          View All Photos
        </a>
        <a class="photo-btn" href="${p.zillowLink}" target="_blank">Zillow</a>
      </div>
    </div>
    <div>
      <div class="card-header">
        <div class="card-title-group">
          <div class="card-address">${p.address}</div>
          <div class="card-sub">${p.city}, ${p.state} ${p.zip} \u00b7 ${p.county}</div>
          <div class="card-badges">
            <span class="badge ${p.typeBadge}">${typeBadgeLabel}</span>
          </div>
        </div>
        <div class="card-price-block">
          <div class="card-price">${p.priceStr}</div>
          <div class="card-monthly">${p.monthly} (est.)</div>
          <div class="card-down">${p.down3} down @ 3%</div>
        </div>
      </div>
      <div class="stats-row">
${statsHTML.join('\n')}
      </div>
    </div>
  </div>

  <!-- SCORE + OFFER BAND -->
  <div class="score-offer-band">
    <div class="sob-score">
      <div>
        <div class="sob-score-num">${p.score}</div>
        <div class="sob-score-denom">/ 100</div>
      </div>
      <div class="sob-score-bars">
${miniBarsHTML}
      </div>
    </div>
    <div class="sob-offer">
      <div class="sob-offer-label">\uD83D\uDCB0 Realistic Offer Range</div>
      <div class="sob-offer-price">${p.offerRange}</div>
      <div class="sob-offer-rationale">
        <ul>
${rationaleHTML}
        </ul>
        <div class="sob-strategy">${p.offerStrategy}</div>
      </div>
    </div>
  </div>
  <div class="highlight-band">
    <strong>\u2B50 Why It Stands Out:</strong> ${p.highlight}
  </div>

  <div class="card-body">
    <div class="card-section">
      <div class="card-section-title">\uD83C\uDFE1 Property Highlights</div>
      <ul>
${highlightsHTML}
      </ul>
    </div>
    <div class="card-section">
      <div class="card-section-title">\uD83D\uDCCD Location & Schools</div>
      <ul>
${locationHTML}
      </ul>
    </div>
    <div class="card-section">
      <div class="card-section-title">\u2705 Pros</div>
      <ul>
${prosHTML}
      </ul>
    </div>
    <div class="card-section">
      <div class="card-section-title">\u274C Cons</div>
      <ul>
${consHTML}
      </ul>
    </div>
  </div>
  <div class="pros-cons">
    <div class="pros">
      <div class="card-section-title">\uD83D\uDCAC Family Fit Notes</div>
      <ul style="list-style:none;padding:0;">
${familyHTML}
      </ul>
    </div>
    <div class="cons">
      <div class="card-section-title">\u26A0\uFE0F Verify Before Offering</div>
      <ul style="list-style:none;padding:0;">
${verifyHTML}
      </ul>
    </div>
  </div>
  <div class="score-row">
    <div>
      <div class="score-big">${p.score}</div>
      <div class="score-label">/ 100</div>
    </div>
    <div class="score-bars">
${scoreBarsHTML}
    </div>
  </div>
</div>`;
}

// ─── INJECT INTO HTML ────────────────────────────────────────────────────────

function main() {
  let html = fs.readFileSync(HTML_PATH, 'utf-8');

  // 1. Add nav links before <div class="nav-right">
  const navLinks = generateNavLinks();
  const navRightMarker = '  <div class="nav-right">';
  if (!html.includes(navRightMarker)) {
    console.error('ERROR: Could not find nav-right marker in HTML.');
    process.exit(1);
  }
  html = html.replace(navRightMarker, navLinks + '\n' + navRightMarker);

  // 2. Add table rows before </tbody>
  const tableRows = properties.map(generateTableRow).join('\n');
  const tbodyMarker = '      </tbody>';
  if (!html.includes(tbodyMarker)) {
    console.error('ERROR: Could not find </tbody> marker in HTML.');
    process.exit(1);
  }
  html = html.replace(tbodyMarker, tableRows + '\n' + tbodyMarker);

  // 3. Add card blocks before </div><!-- /cards -->
  const cardsEndMarker = '</div><!-- /cards -->';
  if (!html.includes(cardsEndMarker)) {
    console.error('ERROR: Could not find </div><!-- /cards --> marker in HTML.');
    process.exit(1);
  }
  const cardBlocks = properties.map(generateCard).join('\n');
  html = html.replace(cardsEndMarker, cardBlocks + '\n' + cardsEndMarker);

  fs.writeFileSync(HTML_PATH, html, 'utf-8');
  console.log(`SUCCESS: Injected ${properties.length} properties (p8-p16) into ${HTML_PATH}`);
  console.log(`  - ${properties.length} nav links added`);
  console.log(`  - ${properties.length} table rows added`);
  console.log(`  - ${properties.length} full card blocks added`);
}

main();
