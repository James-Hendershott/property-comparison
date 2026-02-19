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

module.exports = { init, getOrCreateUser, castVote, getAllVotes, getRankings, getUsers };
