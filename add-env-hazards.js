const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'public', 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

const hazards = {
  p1: {
    title: 'Environmental Hazards — Appleton, WA (Klickitat County)',
    pills: [
      { label: 'Wildfire: High', cls: 'high' },
      { label: 'Flood: Moderate', cls: 'mod' },
      { label: 'Seismic: Moderate', cls: 'mod' },
      { label: 'Wind: Moderate', cls: 'mod' }
    ],
    note: 'Columbia River Gorge wind corridor. Klickitat County is a high wildfire risk area. Seismic zone near Cascadia Subduction Zone.'
  },
  p2: {
    title: 'Environmental Hazards — Kettle Falls, WA (Stevens County)',
    pills: [
      { label: 'Wildfire: High', cls: 'high' },
      { label: 'Flood: Low', cls: 'low' },
      { label: 'Air Quality: Moderate-High', cls: 'high' },
      { label: 'Wind: Low', cls: 'low' }
    ],
    note: 'Stevens County sees heavy wildfire smoke in summer (2023 was severe). Low flood risk at this elevation. Air quality can be hazardous during fire season.'
  },
  p3: {
    title: 'Environmental Hazards — Goldendale, WA (Klickitat County)',
    pills: [
      { label: 'Wildfire: High', cls: 'high' },
      { label: 'Flood: Moderate', cls: 'mod' },
      { label: 'Seismic: Moderate', cls: 'mod' },
      { label: 'Wind: High', cls: 'high' }
    ],
    note: 'Gorge wind corridor — sustained 30-40 mph gusts common. Klickitat County wildfire risk elevated. Near Cascadia Subduction Zone fault system.'
  },
  p4: {
    title: 'Environmental Hazards — Colville, WA (Stevens County)',
    pills: [
      { label: 'Wildfire: High', cls: 'high' },
      { label: 'Flood: Low-Moderate', cls: 'mod' },
      { label: 'Air Quality: Moderate-High', cls: 'high' }
    ],
    note: 'Stevens County had major fires in 2023. Colville River area has some flood plain. Summer smoke from regional fires common.'
  },
  p5: {
    title: 'Environmental Hazards — Dayton, WA (Columbia County)',
    pills: [
      { label: 'Wildfire: Moderate-High', cls: 'high' },
      { label: 'Flood: High', cls: 'high' },
      { label: 'Wind: Moderate', cls: 'mod' }
    ],
    note: 'Touchet River flood zone — check FEMA maps for this parcel. Columbia County grassland fire risk. Property may require flood insurance.'
  },
  p6: {
    title: 'Environmental Hazards — Addy, WA (Stevens County)',
    pills: [
      { label: 'Wildfire: Severe', cls: 'severe' },
      { label: 'Flood: Minimal', cls: 'low' },
      { label: 'Air Quality: Extreme', cls: 'severe' }
    ],
    note: 'First Street wildfire risk 8/10, air quality 9/10. Oregon Rd fires in 2023 came within miles. Summer smoke regularly exceeds hazardous levels. Defensible space critical.'
  },
  p7: {
    title: 'Environmental Hazards — Grangeville, ID (Idaho County)',
    pills: [
      { label: 'Wildfire: High', cls: 'high' },
      { label: 'Flood: Moderate', cls: 'mod' },
      { label: 'Air Quality: Moderate-High', cls: 'high' }
    ],
    note: 'Camas Prairie surrounded by national forest — wildfire smoke corridor. Idaho County has significant fire history. Check seasonal smoke patterns.'
  },
  p8: {
    title: 'Environmental Hazards — Lewiston, ID (Nez Perce County)',
    pills: [
      { label: 'Wildfire: Moderate', cls: 'mod' },
      { label: 'Flood: High', cls: 'high' },
      { label: 'Air Quality: Moderate', cls: 'mod' }
    ],
    note: 'Confluence of Snake and Clearwater rivers — check FEMA flood maps. Temperature inversions trap smoke in valley. Lewiston has the lowest elevation in Idaho.'
  },
  p9: {
    title: 'Environmental Hazards — Kamiah, ID (Lewis/Idaho County)',
    pills: [
      { label: 'Wildfire: Very High', cls: 'severe' },
      { label: 'Flood: Moderate', cls: 'mod' },
      { label: 'Air Quality: High', cls: 'high' }
    ],
    note: 'Clearwater River canyon funnels wildfire smoke. 2023 and 2024 fires came close. Remote location limits firefighting response. Smoke inversions common.'
  },
  p10: {
    title: 'Environmental Hazards — West Richland, WA (Benton County)',
    pills: [
      { label: 'Wildfire: Low-Moderate', cls: 'mod' },
      { label: 'Flood: Moderate', cls: 'mod' },
      { label: 'Hanford Site: 15 mi', cls: 'special' }
    ],
    note: 'Hanford Nuclear Reservation 15 miles north — largest nuclear cleanup site in US. Yakima River flood potential. Desert climate, low precipitation. Wind-blown dust events.'
  },
  p11: {
    title: 'Environmental Hazards — Colville, WA (Stevens County)',
    pills: [
      { label: 'Wildfire: High', cls: 'high' },
      { label: 'Flood: Low-Moderate', cls: 'mod' },
      { label: 'Air Quality: Moderate-High', cls: 'high' }
    ],
    note: 'Same Stevens County wildfire and smoke risk as other Colville properties. Verify distance from Colville River flood plain. Defensible space recommended.'
  },
  p12: {
    title: 'Environmental Hazards — Clayton, WA (Stevens County)',
    pills: [
      { label: 'Wildfire: High', cls: 'high' },
      { label: 'Flood: Low', cls: 'low' },
      { label: 'Air Quality: Moderate-High', cls: 'high' }
    ],
    note: 'Rural Stevens County — elevated wildfire risk. 20 acres provides defensible space buffer. Summer smoke from regional fires. Well water area — check aquifer quality.'
  },
  p13: {
    title: 'Environmental Hazards — Eureka, MT (Lincoln County)',
    pills: [
      { label: 'Wildfire: Very High', cls: 'severe' },
      { label: 'Flood: Moderate', cls: 'mod' },
      { label: 'Air Quality: High', cls: 'high' }
    ],
    note: 'Lincoln County is one of MT\'s highest wildfire risk counties. Tobacco River corridor. Canadian border fires add cross-border smoke. Kootenai National Forest surrounds area.'
  },
  p14: {
    title: 'Environmental Hazards — Cusick, WA (Pend Oreille County)',
    pills: [
      { label: 'Wildfire: High', cls: 'high' },
      { label: 'Flood: Moderate', cls: 'mod' },
      { label: 'Air Quality: Moderate-High', cls: 'high' }
    ],
    note: 'Pend Oreille River valley — check flood plain for this parcel. Forested county with significant fire risk. Remote — limited fire response infrastructure.'
  },
  p15: {
    title: 'Environmental Hazards — Tonasket, WA (Okanogan County)',
    pills: [
      { label: 'Wildfire: Very High', cls: 'severe' },
      { label: 'Flood: Moderate', cls: 'mod' },
      { label: 'Air Quality: High', cls: 'high' }
    ],
    note: 'Okanogan County is WA\'s #1 wildfire county. 2023 and 2024 saw major fires. Okanogan River flood potential. Canadian wildfire smoke adds to local fire smoke. Evacuation routes limited.'
  },
  p16: {
    title: 'Environmental Hazards — Davenport, WA (Lincoln County)',
    pills: [
      { label: 'Wildfire: Moderate-High', cls: 'high' },
      { label: 'Flood: Low-Moderate', cls: 'mod' },
      { label: 'Wind: Moderate', cls: 'mod' }
    ],
    note: 'Channeled Scablands terrain — grassland fire risk rather than forest fire. Lincoln County wheat country. Low tree cover means less smoke trapping but more wind exposure.'
  }
};

