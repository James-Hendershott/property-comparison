#!/usr/bin/env node
// One-time script to fill drive, toTown, and tax fields for p19-p48

var fs = require('fs');
var path = require('path');

var COUNTY_RATES = {
  Cherokee: 0.0061,
  Mitchell: 0.0056,
  Caldwell: 0.004975,
  Yadkin: 0.0065,
  Surry: 0.00513,
  Person: 0.0063,
  Franklin: 0.00505,
  Johnston: 0.0052,
  Anson: 0.00777,
  Union: 0.004342,
  Rutherford: 0.00569,
  Burke: 0.00555,
  Nash: 0.0063,
  Orange: 0.006383,
  Robeson: 0.0077,
  Davidson: 0.0054,
  Montgomery: 0.0062,
  Onslow: 0.00655,
  Pitt: 0.005663,
  Scotland: 0.0099,
  Ashe: 0.0051
};

var TOWN_DATA = {
  p19: { drive: '~29 hr', toTown: '~10 min', toTownSub: 'to Murphy Walmart' },
  p20: { drive: '~30 hr', toTown: '~15 min', toTownSub: 'to Murphy Walmart' },
  p21: { drive: '~30 hr', toTown: '~20 min', toTownSub: 'to Murphy Walmart' },
  p22: { drive: '~30 hr', toTown: '~15 min', toTownSub: 'to Murphy Walmart' },
  p23: { drive: '~29 hr', toTown: '~20 min', toTownSub: 'to Spruce Pine Walmart' },
  p24: { drive: '~29 hr', toTown: '~10 min', toTownSub: 'to Lenoir Walmart' },
  p25: { drive: '~29 hr', toTown: '~15 min', toTownSub: 'to Elkin Walmart' },
  p26: { drive: '~29 hr', toTown: '~15 min', toTownSub: 'to Mount Airy Walmart' },
  p27: { drive: '~29 hr', toTown: '~20 min', toTownSub: 'to Roxboro Walmart' },
  p28: { drive: '~28 hr', toTown: '~12 min', toTownSub: 'to Louisburg Walmart' },
  p29: { drive: '~28 hr', toTown: '~10 min', toTownSub: 'to Four Oaks Walmart' },
  p30: { drive: '~29 hr', toTown: '~25 min', toTownSub: 'to Rockingham Walmart' },
  p31: { drive: '~29 hr', toTown: '~20 min', toTownSub: 'to Monroe Walmart' },
  p32: { drive: '~29 hr', toTown: '~15 min', toTownSub: 'to Forest City Walmart' },
  p33: { drive: '~29 hr', toTown: '~15 min', toTownSub: 'to Forest City Walmart' },
  p34: { drive: '~29 hr', toTown: '~15 min', toTownSub: 'to Forest City Walmart' },
  // p35 already filled manually
  p36: { drive: '~32 hr', toTown: '~10 min', toTownSub: 'to Rocky Mount Walmart' },
  p37: { drive: '~30 hr', toTown: '~15 min', toTownSub: 'to Hillsborough Walmart' },
  p38: { drive: '~31 hr', toTown: '~15 min', toTownSub: 'to St. Pauls Walmart' },
  p39: { drive: '~30 hr', toTown: '~10 min', toTownSub: 'to Thomasville Walmart' },
  p40: { drive: '~30 hr', toTown: '~15 min', toTownSub: 'to Biscoe Walmart' },
  p41: { drive: '~33 hr', toTown: '~15 min', toTownSub: 'to Jacksonville Walmart' },
  p42: { drive: '~29 hr', toTown: '~10 min', toTownSub: 'to Forest City Walmart' },
  p43: { drive: '~32 hr', toTown: '~10 min', toTownSub: 'to Greenville Walmart' },
  p44: { drive: '~29 hr', toTown: '~15 min', toTownSub: 'to Lenoir Walmart' },
  p45: { drive: '~31 hr', toTown: '~15 min', toTownSub: 'to Laurinburg Walmart' },
  p46: { drive: '~30 hr', toTown: '~10 min', toTownSub: 'to Biscoe Walmart' },
  p47: { drive: '~30 hr', toTown: '~15 min', toTownSub: 'to West Jefferson Walmart' },
  p48: { drive: '~29 hr', toTown: '~15 min', toTownSub: 'to Lenoir Walmart' }
};

var filePath = path.join(__dirname, '..', 'public', 'properties-data.js');
eval(fs.readFileSync(filePath, 'utf8'));

var changed = 0;
PROPERTIES.forEach(function (p) {
  var updated = false;

  // Fill drive/toTown
  var td = TOWN_DATA[p.id];
  if (td && p.drive === '') {
    p.drive = td.drive;
    p.driveSub = 'cross-country from Farmington UT';
    p.toTown = td.toTown;
    p.toTownSub = td.toTownSub;
    updated = true;
  }

  // Fill tax data if missing
  var rate = COUNTY_RATES[p.county];
  if (rate && p.taxAnnual === 0) {
    p.taxRate = rate;
    var pct = (rate * 100).toFixed(2).replace(/0+$/, '').replace(/\.$/, '');
    p.taxLabel = 'Property Tax (' + p.county + ' Co. ' + pct + '%)';
    p.taxAnnual = Math.round(p.price * rate);
    updated = true;
  }

  if (updated) {
    changed++;
    console.log(p.id + ' (' + p.city + '): drive=' + p.drive + ', toTown=' + p.toTown + ' ' + p.toTownSub + ', tax=$' + p.taxAnnual + '/yr');
  }
});

var output = 'var PROPERTIES = ' + JSON.stringify(PROPERTIES, null, 2) + ';\n';
fs.writeFileSync(filePath, output, 'utf8');
console.log('\nUpdated ' + changed + ' properties.');
