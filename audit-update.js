#!/usr/bin/env node
/**
 * audit-update.js — ONE-TIME SCRIPT
 * Applies audit corrections from the March 2026 live property audit.
 * Updates: statuses, prices, data corrections, score adjustments.
 * DO NOT RE-RUN.
 */

const fs = require('fs');
const path = require('path');

const HTML_FILE = path.join(__dirname, 'public', 'index.html');
let html = fs.readFileSync(HTML_FILE, 'utf8');

// Normalize to LF for matching, restore CRLF on write
const hadCRLF = html.includes('\r\n');
if (hadCRLF) html = html.replace(/\r\n/g, '\n');

let changeCount = 0;

function replace(old, neu, label) {
  if (!html.includes(old)) {
    console.error(`[MISS] ${label}: could not find string`);
    return false;
  }
  const count = html.split(old).length - 1;
  if (count > 1) {
    console.error(`[AMBIGUOUS] ${label}: found ${count} matches, skipping`);
    return false;
  }
  html = html.replace(old, neu);
  console.log(`[OK] ${label}`);
  changeCount++;
  return true;
}

// ═══════════════════════════════════════════════════════════════════
// STATUS CHANGES — Overview Table
// ═══════════════════════════════════════════════════════════════════

// p12: Active → Removed (house gone, only vacant land now)
replace(
  '<a href="#p12">380 Hardwood Dr SW, Supply NC</a></td>\n          <td class="td-price">$399,000</td>\n          <td class="td-mo">~$2,870</td>\n          <td>$13,965</td>\n          <td>4 / 2</td>\n          <td>1,477</td>\n          <td>~2</td>\n          <td><span class="badge b-sfr">Site-Built</span></td>\n          <td>2005</td>\n          <td><strong style="color:var(--accent)">54</strong>/100</td>\n          <td style="white-space:nowrap"><strong>$365K – $385K</strong><br><span style="font-size:0.72rem;color:var(--muted)">Gated community likely has HOA restrictions</span></td>\n          <td><span class="badge b-new">NEW</span> <span class="status-active">Active</span></td>',
  '<a href="#p12">380 Hardwood Dr SW, Supply NC</a></td>\n          <td class="td-price">$399,000</td>\n          <td class="td-mo">~$2,870</td>\n          <td>$13,965</td>\n          <td>4 / 2</td>\n          <td>1,477</td>\n          <td>~2</td>\n          <td><span class="badge b-sfr">Site-Built</span></td>\n          <td>2005</td>\n          <td><strong style="color:var(--accent)">54</strong>/100</td>\n          <td style="white-space:nowrap"><strong>$365K – $385K</strong><br><span style="font-size:0.72rem;color:var(--muted)">Gated community likely has HOA restrictions</span></td>\n          <td><span class="badge b-removed">REMOVED</span> <span class="status-sold">Gone</span></td>',
  'p12 overview status → Removed'
);

// p17: Active → Off-Market
replace(
  '<a href="#p17">4913 Celia Creek Rd, Lenoir NC</a></td>\n          <td class="td-price">$425,000</td>\n          <td class="td-mo">~$3,104</td>\n          <td>$14,875</td>\n          <td>3 / 3</td>\n          <td>1,798</td>\n          <td>13.65</td>\n          <td><span class="badge b-sfr">Site-Built</span></td>\n          <td>2017</td>\n          <td><strong style="color:var(--accent)">61</strong>/100</td>\n          <td style="white-space:nowrap"><strong>$390K – $415K</strong><br><span style="font-size:0.72rem;color:var(--muted)">2017 build, 13.65 acres, creek frontage</span></td>\n          <td><span class="badge b-new">NEW</span> <span class="status-active">Active</span></td>',
  '<a href="#p17">4913 Celia Creek Rd, Lenoir NC</a></td>\n          <td class="td-price">$425,000</td>\n          <td class="td-mo">~$3,104</td>\n          <td>$14,875</td>\n          <td>3 / 3</td>\n          <td>1,798</td>\n          <td>13.65</td>\n          <td><span class="badge b-sfr">Site-Built</span></td>\n          <td>2017</td>\n          <td><strong style="color:var(--accent)">61</strong>/100</td>\n          <td style="white-space:nowrap"><strong>$390K – $415K</strong><br><span style="font-size:0.72rem;color:var(--muted)">2017 build, 13.65 acres, creek frontage</span></td>\n          <td><span class="status-off">Off-Market</span></td>',
  'p17 overview status → Off-Market'
);

