#!/usr/bin/env node
/**
 * overhaul-scores.js — ONE-TIME SCRIPT
 * Replaces the old 7-category scoring system (/100 with unequal weights)
 * with 10 equally-weighted categories (each /10, total /100).
 *
 * New categories: Price, Acreage, Schools, Outbuildings, Town, Hospital,
 *                 Hazards, Beach, Forested, Living Space
 *
 * For p1-p18: replaces existing .score-offer-band
 * For p19-p47: injects new .score-offer-band between card-top and highlight-band
 * Updates overview table: removes Drive column, fills Score/Offer for all rows, adds NEW badges
 *
 * DO NOT RE-RUN — this is a one-time migration script.
 */

const fs = require('fs');
const path = require('path');

const HTML_FILE = path.join(__dirname, 'public', 'index.html');

// ─── SCORE DATA (10 categories, each /10) ───────────────────────────────────
// Categories: price, acreage, schools, outbuildings, town, hospital, hazards, beach, forested, living
const SCORES = {
  // ── p1-p18 (existing cards, replacing old scores) ──
  p1:  { scores: [9, 6, 6, 4, 8, 8, 4, 3, 8, 6], offer: '$350K – $375K', offerNote: '5 reductions = strong leverage' },
  p2:  { scores: [5, 6, 5, 6, 7, 7, 3, 3, 6, 6], offer: '$440K – $470K', offerNote: '23% reduction + Zestimate below ask' },
  p3:  { scores: [5, 6, 7, 4, 10, 10, 8, 2, 8, 8], offer: '$460K – $485K', offerNote: 'Zestimate $482K, ~6 months total DOM' },
  p4:  { scores: [8, 9, 4, 5, 8, 8, 6, 4, 3, 8], offer: '$390K – $410K', offerNote: 'Brand new listing — many details unverified' },
  p5:  { scores: [7, 5, 4, 7, 7, 6, 8, 2, 7, 8], offer: '$390K – $415K', offerNote: '184 DOM, zero reductions — stubborn seller' },
  p6:  { scores: [7, 5, 5, 8, 9, 10, 7, 7, 4, 5], offer: '$410K – $425K', offerNote: '6 DOM — must act fast, limited leverage' },
  p7:  { scores: [6, 6, 5, 9, 8, 8, 6, 5, 5, 8], offer: '$400K – $430K', offerNote: 'Tax assessment $221K — massive gap to asking' },
  p8:  { scores: [7, 6, 3, 3, 8, 8, 4, 6, 3, 10], offer: '$400K – $420K', offerNote: 'New construction — builder may negotiate' },
  p9:  { scores: [5, 5, 2, 7, 8, 8, 4, 9, 5, 8], offer: '$425K – $460K', offerNote: 'FSBO cut $100K — suspiciously vague listing' },
  p10: { scores: [10, 6, 8, 5, 5, 6, 5, 3, 8, 5], offer: '$225K – $260K', offerNote: '310+ DOM, financing issues — land value play' },
  p11: { scores: [10, 5, 9, 5, 6, 6, 4, 9, 4, 5], offer: '$320K – $345K', offerNote: '120 DOM, dual-address complicates financing' },
  p12: { scores: [8, 1, 5, 2, 8, 8, 2, 10, 4, 6], offer: '$365K – $385K', offerNote: 'Gated community likely has HOA restrictions' },
  p13: { scores: [6, 8, 4, 10, 7, 5, 3, 6, 4, 8], offer: '$375K – $400K', offerNote: 'Zestimate $390K, unpermitted sqft, flip markup' },
  p14: { scores: [6, 5, 2, 5, 8, 8, 4, 5, 5, 6], offer: '$400K – $430K', offerNote: '108 DOM, modular, FEMA flood fringe' },
  p15: { scores: [7, 10, 6, 6, 5, 5, 7, 2, 6, 4], offer: '$380K – $420K', offerNote: '44 acres farm — house needs work, only 1 bath' },
  p16: { scores: [8, 5, 5, 5, 7, 7, 7, 4, 6, 5], offer: '$390K – $415K', offerNote: 'Creek property, near Lake James' },
  p17: { scores: [8, 8, 5, 5, 8, 8, 4, 3, 7, 5], offer: '$390K – $415K', offerNote: '2017 build, 13.65 acres, creek frontage' },
  p18: { scores: [7, 6, 5, 5, 7, 7, 8, 4, 5, 6], offer: '$400K – $430K', offerNote: 'Country views, 7+ acres, year built unknown' },

  // ── p19-p47 (new NC cards, injecting scores) ──
  p19: { scores: [7, 2, 6, 5, 9, 9, 8, 2, 6, 7], offer: '$400K – $425K', offerNote: 'Mountain views, only 3 acres, no outbuildings' },
  p20: { scores: [5, 6, 6, 5, 8, 9, 7, 2, 9, 3], offer: '$440K – $470K', offerNote: 'Only 2 bed, wooded lot, price near $500K' },
  p21: { scores: [8, 8, 6, 6, 8, 8, 7, 2, 8, 6], offer: '$365K – $385K', offerNote: '13.5 acres, workshop, gated — great value' },
  p22: { scores: [10, 3, 6, 6, 8, 9, 7, 2, 8, 5], offer: '$275K – $295K', offerNote: 'Backs to USFS, only 3.2 acres, small home' },
  p23: { scores: [5, 5, 4, 9, 4, 5, 4, 2, 7, 7], offer: '$430K – $465K', offerNote: 'Two cabins + barn, remote Bakersville location' },
  p24: { scores: [5, 5, 5, 8, 8, 8, 6, 3, 4, 9], offer: '$440K – $475K', offerNote: 'Historic 1914, multiple outbuildings, pool' },
  p25: { scores: [7, 5, 5, 5, 8, 7, 9, 4, 5, 8], offer: '$410K – $435K', offerNote: '4 bed on 5.6 acres, low hazards, solid value' },
  p26: { scores: [6, 9, 5, 4, 8, 8, 9, 3, 9, 5], offer: '$430K – $460K', offerNote: '16 wooded acres, hunting property, 1.5 bath' },
  p27: { scores: [7, 8, 4, 6, 7, 7, 7, 5, 5, 6], offer: '$410K – $435K', offerNote: '10 acres, 2 ponds, outbuilding, rural piedmont' },
  p28: { scores: [5, 8, 5, 7, 9, 5, 9, 6, 9, 5], offer: '$440K – $470K', offerNote: 'Gated 10 wooded acres, workshop, near Raleigh' },
  p29: { scores: [10, 6, 6, 5, 9, 7, 6, 7, 4, 5], offer: '$120K – $135K', offerNote: 'Manufactured, ultra-cheap — may already be sold' },
  p30: { scores: [10, 6, 2, 5, 9, 9, 9, 5, 4, 8], offer: '$290K – $315K', offerNote: 'Schools 2/10, but affordable with low hazards' },
  p31: { scores: [6, 5, 5, 7, 9, 7, 9, 5, 6, 5], offer: '$420K – $445K', offerNote: 'Metal building, wooded lot, SE of Charlotte' },
  p32: { scores: [9, 5, 6, 3, 7, 5, 7, 4, 6, 5], offer: '$350K – $370K', offerNote: 'Gated community w/ HOA $400/yr, mountain views' },
  p33: { scores: [6, 8, 6, 5, 7, 5, 7, 4, 8, 5], offer: '$420K – $450K', offerNote: 'Log cabin 11 acres, mountain views, new build' },
  p34: { scores: [8, 5, 5, 5, 8, 8, 7, 4, 5, 5], offer: '$385K – $405K', offerNote: '2024 new construction, 5 acres foothills' },
  p35: { scores: [9, 10, 5, 5, 8, 8, 6, 3, 7, 8], offer: '$340K – $365K', offerNote: '20 acres + 3,662 sqft at $380K = best $/acre' },
  p36: { scores: [10, 6, 2, 5, 8, 8, 4, 6, 3, 5], offer: '$305K – $330K', offerNote: 'Affordable but poor schools + hurricane zone' },
  p37: { scores: [7, 5, 10, 5, 8, 5, 9, 5, 5, 8], offer: '$400K – $425K', offerNote: 'Best schools (Orange Co.), Research Triangle' },
  p38: { scores: [7, 8, 2, 5, 9, 7, 3, 7, 5, 7], offer: '$390K – $420K', offerNote: '13 acres w/ fishing pond, high flood risk' },
  p39: { scores: [7, 5, 5, 5, 9, 9, 9, 4, 4, 5], offer: '$410K – $430K', offerNote: '1936 build, 5 acres, low hazards piedmont' },
  p40: { scores: [5, 7, 4, 5, 9, 10, 8, 5, 9, 7], offer: '$440K – $470K', offerNote: 'Log cabin 10 wooded acres, may be off-market' },
  p41: { scores: [5, 5, 5, 6, 8, 8, 2, 9, 4, 7], offer: '$440K – $470K', offerNote: 'Coastal hurricane risk, horses OK, near beach' },
  p42: { scores: [7, 6, 5, 9, 8, 7, 7, 4, 3, 6], offer: '$400K – $430K', offerNote: 'Horse-ready: barn + round pen, 6.25 level acres' },
  p43: { scores: [8, 8, 5, 5, 8, 8, 4, 8, 4, 6], offer: '$350K – $380K', offerNote: 'Manufactured on 13 acres, near Greenville/beach' },
  p44: { scores: [7, 8, 5, 6, 8, 8, 7, 3, 7, 5], offer: '$395K – $420K', offerNote: 'All-brick 11 acres, basement workshop, 1938 home' },
  p45: { scores: [4, 6, 3, 10, 7, 7, 9, 6, 2, 9], offer: '$440K – $480K', offerNote: 'Historic 1825, 6 fireplaces, 3 outbuildings' },
  p46: { scores: [8, 8, 4, 7, 9, 7, 9, 5, 7, 9], offer: '$360K – $385K', offerNote: '4/3 farmhouse 11 acres, 8 wooded, great value' },
  p47: { scores: [6, 10, 6, 7, 6, 5, 6, 2, 5, 9], offer: '$410K – $440K', offerNote: '15.8 acres, barn, 5 bed, no AC, remote' },
};

