#!/usr/bin/env node
/**
 * generate-batch2.js
 * Adds 34 new property cards (p21–p54) + 1 graveyard entry to public/index.html.
 * Western states (20: p21–p40) + North Carolina (14: p41–p54).
 * Also updates header subtitle and footer tax note.
 * One-time use — do not re-run.
 */

const fs = require('fs');
const path = require('path');

const HTML_PATH = path.join(__dirname, 'public', 'index.html');
const western = require('./batch2-western');
const nc = require('./batch2-nc');
const properties = [...western, ...nc];

// ─── MONTHLY PAYMENT CALCULATOR ─────────────────────────────────────────────

function calcMonthly(price, taxRate, hoa) {
  hoa = hoa || 0;
  const down = Math.round(price * 0.035);
  const loan = price - down;
  const r = 0.065 / 12;
  const n = 360;
  const pi = Math.round(loan * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1));
  const tax = Math.round(price * taxRate / 12);
  const ins = 110;
  const pmi = Math.round(loan * 0.0055 / 12);
  const total = pi + tax + ins + pmi + hoa;
  return { total, pi, tax, ins, pmi, hoa, down, loan };
}

function fmt(n) { return n.toLocaleString('en-US'); }
function pct(val, max) { return Math.round(val / max * 100); }

// ─── HTML GENERATORS ────────────────────────────────────────────────────────

function generateNavLinks() {
  return properties.map(p => `  <a href="#${p.id}">${p.navLabel}</a>`).join('\n');
}

function generateTableRow(p) {
  const m = calcMonthly(p.price, p.taxRate, p.hoa);
  const typeLbl = p.type === 'Log Home' ? 'Log Home' : p.type === 'Modular' ? 'Modular' : p.type === 'Site-Built' ? 'Site-Built' : 'Manuf.';
  return `        <tr>
          <td>${p.num}</td>
          <td><a href="#${p.id}">${p.address}, ${p.city} ${p.state}</a></td>
          <td class="td-price">$${fmt(p.price)}</td>
          <td class="td-mo">~$${fmt(m.total)}</td>
          <td>$${fmt(m.down)}</td>
          <td>${p.beds} / ${p.bath}</td>
          <td>${p.sqft}</td>
          <td>${p.acres}</td>
          <td><span class="badge ${p.typeBadge}">${typeLbl}</span></td>
          <td>${p.yearBuilt}</td>
          <td>${p.drive}</td>
          <td><strong style="color:var(--accent)">${p.score}</strong>/100</td>
          <td style="white-space:nowrap"><strong>${p.offerRange}</strong><br><span style="font-size:0.72rem;color:var(--muted)">${p.tableOfferNote}</span></td>
          <td><span class="badge b-new">NEW</span> <span class="${p.statusClass}">${p.status}</span></td>
        </tr>`;
}