// p18: Active → Off-Market
replace(
  '<a href="#p18">188 California Branch, Union Mills NC</a></td>\n          <td class="td-price">$445,000</td>\n          <td class="td-mo">~$3,252</td>\n          <td>$15,575</td>\n          <td>3 / 3</td>\n          <td>2,335</td>\n          <td>7.0+</td>\n          <td><span class="badge b-sfr">Site-Built</span></td>\n          <td>—</td>\n          <td><strong style="color:var(--accent)">60</strong>/100</td>\n          <td style="white-space:nowrap"><strong>$400K – $430K</strong><br><span style="font-size:0.72rem;color:var(--muted)">Country views, 7+ acres, year built unknown</span></td>\n          <td><span class="badge b-new">NEW</span> <span class="status-active">Active</span></td>',
  '<a href="#p18">188 California Branch, Union Mills NC</a></td>\n          <td class="td-price">$445,000</td>\n          <td class="td-mo">~$3,252</td>\n          <td>$15,575</td>\n          <td>3 / 3</td>\n          <td>2,335</td>\n          <td>7.0+</td>\n          <td><span class="badge b-sfr">Site-Built</span></td>\n          <td>—</td>\n          <td><strong style="color:var(--accent)">60</strong>/100</td>\n          <td style="white-space:nowrap"><strong>$400K – $430K</strong><br><span style="font-size:0.72rem;color:var(--muted)">Country views, 7+ acres, year built unknown</span></td>\n          <td><span class="status-off">Off-Market</span></td>',
  'p18 overview status → Off-Market'
);

// p26: Active → Pending
replace(
  '<a href="#p26">200 Englewood Trl, Mount Airy NC</a></td>\n          <td class="td-price">$480,000</td>\n          <td class="td-mo">~$3,530</td>\n          <td>$16,800</td>\n          <td>3 / 1.5</td>\n          <td>2,057</td>\n          <td>16</td>\n          <td><span class="badge b-sfr">Site-Built</span></td>\n          <td>—</td>\n          <td><strong style="color:var(--accent)">66</strong>/100</td>\n          <td style="white-space:nowrap"><strong>$430K – $460K</strong><br><span style="font-size:0.72rem;color:var(--muted)">16 wooded acres, hunting property, 1.5 bath</span></td>\n          <td><span class="badge b-new">NEW</span> <span class="status-active">Active</span></td>',
  '<a href="#p26">200 Englewood Trl, Mount Airy NC</a></td>\n          <td class="td-price">$480,000</td>\n          <td class="td-mo">~$3,530</td>\n          <td>$16,800</td>\n          <td>3 / 1.5</td>\n          <td>2,057</td>\n          <td>16</td>\n          <td><span class="badge b-sfr">Site-Built</span></td>\n          <td>—</td>\n          <td><strong style="color:var(--accent)">66</strong>/100</td>\n          <td style="white-space:nowrap"><strong>$430K – $460K</strong><br><span style="font-size:0.72rem;color:var(--muted)">16 wooded acres, hunting property, 1.5 bath</span></td>\n          <td><span class="badge b-pend">PENDING</span> <span class="status-pending">Under Contract</span></td>',
  'p26 overview status → Pending'
);

// p29: Active → Sold
replace(
  '<a href="#p29">2222 Elevation Rd, Four Oaks NC</a></td>\n          <td class="td-price">$140,000</td>\n          <td class="td-mo">~$1,108</td>\n          <td>$4,900</td>\n          <td>3 / 2</td>\n          <td>1,512</td>\n          <td>7.51</td>\n          <td><span class="badge b-mfg">Manufactured</span></td>\n          <td>1997</td>\n          <td><strong style="color:var(--accent)">65</strong>/100</td>\n          <td style="white-space:nowrap"><strong>$120K – $135K</strong><br><span style="font-size:0.72rem;color:var(--muted)">Manufactured, ultra-cheap — may already be sold</span></td>\n          <td><span class="badge b-new">NEW</span> <span class="status-active">Active</span></td>',
  '<a href="#p29">2222 Elevation Rd, Four Oaks NC</a></td>\n          <td class="td-price">$140,000</td>\n          <td class="td-mo">~$1,108</td>\n          <td>$4,900</td>\n          <td>3 / 2</td>\n          <td>1,512</td>\n          <td>7.51</td>\n          <td><span class="badge b-mfg">Manufactured</span></td>\n          <td>1997</td>\n          <td><strong style="color:var(--accent)">65</strong>/100</td>\n          <td style="white-space:nowrap"><strong>$120K – $135K</strong><br><span style="font-size:0.72rem;color:var(--muted)">Manufactured, ultra-cheap — may already be sold</span></td>\n          <td><span class="badge b-removed">SOLD</span> <span class="status-sold">Sold</span></td>',
  'p29 overview status → Sold'
);

