const fs = require('fs');
eval(fs.readFileSync('public/properties-data.js', 'utf8'));

// Static graveyard entries (permanently removed)
const staticGraveyard = new Set(['p5', 'p6', 'p8', 'p13']);

// data-status='removed'
const removedStatus = new Set();
PROPERTIES.forEach(p => {
  if (p.dataStatus === 'removed') removedStatus.add(p.id);
});

// Check DB graveyard
const db = require('./database');
db.init().then(() => {
  const dbGraveyard = db.getGraveyard();
  const dbGraveyardIds = new Set(dbGraveyard.map(e => e.property_id));

  const excluded = new Set([...staticGraveyard, ...removedStatus, ...dbGraveyardIds]);

  const active = PROPERTIES.filter(p => !excluded.has(p.id));

  // Group by county
  const byCounty = {};
  active.forEach(p => {
    const key = p.county || 'Unknown';
    if (!byCounty[key]) byCounty[key] = [];
    byCounty[key].push(p);
  });

  const lines = [];
  lines.push('EXCLUDED: static graveyard=' + [...staticGraveyard].join(',') +
    ' | removed=' + [...removedStatus].join(',') +
    ' | db graveyard=' + ([...dbGraveyardIds].join(',') || 'none'));
  lines.push('ACTIVE: ' + active.length + ' properties');
  lines.push('');

  const counties = Object.keys(byCounty).sort();
  counties.forEach(county => {
    const props = byCounty[county];
    lines.push('=== ' + county + ' County (' + props.length + ' properties) ===');
    props.forEach(p => {
      lines.push('');
      lines.push(p.id.toUpperCase() + ': ' + p.address + ', ' + p.city + ' ' + p.state + ' ' + p.zip);
      lines.push('  $' + p.price.toLocaleString() + ' | ' + p.beds + 'bd/' + p.bath + 'ba | ' + p.sqft.toLocaleString() + ' sqft | ' + p.acres + ' ac | Built ' + p.yearBuilt);
      lines.push('  Status: ' + p.status + (p.statusNote ? ' (' + p.statusNote + ')' : ''));
      lines.push('  Listing: ' + p.listingLink);

      // Gather questions from verifyItems + mustDo
      const questions = [];
      if (p.verifyItems) p.verifyItems.forEach(v => {
        if (v.label) questions.push(v.label + ' - ' + v.text);
        else if (v.text) questions.push(v.text);
      });
      if (p.mustDo) p.mustDo.forEach(m => {
        if (m.text) {
          const already = questions.some(q => q.toLowerCase().includes(m.text.substring(0, 25).toLowerCase()));
          if (!already) questions.push(m.text);
        }
      });
      if (questions.length) {
        lines.push('  Questions for realtor:');
        questions.forEach(q => lines.push('    - ' + q));
      }
    });
    lines.push('');
  });

  const output = lines.join('\n');
  fs.writeFileSync('realtor-list.txt', output, 'utf8');
  console.log(output);
  process.exit(0);
}).catch(e => { console.error(e); process.exit(1); });