function generateCard(p) {
  const m = calcMonthly(p.price, p.taxRate, p.hoa);
  const typeLbl = p.type === 'Log Home' ? 'Log Home' : p.type === 'Modular' ? 'Modular' : p.type === 'Site-Built' ? 'Site-Built' : 'Manuf.';

  // Badges
  const badgesHTML = [
    `            <span class="badge b-new">NEW</span>`,
    `            <span class="badge ${p.typeBadge}">${typeLbl}</span>`
  ].join('\n');

  // Stats row
  const statsHTML = [
    `        <div class="stat"><div class="stat-label">Beds/Bath</div><div class="stat-val">${p.beds} / ${p.bath}</div></div>`,
    `        <div class="stat"><div class="stat-label">Sq Ft</div><div class="stat-val">${p.sqft}</div></div>`,
    `        <div class="stat"><div class="stat-label">Acres</div><div class="stat-val">${p.acres}</div>${p.acresSub ? `<div class="stat-sub">${p.acresSub}</div>` : ''}</div>`,
    `        <div class="stat"><div class="stat-label">Built</div><div class="stat-val">${p.yearBuilt}</div></div>`,
    `        <div class="stat"><div class="stat-label">Drive</div><div class="stat-val">${p.drive}</div>${p.driveSub ? `<div class="stat-sub">${p.driveSub}</div>` : ''}</div>`,
    `        <div class="stat"><div class="stat-label">To Town</div><div class="stat-val">${p.toTown}</div>${p.toTownSub ? `<div class="stat-sub">${p.toTownSub}</div>` : ''}</div>`,
    `        <div class="stat"><div class="stat-label">Tax</div><div class="stat-val">${p.tax}</div></div>`,
    `        <div class="stat"><div class="stat-label">Status</div><div class="stat-val ${p.statusClass}">${p.status}</div>${p.statusNote ? `<div class="stat-sub">${p.statusNote}</div>` : ''}</div>`,
  ].join('\n');

  // Score mini bars
  const labels = { price: 'Price', acreage: 'Acreage', privacy: 'Privacy', outbuildings: 'Outbldgs', town: 'Town', schools: 'Schools', practical: 'Practical' };
  const miniBarsHTML = Object.entries(p.scores).map(([key, {val, max}]) =>
    `        <div class="sob-mini-bar"><div class="sob-mini-label"><span>${labels[key]}</span><span>${val}/${max}</span></div><div class="sob-mini-track"><div class="sob-mini-fill" style="width:${pct(val, max)}%"></div></div></div>`
  ).join('\n');

  const rationaleHTML = p.offerRationale.map(r => `          <li>${r}</li>`).join('\n');
  const highlightsHTML = p.highlights.map(h => `        <li><span class="li-icon">${h.icon}</span> ${h.text}</li>`).join('\n');

  const proxHTML = p.proximity.map(px => {
    const cls = px.ref ? 'prox-item prox-item-ref' : 'prox-item';
    return `        <div class="${cls}"><span class="prox-icon">${px.icon}</span><div class="prox-detail"><div class="prox-label">${px.label}</div><div class="prox-value">${px.value}</div></div></div>`;
  }).join('\n');

  const prosHTML = p.pros.map(pr => `        <li><span class="li-icon">\u2713</span> ${pr}</li>`).join('\n');
  const consHTML = p.cons.map(c => `        <li><span class="li-icon">\u2717</span> ${c}</li>`).join('\n');

  const familyHTML = p.familyFit.map((f, i, a) => {
    const border = i < a.length - 1 ? 'border-bottom:1px solid rgba(0,0,0,0.05);' : '';
    return `        <li style="font-size:0.85rem;padding:0.25rem 0;${border}">${f}</li>`;
  }).join('\n');

  const verifyHTML = p.verifyBefore.map((v, i, a) => {
    const border = i < a.length - 1 ? 'border-bottom:1px solid rgba(0,0,0,0.05);' : '';
    return `        <li style="font-size:0.85rem;padding:0.25rem 0;${border}"><strong>${v.title}</strong> \u2014 ${v.detail}</li>`;
  }).join('\n');

  const mustDoHTML = p.mustDo.map(md => {
    if (md.startsWith('! ')) return `      <div class="must-do-item"><span class="must-do-icon">!</span> ${md.slice(2)}</div>`;
    return `      <div class="must-do-item">${md}</div>`;
  }).join('\n');

  const pillsHTML = p.envHazards.pills.map(pill =>
    `      <span class="env-pill env-pill-${pill.level}">${pill.text}</span>`
  ).join('\n');

  let mbLines = `              <div class="mb-line"><span>Principal &amp; Interest</span><span>$${fmt(m.pi)}</span></div>
              <div class="mb-line"><span>Property Tax (${p.taxLabel})</span><span>$${fmt(m.tax)}</span></div>
              <div class="mb-line"><span>Insurance</span><span>$${fmt(m.ins)}</span></div>
              <div class="mb-line"><span>PMI (3.5% down)</span><span>$${fmt(m.pmi)}</span></div>`;
  if (m.hoa > 0) {
    mbLines += `\n              <div class="mb-line"><span>HOA</span><span>$${fmt(m.hoa)}</span></div>`;
  }

  return `<div class="card" id="${p.id}">
  <div class="card-top">
    <div class="card-map">
      <a href="${p.listingLink}" target="_blank" class="card-img-link">
<img loading="lazy" src="${p.image}" alt="${p.address}, ${p.city} ${p.state}" style="width:100%;height:100%;object-fit:cover;min-height:240px;">
      </a>
    </div>
    <div>
      <div class="card-header">
        <div class="card-title-group">
          <div class="card-address">${p.address}</div>
          <div class="card-sub">${p.city}, ${p.state} ${p.zip} \u00b7 ${p.county}</div>
          <div class="card-badges">
${badgesHTML}
          </div>
        </div>
        <div class="card-price-block">
          <div class="card-price">$${fmt(p.price)}</div>
          <div class="card-monthly">
            <span class="monthly-total">~$${fmt(m.total)}/mo</span>
            <button class="monthly-toggle">&#9662; details</button>
            <div class="monthly-breakdown" hidden>
${mbLines}
            </div>
          </div>
          <div class="card-down">$${fmt(m.down)} down @ 3.5%</div>
        </div>
      </div>
      <div class="stats-row">
${statsHTML}
      </div>
    </div>
  </div>
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
      <div class="card-section-title">\uD83D\uDE97 Proximity & Drive Times</div>
      <div class="proximity-grid">
${proxHTML}
      </div>
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
  <div class="must-do">
    <div class="must-do-title">MUST DO Before Offering</div>
    <div class="must-do-grid">
${mustDoHTML}
    </div>
  </div>
  <div class="env-hazards">
    <div class="env-hazards-title">Environmental Hazards \u2014 ${p.envHazards.location}</div>
    <div class="env-hazards-grid">
${pillsHTML}
    </div>
    <div class="env-note">${p.envHazards.note}</div>
  </div>
</div>`;
}