// p38: Active → Pending
replace(
  '<a href="#p38">10765 Barker Ten Mile Rd, Saint Pauls NC</a></td>\n          <td class="td-price">$450,000</td>\n          <td class="td-mo">~$3,316</td>\n          <td>$15,750</td>\n          <td>3 / 3</td>\n          <td>2,636</td>\n          <td>13.5</td>\n          <td><span class="badge b-sfr">Site-Built</span></td>\n          <td>1975</td>\n          <td><strong style="color:var(--accent)">60</strong>/100</td>\n          <td style="white-space:nowrap"><strong>$390K – $420K</strong><br><span style="font-size:0.72rem;color:var(--muted)">13 acres w/ fishing pond, high flood risk</span></td>\n          <td><span class="badge b-new">NEW</span> <span class="status-active">Active</span></td>',
  '<a href="#p38">10765 Barker Ten Mile Rd, Saint Pauls NC</a></td>\n          <td class="td-price">$450,000</td>\n          <td class="td-mo">~$3,316</td>\n          <td>$15,750</td>\n          <td>3 / 3</td>\n          <td>2,636</td>\n          <td>13.5</td>\n          <td><span class="badge b-sfr">Site-Built</span></td>\n          <td>1975</td>\n          <td><strong style="color:var(--accent)">60</strong>/100</td>\n          <td style="white-space:nowrap"><strong>$390K – $420K</strong><br><span style="font-size:0.72rem;color:var(--muted)">13 acres w/ fishing pond, high flood risk</span></td>\n          <td><span class="badge b-pend">PENDING</span> <span class="status-pending">Pending</span></td>',
  'p38 overview status → Pending'
);

// p42: Active → Pending
replace(
  '<a href="#p42">159 Big Island Rd, Forest City NC</a></td>\n          <td class="td-price">$449,000</td>\n          <td class="td-mo">~$3,309</td>\n          <td>$15,715</td>\n          <td>3 / 2</td>\n          <td>2,202</td>\n          <td>6.25</td>\n          <td><span class="badge b-sfr">Site-Built</span></td>\n          <td>1965</td>\n          <td><strong style="color:var(--accent)">62</strong>/100</td>\n          <td style="white-space:nowrap"><strong>$400K – $430K</strong><br><span style="font-size:0.72rem;color:var(--muted)">Horse-ready: barn + round pen, 6.25 level acres</span></td>\n          <td><span class="badge b-new">NEW</span> <span class="status-active">Active</span></td>',
  '<a href="#p42">159 Big Island Rd, Forest City NC</a></td>\n          <td class="td-price">$449,000</td>\n          <td class="td-mo">~$3,309</td>\n          <td>$15,715</td>\n          <td>3 / 2</td>\n          <td>2,202</td>\n          <td>6.25</td>\n          <td><span class="badge b-sfr">Site-Built</span></td>\n          <td>1965</td>\n          <td><strong style="color:var(--accent)">62</strong>/100</td>\n          <td style="white-space:nowrap"><strong>$400K – $430K</strong><br><span style="font-size:0.72rem;color:var(--muted)">Horse-ready: barn + round pen, 6.25 level acres</span></td>\n          <td><span class="badge b-pend">PENDING</span> <span class="status-pending">Pending</span></td>',
  'p42 overview status → Pending'
);

// p46: Active → Sale Pending
replace(
  '<a href="#p46">132 W Moore St, Candor NC</a></td>\n          <td class="td-price">$399,000</td>\n          <td class="td-mo">~$2,953</td>\n          <td>$13,965</td>\n          <td>4 / 3</td>\n          <td>3,069</td>\n          <td>11</td>\n          <td><span class="badge b-sfr">Site-Built</span></td>\n          <td>—</td>\n          <td><strong style="color:var(--accent)">73</strong>/100</td>\n          <td style="white-space:nowrap"><strong>$360K – $385K</strong><br><span style="font-size:0.72rem;color:var(--muted)">4/3 farmhouse 11 acres, 8 wooded, great value</span></td>\n          <td><span class="badge b-new">NEW</span> <span class="status-active">Active</span></td>',
  '<a href="#p46">132 W Moore St, Candor NC</a></td>\n          <td class="td-price">$399,000</td>\n          <td class="td-mo">~$2,953</td>\n          <td>$13,965</td>\n          <td>4 / 3</td>\n          <td>3,069</td>\n          <td>11</td>\n          <td><span class="badge b-sfr">Site-Built</span></td>\n          <td>—</td>\n          <td><strong style="color:var(--accent)">73</strong>/100</td>\n          <td style="white-space:nowrap"><strong>$360K – $385K</strong><br><span style="font-size:0.72rem;color:var(--muted)">4/3 farmhouse 11 acres, 8 wooded, great value</span></td>\n          <td><span class="badge b-pend">PENDING</span> <span class="status-pending">Sale Pending</span></td>',
  'p46 overview status → Sale Pending'
);

// ═══════════════════════════════════════════════════════════════════
// PRICE CHANGES — Overview Table + Cards
// ═══════════════════════════════════════════════════════════════════

