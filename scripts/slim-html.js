#!/usr/bin/env node
/**
 * slim-html.js
 *
 * Transforms index.html to use data-driven rendering:
 * - Replaces nav property links with <span id="nav-properties"></span>
 * - Replaces overview tbody rows with <tbody id="overview-tbody"></tbody>
 * - Replaces all 47 card blocks with <div id="cards-container"></div>
 * - Adds new script tags for properties-data.js and render.js
 * - Keeps all CSS, header, graveyard static entries, internet guide, footer
 */

const fs = require('fs');

const html = fs.readFileSync('public/index.html', 'utf8');
const lines = html.split('\n');

// --- 1. Replace nav property links (lines 839-885) with span ---
// Find the nav section: lines starting with <a href="#p
let navStart = -1, navEnd = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].trim().startsWith('<a href="#p1">')) {
    navStart = i;
  }
  // The last property nav link
  if (navStart > 0 && lines[i].trim().startsWith('<a href="#p47">')) {
    navEnd = i;
    break;
  }
}
console.log(`Nav links: lines ${navStart + 1} to ${navEnd + 1}`);

// Replace nav property links with span container
if (navStart > 0 && navEnd > 0) {
  const before = lines.slice(0, navStart);
  const after = lines.slice(navEnd + 1);
  lines.length = 0;
  lines.push(...before, '<span id="nav-properties"></span>', ...after);
}

// --- 2. Replace overview tbody content ---
// Find <tbody> inside overview table and </tbody>
let tbodyStart = -1, tbodyEnd = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].trim() === '<tbody>' && tbodyStart === -1) {
    tbodyStart = i;
  }
  if (tbodyStart > 0 && lines[i].trim() === '</tbody>' && tbodyEnd === -1) {
    tbodyEnd = i;
    break;
  }
}
console.log(`Table tbody: lines ${tbodyStart + 1} to ${tbodyEnd + 1}`);

if (tbodyStart > 0 && tbodyEnd > 0) {
  const before = lines.slice(0, tbodyStart);
  const after = lines.slice(tbodyEnd + 1);
  lines.length = 0;
  lines.push(...before, '      <tbody id="overview-tbody"></tbody>', ...after);
}

// --- 3. Replace all card blocks with container ---
// Find <div class="cards"> and </div><!-- /cards -->
let cardsWrapStart = -1, cardsWrapEnd = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].trim() === '<div class="cards">') {
    cardsWrapStart = i;
  }
  if (lines[i].includes('</div><!-- /cards -->')) {
    cardsWrapEnd = i;
    break;
  }
}
console.log(`Cards section: lines ${cardsWrapStart + 1} to ${cardsWrapEnd + 1}`);

if (cardsWrapStart > 0 && cardsWrapEnd > 0) {
  const before = lines.slice(0, cardsWrapStart);
  const after = lines.slice(cardsWrapEnd + 1);
  lines.length = 0;
  lines.push(...before, '<div id="cards-container"></div>', ...after);
}

// --- 4. Update script tags ---
// Find existing script tags and replace with new load order
let scriptStart = -1, scriptEnd = -1;
for (let i = lines.length - 1; i >= 0; i--) {
  if (lines[i].includes('<script src="score-tips.js')) {
    scriptStart = i;
  }
  if (lines[i].includes('<script src="app.js')) {
    scriptEnd = i;
    break;
  }
}
console.log(`Script tags: lines ${scriptStart + 1} to ${scriptEnd + 1}`);

if (scriptStart > 0 && scriptEnd > 0) {
  const before = lines.slice(0, scriptStart);
  const after = lines.slice(scriptEnd + 1);
  lines.length = 0;
  lines.push(...before,
    '<script src="properties-data.js?v=1"></script>',
    '<script src="score-tips.js?v=2"></script>',
    '<script src="render.js?v=1"></script>',
    '<script src="app.js?v=8"></script>',
    ...after
  );
}

// --- Write result ---
const result = lines.join('\n');
fs.writeFileSync('public/index.html', result, 'utf8');

const originalLines = html.split('\n').length;
const newLines = result.split('\n').length;
console.log(`\nOriginal: ${originalLines} lines`);
console.log(`New: ${newLines} lines`);
console.log(`Removed: ${originalLines - newLines} lines`);
