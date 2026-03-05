(function () {
  'use strict';

  // --- Property name map (default from nav links, overridden by custom names) ---
  var DEFAULT_NAMES = {};
  var CUSTOM_NAMES = {};
  var GRAVEYARD_IDS = {};
  document.querySelectorAll('.nav a[href^="#p"]').forEach(function (a) {
    var id = a.getAttribute('href').slice(1);
    DEFAULT_NAMES[id] = a.textContent.trim();
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
    castVote: function (userId, propertyId, rating) {
      return fetch('/api/votes', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: userId, propertyId: propertyId, rating: rating })
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
    navRight.parentNode.insertBefore(pill, navRight);
  }

  // --- Rankings nav link ---
  function addRankingsNavLink() {
    var nav = document.querySelector('.nav');
    var navRight = document.querySelector('.nav-right');
    var link = document.createElement('a');
    link.href = '#rankings';
    link.textContent = 'Rankings';
    link.className = 'nav-rankings-link';
    nav.insertBefore(link, navRight);
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
    for (var i = 1; i <= 5; i++) {
      (function (rating) {
        var star = document.createElement('button');
        star.className = 'vote-star' + (rating <= currentRating ? ' vote-star-filled' : '');
        star.textContent = '\u2605';
        star.title = rating + ' star' + (rating > 1 ? 's' : '');
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
    for (var i = 1; i <= 5; i++) {
      s += '<span class="vote-star-sm' + (i <= Math.round(rating) ? ' vote-star-sm-filled' : '') + '">\u2605</span>';
    }
    return s;
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
    });
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
      if (data && currentUser) {
        for (var i = 0; i < data.votes.length; i++) {
          if (data.votes[i].userId === currentUser.id) {
            myRating = data.votes[i].rating;
            break;
          }
        }
      }
      var stars = createStars(pid, myRating, function (rating) {
        API.castVote(currentUser.id, pid, rating).then(function () {
          refreshAllVotes();
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

      // Individual votes
      var detailsEl = row.querySelector('[data-details]');
      if (data && data.votes.length > 0) {
        detailsEl.innerHTML = data.votes.map(function (v) {
          return '<span class="vote-chip">' + escapeHtml(v.userName) + ': ' + v.rating + '\u2605</span>';
        }).join(' ');
      } else {
        detailsEl.innerHTML = '';
      }
    });
  }

  // --- Rankings section ---
  function updateRankings(allVotes) {
    var container = document.getElementById('rankings');
    if (!container) return;

    // Build sorted array
    var entries = [];
    for (var pid in allVotes) {
      if (allVotes[pid].count > 0 && !GRAVEYARD_IDS[pid]) {
        entries.push({
          pid: pid,
          name: getDisplayName(pid),
          avg: allVotes[pid].avg,
          count: allVotes[pid].count,
          votes: allVotes[pid].votes
        });
      }
    }
    entries.sort(function (a, b) { return b.avg - a.avg || b.count - a.count; });

    if (entries.length === 0) {
      container.innerHTML = '';
      return;
    }

    var html = '<div class="section rankings-section">' +
      '<div class="section-title">Family Rankings</div>' +
      '<div class="table-wrap"><table class="qt rankings-table"><thead><tr>' +
      '<th>Rank</th><th>Property</th><th>Avg Rating</th><th>Votes</th><th>Individual Ratings</th>' +
      '</tr></thead><tbody>';

    entries.forEach(function (e, idx) {
      var voteCells = e.votes.map(function (v) {
        return escapeHtml(v.userName) + ': ' + v.rating + '\u2605';
      }).join(', ');

      html += '<tr>' +
        '<td><strong>' + (idx + 1) + '</strong></td>' +
        '<td><a href="#' + e.pid + '">' + escapeHtml(e.name) + '</a></td>' +
        '<td>' + renderStarsReadonly(e.avg) + ' <strong>' + e.avg.toFixed(1) + '</strong></td>' +
        '<td>' + e.count + '</td>' +
        '<td style="font-size:0.78rem">' + voteCells + '</td>' +
        '</tr>';
    });

    html += '</tbody></table></div></div>';
    container.innerHTML = html;
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

      // Hide/show nav links and overview rows
      document.querySelectorAll('.nav a[href^="#p"]').forEach(function (a) {
        var pid = a.getAttribute('href').slice(1);
        a.style.display = GRAVEYARD_IDS[pid] ? 'none' : '';
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
    { key: 'outbuildings', label: 'Outbuildings', max: 10 },
    { key: 'town', label: 'Town', max: 10 },
    { key: 'hospital', label: 'Hospital', max: 10 },
    { key: 'hazards', label: 'Hazards', max: 10 },
    { key: 'beach', label: 'Beach', max: 10 },
    { key: 'forested', label: 'Forested', max: 10 },
    { key: 'living', label: 'Living', max: 10 }
  ];

  function readCardValues(pid) {
    var card = document.getElementById(pid);
    if (!card) return {};
    var vals = {};

    // Price
    var priceEl = card.querySelector('.card-price');
    if (priceEl) vals.price = priceEl.textContent.trim();

    // Listing link & image
    var imgLink = card.querySelector('.card-img-link');
    if (imgLink) vals.listingLink = imgLink.getAttribute('href') || '';
    var img = card.querySelector('.card-img-link img');
    if (img) vals.imageUrl = img.getAttribute('src') || '';

    // Stats row
    var statVals = card.querySelectorAll('.stat-val');
    var statSubs = card.querySelectorAll('.stat-sub');
    if (statVals[0]) vals.beds = statVals[0].textContent.trim();
    if (statVals[1]) vals.sqft = statVals[1].textContent.trim();
    if (statVals[2]) vals.acres = statVals[2].textContent.trim();
    if (statSubs[2]) vals.acresSub = statSubs[2] ? statSubs[2].textContent.trim() : '';
    if (statVals[3]) vals.yearBuilt = statVals[3].textContent.trim();
    if (statVals[4]) vals.drive = statVals[4].textContent.trim();
    if (statVals[5]) vals.toTown = statVals[5].textContent.trim();
    if (statVals[6]) vals.tax = statVals[6].textContent.trim();

    // Status (last stat-val or look for status class)
    var statusEl = card.querySelector('.stat-val.status-active') || card.querySelector('.stat-val.status-pending') || (statVals[7] || null);
    if (statusEl) vals.status = statusEl.textContent.trim();

    // Scores
    vals.scores = {};
    var miniBars = card.querySelectorAll('.sob-mini-bar');
    SCORE_CATS.forEach(function (cat, i) {
      if (miniBars[i]) {
        var labelSpans = miniBars[i].querySelectorAll('.sob-mini-label span');
        var scoreText = labelSpans[1] ? labelSpans[1].textContent.trim() : '0';
        // Extract number from "12/15" format
        var match = scoreText.match(/(\d+)/);
        vals.scores[cat.key] = match ? parseInt(match[1]) : 0;
      }
    });

    // Highlight band
    var highlightEl = card.querySelector('.highlight-band');
    if (highlightEl) vals.highlight = highlightEl.textContent.trim();

    // Offer range & strategy
    var offerPrice = card.querySelector('.sob-offer-price');
    if (offerPrice) vals.offerRange = offerPrice.textContent.trim();
    var strategy = card.querySelector('.sob-strategy');
    if (strategy) vals.offerStrategy = strategy.textContent.trim();

    // Offer rationale
    var rationaleUl = card.querySelector('.sob-offer-rationale ul');
    if (rationaleUl) {
      vals.offerRationale = Array.from(rationaleUl.querySelectorAll('li')).map(function (li) {
        return li.textContent.trim();
      });
    }

    // Card-body sections: Highlights list (first section with ul)
    var sections = card.querySelectorAll('.card-body > .card-section');
    sections.forEach(function (sec) {
      var title = sec.querySelector('.card-section-title');
      if (!title) return;
      var titleText = title.textContent.trim().toLowerCase();
      var ul = sec.querySelector('ul');
      if (!ul) return;
      var items = Array.from(ul.querySelectorAll('li')).map(function (li) {
        // Remove the li-icon span and get remaining text
        var clone = li.cloneNode(true);
        var icon = clone.querySelector('.li-icon');
        if (icon) icon.remove();
        return clone.textContent.trim();
      });
      if (titleText.indexOf('highlight') !== -1) vals.highlights = items;
    });

    // Pros/Cons (inside .pros-cons)
    var prosUl = card.querySelector('.pros-cons .pros ul');
    if (prosUl) {
      vals.pros = Array.from(prosUl.querySelectorAll('li')).map(function (li) {
        return li.textContent.trim().replace(/^[✓✔]\s*/, '');
      });
    }
    var consUl = card.querySelector('.pros-cons .cons ul');
    if (consUl) {
      vals.cons = Array.from(consUl.querySelectorAll('li')).map(function (li) {
        return li.textContent.trim().replace(/^[⚠✗]\s*/, '');
      });
    }

    // Must-do items
    var mustDoGrid = card.querySelector('.must-do-grid');
    if (mustDoGrid) {
      vals.mustDo = Array.from(mustDoGrid.querySelectorAll('.must-do-item')).map(function (item) {
        return item.textContent.trim();
      });
    }

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
      var card = document.getElementById(pid);
      if (!card) continue;
      var edits = allEdits[pid].edits;

      // Price
      if (edits.price) {
        var priceEl = card.querySelector('.card-price');
        if (priceEl) priceEl.textContent = edits.price;
      }

      // Status
      if (edits.status) {
        var statVals = card.querySelectorAll('.stat-val');
        var statusEl = card.querySelector('.stat-val.status-active') || card.querySelector('.stat-val.status-pending') || (statVals[7] || null);
        if (statusEl) {
          statusEl.textContent = edits.status;
          statusEl.className = 'stat-val';
          if (edits.status === 'Active') statusEl.classList.add('status-active');
          else if (edits.status === 'Pending') statusEl.classList.add('status-pending');
        }
      }

      // Listing link
      if (edits.listingLink) {
        var imgLink = card.querySelector('.card-img-link');
        if (imgLink) imgLink.setAttribute('href', edits.listingLink);
      }

      // Image URL
      if (edits.imageUrl) {
        var img = card.querySelector('.card-img-link img');
        if (img) img.setAttribute('src', edits.imageUrl);
      }

      // Stats row values
      var allStatVals = card.querySelectorAll('.stat-val');
      var allStatSubs = card.querySelectorAll('.stat-sub');
      if (edits.beds && allStatVals[0]) allStatVals[0].textContent = edits.beds;
      if (edits.sqft && allStatVals[1]) allStatVals[1].textContent = edits.sqft;
      if (edits.acres && allStatVals[2]) allStatVals[2].textContent = edits.acres;
      if (edits.acresSub && allStatSubs[2]) allStatSubs[2].textContent = edits.acresSub;
      if (edits.yearBuilt && allStatVals[3]) allStatVals[3].textContent = edits.yearBuilt;
      if (edits.drive && allStatVals[4]) allStatVals[4].textContent = edits.drive;
      if (edits.toTown && allStatVals[5]) allStatVals[5].textContent = edits.toTown;
      if (edits.tax && allStatVals[6]) allStatVals[6].textContent = edits.tax;

      // Highlight band
      if (edits.highlight) {
        var hlEl = card.querySelector('.highlight-band');
        if (hlEl) hlEl.textContent = edits.highlight;
      }

      // Offer range
      if (edits.offerRange) {
        var offerEl = card.querySelector('.sob-offer-price');
        if (offerEl) offerEl.textContent = edits.offerRange;
      }

      // Offer strategy
      if (edits.offerStrategy) {
        var stratEl = card.querySelector('.sob-strategy');
        if (stratEl) stratEl.textContent = edits.offerStrategy;
      }

      // Offer rationale
      if (edits.offerRationale && Array.isArray(edits.offerRationale)) {
        var ratUl = card.querySelector('.sob-offer-rationale ul');
        if (ratUl) {
          ratUl.innerHTML = edits.offerRationale.map(function (item) {
            return '<li>' + escapeHtml(item) + '</li>';
          }).join('');
        }
      }

      // Highlights list (first card-section in card-body with "highlights" in title)
      if (edits.highlights && Array.isArray(edits.highlights)) {
        var bodySections = card.querySelectorAll('.card-body > .card-section');
        bodySections.forEach(function (sec) {
          var title = sec.querySelector('.card-section-title');
          if (title && title.textContent.trim().toLowerCase().indexOf('highlight') !== -1) {
            var ul = sec.querySelector('ul');
            if (ul) {
              ul.innerHTML = edits.highlights.map(function (item) {
                return '<li><span class="li-icon">\u2728</span> ' + escapeHtml(item) + '</li>';
              }).join('');
            }
          }
        });
      }

      // Pros
      if (edits.pros && Array.isArray(edits.pros)) {
        var prosUl = card.querySelector('.pros-cons .pros ul');
        if (prosUl) {
          prosUl.innerHTML = edits.pros.map(function (item) {
            return '<li>\u2713 ' + escapeHtml(item) + '</li>';
          }).join('');
        }
      }

      // Cons
      if (edits.cons && Array.isArray(edits.cons)) {
        var consUl = card.querySelector('.pros-cons .cons ul');
        if (consUl) {
          consUl.innerHTML = edits.cons.map(function (item) {
            return '<li>\u26A0 ' + escapeHtml(item) + '</li>';
          }).join('');
        }
      }

      // Must-do items
      if (edits.mustDo && Array.isArray(edits.mustDo)) {
        var mustDoGrid = card.querySelector('.must-do-grid');
        if (mustDoGrid) {
          mustDoGrid.innerHTML = edits.mustDo.map(function (item) {
            return '<div class="must-do-item">' + escapeHtml(item) + '</div>';
          }).join('');
        }
      }

      // Scores
      if (edits.scores) {
        var miniBars = card.querySelectorAll('.sob-mini-bar');
        var total = 0;
        SCORE_CATS.forEach(function (cat, i) {
          if (miniBars[i] && edits.scores[cat.key] !== undefined) {
            var score = edits.scores[cat.key];
            total += score;
            var labelSpans = miniBars[i].querySelectorAll('.sob-mini-label span');
            if (labelSpans[1]) labelSpans[1].textContent = score + '/' + cat.max;
            var fill = miniBars[i].querySelector('.sob-mini-fill');
            if (fill) fill.style.width = Math.round((score / cat.max) * 100) + '%';
          } else if (miniBars[i]) {
            // Add existing score to total
            var existingLabel = miniBars[i].querySelectorAll('.sob-mini-label span');
            var existingMatch = existingLabel[1] ? existingLabel[1].textContent.match(/(\d+)/) : null;
            total += existingMatch ? parseInt(existingMatch[1]) : 0;
          }
        });
        // Update total score
        var scoreNum = card.querySelector('.sob-score-num');
        if (scoreNum) scoreNum.textContent = total;
      }

      // Update overview table row
      if (edits.price || edits.status) {
        var overviewRow = document.querySelector('#overview table.qt tbody tr a[href="#' + pid + '"]');
        if (overviewRow) {
          var tr = overviewRow.closest('tr');
          if (tr) {
            var tds = tr.querySelectorAll('td');
            // Price is typically the 3rd column (index 2)
            if (edits.price && tds[2]) tds[2].textContent = edits.price;
          }
        }
      }
    }
  }

  function refreshPropertyEdits() {
    API.getPropertyEdits().then(function (edits) {
      PROPERTY_EDITS = edits;
      applyPropertyEdits(edits);
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
      var pid = a.getAttribute('href').slice(1);
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
  function initCollapsibleDetails() {
    document.querySelectorAll('.card[id^="p"]').forEach(function (card) {
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
    section.insertBefore(bar, tableWrap);

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
  function restructureCardHeaders() {
    document.querySelectorAll('.card[id^="p"] .card-header').forEach(function (header) {
      if (header.querySelector('.card-price-center')) return; // already done
      var priceBlock = header.querySelector('.card-price-block');
      var priceEl = priceBlock ? priceBlock.querySelector('.card-price') : null;
      if (!priceEl || !priceBlock) return;

      // Create centered price column
      var center = document.createElement('div');
      center.className = 'card-price-center';
      var label = document.createElement('div');
      label.className = 'card-price-label';
      label.textContent = 'List Price';
      center.appendChild(label);

      // Move price element into center
      center.appendChild(priceEl);

      // Insert center before price-block
      header.insertBefore(center, priceBlock);
    });
  }

  // --- Score categories in display order ---
  var SCORE_CATS = [
    { key: 'price' }, { key: 'acreage' }, { key: 'schools' }, { key: 'outbldgs' },
    { key: 'town' }, { key: 'hospital' }, { key: 'hazards' }, { key: 'beach' },
    { key: 'forested' }, { key: 'living' }
  ];

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

  // --- Init ---
  function init() {
    restructureCardHeaders();
    loadUser();
    addRankingsNavLink();
    injectVoteRows();
    injectNoteRows();
    injectGraveyardButtons();
    injectEditButtons();
    injectNicknameUI();
    injectEnvKeys();
    injectScoreTips();
    initMonthlyToggles();
    initCollapsibleDetails();
    initCollapsibleGraveyard();
    initTableFilter();
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