// p1: $389,900 → $429,900 (price raised)
// Overview row
replace(
  '<a href="#p1">5933 Nubbin Creek Rd, Lenoir NC</a></td>\n          <td class="td-price">$389,900</td>\n          <td class="td-mo">~$2,855</td>\n          <td>$13,647</td>',
  '<a href="#p1">5933 Nubbin Creek Rd, Lenoir NC</a></td>\n          <td class="td-price">$429,900</td>\n          <td class="td-mo">~$3,137</td>\n          <td>$15,047</td>',
  'p1 overview price $389,900→$429,900'
);
// p1 overview score: 62→60
replace(
  '<a href="#p1">5933 Nubbin Creek Rd, Lenoir NC</a></td>\n          <td class="td-price">$429,900</td>\n          <td class="td-mo">~$3,137</td>\n          <td>$15,047</td>\n          <td>3 / 2</td>\n          <td>2,262</td>\n          <td>7.52</td>\n          <td><span class="badge b-sfr">Site-Built</span></td>\n          <td>1996</td>\n          <td><strong style="color:var(--accent)">62</strong>/100</td>\n          <td style="white-space:nowrap"><strong>$350K – $375K</strong><br><span style="font-size:0.72rem;color:var(--muted)">5 reductions = strong leverage</span></td>',
  '<a href="#p1">5933 Nubbin Creek Rd, Lenoir NC</a></td>\n          <td class="td-price">$429,900</td>\n          <td class="td-mo">~$3,137</td>\n          <td>$15,047</td>\n          <td>3 / 2</td>\n          <td>2,262</td>\n          <td>7.52</td>\n          <td><span class="badge b-sfr">Site-Built</span></td>\n          <td>1996</td>\n          <td><strong style="color:var(--accent)">60</strong>/100</td>\n          <td style="white-space:nowrap"><strong>$395K – $415K</strong><br><span style="font-size:0.72rem;color:var(--muted)">Price raised from $389K — less leverage</span></td>',
  'p1 overview score 62→60 + offer update'
);

// p1 card price block
replace(
  '<div class="card-price">$389,900</div>\n          <div class="card-monthly">\n            <span class="monthly-total">~$2,855/mo</span>\n            <button class="monthly-toggle">&#9662; details</button>\n            <div class="monthly-breakdown" hidden>\n              <div class="mb-line"><span>Principal &amp; Interest</span><span>$2,378</span></div>\n              <div class="mb-line"><span>Property Tax (Caldwell Co. 0.60%)</span><span>$195</span></div>\n              <div class="mb-line"><span>Insurance</span><span>$110</span></div>\n              <div class="mb-line"><span>PMI (3.5% down)</span><span>$172</span></div>\n            </div>\n          </div>\n          <div class="card-down">$13,647 down @ 3.5%</div>',
  '<div class="card-price">$429,900</div>\n          <div class="card-monthly">\n            <span class="monthly-total">~$3,137/mo</span>\n            <button class="monthly-toggle">&#9662; details</button>\n            <div class="monthly-breakdown" hidden>\n              <div class="mb-line"><span>Principal &amp; Interest</span><span>$2,622</span></div>\n              <div class="mb-line"><span>Property Tax (Caldwell Co. 0.60%)</span><span>$215</span></div>\n              <div class="mb-line"><span>Insurance</span><span>$110</span></div>\n              <div class="mb-line"><span>PMI (3.5% down)</span><span>$190</span></div>\n            </div>\n          </div>\n          <div class="card-down">$15,047 down @ 3.5%</div>',
  'p1 card price block $389,900→$429,900'
);

// p1 card stats status sub
replace(
  'Reduced 5 times from $449,900 — 13.3% total cut',
  'Price raised to $429,900 (was $389,900)',
  'p1 card status sub text'
);