let injected = 0;

for (const [pid, data] of Object.entries(hazards)) {
  const pills = data.pills.map(p =>
    `      <span class="env-pill env-pill-${p.cls}">${p.label}</span>`
  ).join('\n');

  const hazardHtml = `  <div class="env-hazards">
    <div class="env-hazards-title">${data.title}</div>
    <div class="env-hazards-grid">
${pills}
    </div>
    <div class="env-note">${data.note}</div>
  </div>`;

  // Find the card by id, then find the score-row after it
  const cardRegex = new RegExp(`id="${pid}"`);
  const cardMatch = cardRegex.exec(html);
  if (!cardMatch) {
    console.log(`WARNING: Card ${pid} not found`);
    continue;
  }

  // From card position, find the score-row
  const searchFrom = cardMatch.index;
  const scoreRowStr = '<div class="score-row">';
  const scoreRowIdx = html.indexOf(scoreRowStr, searchFrom);

  if (scoreRowIdx === -1) {
    console.log(`WARNING: score-row not found for ${pid}`);
    continue;
  }

  // Insert env-hazards before the score-row
  html = html.slice(0, scoreRowIdx) + hazardHtml + '\n' + html.slice(scoreRowIdx);
  injected++;
  console.log(`Injected env hazards for ${pid}`);
}

fs.writeFileSync(htmlPath, html, 'utf8');
console.log(`\nDone! Injected ${injected} environmental hazard sections.`);
