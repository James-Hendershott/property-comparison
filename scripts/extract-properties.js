#!/usr/bin/env node
/**
 * extract-properties.js
 *
 * Parses index.html using cheerio and extracts all 47 property objects
 * into public/properties-data.js using the schema defined in the plan.
 *
 * Run once: node extract-properties.js
 */

const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('public/index.html', 'utf8');
const $ = cheerio.load(html);

// Helpers
function cleanNum(str) {
  if (!str) return 0;
  return parseFloat(String(str).replace(/[^0-9.-]/g, '')) || 0;
}

function cleanInt(str) {
  if (!str) return 0;
  return parseInt(String(str).replace(/[^0-9-]/g, ''), 10) || 0;
}

function cleanPrice(str) {
  if (!str) return 0;
  return cleanInt(str);
}

// Extract nav labels (pid -> label)
const navLabels = {};
$('.nav a[href^="#p"]').each(function () {
  const href = $(this).attr('href');
  const pid = href.slice(1);
  navLabels[pid] = $(this).text().trim();
});

// Extract overview table data (pid -> row data)
const tableData = {};
$('#overview table.qt tbody tr').each(function () {
  const tds = $(this).find('td');
  const link = $(this).find('a[href^="#p"]');
  if (!link.length) return;
  const pid = link.attr('href').slice(1);
  const num = cleanInt(tds.eq(0).text());

  // Extract down payment
  const downText = tds.eq(4).text().trim(); // e.g. "$15,047"

  // Extract monthly
  const moText = tds.eq(3).text().trim(); // e.g. "~$3,137"

  // Extract offer from table
  const offerTd = tds.eq(11);
  const offerNote = offerTd.find('span').text().trim();

  tableData[pid] = {
    num,
    downText,
    moText,
    tableOfferNote: offerNote
  };
});

// Extract each card
const properties = [];