// p1 score-offer-band
replace(
  '<div class="sob-score-num">62</div>\n        <div class="sob-score-denom">/ 100</div>\n      </div>\n      <div class="sob-score-bars">\n        <div class="sob-mini-bar"><div class="sob-mini-label"><span>Price</span><span>9/10</span></div><div class="sob-mini-track"><div class="sob-mini-fill" style="width:90%"></div></div></div>\n        <div class="sob-mini-bar"><div class="sob-mini-label"><span>Acreage</span><span>6/10</span></div><div class="sob-mini-track"><div class="sob-mini-fill" style="width:60%"></div></div></div>\n        <div class="sob-mini-bar"><div class="sob-mini-label"><span>Schools</span><span>6/10</span></div><div class="sob-mini-track"><div class="sob-mini-fill" style="width:60%"></div></div></div>\n        <div class="sob-mini-bar"><div class="sob-mini-label"><span>Outbldgs</span><span>4/10</span></div><div class="sob-mini-track"><div class="sob-mini-fill" style="width:40%"></div></div></div>\n        <div class="sob-mini-bar"><div class="sob-mini-label"><span>Town</span><span>8/10</span></div><div class="sob-mini-track"><div class="sob-mini-fill" style="width:80%"></div></div></div>\n        <div class="sob-mini-bar"><div class="sob-mini-label"><span>Hospital</span><span>8/10</span></div><div class="sob-mini-track"><div class="sob-mini-fill" style="width:80%"></div></div></div>\n        <div class="sob-mini-bar"><div class="sob-mini-label"><span>Hazards</span><span>4/10</span></div><div class="sob-mini-track"><div class="sob-mini-fill" style="width:40%"></div></div></div>\n        <div class="sob-mini-bar"><div class="sob-mini-label"><span>Beach</span><span>3/10</span></div><div class="sob-mini-track"><div class="sob-mini-fill" style="width:30%"></div></div></div>\n        <div class="sob-mini-bar"><div class="sob-mini-label"><span>Forested</span><span>8/10</span></div><div class="sob-mini-track"><div class="sob-mini-fill" style="width:80%"></div></div></div>\n        <div class="sob-mini-bar"><div class="sob-mini-label"><span>Living</span><span>6/10</span></div><div class="sob-mini-track"><div class="sob-mini-fill" style="width:60%"></div></div></div>\n      </div>\n    </div>\n    <div class="sob-offer">\n      <div class="sob-offer-label">\u{1F4B0} Realistic Offer Range</div>\n      <div class="sob-offer-price">$350K – $375K</div>\n      <div class="sob-offer-rationale">\n        <div class="sob-strategy">5 reductions = strong leverage</div>',
  '<div class="sob-score-num">60</div>\n        <div class="sob-score-denom">/ 100</div>\n      </div>\n      <div class="sob-score-bars">\n        <div class="sob-mini-bar"><div class="sob-mini-label"><span>Price</span><span>7/10</span></div><div class="sob-mini-track"><div class="sob-mini-fill" style="width:70%"></div></div></div>\n        <div class="sob-mini-bar"><div class="sob-mini-label"><span>Acreage</span><span>6/10</span></div><div class="sob-mini-track"><div class="sob-mini-fill" style="width:60%"></div></div></div>\n        <div class="sob-mini-bar"><div class="sob-mini-label"><span>Schools</span><span>6/10</span></div><div class="sob-mini-track"><div class="sob-mini-fill" style="width:60%"></div></div></div>\n        <div class="sob-mini-bar"><div class="sob-mini-label"><span>Outbldgs</span><span>4/10</span></div><div class="sob-mini-track"><div class="sob-mini-fill" style="width:40%"></div></div></div>\n        <div class="sob-mini-bar"><div class="sob-mini-label"><span>Town</span><span>8/10</span></div><div class="sob-mini-track"><div class="sob-mini-fill" style="width:80%"></div></div></div>\n        <div class="sob-mini-bar"><div class="sob-mini-label"><span>Hospital</span><span>8/10</span></div><div class="sob-mini-track"><div class="sob-mini-fill" style="width:80%"></div></div></div>\n        <div class="sob-mini-bar"><div class="sob-mini-label"><span>Hazards</span><span>4/10</span></div><div class="sob-mini-track"><div class="sob-mini-fill" style="width:40%"></div></div></div>\n        <div class="sob-mini-bar"><div class="sob-mini-label"><span>Beach</span><span>3/10</span></div><div class="sob-mini-track"><div class="sob-mini-fill" style="width:30%"></div></div></div>\n        <div class="sob-mini-bar"><div class="sob-mini-label"><span>Forested</span><span>8/10</span></div><div class="sob-mini-track"><div class="sob-mini-fill" style="width:80%"></div></div></div>\n        <div class="sob-mini-bar"><div class="sob-mini-label"><span>Living</span><span>6/10</span></div><div class="sob-mini-track"><div class="sob-mini-fill" style="width:60%"></div></div></div>\n      </div>\n    </div>\n    <div class="sob-offer">\n      <div class="sob-offer-label">\u{1F4B0} Realistic Offer Range</div>\n      <div class="sob-offer-price">$395K – $415K</div>\n      <div class="sob-offer-rationale">\n        <div class="sob-strategy">Price raised from $389K — less leverage</div>',
  'p1 score-offer-band: price 9→7, total 62→60, offer updated'
);


// ═══════════════════════════════════════════════════════════════════
// p37: $439,900 → $563,000, sqft 2,083→2,430, acres 5.0→7.06
// ═══════════════════════════════════════════════════════════════════

// p37 overview row
replace(
  '<a href="#p37">2754 Olivian Corbett Rd, Cedar Grove NC</a></td>\n          <td class="td-price">$439,900</td>\n          <td class="td-mo">~$3,244</td>\n          <td>$15,397</td>\n          <td>4 / 3</td>\n          <td>2,083</td>\n          <td>5.0</td>\n          <td><span class="badge b-sfr">Site-Built</span></td>\n          <td>1997</td>\n          <td><strong style="color:var(--accent)">67</strong>/100</td>\n          <td style="white-space:nowrap"><strong>$400K – $425K</strong><br><span style="font-size:0.72rem;color:var(--muted)">Best schools (Orange Co.), Research Triangle</span></td>',
  '<a href="#p37">2754 Olivian Corbett Rd, Cedar Grove NC</a></td>\n          <td class="td-price">$563,000</td>\n          <td class="td-mo">~$4,226</td>\n          <td>$19,705</td>\n          <td>4 / 3</td>\n          <td>2,430</td>\n          <td>7.06</td>\n          <td><span class="badge b-sfr">Site-Built</span></td>\n          <td>1997</td>\n          <td><strong style="color:var(--accent)">61</strong>/100</td>\n          <td style="white-space:nowrap"><strong>$490K – $520K</strong><br><span style="font-size:0.72rem;color:var(--muted)">Price jumped to $563K — over budget</span></td>',
  'p37 overview price/sqft/acres/score/offer'
);

