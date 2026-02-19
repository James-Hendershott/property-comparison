const express = require('express');
const path = require('path');
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// --- API Routes ---

app.post('/api/users', (req, res) => {
  try {
    const { name } = req.body;
    if (!name || !name.trim()) {
      return res.status(400).json({ error: 'Name is required' });
    }
    const user = db.getOrCreateUser(name);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/users', (_req, res) => {
  try {
    res.json(db.getUsers());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/votes', (req, res) => {
  try {
    const { userId, propertyId, rating } = req.body;
    if (!userId || !propertyId || !rating) {
      return res.status(400).json({ error: 'userId, propertyId, and rating are required' });
    }
    if (rating < 1 || rating > 5) {
      return res.status(400).json({ error: 'Rating must be between 1 and 5' });
    }
    db.castVote(userId, propertyId, rating);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/votes', (_req, res) => {
  try {
    res.json(db.getAllVotes());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/rankings', (_req, res) => {
  try {
    res.json(db.getRankings());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

db.init().then(() => {
  app.listen(PORT, () => {
    console.log(`Property Comparison server running on http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('Failed to initialize database:', err);
  process.exit(1);
});
