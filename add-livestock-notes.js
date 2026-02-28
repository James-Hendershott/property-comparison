#!/usr/bin/env node
// One-time script to add livestock allowance notes to property cards
const fs = require('fs');
let html = fs.readFileSync('public/index.html', 'utf8');
let changes = 0;

// Livestock data for each active property
const livestock = {
  // === FULLY ALLOWED (add to Pros) ===
  p2:  { status: 'yes', pro: 'Livestock fully allowed — Stevens County has no zoning. Horses, chickens, goats, cattle all permitted.' },
  p12: { status: 'yes', pro: 'Livestock fully allowed — no county zoning, no HOA. Already has barn, chicken coop, cross-fenced pasture.' },
  p14: { status: 'yes', pro: 'Livestock allowed — Pend Oreille County permits all livestock on 5+ acres. Already has chicken coop.' },
  p20: { status: 'yes', pro: 'Livestock fully allowed — no county zoning, no HOA. Has barn, 14.63 acres of pasture.' },
  p22: { status: 'yes', pro: 'Livestock fully allowed — no county zoning, no HOA. "Full agricultural freedom." Has barn + chicken coop.' },
  p23: { status: 'yes', pro: 'Livestock fully allowed — Stevens County has no zoning, no HOA. 10 acres with pond.' },
  p24: { status: 'yes', pro: 'Livestock fully allowed — Stevens County has no zoning, no HOA. Has pole barn.' },
  p26: { status: 'yes', pro: 'Livestock allowed — Bonner County AG/Rural zone permits all livestock on 10 acres. No HOA.' },
  p28: { status: 'yes', pro: 'Livestock allowed — Benewah County has minimal/no zoning. 10 acres, no HOA. All livestock permitted.' },
  p30: { status: 'yes', pro: 'Livestock fully allowed — Musselshell County has no zoning. 34.64 acres, no HOA. Already has horse shelters + chicken coop. MT Right to Farm law.' },
  p32: { status: 'yes', pro: 'Livestock allowed — Custer County AG/Forestry zone. Horses, chickens, goats permitted. 6 acres limits cattle count.' },
  p33: { status: 'yes', pro: 'Livestock fully allowed — Fremont County AG zone. 40.59 acres bordering BLM, ideal for horses and cattle.' },
  p34: { status: 'yes', pro: 'Livestock fully allowed — Fremont County AG zone. 18 acres with irrigation water rights = excellent for livestock pasture.' },
  p35: { status: 'yes', pro: 'Livestock allowed — Costilla County has minimal regulation. 10 acres, no HOA. Plan water for livestock.' },
  p36: { status: 'yes', pro: 'Livestock allowed — Costilla County essentially unrestricted. 13 acres, no HOA. Plan livestock water (off-grid).' },
  p37: { status: 'yes', pro: 'Livestock fully allowed — listing confirms "no restrictions or covenants." 35 acres in Las Animas County ranching country. Test water for livestock safety (coal mining area).' },
  p38: { status: 'yes', pro: 'Livestock allowed — Archuleta County AG zone. 18 acres already cross-fenced for livestock. Plan predator protection (national forest borders).' },
  p39: { status: 'yes', pro: 'Livestock allowed — rural Grant County. Already has animal stalls + fenced pasture. OR Right to Farm law.' },
  p40: { status: 'yes', pro: 'Livestock allowed — already a horse property with arena, 4 stalls, covered hay storage. Malheur County AG zone.' },
  p41: { status: 'yes', pro: 'Livestock allowed — rural Caldwell County permits all livestock. 7.52 acres, no HOA.' },
  p43: { status: 'yes', pro: 'Livestock allowed — Cherokee County has no county zoning. 6.84 acres, no HOA. Full freedom.' },
  p44: { status: 'yes', pro: 'Livestock fully allowed — best NC property for livestock. 19.79 acres in agricultural Rockingham County, no HOA. Horses, cattle, goats, chickens all permitted.' },
  p45: { status: 'yes', pro: 'Livestock allowed — Cherokee County has no county zoning. 5.73 acres, no HOA. Fully rural.' },
  p47: { status: 'yes', pro: 'Livestock allowed — rural Randolph County AG zone. 8.22 acres on "Farm Lane," no HOA.' },
  p49: { status: 'yes', pro: 'Livestock allowed — rural Columbus County. 5.22 acres, no HOA. Verify outside Whiteville town limits.' },
  p53: { status: 'yes', pro: 'Livestock allowed — rural Halifax County farmland. 10 acres, no HOA. Full farm potential with existing outbuildings.' },

  // === NEED CC&R VERIFICATION (add to Verify Before Offering + Pros with caveat) ===
  p1:  { status: 'verify', pro: 'Livestock likely allowed — Klickitat County rural zoning permits all livestock on 5 acres.', verify: 'Request HOA CC&Rs ($11/yr) — confirm livestock (horses, chickens, goats) are permitted' },
  p16: { status: 'verify', pro: 'Horses confirmed allowed by Hawk Creek Ranch community.', verify: 'Verify with HOA whether goats, chickens, and cattle are also permitted (not just horses)' },
  p25: { status: 'verify', pro: 'County zoning allows livestock — Klickitat County rural zone.', verify: 'Request SkyView Acres HOA CC&Rs ($324/yr) — highest livestock restriction risk in WA group. Verify horses, chickens, goats permitted before offering.' },
  p27: { status: 'verify', pro: 'Bonner County zoning likely permits livestock on 5 acres.', verify: 'Request Raven Ridge CC&Rs — subdivision name suggests possible livestock restrictions. Verify horses, chickens, goats allowed.' },
  p31: { status: 'verify', pro: 'Crook County has no zoning — livestock allowed at county level. WY Right to Farm law.', verify: 'Check "Juniper Hills" subdivision CC&Rs with Crook County Clerk (307-283-1323) — verify no livestock restrictions' },
  p42: { status: 'verify', pro: 'Wilkes County zoning generally permits livestock on 7.4 acres.', verify: 'Request HOA CC&Rs ($200/yr) — verify livestock (horses, chickens, goats) are permitted under covenants' },
  p46: { status: 'verify', pro: 'Johnston County AG zones allow livestock on 5.49 acres.', verify: 'Verify property is not in Clayton ETJ (919-989-5150) — Clayton town rules may restrict livestock. Check for subdivision deed restrictions.' },
  p54: { status: 'verify', pro: 'Horses explicitly allowed per listing. "Greenbrier Farm Trl" naming suggests livestock-friendly community.', verify: 'Request HOA CC&Rs ($150/yr) — horses confirmed, verify goats, cattle, and chickens also permitted' },

  // === PROHIBITED (add to Cons) ===
  p48: { status: 'no', con: 'Livestock prohibited — Harvest Creek subdivision HOA ($250/yr) by Adams Homes will almost certainly prohibit all livestock including horses and chickens.' },
  p52: { status: 'no', con: 'Livestock prohibited — Seaside Bay gated community prohibits all livestock without exception.' },
};