// ─── GRAVEYARD ENTRY ────────────────────────────────────────────────────────

const graveyardEntry = `  <div class="graveyard-card">
    <div class="graveyard-header">
      <span class="badge b-removed">REMOVED</span>
      <strong>4439 Whittier Rd</strong>
      <span>Clayton, WA \u00b7 $460,000 \u00b7 3/2 \u00b7 1,733 sqft \u00b7 20 ac \u00b7 1953</span>
    </div>
    <div class="graveyard-reason">Reason: Under contract \u2014 seller offering $10K buyer credit. Originally listed at $499,000. Deer Park schools 8/10, 30 min to Spokane. Had massive hay barn, year-round creek, and was a fixer-upper with "solid bones."</div>
  </div>`;

// ─── INJECT INTO HTML ───────────────────────────────────────────────────────

function main() {
  let html = fs.readFileSync(HTML_PATH, 'utf-8');
  let changes = 0;

  // 0. Update header subtitle
  const oldSub = '16 Properties \u00b7 Pacific Northwest + Idaho + Montana';
  const newSub = '50 Properties \u00b7 WA + ID + MT + WY + CO + OR + NC';
  if (html.includes(oldSub)) {
    html = html.replace(oldSub, newSub);
    console.log('\u2713 Updated header subtitle');
    changes++;
  } else {
    console.error('\u26A0 Could not find header subtitle to update');
  }

  // 1. Add nav links before Internet guide link
  const navMarker = '  <a href="#internet-guide"';
  if (!html.includes(navMarker)) {
    console.error('ERROR: Could not find internet-guide nav marker');
    process.exit(1);
  }
  const navLinks = generateNavLinks();
  html = html.replace(navMarker, navLinks + '\n' + navMarker);
  console.log(`\u2713 Added ${properties.length} nav links`);
  changes++;

  // 2. Add table rows before </tbody>
  const tbodyMarker = '      </tbody>';
  if (!html.includes(tbodyMarker)) {
    console.error('ERROR: Could not find </tbody> marker');
    process.exit(1);
  }
  const tableRows = properties.map(generateTableRow).join('\n');
  html = html.replace(tbodyMarker, tableRows + '\n' + tbodyMarker);
  console.log(`\u2713 Added ${properties.length} table rows`);
  changes++;

  // 3. Add card blocks before </div><!-- /cards -->
  const cardsEndMarker = '</div><!-- /cards -->';
  if (!html.includes(cardsEndMarker)) {
    console.error('ERROR: Could not find </div><!-- /cards --> marker');
    process.exit(1);
  }
  const cardBlocks = properties.map(generateCard).join('\n');
  html = html.replace(cardsEndMarker, cardBlocks + '\n' + cardsEndMarker);
  console.log(`\u2713 Added ${properties.length} card blocks`);
  changes++;

  // 4. Add graveyard entry before <div id="graveyard-dynamic">
  const gyMarker = '  <div id="graveyard-dynamic"></div>';
  if (!html.includes(gyMarker)) {
    console.error('ERROR: Could not find graveyard-dynamic marker');
    process.exit(1);
  }
  html = html.replace(gyMarker, graveyardEntry + '\n' + gyMarker);
  console.log('\u2713 Added graveyard entry (Clayton WA)');
  changes++;

  // 5. Update footer tax note
  const oldTaxNote = 'WA 1.0%, ID 0.75%, MT 0.85%';
  const newTaxNote = 'WA 0.85\u20131.07%, ID 0.42\u20130.55%, MT 0.69\u20130.93%, WY 0.50%, CO 0.36\u20130.54%, OR 0.83\u20130.85%, NC 0.38\u20130.65%';
  if (html.includes(oldTaxNote)) {
    html = html.replace(oldTaxNote, newTaxNote);
    console.log('\u2713 Updated footer tax note');
    changes++;
  } else {
    console.error('\u26A0 Could not find footer tax note to update');
  }

  // 6. Update footer sources
  const oldSrc = 'GreatSchools.org, Niche.com';
  const newSrc = 'GreatSchools.org, Niche.com, SmartAsset, BroadbandNow, FEMA, EPA';
  if (html.includes(oldSrc)) {
    html = html.replace(oldSrc, newSrc);
    console.log('\u2713 Updated footer sources');
    changes++;
  }

  fs.writeFileSync(HTML_PATH, html, 'utf-8');
  console.log(`\nSUCCESS: ${changes} changes applied to ${HTML_PATH}`);
  console.log(`  - ${properties.length} properties injected (p21\u2013p54)`);
  console.log(`  - 1 graveyard entry added`);
}

main();