const CAT_LABELS = ['Price', 'Acreage', 'Schools', 'Outbldgs', 'Town', 'Hospital', 'Hazards', 'Beach', 'Forested', 'Living'];

// ─── HELPER: generate score-offer-band HTML ─────────────────────────────────
function buildScoreOfferBand(pid) {
  const d = SCORES[pid];
  const total = d.scores.reduce((a, b) => a + b, 0);

  let barsHtml = '';
  d.scores.forEach((s, i) => {
    const pct = Math.round((s / 10) * 100);
    barsHtml += `        <div class="sob-mini-bar"><div class="sob-mini-label"><span>${CAT_LABELS[i]}</span><span>${s}/10</span></div><div class="sob-mini-track"><div class="sob-mini-fill" style="width:${pct}%"></div></div></div>\n`;
  });

  return `  <div class="score-offer-band">
    <div class="sob-score">
      <div>
        <div class="sob-score-num">${total}</div>
        <div class="sob-score-denom">/ 100</div>
      </div>
      <div class="sob-score-bars">
${barsHtml}      </div>
    </div>
    <div class="sob-offer">
      <div class="sob-offer-label">\u{1F4B0} Realistic Offer Range</div>
      <div class="sob-offer-price">${d.offer}</div>
      <div class="sob-offer-rationale">
        <div class="sob-strategy">${d.offerNote}</div>
      </div>
    </div>
  </div>`;
}