$('.card[id^="p"]').each(function () {
  const card = $(this);
  const pid = card.attr('id');
  const num = tableData[pid] ? tableData[pid].num : cleanInt(pid.replace('p', ''));
  const dataStatus = card.attr('data-status') || '';

  // --- Header ---
  const address = card.find('.card-address').first().text().trim();
  const subText = card.find('.card-sub').first().text().trim();
  // Parse "City, ST Zip · County" from sub
  const subParts = subText.split('·').map(s => s.trim());
  const cityStateZip = subParts[0] || '';
  const county = subParts[1] || '';

  // Parse city, state, zip from "Lenoir, NC 28645"
  const cszMatch = cityStateZip.match(/^(.+?),\s*([A-Z]{2})\s*(\d{5})?/);
  const city = cszMatch ? cszMatch[1].trim() : cityStateZip;
  const state = cszMatch ? cszMatch[2] : '';
  const zip = cszMatch ? (cszMatch[3] || '') : '';

  // --- Price ---
  const priceText = card.find('.card-price').first().text().trim();
  const price = cleanPrice(priceText);

  // --- Listing link & image ---
  const imgLink = card.find('.card-img-link');
  const listingLink = imgLink.attr('href') || '';
  const imgEl = imgLink.find('img');
  const image = imgEl.attr('src') || '';

  // --- Badges ---
  const badges = [];
  const typeBadgeMap = {
    'b-sfr': 'Site-Built',
    'b-mfg': 'Manufactured',
    'b-pend': 'Pending',
    'b-new': 'NEW',
    'b-removed': 'REMOVED',
    'b-oor': 'Out of Range'
  };
  let type = 'Site-Built';
  let typeBadge = 'b-sfr';

  card.find('.card-badges .badge').each(function () {
    const cls = $(this).attr('class') || '';
    const badgeText = $(this).text().trim();

    if (cls.includes('b-sfr')) {
      type = badgeText || 'Site-Built';
      typeBadge = 'b-sfr';
    } else if (cls.includes('b-mfg')) {
      type = badgeText || 'Manufactured';
      typeBadge = 'b-mfg';
    } else if (cls.includes('b-new')) {
      badges.push('b-new');
    } else if (cls.includes('b-removed')) {
      badges.push('b-removed');
    } else if (cls.includes('b-pend')) {
      badges.push('b-pend');
    } else if (cls.includes('b-oor')) {
      type = badgeText || 'Out of Range';
      typeBadge = 'b-oor';
    }
  });

  // --- Monthly breakdown ---
  const monthlyTotal = card.find('.monthly-total').first().text().trim();
  const mbLines = [];
  card.find('.monthly-breakdown .mb-line').each(function () {
    const spans = $(this).find('span');
    mbLines.push({
      label: spans.eq(0).text().trim(),
      value: spans.eq(1).text().trim()
    });
  });

  // Extract tax rate from monthly breakdown label like "Property Tax (Caldwell Co. 0.60%)"
  let taxRate = 0;
  let taxLabel = '';
  mbLines.forEach(function (line) {
    if (line.label.toLowerCase().includes('tax')) {
      taxLabel = line.label;
      const rateMatch = line.label.match(/([\d.]+)%/);
      if (rateMatch) taxRate = parseFloat(rateMatch[1]) / 100;
    }
  });

  // --- Down payment ---
  const downText = card.find('.card-down').first().text().trim();

  // --- Stats row ---
  const statEls = card.find('.stats-row .stat');
  const stats = {};

  statEls.each(function () {
    const label = $(this).find('.stat-label').text().trim().toLowerCase();
    const val = $(this).find('.stat-val').text().trim();
    const sub = $(this).find('.stat-sub').text().trim();
    const valEl = $(this).find('.stat-val');
    const statusClass = valEl.hasClass('status-active') ? 'status-active' :
                        valEl.hasClass('status-pending') ? 'status-pending' :
                        valEl.hasClass('status-sold') ? 'status-sold' :
                        valEl.hasClass('status-off-market') ? 'status-off-market' : '';

    if (label.includes('beds') || label.includes('bath')) {
      const parts = val.split('/').map(s => s.trim());
      stats.beds = cleanInt(parts[0]);
      stats.bath = cleanInt(parts[1]);
    } else if (label.includes('sq')) {
      stats.sqft = cleanInt(val);
    } else if (label.includes('acre')) {
      stats.acres = cleanNum(val);
      stats.acresSub = sub;
    } else if (label.includes('built')) {
      stats.yearBuilt = cleanInt(val);
    } else if (label.includes('drive')) {
      stats.drive = val;
      stats.driveSub = sub;
    } else if (label.includes('town')) {
      stats.toTown = val;
      stats.toTownSub = sub;
    } else if (label.includes('tax')) {
      stats.taxAnnual = cleanInt(val);
    } else if (label.includes('status')) {
      stats.status = val;
      stats.statusClass = statusClass;
      stats.statusNote = sub;
    } else if (label.includes('hoa')) {
      stats.hoa = cleanInt(val);
    }
  });

  // If no status found in stats, try to determine from table or elsewhere
  if (!stats.status) {
    stats.status = 'Active';
    stats.statusClass = 'status-active';
    stats.statusNote = '';
  }

  // --- Scores ---
  const scores = {};
  const scoreKeys = ['price', 'acreage', 'schools', 'outbldgs', 'town', 'hospital', 'hazards', 'beach', 'forested', 'living'];
  card.find('.sob-mini-bar').each(function (i) {
    if (i < scoreKeys.length) {
      const labelSpans = $(this).find('.sob-mini-label span');
      const scoreText = labelSpans.eq(1).text().trim();
      const match = scoreText.match(/(\d+)/);
      scores[scoreKeys[i]] = match ? parseInt(match[1]) : 0;
    }
  });

  // --- Offer ---
  const offerRange = card.find('.sob-offer-price').first().text().trim();
  const offerStrategy = card.find('.sob-strategy').first().text().trim();
  const offerRationale = [];
  card.find('.sob-offer-rationale ul li').each(function () {
    offerRationale.push($(this).text().trim());
  });

  const tableOfferNote = tableData[pid] ? tableData[pid].tableOfferNote : '';

  // --- Highlight ---
  const highlightEl = card.find('.highlight-band').first();
  let highlight = '';
  if (highlightEl.length) {
    // Get text after the "⭐ Why It Stands Out:" prefix
    const fullText = highlightEl.text().trim();
    const prefix = '⭐ Why It Stands Out:';
    const idx = fullText.indexOf('Why It Stands Out:');
    if (idx !== -1) {
      highlight = fullText.substring(idx + 'Why It Stands Out:'.length).trim();
    } else {
      highlight = fullText;
    }
  }

  // --- Property Highlights ---
  const highlights = [];
  const bodySections = card.find('.card-body > .card-section');
  bodySections.each(function () {
    const title = $(this).find('.card-section-title').first().text().trim().toLowerCase();
    if (title.includes('highlight') && !title.includes('proximity')) {
      $(this).find('ul li').each(function () {
        const icon = $(this).find('.li-icon').text().trim();
        const clone = $(this).clone();
        clone.find('.li-icon').remove();
        const text = clone.text().trim();
        highlights.push({ icon, text });
      });
    }
  });

  // --- Proximity ---
  const proximity = [];
  card.find('.proximity-grid .prox-item').each(function () {
    const icon = $(this).find('.prox-icon').text().trim();
    const label = $(this).find('.prox-label').text().trim();
    const value = $(this).find('.prox-value').text().trim();
    const isRef = $(this).hasClass('prox-item-ref');
    proximity.push({ icon, label, value, ref: isRef });
  });

  // --- Pros (card-body) ---
  const cardPros = [];
  bodySections.each(function () {
    const title = $(this).find('.card-section-title').first().text().trim();
    if (title.includes('Pros') || title.includes('✅')) {
      $(this).find('ul li').each(function () {
        const icon = $(this).find('.li-icon').text().trim();
        const clone = $(this).clone();
        clone.find('.li-icon').remove();
        const text = clone.text().trim();
        cardPros.push({ icon, text });
      });
    }
  });

  // --- Cons (card-body) ---
  const cardCons = [];
  bodySections.each(function () {
    const title = $(this).find('.card-section-title').first().text().trim();
    if (title.includes('Cons') || title.includes('❌')) {
      $(this).find('ul li').each(function () {
        const icon = $(this).find('.li-icon').text().trim();
        const clone = $(this).clone();
        clone.find('.li-icon').remove();
        const text = clone.text().trim();
        cardCons.push({ icon, text });
      });
    }
  });

  // --- Family Fit / Verify (inside .pros-cons) ---
  const familyFit = [];
  card.find('.pros-cons .pros ul li').each(function () {
    familyFit.push($(this).text().trim());
  });

  const verifyItems = [];
  card.find('.pros-cons .cons ul li').each(function () {
    // Get HTML to preserve <strong> tags
    const rawHtml = $(this).html();
    verifyItems.push($(this).text().trim());
  });

  // Also capture the verify items with their bold labels
  const verifyItemsRich = [];
  card.find('.pros-cons .cons ul li').each(function () {
    const strong = $(this).find('strong').text().trim();
    const fullText = $(this).text().trim();
    if (strong) {
      // Remove strong prefix and the " — " separator
      const rest = fullText.replace(strong, '').replace(/^\s*[—–-]\s*/, '').trim();
      verifyItemsRich.push({ label: strong, text: rest });
    } else {
      verifyItemsRich.push({ label: '', text: fullText });
    }
  });

  // --- Must Do ---
  const mustDo = [];
  card.find('.must-do-grid .must-do-item').each(function () {
    const hasIcon = $(this).find('.must-do-icon').length > 0;
    const clone = $(this).clone();
    clone.find('.must-do-icon').remove();
    const text = clone.text().trim();
    mustDo.push({ urgent: hasIcon, text });
  });

  // --- Env Hazards ---
  const envHazards = { location: '', pills: [], note: '' };
  const envSection = card.find('.env-hazards').first();
  if (envSection.length) {
    const titleText = envSection.find('.env-hazards-title').text().trim();
    // Strip "Environmental Hazards — " prefix
    const locPrefix = 'Environmental Hazards —';
    const locIdx = titleText.indexOf('—');
    envHazards.location = locIdx !== -1 ? titleText.substring(locIdx + 1).trim() : titleText;

    envSection.find('.env-hazards-grid .env-pill').each(function () {
      const cls = $(this).attr('class') || '';
      let level = 'low';
      if (cls.includes('env-pill-severe')) level = 'severe';
      else if (cls.includes('env-pill-high')) level = 'high';
      else if (cls.includes('env-pill-mod')) level = 'mod';
      else if (cls.includes('env-pill-special')) level = 'special';
      else if (cls.includes('env-pill-low')) level = 'low';

      envHazards.pills.push({ level, text: $(this).text().trim() });
    });

    envHazards.note = envSection.find('.env-note').text().trim();
  }

  // Build property object
  const prop = {
    id: pid,
    num,
    navLabel: navLabels[pid] || city || pid,
    address,
    city,
    state,
    zip,
    county,
    price,
    listingLink,
    image,
    beds: stats.beds || 0,
    bath: stats.bath || 0,
    sqft: stats.sqft || 0,
    acres: stats.acres || 0,
    acresSub: stats.acresSub || '',
    yearBuilt: stats.yearBuilt || 0,
    type,
    typeBadge,
    status: stats.status || 'Active',
    statusClass: stats.statusClass || 'status-active',
    statusNote: stats.statusNote || '',
    badges,
    taxRate,
    taxLabel,
    taxAnnual: stats.taxAnnual || 0,
    hoa: stats.hoa || 0,
    drive: stats.drive || '',
    driveSub: stats.driveSub || '',
    toTown: stats.toTown || '',
    toTownSub: stats.toTownSub || '',
    scores,
    offerRange,
    offerStrategy,
    offerRationale,
    tableOfferNote,
    highlight,
    highlights,
    proximity,
    cardPros,
    cardCons,
    familyFit,
    verifyItems: verifyItemsRich,
    mustDo,
    envHazards,
  };

  // Only include data-status if present
  if (dataStatus) {
    prop.dataStatus = dataStatus;
  }

  properties.push(prop);
});

console.log(`Extracted ${properties.length} properties`);

// Validate: check all properties have scores
let issues = 0;
properties.forEach(p => {
  const total = Object.values(p.scores).reduce((a, b) => a + b, 0);
  if (Object.keys(p.scores).length !== 10) {
    console.warn(`  ${p.id}: only ${Object.keys(p.scores).length} score categories (expected 10)`);
    issues++;
  }
  if (!p.price) {
    console.warn(`  ${p.id}: no price extracted`);
    issues++;
  }
  if (!p.address) {
    console.warn(`  ${p.id}: no address extracted`);
    issues++;
  }
});

if (issues) {
  console.warn(`${issues} issues found — review above`);
} else {
  console.log('All properties validated successfully');
}

// Write output
const output = `/* eslint-disable */
/**
 * properties-data.js — Single source of truth for all property data
 * Auto-generated by extract-properties.js on ${new Date().toISOString().split('T')[0]}
 *
 * ${properties.length} properties extracted from index.html
 */
var PROPERTIES = ${JSON.stringify(properties, null, 2)};
`;

fs.writeFileSync('public/properties-data.js', output, 'utf8');
console.log(`Written to public/properties-data.js (${Math.round(output.length / 1024)}KB)`);
