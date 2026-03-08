#!/usr/bin/env node
// One-time script to fix property coordinates based on geocoding audit
// Many properties had city-center fallback coordinates; p4 and p44 were 100+ miles off

const fs = require('fs');
const path = require('path');

const FIXES = {
  p1:  { lat: 36.0510617, lng: -81.4984509 },
  p2:  { lat: 36.2876458, lng: -81.0901814 },
  p3:  { lat: 35.1145715, lng: -84.0540210 },
  p4:  { lat: 36.3812217, lng: -80.0290710 },  // was 148 mi off (wrong Madison)
  p5:  { lat: 34.9964,    lng: -84.2680 },
  p6:  { lat: 35.5913294, lng: -78.4358428 },
  p7:  { lat: 35.9065790, lng: -79.8050352 },
  p9:  { lat: 34.3984853, lng: -78.8098210 },
  p10: { lat: 36.4437152, lng: -81.0339186 },
  p13: { lat: 36.0421941, lng: -77.4946869 },
  p14: { lat: 35.8427855, lng: -79.4948941 },
  p15: { lat: 36.4423643, lng: -81.6824324 },
  p16: { lat: 35.5269966, lng: -81.8864705 },
  p17: { lat: 35.8694,    lng: -81.6497 },
  p18: { lat: 35.5216926, lng: -81.9786896 },
  p19: { lat: 35.0334946, lng: -84.0856471 },
  p20: { lat: 35.0219304, lng: -84.1441770 },
  p21: { lat: 35.2154467, lng: -83.9946968 },
  p22: { lat: 35.1117615, lng: -84.0868371 },
  p23: { lat: 36.0940876, lng: -82.2413078 },
  p25: { lat: 36.1705783, lng: -80.8435923 },
  p26: { lat: 36.4912011, lng: -80.5452036 },
  p27: { lat: 36.5231283, lng: -79.0468085 },
  p28: { lat: 36.1527492, lng: -78.4314127 },
  p29: { lat: 35.4642353, lng: -78.4966607 },
  p32: { lat: 35.5148343, lng: -81.8160093 },
  p33: { lat: 35.5026661, lng: -81.8233698 },
  p34: { lat: 35.4083517, lng: -81.9924101 },
  p35: { lat: 35.8057314, lng: -81.5857410 },
  p36: { lat: 35.8719801, lng: -77.7681107 },
  p38: { lat: 34.7908660, lng: -78.9268049 },
  p41: { lat: 34.7107115, lng: -77.5506406 },
  p42: { lat: 35.3001629, lng: -81.9401945 },
  p43: { lat: 35.6887970, lng: -77.4286915 },
  p44: { lat: 35.9112298, lng: -81.4131318 },  // was 213 mi off (wrong Lenoir)
  p45: { lat: 34.7346106, lng: -79.5618613 },
  p46: { lat: 35.1696397, lng: -79.7240193 },
  p47: { lat: 36.5469751, lng: -81.6328725 },
};

const filePath = path.join(__dirname, '..', 'public', 'properties-data.js');
let content = fs.readFileSync(filePath, 'utf8');

// Parse the PROPERTIES array
const match = content.match(/var PROPERTIES\s*=\s*(\[[\s\S]*\]);?\s*$/);
if (!match) { console.error('Could not parse PROPERTIES'); process.exit(1); }

const props = JSON.parse(match[1]);
let fixCount = 0;

props.forEach(p => {
  const fix = FIXES[p.id];
  if (fix) {
    console.log(`${p.id}: (${p.lat}, ${p.lng}) -> (${fix.lat}, ${fix.lng})`);
    p.lat = fix.lat;
    p.lng = fix.lng;
    fixCount++;
  }
});

const output = 'var PROPERTIES = ' + JSON.stringify(props, null, 2) + ';\n';
fs.writeFileSync(filePath, output, 'utf8');
console.log(`\nFixed ${fixCount} properties.`);
