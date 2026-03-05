/**
 * geocode-properties.js — One-time script to add lat/lng to properties-data.js
 * Uses Nominatim (free OpenStreetMap geocoder) with 1 req/sec rate limit.
 *
 * Usage: node geocode-properties.js
 */

const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'public', 'properties-data.js');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function geocode(address, city, state, zip) {
  const q = `${address}, ${city}, ${state} ${zip}`;
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q)}&format=json&limit=1&countrycodes=us`;

  const res = await fetch(url, {
    headers: { 'User-Agent': 'PropertyComparisonApp/1.0 (one-time geocoding)' }
  });

  if (!res.ok) {
    console.error(`  HTTP ${res.status} for "${q}"`);
    return null;
  }

  const data = await res.json();
  if (data.length === 0) {
    // Fallback: try city + state + zip only
    const fallbackQ = `${city}, ${state} ${zip}`;
    const fallbackUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(fallbackQ)}&format=json&limit=1&countrycodes=us`;
    await sleep(1100);
    const res2 = await fetch(fallbackUrl, {
      headers: { 'User-Agent': 'PropertyComparisonApp/1.0 (one-time geocoding)' }
    });
    const data2 = await res2.json();
    if (data2.length === 0) {
      console.error(`  No results for "${q}" or fallback "${fallbackQ}"`);
      return null;
    }
    console.log(`  Fallback used: city-level for "${q}"`);
    return { lat: parseFloat(data2[0].lat), lng: parseFloat(data2[0].lon) };
  }

  return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
}

async function main() {
  let src = fs.readFileSync(DATA_FILE, 'utf-8');

  // Extract the PROPERTIES array by evaluating the file
  const m = src.match(/var PROPERTIES = (\[[\s\S]*\]);/);
  if (!m) {
    console.error('Could not parse PROPERTIES array');
    process.exit(1);
  }
  const properties = JSON.parse(m[1]);

  console.log(`Found ${properties.length} properties`);

  let updated = 0;
  for (const p of properties) {
    if (p.lat && p.lng) {
      console.log(`${p.id}: already has coords (${p.lat}, ${p.lng})`);
      continue;
    }

    console.log(`${p.id}: geocoding ${p.address}, ${p.city}, ${p.state} ${p.zip}...`);
    const result = await geocode(p.address, p.city, p.state, p.zip);

    if (result) {
      p.lat = result.lat;
      p.lng = result.lng;
      console.log(`  -> ${result.lat}, ${result.lng}`);
      updated++;
    } else {
      console.log(`  -> FAILED`);
    }

    await sleep(1100); // Nominatim rate limit: 1 req/sec
  }

  // Write back — inject lat/lng after the "zip" field for each property
  for (const p of properties) {
    if (!p.lat || !p.lng) continue;

    // Find the zip line for this property and add lat/lng after it
    const zipPattern = new RegExp(
      `("id":\\s*"${p.id}"[\\s\\S]*?"zip":\\s*"${p.zip}")`,
      'm'
    );
    const match = src.match(zipPattern);
    if (match) {
      // Check if lat/lng already present after this zip
      const afterZip = src.substring(match.index + match[0].length, match.index + match[0].length + 100);
      if (afterZip.includes('"lat"')) continue;

      src = src.replace(
        match[0],
        match[0] + `,\n    "lat": ${p.lat},\n    "lng": ${p.lng}`
      );
    }
  }

  fs.writeFileSync(DATA_FILE, src, 'utf-8');
  console.log(`\nDone! Updated ${updated} properties with coordinates.`);
}

main().catch(err => { console.error(err); process.exit(1); });
