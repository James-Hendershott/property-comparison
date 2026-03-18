(function () {
  'use strict';

  // --- Property data map (single source of truth from PROPERTIES array) ---
  var PROPERTY_MAP = {};   // pid -> merged property data (base + edits)
  var PROPERTY_BASE = {};  // pid -> original unedited property data
  if (typeof PROPERTIES !== 'undefined') {
    PROPERTIES.forEach(function (p) {
      PROPERTY_MAP[p.id] = JSON.parse(JSON.stringify(p));
      PROPERTY_BASE[p.id] = p;
    });
  }

  // --- Property name map (default from data, overridden by custom names) ---
  var DEFAULT_NAMES = {};
  var CUSTOM_NAMES = {};
  var GRAVEYARD_IDS = {};
  Object.keys(PROPERTY_MAP).forEach(function (pid) {
    DEFAULT_NAMES[pid] = PROPERTY_MAP[pid].navLabel;
  });

  function getDisplayName(pid) {
    return (CUSTOM_NAMES[pid] && CUSTOM_NAMES[pid].name) || DEFAULT_NAMES[pid] || pid;
  }


  const API = {
    getUsers: function () { return fetch('/api/users').then(r => r.json()); },
    createUser: function (name) {
      return fetch('/api/users', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name })
      }).then(r => r.json());
    },
    getVotes: function () { return fetch('/api/votes').then(r => r.json()); },
    castVote: function (userId, propertyId, rating, likes, dislikes) {
      return fetch('/api/votes', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: userId, propertyId: propertyId, rating: rating, likes: likes || '', dislikes: dislikes || '' })
      }).then(r => r.json());
    },
    getRankings: function () { return fetch('/api/rankings').then(r => r.json()); },
    getNotes: function () { return fetch('/api/notes').then(r => r.json()); },
    createNote: function (userId, propertyId, content) {
      return fetch('/api/notes', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: userId, propertyId: propertyId, content: content })
      }).then(r => r.json());
    },
    deleteNote: function (noteId, userId) {
      return fetch('/api/notes/' + noteId, {
        method: 'DELETE', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: userId })
      }).then(r => r.json());
    },
    getGraveyard: function () { return fetch('/api/graveyard').then(r => r.json()); },
    moveToGraveyard: function (userId, propertyId, reason) {
      return fetch('/api/graveyard', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: userId, propertyId: propertyId, reason: reason })
      }).then(r => r.json());
    },
    restoreFromGraveyard: function (propertyId) {
      return fetch('/api/graveyard/' + propertyId, {
        method: 'DELETE'
      }).then(r => r.json());
    },
    getPropertyNames: function () { return fetch('/api/property-names').then(r => r.json()); },
    setPropertyName: function (userId, propertyId, name) {
      return fetch('/api/property-names', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: userId, propertyId: propertyId, name: name })
      }).then(r => r.json());
    },
    getPropertyEdits: function () { return fetch('/api/property-edits').then(r => r.json()); },
    setPropertyEdits: function (userId, propertyId, edits) {
      return fetch('/api/property-edits', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: userId, propertyId: propertyId, edits: edits })
      }).then(r => r.json());
    },
  };

  // --- User state ---
  var currentUser = null;

  function loadUser() {
    var stored = localStorage.getItem('vote_user');
    if (stored) {
      try { currentUser = JSON.parse(stored); } catch (e) { currentUser = null; }
    }
  }

  function saveUser(user) {
    currentUser = user;
    localStorage.setItem('vote_user', JSON.stringify(user));
  }

  function clearUser() {
    currentUser = null;
    localStorage.removeItem('vote_user');
  }

  // --- User pill in nav ---
  function renderNavPill() {
    var existing = document.querySelector('.nav-user');
    if (existing) existing.remove();

    if (!currentUser) return;

    var pill = document.createElement('div');
    pill.className = 'nav-user';
    pill.innerHTML = 'Voting as: <strong>' + escapeHtml(currentUser.name) + '</strong> ' +
      '<button class="nav-user-switch">(switch)</button>';
    pill.querySelector('.nav-user-switch').addEventListener('click', function () {
      clearUser();
      renderNavPill();
      showUserModal();
    });

    var navRight = document.querySelector('.nav-right');
    if (navRight) navRight.appendChild(pill);
  }


  // --- User modal ---
  function showUserModal() {
    var overlay = document.createElement('div');
    overlay.className = 'vote-modal';

    var card = document.createElement('div');
    card.className = 'vote-modal-card';
    card.innerHTML =
      '<h2 class="vote-modal-title">Who\'s voting?</h2>' +
      '<div class="vote-modal-buttons" id="vote-modal-buttons"></div>' +
      '<div class="vote-modal-divider">or enter your name</div>' +
      '<form class="vote-modal-form" id="vote-modal-form">' +
      '  <input type="text" class="vote-modal-input" id="vote-modal-input" placeholder="Your name" maxlength="30" autocomplete="off">' +
      '  <button type="submit" class="vote-modal-submit">Start Voting</button>' +
      '</form>';

    overlay.appendChild(card);
    document.body.appendChild(overlay);

    // Load existing users as quick-select buttons
    API.getUsers().then(function (users) {
      var container = document.getElementById('vote-modal-buttons');
      if (users.length === 0) {
        container.style.display = 'none';
        document.querySelector('.vote-modal-divider').style.display = 'none';
        return;
      }
      users.forEach(function (u) {
        var btn = document.createElement('button');
        btn.className = 'vote-modal-quick';
        btn.textContent = u.name;
        btn.addEventListener('click', function () {
          saveUser(u);
          overlay.remove();
          renderNavPill();
          refreshAllVotes();
          refreshAllNotes();
        });
        container.appendChild(btn);
      });
    });

    document.getElementById('vote-modal-form').addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('vote-modal-input').value.trim();
      if (!name) return;
      API.createUser(name).then(function (user) {
        saveUser(user);
        overlay.remove();
        renderNavPill();
        refreshAllVotes();
        refreshAllNotes();
      });
    });

    setTimeout(function () {
      document.getElementById('vote-modal-input').focus();
    }, 100);
  }

  // --- Star rendering ---
  function createStars(propertyId, currentRating, onRate) {
    var container = document.createElement('div');
    container.className = 'vote-stars';
    for (var i = 1; i <= 7; i++) {
      (function (rating) {
        var star = document.createElement('button');
        star.className = 'vote-star' + (rating <= currentRating ? ' vote-star-filled' : '');
        star.textContent = '\u2605';
        star.title = rating + ' — ' + (RATING_LABELS[rating] || '');
        star.setAttribute('aria-label', 'Rate ' + rating + ' stars');
        star.addEventListener('click', function () {
          if (!currentUser) { showUserModal(); return; }
          onRate(rating);
        });
        container.appendChild(star);
      })(i);
    }
    return container;
  }

  function renderStarsReadonly(rating) {
    var s = '';
    for (var i = 1; i <= 7; i++) {
      s += '<span class="vote-star-sm' + (i <= Math.round(rating) ? ' vote-star-sm-filled' : '') + '">\u2605</span>';
    }
    return s;
  }

  // --- Vote justification modal ---
  var pendingVote = null; // { pid, rating, callback }

  function showVoteModal(pid, rating, existingLikes, existingDislikes, onSubmit) {
    var propName = getDisplayName(pid);
    var label = RATING_LABELS[rating] || '';
    var modal = document.getElementById('vote-justify-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'vote-justify-modal';
      modal.className = 'vote-justify-overlay';
      modal.innerHTML =
        '<div class="vote-justify-card">' +
          '<div class="vote-justify-header">' +
            '<span class="vote-justify-title"></span>' +
            '<span class="vote-justify-rating"></span>' +
          '</div>' +
          '<div class="vote-justify-fields">' +
            '<label class="vote-justify-label vj-likes-label"><i class="bi bi-hand-thumbs-up"></i> Likes</label>' +
            '<textarea class="vote-justify-input" id="vj-likes" placeholder="What do you like about this property?" rows="2"></textarea>' +
            '<label class="vote-justify-label vj-dislikes-label"><i class="bi bi-hand-thumbs-down"></i> Dislikes</label>' +
            '<textarea class="vote-justify-input" id="vj-dislikes" placeholder="Any concerns or drawbacks?" rows="2"></textarea>' +
          '</div>' +
          '<div class="vote-justify-actions">' +
            '<button class="vote-justify-skip" id="vj-skip">Skip</button>' +
            '<button class="vote-justify-submit" id="vj-submit">Submit Rating</button>' +
          '</div>' +
        '</div>';
      document.body.appendChild(modal);

      modal.addEventListener('click', function (e) {
        if (e.target === modal) closeVoteModal(true);
      });
      document.getElementById('vj-skip').addEventListener('click', function () {
        closeVoteModal(true);
      });
      document.getElementById('vj-submit').addEventListener('click', function () {
        closeVoteModal(false);
      });
    }

    modal.querySelector('.vote-justify-title').textContent = propName;
    modal.querySelector('.vote-justify-rating').textContent = rating + '\u2605 — ' + label;
    modal.querySelector('.vote-justify-rating').style.color = RATING_COLORS[rating] || '#999';
    document.getElementById('vj-likes').value = existingLikes || '';
    document.getElementById('vj-dislikes').value = existingDislikes || '';
    pendingVote = { pid: pid, rating: rating, onSubmit: onSubmit };
    modal.classList.add('open');
    setTimeout(function () { document.getElementById('vj-likes').focus(); }, 100);
  }

  function closeVoteModal(skip) {
    var modal = document.getElementById('vote-justify-modal');
    if (modal) modal.classList.remove('open');
    if (pendingVote) {
      var likes = skip ? '' : (document.getElementById('vj-likes').value || '').trim();
      var dislikes = skip ? '' : (document.getElementById('vj-dislikes').value || '').trim();
      pendingVote.onSubmit(pendingVote.rating, likes, dislikes);
      pendingVote = null;
    }
  }

  // --- Inject vote rows into each card ---
  function injectVoteRows() {
    document.querySelectorAll('.card[id^="p"]').forEach(function (card) {
      var pid = card.id;
      if (card.querySelector('.vote-row')) return; // already injected

      var voteRow = document.createElement('div');
      voteRow.className = 'vote-row';
      voteRow.setAttribute('data-property', pid);
      voteRow.innerHTML =
        '<div class="vote-row-header">' +
        '  <span class="vote-row-title">Family Rating</span>' +
        '  <span class="vote-row-avg" data-avg></span>' +
        '</div>' +
        '<div class="vote-row-stars" data-stars></div>' +
        '<div class="vote-row-details" data-details></div>';

      card.appendChild(voteRow);

      // Print button per card
      if (!card.querySelector('.card-print-btn')) {
        var printBtn = document.createElement('button');
        printBtn.className = 'card-print-btn';
        printBtn.title = 'Print this property';
        printBtn.innerHTML = '<i class="bi bi-printer"></i>';
        printBtn.addEventListener('click', function (e) {
          e.stopPropagation();
          printSingleCard(pid);
        });
        card.appendChild(printBtn);
      }
    });
  }

  // Print a single property card
  function printSingleCard(pid) {
    var card = document.getElementById(pid);
    if (!card) return;
    var clone = card.cloneNode(true);
    clone.style.cssText = 'box-shadow:none;border:1px solid #ddd;max-width:700px;margin:0 auto;overflow:visible;position:relative;';
    // Remove interactive elements from clone
    clone.querySelectorAll('.card-print-btn, .vote-row, .notes-row, .card-details-bar, .edit-btn').forEach(function (el) { el.remove(); });
    var w = window.open('', '_blank');
    if (!w) return;
    w.document.write('<!DOCTYPE html><html><head><title>Print ' + pid.toUpperCase() + '</title>');
    // Copy stylesheets
    document.querySelectorAll('link[rel="stylesheet"], style').forEach(function (s) {
      w.document.write(s.outerHTML);
    });
    w.document.write('</head><body style="padding:1.5rem;background:#fff;">');
    w.document.write(clone.outerHTML);
    w.document.write('</body></html>');
    w.document.close();
    setTimeout(function () { w.print(); }, 400);
  }

  // --- Update vote UI with current data ---
  function updateVoteRows(allVotes) {
    document.querySelectorAll('.vote-row').forEach(function (row) {
      var pid = row.getAttribute('data-property');
      var data = allVotes[pid];

      // Stars
      var starsContainer = row.querySelector('[data-stars]');
      starsContainer.innerHTML = '';
      var myRating = 0;
      var myLikes = '';
      var myDislikes = '';
      if (data && currentUser) {
        for (var i = 0; i < data.votes.length; i++) {
          if (data.votes[i].userId === currentUser.id) {
            myRating = data.votes[i].rating;
            myLikes = data.votes[i].likes || '';
            myDislikes = data.votes[i].dislikes || '';
            break;
          }
        }
      }
      var stars = createStars(pid, myRating, function (rating) {
        showVoteModal(pid, rating, myLikes, myDislikes, function (r, likes, dislikes) {
          API.castVote(currentUser.id, pid, r, likes, dislikes).then(function () {
            refreshAllVotes();
          });
        });
      });
      starsContainer.appendChild(stars);

      // Average
      var avgEl = row.querySelector('[data-avg]');
      if (data && data.count > 0) {
        avgEl.innerHTML = data.avg.toFixed(1) + ' \u2605 <span class="vote-count">(' + data.count + ' vote' + (data.count > 1 ? 's' : '') + ')</span>';
      } else {
        avgEl.textContent = 'No votes yet';
      }

      // Individual votes with likes/dislikes
      var detailsEl = row.querySelector('[data-details]');
      if (data && data.votes.length > 0) {
        detailsEl.innerHTML = data.votes.map(function (v) {
          var chip = '<span class="vote-chip">' + escapeHtml(v.userName) + ': ' + v.rating + '\u2605</span>';
          var feedback = '';
          if (v.likes || v.dislikes) {
            feedback = '<div class="vote-feedback">';
            if (v.likes) feedback += '<span class="vote-fb-like"><i class="bi bi-hand-thumbs-up-fill"></i> ' + escapeHtml(v.likes) + '</span>';
            if (v.dislikes) feedback += '<span class="vote-fb-dislike"><i class="bi bi-hand-thumbs-down-fill"></i> ' + escapeHtml(v.dislikes) + '</span>';
            feedback += '</div>';
          }
          return chip + feedback;
        }).join(' ');
      } else {
        detailsEl.innerHTML = '';
      }
    });
  }

  // --- Rankings section (podium + tier cards) ---
  var MAX_STARS = 7;
  var RATING_COLORS = {
    1: '#ef4444', 2: '#f97316', 3: '#eab308', 4: '#a3a3a3',
    5: '#60a5fa', 6: '#22c55e', 7: '#16a34a'
  };
  var RATING_LABELS = {
    1: 'Absolutely not', 2: 'Not great', 3: 'Below average', 4: 'Neutral',
    5: 'Pretty good', 6: 'Really like it', 7: 'Love it'
  };
  var TIER_DEFS = [
    { key: 'S', min: 6.0, label: 'Top Picks', range: '6.0 – 7.0', cls: 'rank-tier-s' },
    { key: 'A', min: 5.0, label: 'Strong',    range: '5.0 – 5.9', cls: 'rank-tier-a' },
    { key: 'B', min: 4.0, label: 'Decent',    range: '4.0 – 4.9', cls: 'rank-tier-b' },
    { key: 'C', min: 2.5, label: 'Weak',      range: '2.5 – 3.9', cls: 'rank-tier-c' },
    { key: 'D', min: 0,   label: 'Pass',      range: '1.0 – 2.4', cls: 'rank-tier-d' }
  ];

  function getUserColor(name) {
    var n = (name || '').toLowerCase();
    if (n === 'james') return 'var(--both)';
    if (n === 'savanah') return 'var(--accent)';
    return 'var(--james)';
  }

  function getScoreColor(avg) {
    if (avg >= 6.0) return '#16a34a';
    if (avg >= 5.0) return '#22c55e';
    if (avg >= 4.0) return '#eab308';
    if (avg >= 2.5) return '#f97316';
    return '#ef4444';
  }

  function renderVoterPips(votes) {
    return votes.map(function (v) {
      return '<span class="rank-pip" style="background:' + getUserColor(v.userName) + '" ' +
        'title="' + escapeHtml(v.userName) + ': ' + v.rating + '\u2605 — ' + RATING_LABELS[v.rating] + '">' +
        v.rating + '</span>';
    }).join('');
  }

  function renderHoverCard(prop, name) {
    if (!prop || !prop.image) return '';
    var price = prop.price ? '$' + prop.price.toLocaleString() : '';
    return '<div class="rank-hover-card">' +
      '<img src="' + prop.image + '" alt="' + escapeHtml(name) + '">' +
      '<div class="rank-hover-card-body">' +
        '<strong>' + escapeHtml(name) + '</strong>' +
        (prop.city ? escapeHtml(prop.city) + (prop.county ? ', ' + escapeHtml(prop.county) + ' Co.' : '') : '') +
        (price ? '<br>' + price : '') +
        (prop.acres ? ' &middot; ' + prop.acres + ' acres' : '') +
      '</div></div>';
  }

  // Store last votes data for re-rendering with filters
  var lastAllVotes = null;
  var rankFilterNames = null; // null = all voters

  function updateRankings(allVotes) {
    lastAllVotes = allVotes;
    renderRankings();
  }

  function renderRankings() {
    var allVotes = lastAllVotes;
    var container = document.getElementById('rankings');
    if (!container || !allVotes) return;

    // Collect all voter names across all properties
    var allVoterNames = {};
    for (var pid in allVotes) {
      if (allVotes[pid].votes) {
        allVotes[pid].votes.forEach(function (v) { allVoterNames[v.userName] = true; });
      }
    }

    // Build entries, filtering votes if a filter is active
    var entries = [];
    for (var pid in allVotes) {
      if (GRAVEYARD_IDS[pid]) continue;
      var rawVotes = allVotes[pid].votes || [];
      var filtered = rankFilterNames
        ? rawVotes.filter(function (v) { return rankFilterNames.indexOf(v.userName) >= 0; })
        : rawVotes;
      if (filtered.length === 0) continue;
      var sum = 0;
      filtered.forEach(function (v) { sum += v.rating; });
      var avg = sum / filtered.length;
      entries.push({
        pid: pid,
        name: getDisplayName(pid),
        avg: avg,
        count: filtered.length,
        votes: filtered,
        allVotes: rawVotes
      });
    }
    entries.sort(function (a, b) { return b.avg - a.avg || b.count - a.count; });

    if (entries.length === 0) {
      container.innerHTML = '';
      return;
    }

    // Voter filter bar
    var filterHtml = '<div class="rank-filter">' +
      '<span class="rank-filter-label">Filter by voter:</span>' +
      '<button class="rank-filter-btn' + (!rankFilterNames ? ' rank-filter-active' : '') + '" data-filter="all">Everyone</button>';
    Object.keys(allVoterNames).sort().forEach(function (name) {
      var active = rankFilterNames && rankFilterNames.indexOf(name) >= 0 && rankFilterNames.length === 1;
      filterHtml += '<button class="rank-filter-btn' + (active ? ' rank-filter-active' : '') + '" ' +
        'data-filter="' + escapeHtml(name) + '" style="border-color:' + getUserColor(name) + '">' +
        '<span class="rank-filter-dot" style="background:' + getUserColor(name) + '"></span>' +
        escapeHtml(name) + '</button>';
    });
    // "James & Savanah" shortcut if both exist
    if (allVoterNames['James'] && allVoterNames['Savanah']) {
      var jsActive = rankFilterNames && rankFilterNames.length === 2 &&
        rankFilterNames.indexOf('James') >= 0 && rankFilterNames.indexOf('Savanah') >= 0;
      filterHtml += '<button class="rank-filter-btn' + (jsActive ? ' rank-filter-active' : '') + '" ' +
        'data-filter="James+Savanah" style="border-color:var(--accent2)">' +
        '<span class="rank-filter-dot" style="background:var(--both)"></span>' +
        '<span class="rank-filter-dot" style="background:var(--accent)"></span>' +
        'James &amp; Savanah</button>';
    }
    filterHtml += '</div>';

    // Rating scale legend
    var legend = '<div class="rank-legend">' +
      '<span class="rank-legend-title">Rating Scale (1–' + MAX_STARS + '):</span>';
    for (var r = 1; r <= MAX_STARS; r++) {
      legend += '<span class="rank-legend-item">' +
        '<span class="rank-legend-dot" style="background:' + RATING_COLORS[r] + '"></span>' +
        '<span class="rank-legend-num">' + r + '</span> ' + RATING_LABELS[r] +
        '</span>';
    }
    legend += '</div>';

    // Podium (top 3) — render in order: 2nd, 1st, 3rd
    var podiumOrder = [1, 0, 2];
    var podiumHtml = '<div class="rank-podium">';
    podiumOrder.forEach(function (idx) {
      if (!entries[idx]) return;
      var e = entries[idx];
      var place = idx + 1;
      var prop = PROPERTY_MAP[e.pid] || {};
      var pct = (e.avg / MAX_STARS * 100).toFixed(0);
      var ringColor = getScoreColor(e.avg);
      podiumHtml += '<div class="rank-podium-card rank-podium-' + place + '" style="position:relative">' +
        '<div class="rank-medal">' + place + '</div>' +
        (prop.image ? '<img class="rank-podium-img" src="' + prop.image + '" alt="' + escapeHtml(e.name) + '">' : '') +
        '<div class="rank-ring" style="--pct:' + pct + ';--ring-color:' + ringColor + '">' +
          '<span class="rank-ring-avg">' + e.avg.toFixed(1) + '</span>' +
        '</div>' +
        '<div class="rank-podium-name"><a href="#' + e.pid + '">' + escapeHtml(e.name) + '</a></div>' +
        (prop.city ? '<div class="rank-podium-city">' + escapeHtml(prop.city) + (prop.county ? ', ' + escapeHtml(prop.county) : '') + '</div>' : '') +
        '<div class="rank-voters">' + renderVoterPips(e.allVotes || e.votes) + '</div>' +
        '</div>';
    });
    podiumHtml += '</div>';

    // Tier groups
    var tiersHtml = '<div class="rank-tiers">';
    var itemIdx = 0;
    TIER_DEFS.forEach(function (tier, tIdx) {
      var maxVal = tIdx === 0 ? 999 : TIER_DEFS[tIdx - 1].min;
      var tierEntries = [];
      entries.forEach(function (e, idx) {
        if (e.avg >= tier.min && e.avg < maxVal) {
          tierEntries.push({ entry: e, rank: idx + 1 });
        }
      });
      if (tierEntries.length === 0) return;

      tiersHtml += '<div class="rank-tier">' +
        '<div class="rank-tier-header">' +
          '<span class="rank-tier-badge ' + tier.cls + '">' + tier.key + '</span>' +
          '<span class="rank-tier-label">' + tier.label + ' (' + tier.range + ')</span>' +
        '</div>' +
        '<div class="rank-tier-items">';

      tierEntries.forEach(function (te) {
        var e = te.entry;
        var prop = PROPERTY_MAP[e.pid] || {};
        var delay = (itemIdx * 0.04).toFixed(2);
        tiersHtml += '<a class="rank-tier-item" href="#' + e.pid + '" style="animation-delay:' + delay + 's;position:relative">' +
          '<span class="rank-tier-num">' + te.rank + '</span>' +
          (prop.image ? '<img class="rank-tier-thumb" src="' + prop.image + '" alt="">' : '') +
          '<span class="rank-tier-name">' +
            '<span class="rank-tier-name-text">' + escapeHtml(e.name) + '</span>' +
            (prop.city ? '<span class="rank-tier-city">' + escapeHtml(prop.city) + (prop.county ? ', ' + escapeHtml(prop.county) + ' Co.' : '') + '</span>' : '') +
          '</span>' +
          '<span class="rank-tier-voters">' + renderVoterPips(e.allVotes || e.votes) + '</span>' +
          '<span class="rank-tier-score" style="color:' + getScoreColor(e.avg) + '">' + e.avg.toFixed(1) + '</span>' +
          renderHoverCard(prop, e.name) +
          '</a>';
        itemIdx++;
      });

      tiersHtml += '</div></div>';
    });
    tiersHtml += '</div>';

    container.innerHTML = '<div class="section rankings-section">' +
      '<div class="section-title">Family Rankings</div>' +
      filterHtml + legend + podiumHtml + tiersHtml +
      '</div>';

    // Attach filter click handlers
    container.querySelectorAll('.rank-filter-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var val = btn.getAttribute('data-filter');
        if (val === 'all') {
          rankFilterNames = null;
        } else if (val.indexOf('+') >= 0) {
          rankFilterNames = val.split('+');
        } else {
          rankFilterNames = [val];
        }
        renderRankings();
      });
    });
  }

  // --- Overview table augmentation ---
  function updateOverviewTable(allVotes) {
    var table = document.querySelector('#overview table.qt');
    if (!table) return;

    // Add header if not already present
    var headerRow = table.querySelector('thead tr');
    if (!headerRow.querySelector('.th-family')) {
      var th = document.createElement('th');
      th.className = 'th-family';
      th.textContent = 'Family';
      headerRow.appendChild(th);
    }

    // Add/update cells
    var rows = table.querySelectorAll('tbody tr');
    rows.forEach(function (row) {
      var link = row.querySelector('a[href^="#p"]');
      if (!link) return;
      var pid = link.getAttribute('href').slice(1);
      var data = allVotes[pid];

      var existingCell = row.querySelector('.td-family');
      if (!existingCell) {
        existingCell = document.createElement('td');
        existingCell.className = 'td-family';
        row.appendChild(existingCell);
      }

      if (data && data.count > 0) {
        existingCell.innerHTML = '<strong style="color:var(--accent2)">' + data.avg.toFixed(1) + '</strong> \u2605';
      } else {
        existingCell.textContent = '\u2014';
      }
    });
  }

  // --- Notes system ---
  function injectNoteRows() {
    document.querySelectorAll('.card[id^="p"]').forEach(function (card) {
      var pid = card.id;
      if (card.querySelector('.notes-row')) return;

      var voteRow = card.querySelector('.vote-row');
      if (!voteRow) return;

      var notesRow = document.createElement('div');
      notesRow.className = 'notes-row';
      notesRow.setAttribute('data-notes-property', pid);
      notesRow.innerHTML =
        '<div class="notes-row-title">Family Notes</div>' +
        '<div class="notes-list" data-notes-list></div>' +
        '<div class="notes-form-wrap" data-notes-form-wrap></div>';

      voteRow.parentNode.insertBefore(notesRow, voteRow.nextSibling);
    });
  }

  function updateNoteRows(allNotes) {
    document.querySelectorAll('.notes-row').forEach(function (row) {
      var pid = row.getAttribute('data-notes-property');
      var notes = allNotes[pid] || [];

      // Render notes list
      var listEl = row.querySelector('[data-notes-list]');
      if (notes.length > 0) {
        listEl.innerHTML = notes.map(function (n) {
          var deleteBtn = '';
          if (currentUser && n.userId === currentUser.id) {
            deleteBtn = ' <button class="notes-delete" data-note-id="' + n.id + '">[delete]</button>';
          }
          var date = n.createdAt ? new Date(n.createdAt + 'Z').toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }) : '';
          return '<div class="notes-item">' +
            '<div class="notes-meta"><strong>' + escapeHtml(n.userName) + '</strong> \u00b7 ' + date + deleteBtn + '</div>' +
            '<div>' + escapeHtml(n.content) + '</div>' +
            '</div>';
        }).join('');

        // Attach delete handlers
        listEl.querySelectorAll('.notes-delete').forEach(function (btn) {
          btn.addEventListener('click', function () {
            var noteId = parseInt(btn.getAttribute('data-note-id'));
            if (!currentUser) return;
            API.deleteNote(noteId, currentUser.id).then(function () {
              refreshAllNotes();
            });
          });
        });
      } else {
        listEl.innerHTML = '<div style="font-size:0.78rem;color:var(--muted);padding:0.2rem 0;">No notes yet. Be the first to add one!</div>';
      }

      // Render form — skip if user is actively typing
      var formWrap = row.querySelector('[data-notes-form-wrap]');
      var existingTextarea = formWrap.querySelector('.notes-textarea');
      if (!existingTextarea || (!existingTextarea.value && document.activeElement !== existingTextarea)) {
        formWrap.innerHTML =
          '<form class="notes-form">' +
          '  <textarea class="notes-textarea" placeholder="Add a note..." maxlength="500" rows="1"></textarea>' +
          '  <button type="submit" class="notes-submit">Post</button>' +
          '</form>';

        formWrap.querySelector('.notes-form').addEventListener('submit', function (e) {
          e.preventDefault();
          if (!currentUser) { showUserModal(); return; }
          var textarea = formWrap.querySelector('.notes-textarea');
          var content = textarea.value.trim();
          if (!content) return;
          textarea.value = '';
          API.createNote(currentUser.id, pid, content).then(function () {
            refreshAllNotes();
          });
        });
      }
    });
  }

  function refreshAllNotes() {
    API.getNotes().then(function (allNotes) {
      updateNoteRows(allNotes);
    });
  }

  // --- Monthly breakdown toggle ---
  function initMonthlyToggles() {
    document.querySelectorAll('.monthly-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var breakdown = btn.parentElement.querySelector('.monthly-breakdown');
        if (!breakdown) return;
        var hidden = breakdown.hasAttribute('hidden');
        if (hidden) {
          breakdown.removeAttribute('hidden');
          btn.textContent = '\u25B4 hide';
        } else {
          breakdown.setAttribute('hidden', '');
          btn.textContent = '\u25BE details';
        }
      });
    });
  }

  // --- Environmental hazards key ---
  function injectEnvKeys() {
    var keyHtml =
      '<div class="env-key">' +
      '<span class="env-key-label">Key:</span>' +
      '<span class="env-key-item"><span class="env-key-swatch" style="background:#dcfce7"></span> Low \u2014 minimal risk</span>' +
      '<span class="env-key-item"><span class="env-key-swatch" style="background:#fef3c7"></span> Moderate \u2014 may affect insurance</span>' +
      '<span class="env-key-item"><span class="env-key-swatch" style="background:#fee2e2"></span> High \u2014 higher insurance, mitigation needed</span>' +
      '<span class="env-key-item"><span class="env-key-swatch" style="background:#b91c1c"></span> Severe \u2014 specialty insurance required</span>' +
      '<span class="env-key-item"><span class="env-key-swatch" style="background:#ede9fe"></span> Special \u2014 unique hazard (Superfund, industrial)</span>' +
      '</div>';
    document.querySelectorAll('.env-hazards').forEach(function (section) {
      if (section.querySelector('.env-key')) return;
      var title = section.querySelector('.env-hazards-title');
      if (!title) return;
      title.insertAdjacentHTML('afterend', keyHtml);
    });
  }

  // --- Graveyard system ---
  function injectGraveyardButtons() {
    document.querySelectorAll('.card[id^="p"]').forEach(function (card) {
      if (card.querySelector('.graveyard-btn')) return;
      var pid = card.id;
      var badges = card.querySelector('.card-badges');
      if (!badges) return;
      var btn = document.createElement('button');
      btn.className = 'graveyard-btn';
      btn.innerHTML = '<i class="bi bi-x-circle"></i>';
      btn.title = 'Move to Graveyard';
      btn.addEventListener('click', function () { showGraveyardModal(pid); });
      badges.appendChild(btn);
    });
  }

  function showGraveyardModal(pid) {
    if (!currentUser) { showUserModal(); return; }
    var name = getDisplayName(pid);
    var overlay = document.createElement('div');
    overlay.className = 'graveyard-modal';
    var card = document.createElement('div');
    card.className = 'graveyard-modal-card';
    card.innerHTML =
      '<h3>Move "' + escapeHtml(name) + '" to Graveyard</h3>' +
      '<textarea placeholder="Reason for removal (e.g., went off-market, too expensive, bad inspection...)" maxlength="300"></textarea>' +
      '<div class="graveyard-modal-actions">' +
      '  <button class="graveyard-modal-cancel">Cancel</button>' +
      '  <button class="graveyard-modal-confirm">Remove</button>' +
      '</div>';

    overlay.appendChild(card);
    document.body.appendChild(overlay);

    card.querySelector('.graveyard-modal-cancel').addEventListener('click', function () {
      overlay.remove();
    });
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) overlay.remove();
    });
    card.querySelector('.graveyard-modal-confirm').addEventListener('click', function () {
      var reason = card.querySelector('textarea').value.trim();
      if (!reason) { card.querySelector('textarea').focus(); return; }
      API.moveToGraveyard(currentUser.id, pid, reason).then(function () {
        overlay.remove();
        refreshGraveyard().then(function () { refreshAllVotes(); });
      });
    });

    setTimeout(function () { card.querySelector('textarea').focus(); }, 100);
  }

  function refreshGraveyard() {
    return API.getGraveyard().then(function (entries) {
      // Hide/show cards based on graveyard state
      GRAVEYARD_IDS = {};
      entries.forEach(function (e) { GRAVEYARD_IDS[e.property_id] = e; });

      document.querySelectorAll('.card[id^="p"]').forEach(function (card) {
        if (GRAVEYARD_IDS[card.id]) {
          card.classList.add('graveyarded');
        } else {
          card.classList.remove('graveyarded');
        }
      });

      // Update header property count (non-graveyard)
      var totalProps = typeof PROPERTIES !== 'undefined' ? PROPERTIES.length : 0;
      var activeCount = totalProps - Object.keys(GRAVEYARD_IDS).length;
      var subtitle = document.getElementById('header-subtitle');
      if (subtitle) subtitle.textContent = activeCount + ' Properties \u00b7 North Carolina';

      // Sync map markers with graveyard state
      if (propertyMap) {
        Object.keys(PROPERTY_MAP).forEach(function (pid) {
          if (GRAVEYARD_IDS[pid]) {
            removeMapMarker(pid);
          } else {
            addMapMarker(pid);
          }
        });
      }

      // Hide/show nav links and overview rows
      document.querySelectorAll('.nav a[href^="#p"]').forEach(function (a) {
        var href = a.getAttribute('href');
        if (!/^#p\d+$/.test(href)) return;
        var pid = href.slice(1);
        a.style.display = GRAVEYARD_IDS[pid] ? 'none' : '';
      });

      // Update nav group counts and hide empty groups
      document.querySelectorAll('.nav-group').forEach(function (group) {
        var links = group.querySelectorAll('.nav-group-dropdown a[href^="#p"]');
        var visible = 0;
        links.forEach(function (a) {
          if (a.style.display !== 'none') visible++;
        });
        var countEl = group.querySelector('.nav-group-count');
        if (countEl) countEl.textContent = visible;
        group.style.display = visible === 0 ? 'none' : '';
      });

      // Hide region sections where all cards are graveyarded
      document.querySelectorAll('.region-section').forEach(function (section) {
        var hasVisible = section.querySelector('.card[id^="p"]:not(.graveyarded)');
        section.classList.toggle('region-filtered-out', !hasVisible);
      });

      document.querySelectorAll('#overview table.qt tbody tr').forEach(function (row) {
        var link = row.querySelector('a[href^="#p"]');
        if (!link) return;
        var pid = link.getAttribute('href').slice(1);
        row.style.display = GRAVEYARD_IDS[pid] ? 'none' : '';
      });

      // Render dynamic graveyard entries
      var container = document.getElementById('graveyard-dynamic');
      if (!container) return;
      if (entries.length === 0) {
        container.innerHTML = '';
        return;
      }
      container.innerHTML = entries.map(function (e) {
        var name = getDisplayName(e.property_id);
        var date = e.moved_at ? new Date(e.moved_at + 'Z').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '';
        return '<div class="graveyard-card">' +
          '<div class="graveyard-header">' +
          '  <span class="badge b-removed">REMOVED</span>' +
          '  <strong>' + escapeHtml(e.property_id.toUpperCase()) + ' \u2014 ' + escapeHtml(name) + '</strong>' +
          '  <span>Moved by ' + escapeHtml(e.user_name) + ' \u00b7 ' + date + '</span>' +
          '  <button class="graveyard-restore" data-restore-pid="' + escapeHtml(e.property_id) + '">Restore</button>' +
          '</div>' +
          '<div class="graveyard-reason">Reason: ' + escapeHtml(e.reason) + '</div>' +
          '</div>';
      }).join('');

      container.querySelectorAll('.graveyard-restore').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var pid = btn.getAttribute('data-restore-pid');
          API.restoreFromGraveyard(pid).then(function () {
            refreshGraveyard().then(function () { refreshAllVotes(); });
          });
        });
      });

      // Rebuild map region buttons to reflect graveyard changes
      addMapRegionButtons();

      // Re-apply active filter if one is set (polling resets visibility)
      if (window._reapplyActiveFilter) window._reapplyActiveFilter();
    });
  }

  // --- Property edits system ---
  var PROPERTY_EDITS = {};

  function injectEditButtons() {
    document.querySelectorAll('.card[id^="p"]').forEach(function (card) {
      if (card.querySelector('.edit-btn')) return;
      var badges = card.querySelector('.card-badges');
      if (!badges) return;
      var btn = document.createElement('button');
      btn.className = 'edit-btn';
      btn.title = 'Edit listing';
      btn.innerHTML = '<i class="bi bi-pencil-square"></i>';
      btn.addEventListener('click', function () { showEditModal(card.id); });
      badges.insertBefore(btn, badges.firstChild);
    });
  }

  // Score category config: label, max points, index in sob-mini-bar list
  var SCORE_CATS = [
    { key: 'price', label: 'Price', max: 10 },
    { key: 'acreage', label: 'Acreage', max: 10 },
    { key: 'schools', label: 'Schools', max: 10 },
    { key: 'outbldgs', label: 'Outbldgs', max: 10 },
    { key: 'town', label: 'Town', max: 10 },
    { key: 'hospital', label: 'Hospital', max: 10 },
    { key: 'hazards', label: 'Hazards', max: 10 },
    { key: 'beach', label: 'Beach', max: 10 },
    { key: 'forested', label: 'Forested', max: 10 },
    { key: 'living', label: 'Living', max: 10 }
  ];

  function readCardValues(pid) {
    var p = PROPERTY_BASE[pid];
    if (!p) return {};
    var vals = {};

    // Simple fields from data (formatted as strings to match edit modal expectations)
    vals.price = PropertyRenderer.fmtPrice(p.price);
    vals.listingLink = p.listingLink || '';
    vals.imageUrl = p.image || '';
    vals.beds = p.beds + ' / ' + p.bath;
    vals.sqft = PropertyRenderer.fmt(p.sqft);
    vals.acres = String(p.acres);
    vals.acresSub = p.acresSub || '';
    vals.yearBuilt = String(p.yearBuilt || '');
    vals.drive = p.drive || '';
    vals.toTown = p.toTown || '';
    vals.tax = p.taxAnnual ? PropertyRenderer.fmtPrice(p.taxAnnual) + '/yr' : '';
    vals.status = p.status || 'Active';

    // Scores
    vals.scores = {};
    SCORE_CATS.forEach(function (cat) {
      vals.scores[cat.key] = (p.scores && p.scores[cat.key]) || 0;
    });

    // Content
    vals.highlight = p.highlight || '';
    vals.offerRange = p.offerRange || '';
    vals.offerStrategy = p.offerStrategy || '';
    vals.offerRationale = (p.offerRationale || []).slice();

    // Lists (as string arrays for edit modal)
    vals.highlights = (p.highlights || []).map(function (h) { return h.text; });
    vals.pros = (p.familyFit || []).slice();
    vals.cons = (p.verifyItems || []).map(function (v) {
      return v.label ? v.label + ' — ' + v.text : v.text;
    });
    vals.mustDo = (p.mustDo || []).map(function (m) { return m.text; });

    return vals;
  }

  function showEditModal(pid) {
    if (!currentUser) { showUserModal(); return; }

    var domVals = readCardValues(pid);
    // Override with saved edits if they exist
    var saved = PROPERTY_EDITS[pid];
    var vals = Object.assign({}, domVals);
    if (saved && saved.edits) {
      Object.keys(saved.edits).forEach(function (k) {
        if (k === 'scores') {
          vals.scores = Object.assign({}, vals.scores || {}, saved.edits.scores);
        } else {
          vals[k] = saved.edits[k];
        }
      });
    }

    var name = getDisplayName(pid);

    var overlay = document.createElement('div');
    overlay.className = 'edit-overlay';

    var modal = document.createElement('div');
    modal.className = 'edit-modal';

    // Header
    var header = document.createElement('div');
    header.className = 'edit-modal-header';
    header.innerHTML = '<span class="edit-modal-title">Edit ' + escapeHtml(name) + '</span>' +
      '<button class="edit-modal-close">&times;</button>';

    // Body
    var body = document.createElement('div');
    body.className = 'edit-modal-body';

    // Build sections
    var sectionsHtml = '';

    // Basic Info
    sectionsHtml += buildSection('Basic Info', [
      field('price', 'Asking Price', 'text', vals.price || ''),
      field('status', 'Status', 'select', vals.status || 'Active', ['Active', 'Pending', 'Sold', 'Coming Soon']),
      field('listingLink', 'Listing URL', 'url', vals.listingLink || ''),
      field('imageUrl', 'Image URL', 'url', vals.imageUrl || '')
    ]);

    // Property Details
    sectionsHtml += buildSection('Property Details', [
      field('beds', 'Beds/Bath', 'text', vals.beds || ''),
      field('sqft', 'Sq Ft', 'text', vals.sqft || ''),
      field('acres', 'Acres', 'text', vals.acres || ''),
      field('acresSub', 'Acres Subtitle', 'text', vals.acresSub || ''),
      field('yearBuilt', 'Year Built', 'text', vals.yearBuilt || ''),
      field('drive', 'Drive Time', 'text', vals.drive || ''),
      field('toTown', 'To Town', 'text', vals.toTown || ''),
      field('tax', 'Annual Tax', 'text', vals.tax || '')
    ]);

    // Scores
    var scoresContent = '<div class="edit-scores-grid">';
    SCORE_CATS.forEach(function (cat) {
      var v = (vals.scores && vals.scores[cat.key]) || 0;
      scoresContent += '<div class="edit-field">' +
        '<label>' + escapeHtml(cat.label) + ' (0-' + cat.max + ')</label>' +
        '<input type="number" data-score="' + cat.key + '" min="0" max="' + cat.max + '" value="' + v + '">' +
        '</div>';
    });
    scoresContent += '</div><div class="edit-score-total" data-score-total>Total: 0 / 100</div>';
    sectionsHtml += '<div class="edit-section"><div class="edit-section-title">Scores <span class="chevron">&#9660;</span></div>' +
      '<div class="edit-section-content">' + scoresContent + '</div></div>';

    // Content
    sectionsHtml += buildSection('Content', [
      field('highlight', 'Highlight Banner', 'textarea', vals.highlight || ''),
      field('offerRange', 'Offer Range', 'text', vals.offerRange || ''),
      field('offerStrategy', 'Offer Strategy', 'textarea', vals.offerStrategy || '')
    ]);

    // Lists
    sectionsHtml += buildSection('Lists', [
      field('highlights', 'Property Highlights (one per line)', 'textarea', Array.isArray(vals.highlights) ? vals.highlights.join('\n') : ''),
      field('pros', 'Family Fit / Pros (one per line)', 'textarea', Array.isArray(vals.pros) ? vals.pros.join('\n') : ''),
      field('cons', 'Verify / Cons (one per line)', 'textarea', Array.isArray(vals.cons) ? vals.cons.join('\n') : '')
    ]);

    // Offer Rationale + Must-Do
    sectionsHtml += buildSection('Other', [
      field('offerRationale', 'Offer Rationale (one per line)', 'textarea', Array.isArray(vals.offerRationale) ? vals.offerRationale.join('\n') : ''),
      field('mustDo', 'Must-Do Items (one per line)', 'textarea', Array.isArray(vals.mustDo) ? vals.mustDo.join('\n') : '')
    ]);

    body.innerHTML = sectionsHtml;

    // Footer
    var footer = document.createElement('div');
    footer.className = 'edit-modal-footer';
    var lastEdited = '';
    if (saved && saved.userName) {
      var date = saved.updatedAt ? new Date(saved.updatedAt + 'Z').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' }) : '';
      lastEdited = '<div class="edit-last-edited">Last edited by ' + escapeHtml(saved.userName) + ' &middot; ' + date + '</div>';
    } else {
      lastEdited = '<div class="edit-last-edited"></div>';
    }
    footer.innerHTML = lastEdited +
      '<div class="edit-modal-actions">' +
      '<button class="edit-cancel-btn">Cancel</button>' +
      '<button class="edit-save-btn">Save Changes</button>' +
      '</div>';

    modal.appendChild(header);
    modal.appendChild(body);
    modal.appendChild(footer);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Section toggle handlers
    body.querySelectorAll('.edit-section-title').forEach(function (title) {
      title.addEventListener('click', function () {
        title.parentElement.classList.toggle('collapsed');
      });
    });

    // Score total calculation
    function updateScoreTotal() {
      var total = 0;
      body.querySelectorAll('[data-score]').forEach(function (inp) {
        total += parseInt(inp.value) || 0;
      });
      var totalEl = body.querySelector('[data-score-total]');
      if (totalEl) totalEl.textContent = 'Total: ' + total + ' / 100';
    }
    body.querySelectorAll('[data-score]').forEach(function (inp) {
      inp.addEventListener('input', updateScoreTotal);
    });
    updateScoreTotal();

    // Close handlers
    function closeModal() { overlay.remove(); }
    header.querySelector('.edit-modal-close').addEventListener('click', closeModal);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });
    footer.querySelector('.edit-cancel-btn').addEventListener('click', closeModal);

    // Save handler
    footer.querySelector('.edit-save-btn').addEventListener('click', function () {
      var edits = collectEdits(body, domVals);
      // Only save if there are actual changes
      if (Object.keys(edits).length === 0) {
        closeModal();
        return;
      }
      API.setPropertyEdits(currentUser.id, pid, edits).then(function () {
        closeModal();
        refreshPropertyEdits();
      });
    });
  }

  function field(key, label, type, value, options) {
    return { key: key, label: label, type: type, value: value, options: options };
  }

  function buildSection(title, fields) {
    var html = '<div class="edit-section"><div class="edit-section-title">' + escapeHtml(title) + ' <span class="chevron">&#9660;</span></div><div class="edit-section-content">';
    fields.forEach(function (f) {
      html += '<div class="edit-field"><label>' + escapeHtml(f.label) + '</label>';
      if (f.type === 'select') {
        html += '<select data-edit-key="' + f.key + '">';
        (f.options || []).forEach(function (opt) {
          html += '<option value="' + escapeHtml(opt) + '"' + (f.value === opt ? ' selected' : '') + '>' + escapeHtml(opt) + '</option>';
        });
        html += '</select>';
      } else if (f.type === 'textarea') {
        html += '<textarea data-edit-key="' + f.key + '" rows="3">' + escapeHtml(f.value) + '</textarea>';
      } else if (f.type === 'url') {
        html += '<input type="url" data-edit-key="' + f.key + '" value="' + escapeHtml(f.value) + '">';
      } else {
        html += '<input type="text" data-edit-key="' + f.key + '" value="' + escapeHtml(f.value) + '">';
      }
      html += '</div>';
    });
    html += '</div></div>';
    return html;
  }

  // List field keys — these get split by newline
  var LIST_KEYS = ['highlights', 'pros', 'cons', 'offerRationale', 'mustDo'];

  function collectEdits(body, domVals) {
    var edits = {};

    // Regular fields
    body.querySelectorAll('[data-edit-key]').forEach(function (inp) {
      var key = inp.getAttribute('data-edit-key');
      var val = inp.value.trim();

      if (LIST_KEYS.indexOf(key) !== -1) {
        // List field: split by newline
        var items = val.split('\n').map(function (s) { return s.trim(); }).filter(function (s) { return s.length > 0; });
        var origItems = domVals[key] || [];
        // Only save if different from DOM original
        if (JSON.stringify(items) !== JSON.stringify(origItems)) {
          edits[key] = items;
        }
      } else {
        // Simple field: only save if different from DOM original
        var orig = (domVals[key] !== undefined && domVals[key] !== null) ? String(domVals[key]) : '';
        if (val !== orig) {
          edits[key] = val;
        }
      }
    });

    // Scores
    var scores = {};
    var hasScoreChange = false;
    body.querySelectorAll('[data-score]').forEach(function (inp) {
      var key = inp.getAttribute('data-score');
      var val = parseInt(inp.value) || 0;
      scores[key] = val;
      var orig = (domVals.scores && domVals.scores[key] !== undefined) ? domVals.scores[key] : 0;
      if (val !== orig) hasScoreChange = true;
    });
    if (hasScoreChange) edits.scores = scores;

    return edits;
  }

  function applyPropertyEdits(allEdits) {
    for (var pid in allEdits) {
      var base = PROPERTY_BASE[pid];
      if (!base) continue;
      var edits = allEdits[pid].edits;

      // Merge edits into PROPERTY_MAP (start from base copy)
      var merged = JSON.parse(JSON.stringify(base));

      // Apply scalar edits (convert formatted strings back to data types)
      if (edits.price) {
        var priceNum = parseInt(String(edits.price).replace(/[^0-9]/g, ''), 10);
        if (priceNum > 0) merged.price = priceNum;
      }
      if (edits.status) {
        merged.status = edits.status;
        merged.statusClass = edits.status === 'Active' ? 'status-active' :
                             edits.status === 'Pending' ? 'status-pending' :
                             edits.status === 'Sold' ? 'status-sold' : '';
      }
      if (edits.listingLink) merged.listingLink = edits.listingLink;
      if (edits.imageUrl) merged.image = edits.imageUrl;
      if (edits.beds) {
        var bedParts = edits.beds.split('/').map(function (s) { return parseInt(s.trim()); });
        if (bedParts[0]) merged.beds = bedParts[0];
        if (bedParts[1]) merged.bath = bedParts[1];
      }
      if (edits.sqft) merged.sqft = parseInt(String(edits.sqft).replace(/[^0-9]/g, ''), 10) || merged.sqft;
      if (edits.acres) merged.acres = parseFloat(edits.acres) || merged.acres;
      if (edits.acresSub !== undefined) merged.acresSub = edits.acresSub;
      if (edits.yearBuilt) merged.yearBuilt = parseInt(edits.yearBuilt) || merged.yearBuilt;
      if (edits.drive) merged.drive = edits.drive;
      if (edits.toTown) merged.toTown = edits.toTown;
      if (edits.tax) {
        var taxNum = parseInt(String(edits.tax).replace(/[^0-9]/g, ''), 10);
        if (taxNum > 0) merged.taxAnnual = taxNum;
      }
      if (edits.highlight) merged.highlight = edits.highlight;
      if (edits.offerRange) merged.offerRange = edits.offerRange;
      if (edits.offerStrategy) merged.offerStrategy = edits.offerStrategy;

      // Lists
      if (edits.offerRationale && Array.isArray(edits.offerRationale)) {
        merged.offerRationale = edits.offerRationale;
      }
      if (edits.highlights && Array.isArray(edits.highlights)) {
        merged.highlights = edits.highlights.map(function (text) {
          return { icon: '\u2728', text: text };
        });
      }
      if (edits.pros && Array.isArray(edits.pros)) {
        merged.familyFit = edits.pros;
      }
      if (edits.cons && Array.isArray(edits.cons)) {
        merged.verifyItems = edits.cons.map(function (text) {
          return { label: '', text: text };
        });
      }
      if (edits.mustDo && Array.isArray(edits.mustDo)) {
        merged.mustDo = edits.mustDo.map(function (text) {
          return { urgent: false, text: text };
        });
      }

      // Scores
      if (edits.scores) {
        merged.scores = Object.assign({}, merged.scores, edits.scores);
      }

      // Store merged data
      PROPERTY_MAP[pid] = merged;

      // Re-render card + table row
      PropertyRenderer.rerenderProperty(merged);

      // Re-inject dynamic UI for this card
      reinjectCardUI(pid);
    }
  }

  function reinjectCardUI(pid) {
    var card = document.getElementById(pid);
    if (!card) return;

    // Re-inject walkthrough button if video exists
    var p = PROPERTY_MAP[pid] || (typeof PROPERTIES !== 'undefined' && PROPERTIES.find(function(x){return x.id===pid;}));
    if (p && WALKTHROUGH_MAP[p.address]) {
      injectWalkthroughButton(card, p.address, WALKTHROUGH_MAP[p.address]);
    }

    // Re-inject vote row
    if (!card.querySelector('.vote-row')) {
      var voteRow = document.createElement('div');
      voteRow.className = 'vote-row';
      voteRow.setAttribute('data-property', pid);
      voteRow.innerHTML =
        '<div class="vote-row-header">' +
        '  <span class="vote-row-title">Family Rating</span>' +
        '  <span class="vote-row-avg" data-avg></span>' +
        '</div>' +
        '<div class="vote-row-stars" data-stars></div>' +
        '<div class="vote-row-details" data-details></div>';
      card.appendChild(voteRow);
    }

    // Re-inject notes row
    var voteRow = card.querySelector('.vote-row');
    if (voteRow && !card.querySelector('.notes-row')) {
      var notesRow = document.createElement('div');
      notesRow.className = 'notes-row';
      notesRow.setAttribute('data-notes-property', pid);
      notesRow.innerHTML =
        '<div class="notes-row-title">Family Notes</div>' +
        '<div class="notes-list" data-notes-list></div>' +
        '<div class="notes-form-wrap" data-notes-form-wrap></div>';
      voteRow.parentNode.insertBefore(notesRow, voteRow.nextSibling);
    }

    // Re-inject buttons
    var badges = card.querySelector('.card-badges');
    if (badges) {
      if (!card.querySelector('.edit-btn')) {
        var editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.title = 'Edit listing';
        editBtn.innerHTML = '<i class="bi bi-pencil-square"></i>';
        editBtn.addEventListener('click', function () { showEditModal(pid); });
        badges.insertBefore(editBtn, badges.firstChild);
      }
      if (!card.querySelector('.graveyard-btn')) {
        var gyBtn = document.createElement('button');
        gyBtn.className = 'graveyard-btn';
        gyBtn.innerHTML = '<i class="bi bi-x-circle"></i>';
        gyBtn.title = 'Move to Graveyard';
        gyBtn.addEventListener('click', function () { showGraveyardModal(pid); });
        badges.appendChild(gyBtn);
      }
    }

    // Re-inject nickname
    if (!card.querySelector('.card-nickname')) {
      var header = card.querySelector('.card-header .card-title-group');
      if (header) {
        var nickRow = document.createElement('div');
        nickRow.className = 'card-nickname';
        nickRow.setAttribute('data-nickname-pid', pid);
        var cardSub = header.querySelector('.card-sub');
        if (cardSub) {
          cardSub.parentNode.insertBefore(nickRow, cardSub.nextSibling);
        } else {
          header.appendChild(nickRow);
        }
        renderNicknameRow(pid);
      }
    }

    // Re-inject env key
    var envSection = card.querySelector('.env-hazards');
    if (envSection && !envSection.querySelector('.env-key')) {
      var title = envSection.querySelector('.env-hazards-title');
      if (title) {
        var keyHtml =
          '<div class="env-key">' +
          '<span class="env-key-label">Key:</span>' +
          '<span class="env-key-item"><span class="env-key-swatch" style="background:#dcfce7"></span> Low \u2014 minimal risk</span>' +
          '<span class="env-key-item"><span class="env-key-swatch" style="background:#fef3c7"></span> Moderate \u2014 may affect insurance</span>' +
          '<span class="env-key-item"><span class="env-key-swatch" style="background:#fee2e2"></span> High \u2014 higher insurance, mitigation needed</span>' +
          '<span class="env-key-item"><span class="env-key-swatch" style="background:#b91c1c"></span> Severe \u2014 specialty insurance required</span>' +
          '<span class="env-key-item"><span class="env-key-swatch" style="background:#ede9fe"></span> Special \u2014 unique hazard (Superfund, industrial)</span>' +
          '</div>';
        title.insertAdjacentHTML('afterend', keyHtml);
      }
    }

    // Re-inject score tips
    if (typeof SCORE_TIPS !== 'undefined') {
      var tips = SCORE_TIPS[pid];
      if (tips) {
        card.querySelectorAll('.sob-mini-bar').forEach(function (bar, i) {
          if (SCORE_CATS[i] && tips[SCORE_CATS[i].key]) {
            bar.setAttribute('data-tip', tips[SCORE_CATS[i].key]);
          }
        });
      }
    }

    // Re-init monthly toggle
    card.querySelectorAll('.monthly-toggle').forEach(function (btn) {
      if (btn._hasToggle) return;
      btn._hasToggle = true;
      btn.addEventListener('click', function () {
        var breakdown = btn.parentElement.querySelector('.monthly-breakdown');
        if (!breakdown) return;
        var hidden = breakdown.hasAttribute('hidden');
        if (hidden) {
          breakdown.removeAttribute('hidden');
          btn.textContent = '\u25B4 hide';
        } else {
          breakdown.setAttribute('hidden', '');
          btn.textContent = '\u25BE details';
        }
      });
    });

    // Re-init collapsible details
    initCollapsibleDetailsForCard(card);

    // Apply graveyard state
    if (GRAVEYARD_IDS[pid]) {
      card.classList.add('graveyarded');
    }
  }

  function refreshPropertyEdits() {
    API.getPropertyEdits().then(function (edits) {
      PROPERTY_EDITS = edits;
      applyPropertyEdits(edits);
      // After re-rendering, refresh votes and notes to re-populate the new DOM
      refreshAllVotes();
      refreshAllNotes();
    });
  }

  // --- Property nicknames ---
  function injectNicknameUI() {
    document.querySelectorAll('.card[id^="p"]').forEach(function (card) {
      if (card.querySelector('.card-nickname')) return;
      var pid = card.id;
      var header = card.querySelector('.card-header .card-title-group');
      if (!header) return;

      var row = document.createElement('div');
      row.className = 'card-nickname';
      row.setAttribute('data-nickname-pid', pid);

      // Insert after card-sub (address line 2)
      var cardSub = header.querySelector('.card-sub');
      if (cardSub) {
        cardSub.parentNode.insertBefore(row, cardSub.nextSibling);
      } else {
        header.appendChild(row);
      }

      renderNicknameRow(pid);
    });
  }

  function renderNicknameRow(pid) {
    var row = document.querySelector('[data-nickname-pid="' + pid + '"]');
    if (!row) return;
    var custom = CUSTOM_NAMES[pid];
    row.innerHTML =
      '<span class="nickname-label">aka</span> ' +
      '<span class="nickname-display" data-nickname-text></span>' +
      '<button class="nickname-edit-btn" title="Edit nickname"><i class="bi bi-pencil-square"></i></button>';

    var textEl = row.querySelector('[data-nickname-text]');
    if (custom && custom.name) {
      textEl.textContent = '"' + custom.name + '"';
      row.classList.add('has-nickname');
    } else {
      textEl.textContent = 'add nickname';
      textEl.classList.add('nickname-placeholder');
      row.classList.remove('has-nickname');
    }

    row.querySelector('.nickname-edit-btn').addEventListener('click', function () {
      if (!currentUser) { showUserModal(); return; }
      var current = (CUSTOM_NAMES[pid] && CUSTOM_NAMES[pid].name) || '';
      var input = document.createElement('input');
      input.type = 'text';
      input.className = 'nickname-input';
      input.value = current;
      input.placeholder = 'e.g. "The Log Cabin"';
      input.maxLength = 50;

      row.innerHTML = '';
      row.appendChild(input);

      var saveBtn = document.createElement('button');
      saveBtn.className = 'nickname-save-btn';
      saveBtn.textContent = 'Save';
      row.appendChild(saveBtn);

      var cancelBtn = document.createElement('button');
      cancelBtn.className = 'nickname-cancel-btn';
      cancelBtn.textContent = 'Cancel';
      row.appendChild(cancelBtn);

      input.focus();
      input.select();

      function save() {
        var val = input.value.trim();
        API.setPropertyName(currentUser.id, pid, val).then(function () {
          refreshPropertyNames();
        });
      }
      function cancel() {
        renderNicknameRow(pid);
      }
      saveBtn.addEventListener('click', save);
      cancelBtn.addEventListener('click', cancel);
      input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') { e.preventDefault(); save(); }
        if (e.key === 'Escape') cancel();
      });
    });
  }

  function updateNavNames() {
    document.querySelectorAll('.nav a[href^="#p"]').forEach(function (a) {
      var href = a.getAttribute('href');
      // Only update property card links (#p followed by digits), not #property-map-section etc.
      if (!/^#p\d+$/.test(href)) return;
      var pid = href.slice(1);
      a.textContent = getDisplayName(pid);
    });
  }

  function refreshPropertyNames() {
    API.getPropertyNames().then(function (names) {
      CUSTOM_NAMES = names;
      // Update nickname displays on each card (skip if user is editing)
      Object.keys(DEFAULT_NAMES).forEach(function (pid) {
        var row = document.querySelector('[data-nickname-pid="' + pid + '"]');
        if (row && row.querySelector('.nickname-input')) return; // editing in progress
        renderNicknameRow(pid);
      });
      // Update nav links
      updateNavNames();
      // Re-render rankings and overview with new names
      refreshAllVotes();
      refreshGraveyard();
    });
  }

  // --- Master refresh ---
  function refreshAllVotes() {
    API.getVotes().then(function (allVotes) {
      updateVoteRows(allVotes);
      updateRankings(allVotes);
      updateOverviewTable(allVotes);
    });
  }

  // --- Utility ---
  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  // --- Collapsible card details (below "Why it Stands Out") ---
  function initCollapsibleDetailsForCard(card) {
    var highlight = card.querySelector('.highlight-band');
    if (!highlight) return;
    if (card.querySelector('.card-details-content')) return; // already done

    // Collect elements after highlight-band, excluding vote-row and notes-row
    var toWrap = [];
    var sibling = highlight.nextElementSibling;
    while (sibling) {
      var next = sibling.nextElementSibling;
      if (!sibling.classList.contains('vote-row') && !sibling.classList.contains('notes-row')) {
        toWrap.push(sibling);
      }
      sibling = next;
    }
    if (toWrap.length === 0) return;

    // Create toggle heading as its own section
    var toggleBar = document.createElement('div');
    toggleBar.className = 'card-details-bar';
    toggleBar.innerHTML = '<span class="card-details-bar-label">Property Details</span><span class="card-details-bar-arrow">&#9662;</span>';

    // Create wrapper
    var wrapper = document.createElement('div');
    wrapper.className = 'card-details-content';
    highlight.parentNode.insertBefore(toggleBar, toWrap[0]);
    highlight.parentNode.insertBefore(wrapper, toggleBar.nextSibling);
    toWrap.forEach(function (el) { wrapper.appendChild(el); });

    toggleBar.addEventListener('click', function () {
      var expanded = wrapper.classList.toggle('expanded');
      toggleBar.classList.toggle('expanded', expanded);
      toggleBar.querySelector('.card-details-bar-arrow').innerHTML = expanded ? '&#9652;' : '&#9662;';
    });
  }

  function initCollapsibleDetails() {
    document.querySelectorAll('.card[id^="p"]').forEach(function (card) {
      initCollapsibleDetailsForCard(card);
    });
  }

  // --- Filter bar (tag-based filtering) ---
  function initFilterBar() {
    if (typeof PROPERTIES === 'undefined') return;
    var bar = document.getElementById('filter-bar');
    if (!bar) return;

    var filters = [
      {
        key: 'isNew', label: 'NEW', icon: 'bi bi-stars',
        test: function (p) { return p._isNew && !GRAVEYARD_IDS[p.id]; }
      },
      {
        key: 'livestock', label: 'LIVESTOCK\u{1F6A8}', icon: '',
        test: function (p) { return p.badges && p.badges.indexOf('b-livestock') >= 0 && !GRAVEYARD_IDS[p.id]; }
      },
      {
        key: '5acres', label: '5+ Acres', icon: '',
        test: function (p) { return p.acres >= 5 && !GRAVEYARD_IDS[p.id]; }
      },
      {
        key: 'mfg', label: 'Manufactured', icon: '',
        test: function (p) { return p.typeBadge === 'b-mfg' && !GRAVEYARD_IDS[p.id]; }
      },
      {
        key: 'sfr', label: 'Site-Built', icon: '',
        test: function (p) { return p.typeBadge === 'b-sfr' && !GRAVEYARD_IDS[p.id]; }
      }
    ];

    var activeKey = null;

    filters.forEach(function (f) {
      var matching = PROPERTIES.filter(f.test);
      if (matching.length === 0) return;

      var pill = document.createElement('button');
      pill.className = 'filter-pill';
      pill.setAttribute('data-filter', f.key);
      var inner = '';
      if (f.icon) inner += '<span class="' + f.icon + '"></span> ';
      inner += f.label;
      inner += ' <span class="filter-pill-count">' + matching.length + '</span>';
      pill.innerHTML = inner;

      pill.addEventListener('click', function () {
        if (activeKey === f.key) {
          activeKey = null;
          pill.classList.remove('active');
          showAll();
        } else {
          var prev = bar.querySelector('.filter-pill.active');
          if (prev) prev.classList.remove('active');
          activeKey = f.key;
          pill.classList.add('active');
          applyFilter(f);
        }
      });

      bar.appendChild(pill);
    });

    function applyFilter(f) {
      var matchIds = {};
      var matchPids = [];
      PROPERTIES.forEach(function (p) {
        if (f.test(p)) { matchIds[p.id] = true; matchPids.push(p.id); }
      });

      // Cards
      document.querySelectorAll('.card[id^="p"]').forEach(function (card) {
        card.style.display = matchIds[card.id] ? '' : 'none';
      });

      // Region sections — hide empty ones, expand ones with matches
      document.querySelectorAll('.region-section').forEach(function (section) {
        var hasVisible = section.querySelector('.card[id^="p"]:not([style*="display: none"])');
        if (hasVisible) {
          section.classList.remove('region-filtered-out');
          var rc = section.querySelector('.region-cards');
          var tog = section.querySelector('.region-toggle');
          if (rc) { rc.classList.add('expanded'); if (tog) tog.classList.add('expanded'); }
        } else {
          section.classList.add('region-filtered-out');
        }
      });

      // Overview table
      document.querySelectorAll('#overview table.qt tbody tr').forEach(function (row) {
        var link = row.querySelector('a[href^="#p"]');
        if (!link) return;
        var pid = link.getAttribute('href').slice(1);
        row.style.display = matchIds[pid] ? '' : 'none';
      });

      // Map
      filterMapRegion(matchPids);
    }

    function showAll() {
      document.querySelectorAll('.card[id^="p"]').forEach(function (card) {
        card.style.display = GRAVEYARD_IDS[card.id] ? 'none' : '';
      });
      document.querySelectorAll('.region-section').forEach(function (section) {
        section.classList.remove('region-filtered-out');
      });
      document.querySelectorAll('#overview table.qt tbody tr').forEach(function (row) {
        var link = row.querySelector('a[href^="#p"]');
        if (!link) return;
        var pid = link.getAttribute('href').slice(1);
        row.style.display = GRAVEYARD_IDS[pid] ? 'none' : '';
      });
      clearMapFilter();
    }

    // Expose so polling refresh can re-apply active filter
    window._reapplyActiveFilter = function () {
      if (activeKey) {
        var f = filters.find(function (x) { return x.key === activeKey; });
        if (f) applyFilter(f);
      }
    };
  }

  // --- Collapsible overview table ---
  function initCollapsibleOverview() {
    var ov = document.getElementById('overview');
    if (!ov || ov.querySelector('.overview-toggle-bar')) return;

    var title = ov.querySelector('.section-title');

    // Create toggle bar
    var bar = document.createElement('div');
    bar.className = 'overview-toggle-bar';
    bar.innerHTML = '<span class="overview-toggle-label">\ud83d\udcca Quick Comparison Overview</span><span class="overview-toggle-arrow">&#9662;</span>';

    // Wrap all content after title in a container
    var content = document.createElement('div');
    content.className = 'overview-content';

    // Move all children except title into content wrapper
    var children = Array.from(ov.children);
    children.forEach(function (child) {
      if (child !== title) {
        content.appendChild(child);
      }
    });

    // Replace title with toggle bar
    if (title) title.remove();
    ov.insertBefore(bar, ov.firstChild);
    ov.appendChild(content);

    bar.addEventListener('click', function () {
      var expanded = content.classList.toggle('expanded');
      bar.classList.toggle('expanded', expanded);
      bar.querySelector('.overview-toggle-arrow').innerHTML = expanded ? '&#9652;' : '&#9662;';
    });
  }

  // --- Collapsible graveyard section ---
  function initCollapsibleGraveyard() {
    var gy = document.getElementById('graveyard');
    if (!gy || gy.querySelector('.graveyard-toggle-bar')) return;

    var title = gy.querySelector('.section-title');
    var subtitle = gy.querySelector('.graveyard-subtitle');

    // Create toggle bar
    var bar = document.createElement('div');
    bar.className = 'graveyard-toggle-bar';
    bar.innerHTML = '<span class="graveyard-toggle-label">Property Graveyard</span><span class="graveyard-toggle-arrow">&#9662;</span>';

    // Wrap all content after title+subtitle in a container
    var content = document.createElement('div');
    content.className = 'graveyard-content';

    // Move all children except title into content wrapper
    var children = Array.from(gy.children);
    children.forEach(function (child) {
      if (child !== title && child !== subtitle) {
        content.appendChild(child);
      }
    });

    // Replace title/subtitle with toggle bar
    if (title) title.remove();
    if (subtitle) subtitle.remove();
    gy.insertBefore(bar, gy.firstChild);
    gy.appendChild(content);

    bar.addEventListener('click', function () {
      var expanded = content.classList.toggle('expanded');
      bar.classList.toggle('expanded', expanded);
      bar.querySelector('.graveyard-toggle-arrow').innerHTML = expanded ? '&#9652;' : '&#9662;';
    });
  }

  // --- Walkthrough video buttons + inline player ---
  var WALKTHROUGH_MAP = {}; // addr → videoUrl, populated on init
  var WALKTHROUGH_PROP_MAP = {}; // addr → property

  function injectWalkthroughButton(card, addr, videoUrl) {
    if (!card || card.querySelector('.walkthrough-btn')) return; // already has button

    // Button on the image
    var cardMap = card.querySelector('.card-map');
    if (!cardMap) return;
    cardMap.style.position = 'relative';
    cardMap.style.overflow = 'visible';
    var btn = document.createElement('button');
    btn.className = 'walkthrough-btn';
    btn.innerHTML = '<span class="bi bi-camera-video-fill"></span> Watch Walkthrough';

    // Player container (hidden until clicked)
    var playerWrap = document.createElement('div');
    playerWrap.className = 'walkthrough-player';
    playerWrap.style.display = 'none';
    playerWrap.innerHTML =
      '<div class="walkthrough-player-header">' +
        '<span><span class="bi bi-camera-video-fill"></span> Walkthrough Video — ' + addr + '</span>' +
        '<button class="walkthrough-close">&times;</button>' +
      '</div>' +
      '<video controls preload="metadata" playsinline>' +
        '<source src="' + videoUrl + '" type="video/mp4">' +
      '</video>';

    // Insert player after the highlight band
    var highlight = card.querySelector('.highlight-band');
    if (highlight) {
      highlight.parentNode.insertBefore(playerWrap, highlight.nextSibling);
    } else {
      card.appendChild(playerWrap);
    }

    // Toggle player on button click
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var showing = playerWrap.style.display !== 'none';
      playerWrap.style.display = showing ? 'none' : 'block';
      if (!showing) {
        playerWrap.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        var vid = playerWrap.querySelector('video');
        if (vid) vid.pause();
      }
    });

    // Close button
    playerWrap.querySelector('.walkthrough-close').addEventListener('click', function () {
      playerWrap.style.display = 'none';
      var vid = playerWrap.querySelector('video');
      if (vid) vid.pause();
    });

    cardMap.appendChild(btn);
  }

  function initWalkthroughButtons() {
    fetch('/api/walkthroughs').then(function (r) { return r.json(); }).then(function (map) {
      if (!map || !Object.keys(map).length) return;
      WALKTHROUGH_MAP = map;
      if (typeof PROPERTIES !== 'undefined') {
        PROPERTIES.forEach(function (p) { WALKTHROUGH_PROP_MAP[p.address] = p; });
      }
      Object.keys(map).forEach(function (addr) {
        var p = WALKTHROUGH_PROP_MAP[addr];
        if (!p) return;
        var card = document.getElementById(p.id);
        if (!card) return;
        injectWalkthroughButton(card, addr, map[addr]);
      });
    }).catch(function () { /* no walkthroughs available */ });
  }

  // --- Mobile nav toggle (collapse region buttons) ---
  function initMobileNavToggle() {
    var btn = document.getElementById('nav-mobile-toggle');
    var center = document.getElementById('nav-center');
    if (!btn || !center) return;

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = center.classList.toggle('open');
      btn.classList.toggle('active', open);
      // Recalc nav spacer when panel opens/closes
      setTimeout(function () {
        var nav = document.querySelector('.nav');
        var spacer = document.querySelector('.nav-spacer');
        if (nav && spacer) spacer.style.height = nav.offsetHeight + (open ? center.offsetHeight : 0) + 'px';
      }, 10);
    });

    // Close when clicking outside
    document.addEventListener('click', function (e) {
      if (!center.classList.contains('open')) return;
      if (center.contains(e.target) || btn.contains(e.target)) return;
      center.classList.remove('open');
      btn.classList.remove('active');
      var nav = document.querySelector('.nav');
      var spacer = document.querySelector('.nav-spacer');
      if (nav && spacer) spacer.style.height = nav.offsetHeight + 'px';
    });

    // Close when a region link is clicked
    center.addEventListener('click', function (e) {
      if (e.target.closest('.nav-group-dropdown a')) {
        center.classList.remove('open');
        btn.classList.remove('active');
        var nav = document.querySelector('.nav');
        var spacer = document.querySelector('.nav-spacer');
        if (nav && spacer) spacer.style.height = nav.offsetHeight + 'px';
      }
    });
  }

  // --- Overview table filter ---
  function initTableFilter() {
    var section = document.getElementById('overview');
    if (!section) return;
    var table = section.querySelector('table.qt');
    if (!table) return;
    if (section.querySelector('.table-filter-bar')) return;

    var bar = document.createElement('div');
    bar.className = 'table-filter-bar';
    bar.innerHTML =
      '<input type="text" class="table-filter-input" placeholder="Filter by address, city, county..." autocomplete="off">' +
      '<div class="table-filter-controls">' +
      '  <label class="table-filter-label">Price: ' +
      '    <select class="table-filter-select" data-filter="price">' +
      '      <option value="">Any</option>' +
      '      <option value="0-300000">Under $300K</option>' +
      '      <option value="300000-400000">$300K–$400K</option>' +
      '      <option value="400000-500000">$400K–$500K</option>' +
      '      <option value="500000-999999">$500K+</option>' +
      '    </select>' +
      '  </label>' +
      '  <label class="table-filter-label">Acres: ' +
      '    <select class="table-filter-select" data-filter="acres">' +
      '      <option value="">Any</option>' +
      '      <option value="0-5">Under 5</option>' +
      '      <option value="5-10">5–10</option>' +
      '      <option value="10-20">10–20</option>' +
      '      <option value="20-999">20+</option>' +
      '    </select>' +
      '  </label>' +
      '  <label class="table-filter-label">Beds: ' +
      '    <select class="table-filter-select" data-filter="beds">' +
      '      <option value="">Any</option>' +
      '      <option value="2">2+</option>' +
      '      <option value="3">3+</option>' +
      '      <option value="4">4+</option>' +
      '    </select>' +
      '  </label>' +
      '  <button class="table-filter-clear">Clear</button>' +
      '</div>';

    var tableWrap = section.querySelector('.table-wrap');
    tableWrap.parentNode.insertBefore(bar, tableWrap);

    var textInput = bar.querySelector('.table-filter-input');
    var priceSelect = bar.querySelector('[data-filter="price"]');
    var acresSelect = bar.querySelector('[data-filter="acres"]');
    var bedsSelect = bar.querySelector('[data-filter="beds"]');
    var clearBtn = bar.querySelector('.table-filter-clear');

    function parseNum(str) {
      return parseFloat(String(str).replace(/[^0-9.]/g, '')) || 0;
    }

    function applyFilters() {
      var text = textInput.value.toLowerCase().trim();
      var priceRange = priceSelect.value;
      var acresRange = acresSelect.value;
      var minBeds = bedsSelect.value ? parseInt(bedsSelect.value) : 0;

      var rows = table.querySelectorAll('tbody tr');
      rows.forEach(function (row) {
        // Skip already hidden by graveyard
        var link = row.querySelector('a[href^="#p"]');
        if (link) {
          var pid = link.getAttribute('href').slice(1);
          if (GRAVEYARD_IDS[pid]) { row.style.display = 'none'; return; }
        }

        var show = true;

        // Text filter (address column)
        if (text) {
          var rowText = row.textContent.toLowerCase();
          if (rowText.indexOf(text) === -1) show = false;
        }

        // Price filter
        if (show && priceRange) {
          var priceTd = row.querySelector('.td-price');
          var price = priceTd ? parseNum(priceTd.textContent) : 0;
          var parts = priceRange.split('-');
          if (price < parseInt(parts[0]) || price > parseInt(parts[1])) show = false;
        }

        // Acres filter
        if (show && acresRange) {
          var tds = row.querySelectorAll('td');
          var acresVal = tds[7] ? parseNum(tds[7].textContent) : 0;
          var aParts = acresRange.split('-');
          if (acresVal < parseInt(aParts[0]) || acresVal > parseInt(aParts[1])) show = false;
        }

        // Beds filter
        if (show && minBeds) {
          var bedsTd = row.querySelectorAll('td');
          var bedsVal = bedsTd[5] ? parseInt(bedsTd[5].textContent) : 0;
          if (bedsVal < minBeds) show = false;
        }

        row.style.display = show ? '' : 'none';
      });
    }

    textInput.addEventListener('input', applyFilters);
    priceSelect.addEventListener('change', applyFilters);
    acresSelect.addEventListener('change', applyFilters);
    bedsSelect.addEventListener('change', applyFilters);
    clearBtn.addEventListener('click', function () {
      textInput.value = '';
      priceSelect.value = '';
      acresSelect.value = '';
      bedsSelect.value = '';
      applyFilters();
    });

    // Make column headers sortable
    var headers = table.querySelectorAll('thead th');
    headers.forEach(function (th, colIdx) {
      th.style.cursor = 'pointer';
      th.title = 'Click to sort';
      var sortDir = 0; // 0=none, 1=asc, -1=desc
      th.addEventListener('click', function () {
        // Reset other headers
        headers.forEach(function (h) { h.removeAttribute('data-sort'); });
        sortDir = sortDir === 1 ? -1 : 1;
        th.setAttribute('data-sort', sortDir === 1 ? 'asc' : 'desc');

        var tbody = table.querySelector('tbody');
        var rows = Array.from(tbody.querySelectorAll('tr'));
        rows.sort(function (a, b) {
          var aCell = a.querySelectorAll('td')[colIdx];
          var bCell = b.querySelectorAll('td')[colIdx];
          var aText = aCell ? aCell.textContent.trim() : '';
          var bText = bCell ? bCell.textContent.trim() : '';
          // Try numeric sort
          var aNum = parseFloat(aText.replace(/[^0-9.-]/g, ''));
          var bNum = parseFloat(bText.replace(/[^0-9.-]/g, ''));
          if (!isNaN(aNum) && !isNaN(bNum)) {
            return sortDir * (aNum - bNum);
          }
          return sortDir * aText.localeCompare(bText);
        });
        rows.forEach(function (r) { tbody.appendChild(r); });
      });
    });
  }

  // --- Restructure card headers: 3-column grid with big centered price ---
  // NOTE: render.js now handles this directly in renderCard() — no DOM manipulation needed
  function restructureCardHeaders() {
    // No-op: render.js already creates the 3-column header structure
  }

  // --- Inject score bar tooltips ---
  function injectScoreTips() {
    if (typeof SCORE_TIPS === 'undefined') return;
    document.querySelectorAll('.card[id^="p"]').forEach(function (card) {
      var tips = SCORE_TIPS[card.id];
      if (!tips) return;
      card.querySelectorAll('.sob-mini-bar').forEach(function (bar, i) {
        if (SCORE_CATS[i] && tips[SCORE_CATS[i].key]) {
          bar.setAttribute('data-tip', tips[SCORE_CATS[i].key]);
        }
      });
    });
  }

  // --- Property Map (Leaflet) ---
  var propertyMap = null;
  var mapMarkers = {}; // pid -> marker

  function initPropertyMap() {
    var container = document.getElementById('property-map');
    if (!container || typeof L === 'undefined') return;

    // NC bounding box with padding for maxBounds
    var ncBounds = L.latLngBounds(
      L.latLng(33.5, -84.8),  // SW corner (with padding)
      L.latLng(37.0, -75.0)   // NE corner (with padding)
    );

    propertyMap = L.map('property-map', {
      scrollWheelZoom: true,
      maxBounds: ncBounds,
      maxBoundsViscosity: 1.0,
      minZoom: 6
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18
    }).addTo(propertyMap);

    // Gray mask outside NC boundary
    if (typeof NC_BOUNDARY !== 'undefined') {
      var ncLatLngs = NC_BOUNDARY.map(function (c) { return [c[1], c[0]]; });
      // World polygon with NC cut out (inverted mask)
      var world = [
        [90, -180], [90, 180], [-90, 180], [-90, -180], [90, -180]
      ];
      L.polygon([world, ncLatLngs], {
        color: 'none',
        fillColor: '#888',
        fillOpacity: 0.45,
        interactive: false
      }).addTo(propertyMap);
      // NC border outline
      L.polyline(ncLatLngs, {
        color: '#2d5a3a',
        weight: 2,
        opacity: 0.7,
        interactive: false
      }).addTo(propertyMap);
    }

    var bounds = [];
    Object.keys(PROPERTY_MAP).forEach(function (pid) {
      if (GRAVEYARD_IDS[pid]) return;
      var p = PROPERTY_MAP[pid];
      if (!p.lat || !p.lng) return;

      var latlng = [p.lat, p.lng];
      bounds.push(latlng);

      var totalScore = 0;
      if (p.scores) {
        Object.keys(p.scores).forEach(function (k) { totalScore += p.scores[k]; });
      }

      var popupHtml =
        '<div class="map-popup" onclick="PropertyRenderer.openRegionForProperty(\'' + pid + '\');setTimeout(function(){document.getElementById(\'' + pid + '\').scrollIntoView({behavior:\'smooth\',block:\'start\'})},60)">' +
          '<div class="map-popup-img" style="background-image:url(' + (p.image || '') + ')"></div>' +
          '<div class="map-popup-overlay">' +
            '<div class="map-popup-id">' + pid.toUpperCase() + ' — ' + (p.city || '') + '</div>' +
            '<div class="map-popup-price">$' + (p.price ? p.price.toLocaleString() : '?') + '</div>' +
            '<div class="map-popup-stats">' + (p.beds || '?') + 'bd/' + (p.bath || '?') + 'ba · ' +
              (p.sqft ? p.sqft.toLocaleString() : '?') + ' sqft · ' + (p.acres || '?') + ' ac</div>' +
            '<div class="map-popup-score">Score: ' + (totalScore || 'N/A') + '/100</div>' +
          '</div>' +
        '</div>';

      var marker = L.circleMarker(latlng, {
        radius: 8,
        fillColor: '#3a6b4a',
        color: '#1e3528',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.85
      }).addTo(propertyMap);

      marker.bindPopup(popupHtml, { closeButton: false, maxWidth: 300, className: '' });
      marker.on('mouseover', function () { this.openPopup(); });

      // Bind tooltip with property ID for quick reference
      marker.bindTooltip(pid.toUpperCase(), {
        permanent: false,
        direction: 'top',
        offset: [0, -10],
        className: 'map-marker-tooltip'
      });

      mapMarkers[pid] = marker;
    });

    if (bounds.length > 0) {
      propertyMap.fitBounds(bounds, { padding: [30, 30] });
    } else {
      propertyMap.setView([35.5, -80.0], 7);
    }
  }

  function addMapMarker(pid) {
    if (!propertyMap || mapMarkers[pid]) return;
    var p = PROPERTY_MAP[pid];
    if (!p || !p.lat || !p.lng) return;

    var totalScore = 0;
    if (p.scores) {
      Object.keys(p.scores).forEach(function (k) { totalScore += p.scores[k]; });
    }

    var popupHtml =
      '<div class="map-popup" onclick="PropertyRenderer.openRegionForProperty(\'' + pid + '\');setTimeout(function(){document.getElementById(\'' + pid + '\').scrollIntoView({behavior:\'smooth\',block:\'start\'})},60)">' +
        '<div class="map-popup-img" style="background-image:url(' + (p.image || '') + ')"></div>' +
        '<div class="map-popup-overlay">' +
          '<div class="map-popup-id">' + pid.toUpperCase() + ' — ' + (p.city || '') + '</div>' +
          '<div class="map-popup-price">$' + (p.price ? p.price.toLocaleString() : '?') + '</div>' +
          '<div class="map-popup-stats">' + (p.beds || '?') + 'bd/' + (p.bath || '?') + 'ba · ' +
            (p.sqft ? p.sqft.toLocaleString() : '?') + ' sqft · ' + (p.acres || '?') + ' ac</div>' +
          '<div class="map-popup-score">Score: ' + (totalScore || 'N/A') + '/100</div>' +
        '</div>' +
      '</div>';

    var marker = L.circleMarker([p.lat, p.lng], {
      radius: 8,
      fillColor: '#3a6b4a',
      color: '#1e3528',
      weight: 2,
      opacity: 1,
      fillOpacity: 0.85
    }).addTo(propertyMap);

    marker.bindPopup(popupHtml, { closeButton: false, maxWidth: 300 });
    marker.on('mouseover', function () { this.openPopup(); });
    marker.bindTooltip(pid.toUpperCase(), {
      permanent: false, direction: 'top', offset: [0, -10]
    });

    mapMarkers[pid] = marker;
  }

  function removeMapMarker(pid) {
    if (!propertyMap || !mapMarkers[pid]) return;
    propertyMap.removeLayer(mapMarkers[pid]);
    delete mapMarkers[pid];
  }

  // --- Map region filtering ---
  var activeRegionFilter = null;

  function buildRegionPidMap() {
    var regions = PropertyRenderer.REGIONS;
    var propById = {};
    Object.keys(PROPERTY_MAP).forEach(function (pid) {
      if (!GRAVEYARD_IDS[pid]) propById[pid] = true;
    });
    var map = {};
    var assigned = {};
    regions.forEach(function (region) {
      var sectionId = 'region-' + region.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      var pids = [];
      region.ids.forEach(function (id) {
        if (propById[id]) { pids.push(id); assigned[id] = true; }
      });
      if (pids.length) map[sectionId] = { name: region.name, pids: pids };
    });
    var stragPids = Object.keys(propById).filter(function (pid) { return !assigned[pid]; });
    if (stragPids.length) map['region-other'] = { name: 'Other', pids: stragPids };
    return map;
  }

  function filterMapRegion(regionPids) {
    if (!propertyMap) return;
    var regionSet = {};
    regionPids.forEach(function (id) { regionSet[id] = true; });

    Object.keys(mapMarkers).forEach(function (pid) {
      var m = mapMarkers[pid];
      if (regionSet[pid]) {
        if (!propertyMap.hasLayer(m)) propertyMap.addLayer(m);
        m.setStyle({ fillColor: '#f59e0b', color: '#b45309', weight: 3, fillOpacity: 1, radius: 10 });
      } else {
        if (propertyMap.hasLayer(m)) propertyMap.removeLayer(m);
      }
    });

    var bounds = [];
    regionPids.forEach(function (pid) {
      if (mapMarkers[pid]) bounds.push(mapMarkers[pid].getLatLng());
    });
    if (bounds.length > 0) {
      propertyMap.fitBounds(bounds, { padding: [60, 60], maxZoom: 10 });
    }
    activeRegionFilter = regionPids;
  }

  function clearMapFilter() {
    if (!propertyMap) return;
    Object.keys(mapMarkers).forEach(function (pid) {
      var m = mapMarkers[pid];
      if (!propertyMap.hasLayer(m) && !GRAVEYARD_IDS[pid]) propertyMap.addLayer(m);
      m.setStyle({ fillColor: '#3a6b4a', color: '#1e3528', weight: 2, fillOpacity: 0.85, radius: 8 });
    });
    var bounds = [];
    Object.keys(mapMarkers).forEach(function (pid) {
      if (!GRAVEYARD_IDS[pid]) bounds.push(mapMarkers[pid].getLatLng());
    });
    if (bounds.length > 0) {
      propertyMap.fitBounds(bounds, { padding: [30, 30] });
    }
    activeRegionFilter = null;
    // Reset button states
    document.querySelectorAll('.map-region-btn.active').forEach(function (b) {
      b.classList.remove('active');
    });
    var allBtn = document.querySelector('.map-region-btn[data-region="all"]');
    if (allBtn) allBtn.classList.add('active');
  }

  function addMapRegionButtons() {
    if (!propertyMap) return;
    // Remove existing bar if rebuilding
    var old = document.querySelector('.map-region-bar');
    if (old) old.remove();

    var regionData = buildRegionPidMap();

    var container = document.createElement('div');
    container.className = 'map-region-bar';

    // "All" button
    var allBtn = document.createElement('button');
    allBtn.className = 'map-region-btn active';
    allBtn.setAttribute('data-region', 'all');
    allBtn.textContent = 'All';
    allBtn.addEventListener('click', function () {
      clearMapFilter();
    });
    container.appendChild(allBtn);

    Object.keys(regionData).forEach(function (sectionId) {
      var region = regionData[sectionId];
      var btn = document.createElement('button');
      btn.className = 'map-region-btn';
      btn.setAttribute('data-region', sectionId);
      btn.textContent = region.name;
      var countSpan = document.createElement('span');
      countSpan.className = 'map-region-btn-count';
      countSpan.textContent = region.pids.length;
      btn.appendChild(countSpan);
      btn.addEventListener('click', function () {
        document.querySelectorAll('.map-region-btn.active').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        filterMapRegion(region.pids);
      });
      container.appendChild(btn);
    });

    // Insert above the map
    var mapSection = document.getElementById('property-map-section');
    var mapDiv = document.getElementById('property-map');
    if (mapSection && mapDiv) {
      mapSection.insertBefore(container, mapDiv);
    }
  }

  // Expose for render.js region toggles
  window._mapFilterRegion = filterMapRegion;
  window._mapClearFilter = clearMapFilter;

  // --- Init ---
  function init() {
    restructureCardHeaders();
    loadUser();
    injectVoteRows();
    injectNoteRows();
    injectGraveyardButtons();
    injectEditButtons();
    injectNicknameUI();
    injectEnvKeys();
    injectScoreTips();
    initMonthlyToggles();
    initCollapsibleDetails();
    initCollapsibleOverview();
    initCollapsibleGraveyard();
    initFilterBar();
    initMobileNavToggle();
    initWalkthroughButtons();

    // --- Nav spacer: match fixed nav height ---
    function syncNavSpacer() {
      var nav = document.querySelector('.nav');
      var spacer = document.querySelector('.nav-spacer');
      if (nav && spacer) spacer.style.height = nav.offsetHeight + 'px';
    }
    syncNavSpacer();
    window.addEventListener('resize', syncNavSpacer);

    // --- Helpers: expand / collapse collapsible sections ---
    function expandSection(container, contentSel, barSel, arrowSel) {
      if (!container) return;
      var content = container.querySelector(contentSel);
      var bar = container.querySelector(barSel);
      if (content && !content.classList.contains('expanded')) {
        content.classList.add('expanded');
        if (bar) {
          bar.classList.add('expanded');
          var arrow = bar.querySelector(arrowSel);
          if (arrow) arrow.innerHTML = '&#9652;';
        }
      }
    }
    function collapseSection(container, contentSel, barSel, arrowSel) {
      if (!container) return;
      var content = container.querySelector(contentSel);
      var bar = container.querySelector(barSel);
      if (content && content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        if (bar) {
          bar.classList.remove('expanded');
          var arrow = bar.querySelector(arrowSel);
          if (arrow) arrow.innerHTML = '&#9662;';
        }
      }
    }

    // --- Nav link click handlers: open target, collapse others ---
    var rankingsNavLink = document.querySelector('.nav-rankings');
    var tableNavLink = document.querySelector('.nav-table');
    var mapNavLink = document.querySelector('.nav-map');
    var graveNavLink = document.querySelector('.nav-grave');

    if (rankingsNavLink) {
      rankingsNavLink.addEventListener('click', function () {
        collapseSection(document.getElementById('overview'), '.overview-content', '.overview-toggle-bar', '.overview-toggle-arrow');
        collapseSection(document.getElementById('graveyard'), '.graveyard-content', '.graveyard-toggle-bar', '.graveyard-toggle-arrow');
      });
    }
    if (tableNavLink) {
      tableNavLink.addEventListener('click', function () {
        expandSection(document.getElementById('overview'), '.overview-content', '.overview-toggle-bar', '.overview-toggle-arrow');
        collapseSection(document.getElementById('graveyard'), '.graveyard-content', '.graveyard-toggle-bar', '.graveyard-toggle-arrow');
      });
    }
    if (mapNavLink) {
      mapNavLink.addEventListener('click', function () {
        collapseSection(document.getElementById('overview'), '.overview-content', '.overview-toggle-bar', '.overview-toggle-arrow');
        collapseSection(document.getElementById('graveyard'), '.graveyard-content', '.graveyard-toggle-bar', '.graveyard-toggle-arrow');
      });
    }
    if (graveNavLink) {
      graveNavLink.addEventListener('click', function () {
        expandSection(document.getElementById('graveyard'), '.graveyard-content', '.graveyard-toggle-bar', '.graveyard-toggle-arrow');
        collapseSection(document.getElementById('overview'), '.overview-content', '.overview-toggle-bar', '.overview-toggle-arrow');
      });
    }
    initTableFilter();
    initPropertyMap();
    addMapRegionButtons();
    renderNavPill();

    if (!currentUser) {
      showUserModal();
    }

    refreshPropertyNames();
    refreshAllNotes();
    refreshPropertyEdits();

    // Load graveyard first, then votes (so rankings exclude graveyarded)
    refreshGraveyard().then(function () {
      refreshAllVotes();
    });

    // Poll every 30 seconds
    setInterval(function () {
      refreshPropertyNames();
      refreshAllNotes();
      refreshPropertyEdits();
      refreshGraveyard().then(function () {
        refreshAllVotes();
      });
    }, 30000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