// ─── MAIN ────────────────────────────────────────────────────────────────────
let html = fs.readFileSync(HTML_FILE, 'utf8');
const lines = html.split('\n');

console.log('Loaded index.html:', lines.length, 'lines');

// ── STEP 1: Replace existing score-offer-bands for p1-p18 ──────────────────
// Each has a <div class="score-offer-band"> … </div> block we need to replace
for (let pid = 1; pid <= 18; pid++) {
  const key = 'p' + pid;
  const newBand = buildScoreOfferBand(key);

  // Find the score-offer-band inside this card
  const cardIdPattern = `id="${key}"`;
  const cardIdx = lines.findIndex(l => l.includes(`class="card"`) && l.includes(cardIdPattern));
  if (cardIdx === -1) {
    console.log(`  WARNING: card ${key} not found`);
    continue;
  }

  // Find the score-offer-band start after this card
  let sobStart = -1;
  for (let i = cardIdx; i < lines.length && i < cardIdx + 200; i++) {
    if (lines[i].includes('class="score-offer-band"')) {
      sobStart = i;
      break;
    }
  }
  if (sobStart === -1) {
    console.log(`  WARNING: score-offer-band not found for ${key}`);
    continue;
  }

  // Find the closing </div> for score-offer-band
  // Count nesting: we opened one div, need to find matching close
  let depth = 0;
  let sobEnd = -1;
  for (let i = sobStart; i < lines.length; i++) {
    const opens = (lines[i].match(/<div[\s>]/g) || []).length;
    const closes = (lines[i].match(/<\/div>/g) || []).length;
    depth += opens - closes;
    if (depth <= 0) {
      sobEnd = i;
      break;
    }
  }
  if (sobEnd === -1) {
    console.log(`  WARNING: could not find end of score-offer-band for ${key}`);
    continue;
  }

  // Replace lines [sobStart..sobEnd] with new band
  const newLines = newBand.split('\n');
  lines.splice(sobStart, sobEnd - sobStart + 1, ...newLines);
  console.log(`  ✓ Replaced score-offer-band for ${key} (was lines ${sobStart + 1}-${sobEnd + 1})`);
}

