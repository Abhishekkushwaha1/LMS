const express = require('express');
const router = express.Router();
// const Book = require('../models/Book');
const User = require('../models/user.js');
const Book = require('../models/book.js');
const Issue = require('../models/Issue');


// Admin Dashboard (accessible only by admin)
router.get('/admin-dashboard', (req, res) => {
  if (!req.session.user || req.session.user.role !== 'admin') {
    return res.redirect('/login');
  }

  res.render('admin-dashboard', {
    user: req.session.user,
    error: null,
  });
});

// Manage Books (Admin functionality)
router.get('/manage-books', async (req, res) => {
  if (!req.session.user || req.session.user.role !== 'admin') {
    return res.redirect('/login');
  }

  try {
    const books = await Book.find({});
    res.render('admin-dashboard', {
      user: req.session.user,
      books,
      error: null,
    });
  } catch (err) {
    res.render('admin-dashboard', { error: 'Failed to load books' });
  }
});

// Manage Users (Admin functionality)
router.get('/manage-users', async (req, res) => {
  if (!req.session.user || req.session.user.role !== 'admin') {
    return res.redirect('/login');
  }

  try {
    const users = await User.find({});
    res.render('admin-dashboard', {
      user: req.session.user,
      users,
      error: null,
    });
  } catch (err) {
    res.render('admin-dashboard', { error: 'Failed to load users' });
  }
});

module.exports = router;