// p37 card price block
replace(
  '<div class="card-price">$439,900</div>\n          <div class="card-monthly">\n            <span class="monthly-total">~$3,244/mo</span>\n          </div>\n          <div class="card-down">$15,397 down @ 3.5%</div>',
  '<div class="card-price">$563,000</div>\n          <div class="card-monthly">\n            <span class="monthly-total">~$4,226/mo</span>\n          </div>\n          <div class="card-down">$19,705 down @ 3.5%</div>',
  'p37 card price block $439,900→$563,000'
);

// p37 card stats
replace(
  '<div class="stat"><div class="stat-label">Sq Ft</div><div class="stat-val">2,083</div></div>\n        <div class="stat"><div class="stat-label">Acres</div><div class="stat-val">5.0</div></div>',
  '<div class="stat"><div class="stat-label">Sq Ft</div><div class="stat-val">2,430</div></div>\n        <div class="stat"><div class="stat-label">Acres</div><div class="stat-val">7.06</div></div>',
  'p37 card stats sqft/acres'
);

// p37 score-offer-band: price 7→1, total 67→61
replace(
  '<div class="sob-score-num">67</div>\n        <div class="sob-score-denom">/ 100</div>\n      </div>\n      <div class="sob-score-bars">\n        <div class="sob-mini-bar"><div class="sob-mini-label"><span>Price</span><span>7/10</span></div><div class="sob-mini-track"><div class="sob-mini-fill" style="width:70%"></div></div></div>\n        <div class="sob-mini-bar"><div class="sob-mini-label"><span>Acreage</span><span>5/10</span></div><div class="sob-mini-track"><div class="sob-mini-fill" style="width:50%"></div></div></div>',
  '<div class="sob-score-num">61</div>\n        <div class="sob-score-denom">/ 100</div>\n      </div>\n      <div class="sob-score-bars">\n        <div class="sob-mini-bar"><div class="sob-mini-label"><span>Price</span><span>1/10</span></div><div class="sob-mini-track"><div class="sob-mini-fill" style="width:10%"></div></div></div>\n        <div class="sob-mini-bar"><div class="sob-mini-label"><span>Acreage</span><span>5/10</span></div><div class="sob-mini-track"><div class="sob-mini-fill" style="width:50%"></div></div></div>',
  'p37 score-offer-band price 7→1, total 67→61'
);

// p37 score-offer-band offer
replace(
  '<div class="sob-offer-price">$400K – $425K</div>\n      <div class="sob-offer-rationale">\n        <div class="sob-strategy">Best schools (Orange Co.), Research Triangle</div>',
  '<div class="sob-offer-price">$490K – $520K</div>\n      <div class="sob-offer-rationale">\n        <div class="sob-strategy">Price jumped to $563K — over budget</div>',
  'p37 score-offer-band offer text'
);

// ═══════════════════════════════════════════════════════════════════
// DATA CORRECTIONS — Overview Table + Cards
// ═══════════════════════════════════════════════════════════════════

// p3: year built 2014 → 2006 (county records confirm)
// Overview table
replace(
  '<a href="#p3">530 Hanging Dog Rd, Murphy NC</a></td>\n          <td class="td-price">$499,800</td>\n          <td class="td-mo">~$3,588</td>\n          <td>$17,493</td>\n          <td>4 / 5</td>\n          <td>2,967</td>\n          <td>6.84</td>\n          <td><span class="badge b-sfr">Log Home</span></td>\n          <td>2014</td>',
  '<a href="#p3">530 Hanging Dog Rd, Murphy NC</a></td>\n          <td class="td-price">$499,800</td>\n          <td class="td-mo">~$3,588</td>\n          <td>$17,493</td>\n          <td>4 / 5</td>\n          <td>2,967</td>\n          <td>6.84</td>\n          <td><span class="badge b-sfr">Log Home</span></td>\n          <td>2006</td>',
  'p3 overview year 2014→2006'
);
// p3 card stats
replace(
  'Acres</div><div class="stat-val">6.84</div><div class="stat-sub">log cabin mountain acreage</div></div>\n        <div class="stat"><div class="stat-label">Built</div><div class="stat-val">2014</div></div>',
  'Acres</div><div class="stat-val">6.84</div><div class="stat-sub">log cabin mountain acreage</div></div>\n        <div class="stat"><div class="stat-label">Built</div><div class="stat-val">2006</div></div>',
  'p3 card year 2014→2006'
);