// ── STEP 2: Inject score-offer-bands for p19-p47 ───────────────────────────
// These cards have: card-top → highlight-band → card-body
// We inject the score-offer-band between card-top closing </div> and highlight-band
for (let pid = 19; pid <= 47; pid++) {
  const key = 'p' + pid;
  const newBand = buildScoreOfferBand(key);

  const cardIdPattern = `id="${key}"`;
  const cardIdx = lines.findIndex(l => l.includes(`class="card"`) && l.includes(cardIdPattern));
  if (cardIdx === -1) {
    console.log(`  WARNING: card ${key} not found`);
    continue;
  }

  // Find the highlight-band after this card
  let hlIdx = -1;
  for (let i = cardIdx; i < lines.length && i < cardIdx + 80; i++) {
    if (lines[i].includes('class="highlight-band"')) {
      hlIdx = i;
      break;
    }
  }
  if (hlIdx === -1) {
    console.log(`  WARNING: highlight-band not found for ${key}`);
    continue;
  }

  // Insert new band right before the highlight-band
  const newLines = newBand.split('\n');
  lines.splice(hlIdx, 0, ...newLines);
  console.log(`  ✓ Injected score-offer-band for ${key} before line ${hlIdx + 1}`);
}

// ── STEP 3: Update overview table ──────────────────────────────────────────
// 3a: Remove Drive column header
const driveThIdx = lines.findIndex(l => l.includes('<th>Drive</th>'));
if (driveThIdx !== -1) {
  lines.splice(driveThIdx, 1);
  console.log('  ✓ Removed <th>Drive</th> at line', driveThIdx + 1);
}

// 3b: Process each table row
// Find tbody start
const tbodyIdx = lines.findIndex((l, i) => i > 860 && l.includes('<tbody>'));
const tbodyEndIdx = lines.findIndex((l, i) => i > tbodyIdx && l.includes('</tbody>'));

