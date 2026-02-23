const initSqlJs = require('sql.js');
const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'data', 'votes.db');

let db = null;

function save() {
  const data = db.export();
  fs.writeFileSync(dbPath, Buffer.from(data));
}

async function init() {
  const SQL = await initSqlJs();

  if (fs.existsSync(dbPath)) {
    const fileBuffer = fs.readFileSync(dbPath);
    db = new SQL.Database(fileBuffer);
  } else {
    db = new SQL.Database();
  }

  db.run('PRAGMA foreign_keys = ON');

  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT UNIQUE NOT NULL COLLATE NOCASE,
      created_at TEXT DEFAULT (datetime('now'))
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS votes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL REFERENCES users(id),
      property_id TEXT NOT NULL,
      rating INTEGER NOT NULL CHECK(rating BETWEEN 1 AND 5),
      updated_at TEXT DEFAULT (datetime('now')),
      UNIQUE(user_id, property_id)
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS notes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL REFERENCES users(id),
      property_id TEXT NOT NULL,
      content TEXT NOT NULL,
      created_at TEXT DEFAULT (datetime('now'))
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS property_names (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      property_id TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      user_id INTEGER NOT NULL REFERENCES users(id),
      updated_at TEXT DEFAULT (datetime('now'))
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS graveyard (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      property_id TEXT UNIQUE NOT NULL,
      user_id INTEGER NOT NULL REFERENCES users(id),
      reason TEXT NOT NULL,
      moved_at TEXT DEFAULT (datetime('now'))
    )
  `);

  save();
}

function query(sql, params) {
  const stmt = db.prepare(sql);
  if (params) stmt.bind(params);
  const rows = [];
  while (stmt.step()) {
    rows.push(stmt.getAsObject());
  }
  stmt.free();
  return rows;
}

function run(sql, params) {
  db.run(sql, params);
}

function getOrCreateUser(name) {
  const trimmed = name.trim();
  if (!trimmed) throw new Error('Name is required');

  const rows = query('SELECT id, name FROM users WHERE name = ? COLLATE NOCASE', [trimmed]);
  if (rows.length > 0) {
    return { id: rows[0].id, name: rows[0].name };
  }

  run('INSERT INTO users (name) VALUES (?)', [trimmed]);
  const inserted = query('SELECT last_insert_rowid() AS id');
  save();
  return { id: inserted[0].id, name: trimmed };
}

function castVote(userId, propertyId, rating) {
  run(
    `INSERT INTO votes (user_id, property_id, rating, updated_at)
     VALUES (?, ?, ?, datetime('now'))
     ON CONFLICT(user_id, property_id)
     DO UPDATE SET rating = excluded.rating, updated_at = datetime('now')`,
    [userId, propertyId, rating]
  );
  save();
}

function getAllVotes() {
  const rows = query(`
    SELECT v.property_id, v.rating, u.name AS user_name, u.id AS user_id
    FROM votes v JOIN users u ON v.user_id = u.id
    ORDER BY v.property_id, u.name
  `);
  const grouped = {};
  for (const row of rows) {
    if (!grouped[row.property_id]) {
      grouped[row.property_id] = { votes: [], total: 0, count: 0 };
    }
    grouped[row.property_id].votes.push({
      userId: row.user_id,
      userName: row.user_name,
      rating: row.rating,
    });
    grouped[row.property_id].total += row.rating;
    grouped[row.property_id].count += 1;
  }
  for (const pid of Object.keys(grouped)) {
    grouped[pid].avg = +(grouped[pid].total / grouped[pid].count).toFixed(2);
  }
  return grouped;
}

function getRankings() {
  return query(`
    SELECT property_id,
           ROUND(AVG(rating), 2) AS avg_rating,
           COUNT(*) AS vote_count
    FROM votes
    GROUP BY property_id
    ORDER BY avg_rating DESC, vote_count DESC
  `);
}

function getUsers() {
  return query('SELECT id, name FROM users ORDER BY name');
}

function createNote(userId, propertyId, content) {
  run(
    'INSERT INTO notes (user_id, property_id, content) VALUES (?, ?, ?)',
    [userId, propertyId, content]
  );
  const inserted = query('SELECT last_insert_rowid() AS id');
  save();
  return inserted[0].id;
}

function getAllNotes() {
  const rows = query(`
    SELECT n.id, n.property_id, n.user_id, u.name AS user_name, n.content, n.created_at
    FROM notes n JOIN users u ON n.user_id = u.id
    ORDER BY n.property_id, n.created_at DESC
  `);
  const grouped = {};
  for (const row of rows) {
    if (!grouped[row.property_id]) {
      grouped[row.property_id] = [];
    }
    grouped[row.property_id].push({
      id: row.id,
      userId: row.user_id,
      userName: row.user_name,
      content: row.content,
      createdAt: row.created_at
    });
  }
  return grouped;
}

function deleteNote(noteId, userId) {
  const rows = query('SELECT user_id FROM notes WHERE id = ?', [noteId]);
  if (rows.length === 0) throw new Error('Note not found');
  if (rows[0].user_id !== userId) throw new Error('Not authorized');
  run('DELETE FROM notes WHERE id = ?', [noteId]);
  save();
}

function getPropertyNames() {
  const rows = query(`
    SELECT pn.property_id, pn.name, u.name AS user_name, pn.updated_at
    FROM property_names pn JOIN users u ON pn.user_id = u.id
  `);
  const map = {};
  for (const row of rows) {
    map[row.property_id] = { name: row.name, userName: row.user_name, updatedAt: row.updated_at };
  }
  return map;
}

function setPropertyName(propertyId, name, userId) {
  const trimmed = name.trim();
  if (!trimmed) {
    run('DELETE FROM property_names WHERE property_id = ?', [propertyId]);
  } else {
    run(
      `INSERT INTO property_names (property_id, name, user_id, updated_at)
       VALUES (?, ?, ?, datetime('now'))
       ON CONFLICT(property_id)
       DO UPDATE SET name = excluded.name, user_id = excluded.user_id, updated_at = datetime('now')`,
      [propertyId, trimmed, userId]
    );
  }
  save();
}

function moveToGraveyard(propertyId, userId, reason) {
  run(
    `INSERT INTO graveyard (property_id, user_id, reason)
     VALUES (?, ?, ?)
     ON CONFLICT(property_id)
     DO UPDATE SET reason = excluded.reason, user_id = excluded.user_id, moved_at = datetime('now')`,
    [propertyId, userId, reason]
  );
  save();
}

function getGraveyard() {
  return query(`
    SELECT g.property_id, g.reason, u.name AS user_name, g.moved_at
    FROM graveyard g JOIN users u ON g.user_id = u.id
    ORDER BY g.moved_at DESC
  `);
}

function restoreFromGraveyard(propertyId) {
  const rows = query('SELECT id FROM graveyard WHERE property_id = ?', [propertyId]);
  if (rows.length === 0) throw new Error('Property not in graveyard');
  run('DELETE FROM graveyard WHERE property_id = ?', [propertyId]);
  save();
}

module.exports = { init, getOrCreateUser, castVote, getAllVotes, getRankings, getUsers, createNote, getAllNotes, deleteNote, getPropertyNames, setPropertyName, moveToGraveyard, getGraveyard, restoreFromGraveyard };