// p9: beds 3→4, baths 2→3.5, year 1998→2007, acres 5.22→5.72
// Overview table
replace(
  '<a href="#p9">701 Best Rd, Whiteville NC</a></td>\n          <td class="td-price">$499,900</td>\n          <td class="td-mo">~$3,630</td>\n          <td>$17,497</td>\n          <td>3 / 2</td>\n          <td>3,678</td>\n          <td>5.22</td>\n          <td><span class="badge b-sfr">Site-Built</span></td>\n          <td>1998</td>',
  '<a href="#p9">701 Best Rd, Whiteville NC</a></td>\n          <td class="td-price">$499,900</td>\n          <td class="td-mo">~$3,630</td>\n          <td>$17,497</td>\n          <td>4 / 3.5</td>\n          <td>3,678</td>\n          <td>5.72</td>\n          <td><span class="badge b-sfr">Site-Built</span></td>\n          <td>2007</td>',
  'p9 overview beds/baths/acres/year corrections'
);
// p9 card stats
replace(
  '<div class="stat"><div class="stat-label">Beds/Bath</div><div class="stat-val">3 / 2</div></div>\n        <div class="stat"><div class="stat-label">Sq Ft</div><div class="stat-val">3,678</div></div>\n        <div class="stat"><div class="stat-label">Acres</div><div class="stat-val">5.22</div><div class="stat-sub">all-brick estate</div></div>\n        <div class="stat"><div class="stat-label">Built</div><div class="stat-val">1998</div></div>',
  '<div class="stat"><div class="stat-label">Beds/Bath</div><div class="stat-val">4 / 3.5</div></div>\n        <div class="stat"><div class="stat-label">Sq Ft</div><div class="stat-val">3,678</div></div>\n        <div class="stat"><div class="stat-label">Acres</div><div class="stat-val">5.72</div><div class="stat-sub">all-brick estate</div></div>\n        <div class="stat"><div class="stat-label">Built</div><div class="stat-val">2007</div></div>',
  'p9 card beds/baths/acres/year corrections'
);

// p13: baths 2→3, year 2010→2006
// Overview table
replace(
  '<a href="#p13">13619 US Highway 258, Scotland Neck NC</a></td>\n          <td class="td-price">$459,900</td>\n          <td class="td-mo">~$3,444</td>\n          <td>$16,097</td>\n          <td>3 / 2</td>\n          <td>3,600</td>\n          <td>10</td>\n          <td><span class="badge b-sfr">Site-Built</span></td>\n          <td>2010</td>',
  '<a href="#p13">13619 US Highway 258, Scotland Neck NC</a></td>\n          <td class="td-price">$459,900</td>\n          <td class="td-mo">~$3,444</td>\n          <td>$16,097</td>\n          <td>3 / 3</td>\n          <td>2,848</td>\n          <td>10</td>\n          <td><span class="badge b-sfr">Site-Built</span></td>\n          <td>2006</td>',
  'p13 overview baths 2→3, sqft 3600→2848, year 2010→2006'
);
// p13 card stats
replace(
  '<div class="stat"><div class="stat-label">Beds/Bath</div><div class="stat-val">3 / 2</div></div>\n        <div class="stat"><div class="stat-label">Sq Ft</div><div class="stat-val">3,600</div></div>\n        <div class="stat"><div class="stat-label">Acres</div><div class="stat-val">10</div><div class="stat-sub">with workshops and outbuildings</div></div>\n        <div class="stat"><div class="stat-label">Built</div><div class="stat-val">2010</div></div>',
  '<div class="stat"><div class="stat-label">Beds/Bath</div><div class="stat-val">3 / 3</div></div>\n        <div class="stat"><div class="stat-label">Sq Ft</div><div class="stat-val">2,848</div><div class="stat-sub">permitted (3,600 total incl. unpermitted)</div></div>\n        <div class="stat"><div class="stat-label">Acres</div><div class="stat-val">10</div><div class="stat-sub">with workshops and outbuildings</div></div>\n        <div class="stat"><div class="stat-label">Built</div><div class="stat-val">2006</div></div>',
  'p13 card baths/sqft/year corrections'
);

// ═══════════════════════════════════════════════════════════════════
// STATUS CHANGES — Cards (status stat values)
// ═══════════════════════════════════════════════════════════════════

// p12 card status
replace(
  'id="p12">\n  <div class="card-top">',
  'id="p12" data-status="removed">\n  <div class="card-top">',
  'p12 card data-status=removed'
);

// p17 card status
replace(
  '<div class="card-price">$425,000</div>\n          <div class="card-monthly">\n            <span class="monthly-total">~$3,104/mo</span>\n            <button class="monthly-toggle">&#9662; details</button>',
  '<div class="card-price" style="text-decoration:line-through;opacity:0.6">$425,000</div>\n          <div class="card-monthly">\n            <span class="monthly-total" style="text-decoration:line-through;opacity:0.6">~$3,104/mo</span>\n            <button class="monthly-toggle">&#9662; details</button>',
  'p17 card price strike-through (off-market)'
);