for (const [pid, data] of Object.entries(livestock)) {
  // Find the card by id
  const cardStart = html.indexOf(`class="card" id="${pid}"`);
  if (cardStart === -1) {
    console.log(`WARNING: Card ${pid} not found`);
    continue;
  }
  // Find the next card or end
  const nextCard = html.indexOf('class="card" id="p', cardStart + 1);
  const cardEnd = nextCard === -1 ? html.length : nextCard;
  const cardHtml = html.substring(cardStart, cardEnd);

  // ADD TO PROS SECTION
  if (data.pro) {
    // Find the Pros section: <div class="card-section-title">✅ Pros</div>\n      <ul>
    const prosTitle = cardHtml.indexOf('✅ Pros</div>');
    if (prosTitle !== -1) {
      // Find the closing </ul> for the pros section
      const prosUlStart = cardHtml.indexOf('<ul>', prosTitle);
      const prosUlEnd = cardHtml.indexOf('</ul>', prosUlStart);
      if (prosUlEnd !== -1) {
        const insertPos = cardStart + prosUlEnd;
        const icon = data.status === 'yes' ? '🐴' : (data.status === 'verify' ? '🐴' : '🚫');
        const newLi = `\n        <li><span class="li-icon">${icon}</span> ${data.pro}</li>`;
        html = html.slice(0, insertPos) + newLi + html.slice(insertPos);
        changes++;
      }
    } else {
      console.log(`WARNING: No Pros section found for ${pid}`);
    }
  }

  // ADD TO CONS SECTION
  if (data.con) {
    const consTitle = cardHtml.indexOf('❌ Cons</div>');
    if (consTitle !== -1) {
      // Re-search since html may have changed
      const cardStart2 = html.indexOf(`class="card" id="${pid}"`);
      const card2 = html.substring(cardStart2, html.indexOf('class="card" id="p', cardStart2 + 1) === -1 ? html.length : html.indexOf('class="card" id="p', cardStart2 + 1));
      const ct = card2.indexOf('❌ Cons</div>');
      const cUlStart = card2.indexOf('<ul>', ct);
      const cUlEnd = card2.indexOf('</ul>', cUlStart);
      if (cUlEnd !== -1) {
        const insertPos = cardStart2 + cUlEnd;
        const newLi = `\n        <li><span class="li-icon">🚫</span> ${data.con}</li>`;
        html = html.slice(0, insertPos) + newLi + html.slice(insertPos);
        changes++;
      }
    } else {
      console.log(`WARNING: No Cons section found for ${pid}`);
    }
  }

  // ADD TO VERIFY BEFORE OFFERING SECTION
  if (data.verify) {
    // Re-search since html may have changed
    const cardStart3 = html.indexOf(`class="card" id="${pid}"`);
    const nextCard3 = html.indexOf('class="card" id="p', cardStart3 + 1);
    const card3 = html.substring(cardStart3, nextCard3 === -1 ? html.length : nextCard3);
    const verifyTitle = card3.indexOf('⚠️ Verify Before Offering</div>');
    if (verifyTitle !== -1) {
      const vUlStart = card3.indexOf('<ul', verifyTitle);
      const vUlEnd = card3.indexOf('</ul>', vUlStart);
      if (vUlEnd !== -1) {
        const insertPos = cardStart3 + vUlEnd;
        const newLi = `\n        <li style="font-size:0.85rem;padding:0.25rem 0;">🐴 ${data.verify}</li>`;
        html = html.slice(0, insertPos) + newLi + html.slice(insertPos);
        changes++;
      }
    } else {
      // Try "Verify Before Buying" variant
      const verifyTitle2 = card3.indexOf('Verify Before');
      if (verifyTitle2 !== -1) {
        const vUlStart = card3.indexOf('<ul', verifyTitle2);
        const vUlEnd = card3.indexOf('</ul>', vUlStart);
        if (vUlEnd !== -1) {
          const insertPos = cardStart3 + vUlEnd;
          const newLi = `\n        <li style="font-size:0.85rem;padding:0.25rem 0;">🐴 ${data.verify}</li>`;
          html = html.slice(0, insertPos) + newLi + html.slice(insertPos);
          changes++;
        }
      } else {
        console.log(`WARNING: No Verify section found for ${pid}`);
      }
    }
  }
}

fs.writeFileSync('public/index.html', html);
console.log(`Done. Applied ${changes} livestock notes across ${Object.keys(livestock).length} properties.`);
