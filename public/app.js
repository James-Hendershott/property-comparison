(function () {
  'use strict';

  // --- Property name map (derived from nav links) ---
  const PROPERTY_NAMES = {};
  document.querySelectorAll('.nav a[href^="#p"]').forEach(function (a) {
    var id = a.getAttribute('href').slice(1);
    PROPERTY_NAMES[id] = a.textContent.trim();
  });

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
      if (allVotes[pid].count > 0) {
        entries.push({
          pid: pid,
          name: PROPERTY_NAMES[pid] || pid,
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

      // Render form
      var formWrap = row.querySelector('[data-notes-form-wrap]');
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
    var name = PROPERTY_NAMES[pid] || pid;
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
        refreshGraveyard();
      });
    });

    setTimeout(function () { card.querySelector('textarea').focus(); }, 100);
  }

  function refreshGraveyard() {
    API.getGraveyard().then(function (entries) {
      // Hide/show cards based on graveyard state
      var graveyardIds = {};
      entries.forEach(function (e) { graveyardIds[e.property_id] = e; });

      document.querySelectorAll('.card[id^="p"]').forEach(function (card) {
        if (graveyardIds[card.id]) {
          card.classList.add('graveyarded');
        } else {
          card.classList.remove('graveyarded');
        }
      });

      // Hide/show nav links and overview rows
      document.querySelectorAll('.nav a[href^="#p"]').forEach(function (a) {
        var pid = a.getAttribute('href').slice(1);
        a.style.display = graveyardIds[pid] ? 'none' : '';
      });
      document.querySelectorAll('#overview table.qt tbody tr').forEach(function (row) {
        var link = row.querySelector('a[href^="#p"]');
        if (!link) return;
        var pid = link.getAttribute('href').slice(1);
        row.style.display = graveyardIds[pid] ? 'none' : '';
      });

      // Render dynamic graveyard entries
      var container = document.getElementById('graveyard-dynamic');
      if (!container) return;
      if (entries.length === 0) {
        container.innerHTML = '';
        return;
      }
      container.innerHTML = entries.map(function (e) {
        var name = PROPERTY_NAMES[e.property_id] || e.property_id;
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
            refreshGraveyard();
          });
        });
      });
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

  // --- Init ---
  function init() {
    loadUser();
    addRankingsNavLink();
    injectVoteRows();
    injectNoteRows();
    injectGraveyardButtons();
    injectEnvKeys();
    initMonthlyToggles();
    renderNavPill();

    if (!currentUser) {
      showUserModal();
    }

    refreshAllVotes();
    refreshAllNotes();
    refreshGraveyard();

    // Poll every 30 seconds
    setInterval(function () {
      refreshAllVotes();
      refreshAllNotes();
      refreshGraveyard();
    }, 30000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