// p18 card status
replace(
  '<div class="card-price">$445,000</div>\n          <div class="card-monthly">\n            <span class="monthly-total">~$3,252/mo</span>\n            <button class="monthly-toggle">&#9662; details</button>',
  '<div class="card-price" style="text-decoration:line-through;opacity:0.6">$445,000</div>\n          <div class="card-monthly">\n            <span class="monthly-total" style="text-decoration:line-through;opacity:0.6">~$3,252/mo</span>\n            <button class="monthly-toggle">&#9662; details</button>',
  'p18 card price strike-through (off-market)'
);

// p29 card badge: add SOLD badge
replace(
  'id="p29">\n  <div class="card-top">\n    <div class="card-map">\n      <a href="https://www.zillow.com/homedetails/2222-Elevation-Rd-Four-Oaks-NC-27524/69118215_zpid/"',
  'id="p29" data-status="sold">\n  <div class="card-top">\n    <div class="card-map">\n      <a href="https://www.zillow.com/homedetails/2222-Elevation-Rd-Four-Oaks-NC-27524/69118215_zpid/"',
  'p29 card data-status=sold'
);

// ═══════════════════════════════════════════════════════════════════
// CARD STATUS TEXT UPDATES
// ═══════════════════════════════════════════════════════════════════

// p26 card status
replace(
  '<div class="stat"><div class="stat-label">Status</div><div class="stat-val status-active">Active</div></div>\n      </div>\n    </div>\n  </div>\n  <div class="score-offer-band">\n    <div class="sob-score">\n      <div>\n        <div class="sob-score-num">66</div>',
  '<div class="stat"><div class="stat-label">Status</div><div class="stat-val status-pending">Under Contract</div></div>\n      </div>\n    </div>\n  </div>\n  <div class="score-offer-band">\n    <div class="sob-score">\n      <div>\n        <div class="sob-score-num">66</div>',
  'p26 card status Active→Under Contract'
);

// p29 card status
replace(
  '<div class="stat"><div class="stat-label">Status</div><div class="stat-val status-active">Active</div></div>\n      </div>\n    </div>\n  </div>\n  <div class="score-offer-band">\n    <div class="sob-score">\n      <div>\n        <div class="sob-score-num">65</div>',
  '<div class="stat"><div class="stat-label">Status</div><div class="stat-val status-sold">Sold</div></div>\n      </div>\n    </div>\n  </div>\n  <div class="score-offer-band">\n    <div class="sob-score">\n      <div>\n        <div class="sob-score-num">65</div>',
  'p29 card status Active→Sold'
);

// p38 card status
replace(
  '<div class="stat"><div class="stat-label">Status</div><div class="stat-val status-active">Active</div></div>\n      </div>\n    </div>\n  </div>\n  <div class="score-offer-band">\n    <div class="sob-score">\n      <div>\n        <div class="sob-score-num">60</div>',
  '<div class="stat"><div class="stat-label">Status</div><div class="stat-val status-pending">Pending</div></div>\n      </div>\n    </div>\n  </div>\n  <div class="score-offer-band">\n    <div class="sob-score">\n      <div>\n        <div class="sob-score-num">60</div>',
  'p38 card status Active→Pending'
);

// p42 card status
replace(
  '<div class="stat"><div class="stat-label">Status</div><div class="stat-val status-active">Active</div></div>\n      </div>\n    </div>\n  </div>\n  <div class="score-offer-band">\n    <div class="sob-score">\n      <div>\n        <div class="sob-score-num">62</div>',
  '<div class="stat"><div class="stat-label">Status</div><div class="stat-val status-pending">Pending</div></div>\n      </div>\n    </div>\n  </div>\n  <div class="score-offer-band">\n    <div class="sob-score">\n      <div>\n        <div class="sob-score-num">62</div>',
  'p42 card status Active→Pending'
);

// p46 card status
replace(
  '<div class="stat"><div class="stat-label">Status</div><div class="stat-val status-active">Active</div></div>\n      </div>\n    </div>\n  </div>\n  <div class="score-offer-band">\n    <div class="sob-score">\n      <div>\n        <div class="sob-score-num">73</div>',
  '<div class="stat"><div class="stat-label">Status</div><div class="stat-val status-pending">Sale Pending</div></div>\n      </div>\n    </div>\n  </div>\n  <div class="score-offer-band">\n    <div class="sob-score">\n      <div>\n        <div class="sob-score-num">73</div>',
  'p46 card status Active→Sale Pending'
);

// ═══════════════════════════════════════════════════════════════════
// WRITE OUTPUT
// ═══════════════════════════════════════════════════════════════════

// Restore CRLF if original had it
if (hadCRLF) html = html.replace(/\n/g, '\r\n');
fs.writeFileSync(HTML_FILE, html, 'utf8');
console.log(`\nDone! ${changeCount} changes applied.`);