if (tbodyIdx !== -1 && tbodyEndIdx !== -1) {
  // Process rows in reverse so line numbers stay stable
  let rowStarts = [];
  for (let i = tbodyIdx; i < tbodyEndIdx; i++) {
    if (lines[i].trim() === '<tr>') {
      rowStarts.push(i);
    }
  }

  for (let r = rowStarts.length - 1; r >= 0; r--) {
    const rowStart = rowStarts[r];
    // Find row end
    let rowEnd = rowStart;
    for (let i = rowStart; i < tbodyEndIdx + 100; i++) {
      if (lines[i].trim() === '</tr>') {
        rowEnd = i;
        break;
      }
    }

    // Extract all <td> lines in this row
    const rowLines = lines.slice(rowStart, rowEnd + 1);
    const rowText = rowLines.join('\n');

    // Get the property id from the href
    const hrefMatch = rowText.match(/href="#(p\d+)"/);
    if (!hrefMatch) continue;
    const pid = hrefMatch[1];
    const pNum = parseInt(pid.replace('p', ''));

    // Find all td elements - we need to identify and remove the Drive column (was col 11, 0-indexed 10)
    // Columns: #, Address, Price, Est./mo, 3% Down, Beds/Ba, Sqft, Acres, Type, Built, Drive, Score, Offer, Status
    // After removal: #, Address, Price, Est./mo, 3% Down, Beds/Ba, Sqft, Acres, Type, Built, Score, Offer, Status

    // Find td positions within this row
    let tdPositions = []; // array of {start, end} relative to rowStart
    let inTd = false;
    let tdStart = -1;
    for (let i = rowStart; i <= rowEnd; i++) {
      const trimmed = lines[i].trim();
      if (trimmed.startsWith('<td')) {
        tdStart = i;
        inTd = true;
      }
      if (inTd && trimmed.endsWith('</td>')) {
        tdPositions.push({ start: tdStart, end: i });
        inTd = false;
      }
      // Single-line td
      if (trimmed.startsWith('<td') && trimmed.endsWith('</td>')) {
        // Already handled above
      }
    }

    // Column 10 (0-indexed) is Drive — remove it
    if (tdPositions.length >= 13) {
      // Remove Drive td (index 10)
      const driveTd = tdPositions[10];
      lines.splice(driveTd.start, driveTd.end - driveTd.start + 1);

      // Recalculate positions after removal
      const removedCount = driveTd.end - driveTd.start + 1;

      // Now update Score column (was index 11, now index 10 after Drive removal)
      // and Offer column (was index 12, now index 11)
      // and Status column (was index 13, now index 12)
      // We need to re-find the td positions after the splice
      // Let's just re-find them
      let newRowEnd = rowEnd - removedCount;
      let newTdPositions = [];
      inTd = false;
      tdStart = -1;
      for (let i = rowStart; i <= newRowEnd; i++) {
        const trimmed = lines[i].trim();
        if (trimmed.startsWith('<td')) {
          tdStart = i;
          inTd = true;
        }
        if (inTd && trimmed.endsWith('</td>')) {
          newTdPositions.push({ start: tdStart, end: i });
          inTd = false;
        }
      }

      const scoreData = SCORES[pid];
      if (scoreData) {
        const total = scoreData.scores.reduce((a, b) => a + b, 0);

        // Update Score column (now index 10)
        if (newTdPositions[10]) {
          const scoreTd = newTdPositions[10];
          lines[scoreTd.start] = `          <td><strong style="color:var(--accent)">${total}</strong>/100</td>`;
          // Remove any extra lines if multi-line
          if (scoreTd.end > scoreTd.start) {
            lines.splice(scoreTd.start + 1, scoreTd.end - scoreTd.start);
          }
        }

        // Re-find positions after possible score td change
        newRowEnd = rowStart;
        for (let i = rowStart; i < rowStart + 30; i++) {
          if (lines[i] && lines[i].trim() === '</tr>') {
            newRowEnd = i;
            break;
          }
        }
        newTdPositions = [];
        inTd = false;
        tdStart = -1;
        for (let i = rowStart; i <= newRowEnd; i++) {
          const trimmed = lines[i].trim();
          if (trimmed.startsWith('<td')) {
            tdStart = i;
            inTd = true;
          }
          if (inTd && trimmed.endsWith('</td>')) {
            newTdPositions.push({ start: tdStart, end: i });
            inTd = false;
          }
        }

        // Update Offer column (now index 11)
        if (newTdPositions[11]) {
          const offerTd = newTdPositions[11];
          const offerHtml = `          <td style="white-space:nowrap"><strong>${scoreData.offer}</strong><br><span style="font-size:0.72rem;color:var(--muted)">${scoreData.offerNote}</span></td>`;
          lines[offerTd.start] = offerHtml;
          if (offerTd.end > offerTd.start) {
            lines.splice(offerTd.start + 1, offerTd.end - offerTd.start);
          }
        }

        // Re-find positions again for status update
        newRowEnd = rowStart;
        for (let i = rowStart; i < rowStart + 30; i++) {
          if (lines[i] && lines[i].trim() === '</tr>') {
            newRowEnd = i;
            break;
          }
        }
        newTdPositions = [];
        inTd = false;
        tdStart = -1;
        for (let i = rowStart; i <= newRowEnd; i++) {
          const trimmed = lines[i].trim();
          if (trimmed.startsWith('<td')) {
            tdStart = i;
            inTd = true;
          }
          if (inTd && trimmed.endsWith('</td>')) {
            newTdPositions.push({ start: tdStart, end: i });
            inTd = false;
          }
        }

        // Add NEW badge to status column (index 12) for p19-p47 if not already present
        if (pNum >= 19 && newTdPositions[12]) {
          const statusTd = newTdPositions[12];
          const statusLine = lines[statusTd.start];
          if (!statusLine.includes('b-new')) {
            lines[statusTd.start] = statusLine.replace(
              '<span class="status',
              '<span class="badge b-new">NEW</span> <span class="status'
            );
          }
        }
      }
    } else if (tdPositions.length === 12) {
      // Row already has Drive removed (or never had it) — just update Score/Offer/Status
      // This handles the case where the row only has 12 columns (p19-p47 rows had — for Drive)
      // Find the — column and check
      const scoreData = SCORES[pid];
      if (!scoreData) continue;
      const total = scoreData.scores.reduce((a, b) => a + b, 0);

      // Check if column 10 is the Drive "—" column
      const col10Line = lines[tdPositions[10].start].trim();
      if (col10Line === '<td>—</td>') {
        // This IS the drive column — remove it
        lines.splice(tdPositions[10].start, tdPositions[10].end - tdPositions[10].start + 1);

        // Re-find positions
        let newRowEnd = rowStart;
        for (let i = rowStart; i < rowStart + 30; i++) {
          if (lines[i] && lines[i].trim() === '</tr>') {
            newRowEnd = i;
            break;
          }
        }
        let newTdPositions = [];
        inTd = false;
        tdStart = -1;
        for (let i = rowStart; i <= newRowEnd; i++) {
          const trimmed = lines[i].trim();
          if (trimmed.startsWith('<td')) {
            tdStart = i;
            inTd = true;
          }
          if (inTd && trimmed.endsWith('</td>')) {
            newTdPositions.push({ start: tdStart, end: i });
            inTd = false;
          }
        }

        // Score (now index 10)
        if (newTdPositions[10]) {
          lines[newTdPositions[10].start] = `          <td><strong style="color:var(--accent)">${total}</strong>/100</td>`;
          if (newTdPositions[10].end > newTdPositions[10].start) {
            lines.splice(newTdPositions[10].start + 1, newTdPositions[10].end - newTdPositions[10].start);
          }
        }

        // Re-find again
        newRowEnd = rowStart;
        for (let i = rowStart; i < rowStart + 30; i++) {
          if (lines[i] && lines[i].trim() === '</tr>') {
            newRowEnd = i;
            break;
          }
        }
        newTdPositions = [];
        inTd = false;
        tdStart = -1;
        for (let i = rowStart; i <= newRowEnd; i++) {
          const trimmed = lines[i].trim();
          if (trimmed.startsWith('<td')) {
            tdStart = i;
            inTd = true;
          }
          if (inTd && trimmed.endsWith('</td>')) {
            newTdPositions.push({ start: tdStart, end: i });
            inTd = false;
          }
        }

        // Offer (now index 11)
        if (newTdPositions[11]) {
          lines[newTdPositions[11].start] = `          <td style="white-space:nowrap"><strong>${scoreData.offer}</strong><br><span style="font-size:0.72rem;color:var(--muted)">${scoreData.offerNote}</span></td>`;
          if (newTdPositions[11].end > newTdPositions[11].start) {
            lines.splice(newTdPositions[11].start + 1, newTdPositions[11].end - newTdPositions[11].start);
          }
        }

        // Re-find for status
        newRowEnd = rowStart;
        for (let i = rowStart; i < rowStart + 30; i++) {
          if (lines[i] && lines[i].trim() === '</tr>') {
            newRowEnd = i;
            break;
          }
        }
        newTdPositions = [];
        inTd = false;
        tdStart = -1;
        for (let i = rowStart; i <= newRowEnd; i++) {
          const trimmed = lines[i].trim();
          if (trimmed.startsWith('<td')) {
            tdStart = i;
            inTd = true;
          }
          if (inTd && trimmed.endsWith('</td>')) {
            newTdPositions.push({ start: tdStart, end: i });
            inTd = false;
          }
        }

        // Add NEW badge to status (index 12) for p19+
        if (pNum >= 19 && newTdPositions[12]) {
          const statusLine = lines[newTdPositions[12].start];
          if (!statusLine.includes('b-new')) {
            lines[newTdPositions[12].start] = statusLine.replace(
              '<span class="status',
              '<span class="badge b-new">NEW</span> <span class="status'
            );
          }
        }
      }
    }

    console.log(`  ✓ Updated overview row for ${pid}`);
  }
}

// Write output
const output = lines.join('\n');
fs.writeFileSync(HTML_FILE, output, 'utf8');
console.log('\n✅ Done! Written', lines.length, 'lines to', HTML_FILE);
console.log('Next: update SCORE_CATS in app.js, then test locally.');
