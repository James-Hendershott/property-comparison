/* eslint-disable */
/**
 * render.js — Client-side rendering engine for property cards + overview table
 *
 * Reads PROPERTIES array (from properties-data.js) and renders:
 *   - Nav links into #nav-properties
 *   - Overview table rows into #overview-tbody
 *   - Property cards into #cards-container
 *
 * Exports on window: PropertyRenderer
 */
var PropertyRenderer = (function () {
  'use strict';

  // --- Monthly payment calculator ---
  // 6.5% APR / 30yr / 3.5% down (FHA) + tax + insurance + PMI (0.55%)
  function calcMonthly(price, taxRate, hoa, taxAnnual) {
    var downPct = 0.035;
    var rate = 0.065;
    var years = 30;
    var insuranceMonthly = 110;
    var pmiRate = 0.0055;

    var downPayment = Math.round(price * downPct);
    var loanAmount = price - downPayment;
    var monthlyRate = rate / 12;
    var n = years * 12;

    // P&I
    var pi = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
    pi = Math.round(pi);

    // Property tax — use taxAnnual if available, else calculate from rate
    var taxMonthly;
    if (taxAnnual && taxAnnual > 0) {
      taxMonthly = Math.round(taxAnnual / 12);
    } else if (taxRate && taxRate > 0) {
      taxMonthly = Math.round((price * taxRate) / 12);
    } else {
      taxMonthly = 0;
    }

    // PMI
    var pmi = Math.round((loanAmount * pmiRate) / 12);

    // HOA
    var hoaMonthly = hoa || 0;

    var total = pi + taxMonthly + insuranceMonthly + pmi + hoaMonthly;

    return {
      total: total,
      pi: pi,
      tax: taxMonthly,
      insurance: insuranceMonthly,
      pmi: pmi,
      hoa: hoaMonthly,
      downPayment: downPayment,
      loanAmount: loanAmount
    };
  }

  // --- Format helpers ---
  function fmt(n) {
    return n.toLocaleString('en-US');
  }

  function fmtPrice(n) {
    return '$' + fmt(n);
  }

  function esc(str) {
    if (!str) return '';
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  // --- Score total ---
  function scoreTotal(scores) {
    var total = 0;
    var keys = ['price', 'acreage', 'schools', 'outbldgs', 'town', 'hospital', 'hazards', 'beach', 'forested', 'living'];
    keys.forEach(function (k) {
      total += (scores[k] || 0);
    });
    return total;
  }

  // --- Score bar labels ---
  var SCORE_LABELS = {
    price: 'Price', acreage: 'Acreage', schools: 'Schools', outbldgs: 'Outbldgs',
    town: 'Town', hospital: 'Hospital', hazards: 'Hazards', beach: 'Beach',
    forested: 'Forested', living: 'Living'
  };
  var SCORE_KEYS = ['price', 'acreage', 'schools', 'outbldgs', 'town', 'hospital', 'hazards', 'beach', 'forested', 'living'];

  // --- Render a single card ---
  function renderCard(p) {
    var m = calcMonthly(p.price, p.taxRate, p.hoa, p.taxAnnual);
    var total = scoreTotal(p.scores);

    var html = '';
    html += '<div class="card" id="' + esc(p.id) + '"' + (p.dataStatus ? ' data-status="' + esc(p.dataStatus) + '"' : '') + '>';

    // --- card-top ---
    html += '<div class="card-top">';

    // Map/Image
    html += '<div class="card-map">';
    html += '<a href="' + esc(p.listingLink) + '" target="_blank" class="card-img-link">';
    html += '<img loading="lazy" src="' + esc(p.image) + '" alt="' + esc(p.address + ', ' + p.city + ' ' + p.state) + '" style="width:100%;height:100%;object-fit:cover;min-height:240px;">';
    html += '</a></div>';

    // Right side: header + stats
    html += '<div>';

    // Card header
    html += '<div class="card-header">';

    // Title group
    html += '<div class="card-title-group">';
    html += '<div class="card-address">' + esc(p.address) + '</div>';
    html += '<div class="card-sub">' + esc(p.city + ', ' + p.state + ' ' + p.zip) + ' &middot; ' + esc(p.county) + '</div>';
    html += '<div class="card-badges">';
    p.badges.forEach(function (b) {
      if (b === 'b-new') html += '<span class="badge b-new">NEW</span>';
      else if (b === 'b-removed') html += '<span class="badge b-removed">REMOVED</span>';
      else if (b === 'b-pend') html += '<span class="badge b-pend">PENDING</span>';
      else if (b === 'b-livestock') html += '<span class="badge b-livestock">\uD83D\uDEA8 LIVESTOCK?</span>';
    });
    html += '<span class="badge ' + esc(p.typeBadge) + '">' + esc(p.type) + '</span>';
    html += '</div>'; // card-badges
    html += '</div>'; // card-title-group

    // Centered price column
    html += '<div class="card-price-center">';
    html += '<div class="card-price-label">List Price</div>';
    html += '<div class="card-price">' + fmtPrice(p.price) + '</div>';
    html += '</div>'; // card-price-center

    // Price block (monthly + down payment)
    html += '<div class="card-price-block">';
    html += '<div class="card-monthly">';
    html += '<span class="monthly-total">~' + fmtPrice(m.total) + '/mo</span>';

    // Monthly breakdown (only for properties that had it, or all now since we calculate it)
    if (p.taxRate > 0 || p.taxAnnual > 0) {
      html += '<button class="monthly-toggle">&#9662; details</button>';
      html += '<div class="monthly-breakdown" hidden>';
      html += '<div class="mb-line"><span>Principal &amp; Interest</span><span>' + fmtPrice(m.pi) + '</span></div>';
      html += '<div class="mb-line"><span>' + esc(p.taxLabel || 'Property Tax') + '</span><span>' + fmtPrice(m.tax) + '</span></div>';
      html += '<div class="mb-line"><span>Insurance</span><span>' + fmtPrice(m.insurance) + '</span></div>';
      html += '<div class="mb-line"><span>PMI (3.5% down)</span><span>' + fmtPrice(m.pmi) + '</span></div>';
      if (m.hoa > 0) {
        html += '<div class="mb-line"><span>HOA</span><span>' + fmtPrice(m.hoa) + '</span></div>';
      }
      html += '</div>'; // monthly-breakdown
    }

    html += '</div>'; // card-monthly
    html += '<div class="card-down">' + fmtPrice(m.downPayment) + ' down @ 3.5%</div>';
    html += '</div>'; // card-price-block

    html += '</div>'; // card-header

    // Stats row
    html += '<div class="stats-row">';
    html += '<div class="stat"><div class="stat-label">Beds/Bath</div><div class="stat-val">' + p.beds + ' / ' + p.bath + '</div></div>';
    html += '<div class="stat"><div class="stat-label">Sq Ft</div><div class="stat-val">' + fmt(p.sqft) + '</div></div>';
    html += '<div class="stat"><div class="stat-label">Acres</div><div class="stat-val">' + p.acres + '</div>' + (p.acresSub ? '<div class="stat-sub">' + esc(p.acresSub) + '</div>' : '') + '</div>';
    html += '<div class="stat"><div class="stat-label">Built</div><div class="stat-val">' + (p.yearBuilt || '—') + '</div></div>';

    // Optional stats — only render if present
    if (p.drive) {
      html += '<div class="stat"><div class="stat-label">Drive</div><div class="stat-val">' + esc(p.drive) + '</div>' + (p.driveSub ? '<div class="stat-sub">' + esc(p.driveSub) + '</div>' : '') + '</div>';
    }
    if (p.toTown) {
      html += '<div class="stat"><div class="stat-label">To Town</div><div class="stat-val">' + esc(p.toTown) + '</div>' + (p.toTownSub ? '<div class="stat-sub">' + esc(p.toTownSub) + '</div>' : '') + '</div>';
    }
    if (p.taxAnnual) {
      html += '<div class="stat"><div class="stat-label">Tax</div><div class="stat-val">' + fmtPrice(p.taxAnnual) + '/yr</div></div>';
    }

    // Status stat
    html += '<div class="stat"><div class="stat-label">Status</div><div class="stat-val ' + esc(p.statusClass) + '">' + esc(p.status) + '</div>' + (p.statusNote ? '<div class="stat-sub">' + esc(p.statusNote) + '</div>' : '') + '</div>';

    html += '</div>'; // stats-row
    html += '</div>'; // right side
    html += '</div>'; // card-top

    // --- Score-offer band ---
    html += '<div class="score-offer-band">';
    html += '<div class="sob-score"><div>';
    html += '<div class="sob-score-num">' + total + '</div>';
    html += '<div class="sob-score-denom">/ 100</div>';
    html += '</div>';
    html += '<div class="sob-score-bars">';
    SCORE_KEYS.forEach(function (key) {
      var v = p.scores[key] || 0;
      html += '<div class="sob-mini-bar"><div class="sob-mini-label"><span>' + SCORE_LABELS[key] + '</span><span>' + v + '/10</span></div><div class="sob-mini-track"><div class="sob-mini-fill" style="width:' + (v * 10) + '%"></div></div></div>';
    });
    html += '</div></div>'; // sob-score-bars, sob-score

    // Offer section
    html += '<div class="sob-offer">';
    html += '<div class="sob-offer-label">\uD83D\uDCB0 Realistic Offer Range</div>';
    html += '<div class="sob-offer-price">' + esc(p.offerRange) + '</div>';
    html += '<div class="sob-offer-rationale">';
    if (p.offerStrategy) {
      html += '<div class="sob-strategy">' + esc(p.offerStrategy) + '</div>';
    }
    if (p.offerRationale && p.offerRationale.length) {
      html += '<ul>';
      p.offerRationale.forEach(function (item) {
        html += '<li>' + esc(item) + '</li>';
      });
      html += '</ul>';
    }
    html += '</div>'; // sob-offer-rationale
    html += '</div>'; // sob-offer
    html += '</div>'; // score-offer-band

    // --- Highlight band ---
    html += '<div class="highlight-band">';
    html += '<strong>\u2B50 Why It Stands Out:</strong> ' + esc(p.highlight);
    html += '</div>';

    // --- Card body (2-col: highlights+proximity, pros+cons) ---
    html += '<div class="card-body">';

    // Property Highlights section
    if (p.highlights && p.highlights.length) {
      html += '<div class="card-section">';
      html += '<div class="card-section-title">\uD83C\uDFE1 Property Highlights</div>';
      html += '<ul>';
      p.highlights.forEach(function (h) {
        html += '<li><span class="li-icon">' + (h.icon || '\u2728') + '</span> ' + esc(h.text) + '</li>';
      });
      html += '</ul></div>';
    }

    // Proximity section
    if (p.proximity && p.proximity.length) {
      html += '<div class="card-section">';
      html += '<div class="card-section-title">\uD83D\uDE97 Proximity & Drive Times</div>';
      html += '<div class="proximity-grid">';
      p.proximity.forEach(function (prox) {
        html += '<div class="prox-item' + (prox.ref ? ' prox-item-ref' : '') + '">';
        html += '<span class="prox-icon">' + (prox.icon || '\uD83D\uDCCD') + '</span>';
        html += '<div class="prox-detail">';
        html += '<div class="prox-label">' + esc(prox.label) + '</div>';
        html += '<div class="prox-value">' + esc(prox.value) + '</div>';
        html += '</div></div>';
      });
      html += '</div></div>';
    }

    // Pros section
    if (p.cardPros && p.cardPros.length) {
      html += '<div class="card-section">';
      html += '<div class="card-section-title">\u2705 Pros</div>';
      html += '<ul>';
      p.cardPros.forEach(function (item) {
        html += '<li><span class="li-icon">' + (item.icon || '\u2713') + '</span> ' + esc(item.text) + '</li>';
      });
      html += '</ul></div>';
    }

    // Cons section
    if (p.cardCons && p.cardCons.length) {
      html += '<div class="card-section">';
      html += '<div class="card-section-title">\u274C Cons</div>';
      html += '<ul>';
      p.cardCons.forEach(function (item) {
        html += '<li><span class="li-icon">' + (item.icon || '\u2717') + '</span> ' + esc(item.text) + '</li>';
      });
      html += '</ul></div>';
    }

    html += '</div>'; // card-body

    // --- Family Fit / Verify section ---
    if ((p.familyFit && p.familyFit.length) || (p.verifyItems && p.verifyItems.length)) {
      html += '<div class="pros-cons">';

      if (p.familyFit && p.familyFit.length) {
        html += '<div class="pros">';
        html += '<div class="card-section-title">\uD83D\uDCAC Family Fit Notes</div>';
        html += '<ul style="list-style:none;padding:0;">';
        p.familyFit.forEach(function (item, i) {
          var borderStyle = i < p.familyFit.length - 1 ? 'border-bottom:1px solid rgba(0,0,0,0.05);' : '';
          html += '<li style="font-size:0.85rem;padding:0.25rem 0;' + borderStyle + '">' + esc(item) + '</li>';
        });
        html += '</ul></div>';
      }

      if (p.verifyItems && p.verifyItems.length) {
        html += '<div class="cons">';
        html += '<div class="card-section-title">\u26A0\uFE0F Verify Before Offering</div>';
        html += '<ul style="list-style:none;padding:0;">';
        p.verifyItems.forEach(function (item, i) {
          var borderStyle = i < p.verifyItems.length - 1 ? 'border-bottom:1px solid rgba(0,0,0,0.05);' : '';
          var content = '';
          if (item.label) {
            content = '<strong>' + esc(item.label) + '</strong> \u2014 ' + esc(item.text);
          } else {
            content = esc(item.text);
          }
          html += '<li style="font-size:0.85rem;padding:0.25rem 0;' + borderStyle + '">' + content + '</li>';
        });
        html += '</ul></div>';
      }

      html += '</div>'; // pros-cons
    }

    // --- Must Do ---
    if (p.mustDo && p.mustDo.length) {
      html += '<div class="must-do">';
      html += '<div class="must-do-title">MUST DO Before Offering</div>';
      html += '<div class="must-do-grid">';
      p.mustDo.forEach(function (item) {
        html += '<div class="must-do-item">';
        if (item.urgent) {
          html += '<span class="must-do-icon">!</span> ';
        }
        html += esc(item.text) + '</div>';
      });
      html += '</div></div>';
    }

    // --- Environmental Hazards ---
    if (p.envHazards && (p.envHazards.pills.length || p.envHazards.note)) {
      html += '<div class="env-hazards">';
      html += '<div class="env-hazards-title">Environmental Hazards \u2014 ' + esc(p.envHazards.location) + '</div>';
      if (p.envHazards.pills.length) {
        html += '<div class="env-hazards-grid">';
        p.envHazards.pills.forEach(function (pill) {
          html += '<span class="env-pill env-pill-' + esc(pill.level) + '">' + esc(pill.text) + '</span>';
        });
        html += '</div>';
      }
      if (p.envHazards.note) {
        html += '<div class="env-note">' + esc(p.envHazards.note) + '</div>';
      }
      html += '</div>';
    }

    html += '</div>'; // card

    return html;
  }

  // --- Render overview table row ---
  function renderTableRow(p) {
    var m = calcMonthly(p.price, p.taxRate, p.hoa, p.taxAnnual);
    var total = scoreTotal(p.scores);

    var html = '<tr>';
    html += '<td>' + p.num + '</td>';
    html += '<td><a href="#' + esc(p.id) + '">' + esc(p.address + ', ' + p.city + ' ' + p.state) + '</a></td>';
    html += '<td class="td-price">' + fmtPrice(p.price) + '</td>';
    html += '<td class="td-mo">~' + fmtPrice(m.total) + '</td>';
    html += '<td>' + fmtPrice(m.downPayment) + '</td>';
    html += '<td>' + p.beds + ' / ' + p.bath + '</td>';
    html += '<td>' + fmt(p.sqft) + '</td>';
    html += '<td>' + p.acres + '</td>';
    html += '<td><span class="badge ' + esc(p.typeBadge) + '">' + esc(p.type) + '</span></td>';
    html += '<td>' + (p.yearBuilt || '\u2014') + '</td>';
    html += '<td><strong style="color:var(--accent)">' + total + '</strong>/100</td>';

    // Offer column
    html += '<td style="white-space:nowrap"><strong>' + esc(p.offerRange) + '</strong>';
    if (p.tableOfferNote) {
      html += '<br><span style="font-size:0.72rem;color:var(--muted)">' + esc(p.tableOfferNote) + '</span>';
    }
    html += '</td>';

    // Status column
    html += '<td>';
    p.badges.forEach(function (b) {
      if (b === 'b-new') html += '<span class="badge b-new">NEW</span> ';
      else if (b === 'b-removed') html += '<span class="badge b-removed">REMOVED</span> ';
      else if (b === 'b-livestock') html += '<span class="badge b-livestock">\uD83D\uDEA8 LIVESTOCK?</span> ';
    });
    html += '<span class="' + esc(p.statusClass) + '">' + esc(p.status) + '</span>';
    html += '</td>';

    html += '</tr>';
    return html;
  }

  // --- Render nav links grouped by geographic region ---
  var REGIONS = [
    { name: 'Western Mtns',   ids: ['p3','p5','p19','p20','p21','p22'] },
    { name: 'Foothills',      ids: ['p1','p16','p17','p18','p24','p32','p33','p34','p35','p42','p44','p48','p49','p50','p52'] },
    { name: 'High Country',   ids: ['p10','p15','p23','p47'] },
    { name: 'N. Piedmont',    ids: ['p2','p4','p25','p26','p27','p37'] },
    { name: 'C. Piedmont',    ids: ['p7','p14','p39','p40','p46','p51'] },
    { name: 'S. Piedmont',    ids: ['p30','p31','p45'] },
    { name: 'Eastern',        ids: ['p6','p8','p13','p28','p29','p36','p43'] },
    { name: 'Coastal',        ids: ['p9','p11','p12','p38','p41'] }
  ];

  function renderNavLinks(props) {
    var propById = {};
    props.forEach(function (p) { propById[p.id] = p; });

    var html = '';
    REGIONS.forEach(function (region) {
      var items = [];
      region.ids.forEach(function (id) {
        if (propById[id]) items.push(propById[id]);
      });
      if (items.length === 0) return;

      html += '<div class="nav-group">' +
        '<button class="nav-group-btn">' + esc(region.name) +
        ' <span class="nav-group-count">' + items.length + '</span></button>' +
        '<div class="nav-group-dropdown">';
      items.forEach(function (p) {
        html += '<a href="#' + esc(p.id) + '">' +
          '<span class="nav-dd-label">' + esc(p.navLabel) + '</span>' +
          '<span class="nav-dd-meta">' + esc(p.county || '') + ' · ' + p.id.toUpperCase() + '</span></a>';
      });
      html += '</div></div>\n';
    });

    // Catch any properties not in a region
    var assigned = {};
    REGIONS.forEach(function (r) { r.ids.forEach(function (id) { assigned[id] = true; }); });
    var stragglers = props.filter(function (p) { return !assigned[p.id]; });
    if (stragglers.length > 0) {
      html += '<div class="nav-group">' +
        '<button class="nav-group-btn">Other <span class="nav-group-count">' + stragglers.length + '</span></button>' +
        '<div class="nav-group-dropdown">';
      stragglers.forEach(function (p) {
        html += '<a href="#' + esc(p.id) + '">' +
          '<span class="nav-dd-label">' + esc(p.navLabel) + '</span>' +
          '<span class="nav-dd-meta">' + esc(p.county || '') + ' · ' + p.id.toUpperCase() + '</span></a>';
      });
      html += '</div></div>\n';
    }
    return html;
  }

  // --- Re-render a single property (card + table row) ---
  function rerenderProperty(p) {
    // Re-render card
    var oldCard = document.getElementById(p.id);
    if (oldCard) {
      var temp = document.createElement('div');
      temp.innerHTML = renderCard(p);
      var newCard = temp.firstChild;
      oldCard.parentNode.replaceChild(newCard, oldCard);
    }

    // Re-render table row
    var table = document.querySelector('#overview table.qt tbody');
    if (table) {
      var rows = table.querySelectorAll('tr');
      for (var i = 0; i < rows.length; i++) {
        var link = rows[i].querySelector('a[href="#' + p.id + '"]');
        if (link) {
          var temp2 = document.createElement('tbody');
          temp2.innerHTML = renderTableRow(p);
          var newRow = temp2.firstChild;
          rows[i].parentNode.replaceChild(newRow, rows[i]);
          break;
        }
      }
    }
  }

  // --- Render cards grouped by region into collapsible sections ---
  function renderCardsByRegion(props) {
    var propById = {};
    props.forEach(function (p) { propById[p.id] = p; });

    var html = '';
    var assigned = {};

    REGIONS.forEach(function (region) {
      var items = [];
      region.ids.forEach(function (id) {
        if (propById[id]) { items.push(propById[id]); assigned[id] = true; }
      });
      if (items.length === 0) return;

      var hasNew = items.some(function (p) { return p.badges && p.badges.indexOf('b-new') >= 0; });
      var sectionId = 'region-' + region.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      html += '<div class="region-section" id="' + sectionId + '">';
      html += '<button class="region-toggle" data-region="' + sectionId + '">';
      html += '<span class="region-toggle-name">' + esc(region.name) + '</span>';
      html += '<span class="region-toggle-count">' + items.length + ' properties</span>';
      if (hasNew) html += '<span class="badge b-new">NEW</span>';
      html += '<i class="bi bi-chevron-down region-toggle-icon"></i>';
      html += '</button>';
      html += '<div class="region-cards">';
      items.forEach(function (p) { html += renderCard(p); });
      html += '</div></div>';
    });

    // Stragglers
    var stragglers = props.filter(function (p) { return !assigned[p.id]; });
    if (stragglers.length > 0) {
      var stragHasNew = stragglers.some(function (p) { return p.badges && p.badges.indexOf('b-new') >= 0; });
      html += '<div class="region-section" id="region-other">';
      html += '<button class="region-toggle" data-region="region-other">';
      html += '<span class="region-toggle-name">Other</span>';
      html += '<span class="region-toggle-count">' + stragglers.length + ' properties</span>';
      if (stragHasNew) html += '<span class="badge b-new">NEW</span>';
      html += '<i class="bi bi-chevron-down region-toggle-icon"></i>';
      html += '</button>';
      html += '<div class="region-cards">';
      stragglers.forEach(function (p) { html += renderCard(p); });
      html += '</div></div>';
    }

    return html;
  }

  // --- Build a lookup: property id → region section id ---
  function buildRegionMap(props) {
    var map = {};
    var propById = {};
    props.forEach(function (p) { propById[p.id] = true; });

    REGIONS.forEach(function (region) {
      var sectionId = 'region-' + region.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      region.ids.forEach(function (id) {
        if (propById[id]) map[id] = sectionId;
      });
    });
    return map;
  }

  // --- Initial render (populates all containers) ---
  function renderAll(props) {
    // Nav links
    var navContainer = document.getElementById('nav-properties');
    if (navContainer) {
      navContainer.innerHTML = renderNavLinks(props);
    }

    // Overview table body
    var tbody = document.getElementById('overview-tbody');
    if (tbody) {
      var tableHtml = '';
      props.forEach(function (p) {
        tableHtml += renderTableRow(p);
      });
      tbody.innerHTML = tableHtml;
    }

    // Cards container — grouped by region
    var cardsContainer = document.getElementById('cards-container');
    if (cardsContainer) {
      cardsContainer.innerHTML = renderCardsByRegion(props);
      initRegionToggles();
    }
  }

  // --- Build reverse map: section id → list of property ids ---
  function buildSectionToPids(props) {
    var propById = {};
    props.forEach(function (p) { propById[p.id] = true; });
    var map = {};
    var assigned = {};
    REGIONS.forEach(function (region) {
      var sectionId = 'region-' + region.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      var pids = [];
      region.ids.forEach(function (id) {
        if (propById[id]) { pids.push(id); assigned[id] = true; }
      });
      if (pids.length) map[sectionId] = pids;
    });
    var stragPids = props.filter(function (p) { return !assigned[p.id]; }).map(function (p) { return p.id; });
    if (stragPids.length) map['region-other'] = stragPids;
    return map;
  }

  // --- Region section toggle behavior ---
  function initRegionToggles() {
    var sectionPids = buildSectionToPids(typeof PROPERTIES !== 'undefined' ? PROPERTIES : []);

    document.querySelectorAll('.region-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var section = btn.closest('.region-section');
        var wasCollapsed = section.classList.contains('region-collapsed');
        section.classList.toggle('region-collapsed');

        // Highlight/clear map markers for this region
        var sectionId = section.id;
        var pids = sectionPids[sectionId];
        if (wasCollapsed && pids && window._mapFilterRegion) {
          window._mapFilterRegion(pids);
        } else if (!wasCollapsed && window._mapClearFilter) {
          window._mapClearFilter();
        }
      });
    });

    // Intercept all clicks on links that point to property cards (#pN)
    // This covers nav dropdowns, overview table links, rankings links, etc.
    document.addEventListener('click', function (e) {
      var link = e.target.closest('a[href^="#p"]');
      if (!link) return;
      var href = link.getAttribute('href');
      // Only handle property card anchors (#p followed by digits)
      if (!/^#p\d+$/.test(href)) return;
      var pid = href.slice(1);
      var target = document.getElementById(pid);
      if (!target) return;
      // Don't intercept if the link is inside a card itself
      if (link.closest('.card[id^="p"]')) return;
      e.preventDefault();
      openRegionForProperty(pid);
      setTimeout(function () {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    });
  }

  // --- Open region section for a given property id ---
  function openRegionForProperty(pid) {
    var regionMap = buildRegionMap(typeof PROPERTIES !== 'undefined' ? PROPERTIES : []);
    var sectionId = regionMap[pid];
    if (sectionId) {
      var section = document.getElementById(sectionId);
      if (section && section.classList.contains('region-collapsed')) {
        section.classList.remove('region-collapsed');
      }
    }
  }

  // --- Auto-execute immediately ---
  // This script is loaded after properties-data.js and after the DOM containers exist
  // (script tags are at the bottom of <body>), so we can render synchronously.
  if (typeof PROPERTIES !== 'undefined') {
    renderAll(PROPERTIES);
  }

  // --- Public API ---
  return {
    calcMonthly: calcMonthly,
    renderCard: renderCard,
    renderTableRow: renderTableRow,
    renderNavLinks: renderNavLinks,
    rerenderProperty: rerenderProperty,
    renderAll: renderAll,
    openRegionForProperty: openRegionForProperty,
    REGIONS: REGIONS,
    scoreTotal: scoreTotal,
    fmt: fmt,
    fmtPrice: fmtPrice,
    esc: esc
  };
})();
