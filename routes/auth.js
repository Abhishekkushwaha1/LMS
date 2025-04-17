const express = require('express');
const router = express.Router();

// Login page route
router.get('/login', (req, res) => {
  res.render('login'); // this will render views/login.ejs
});

// Temporary login handler (for testing)
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === 'admin') {
    req.session.user = { username, role: 'admin' };
    res.redirect('/dashboard');
  } else {
    res.send('Invalid credentials');
  }
});

// Dashboard route (for logged-in users)
router.get('/dashboard', (req, res) => {
  if (!req.session.user) {
    return res.redirect('/login');
  }
  res.send(`Welcome ${req.session.user.username}!`);
});

module.exports = router;

