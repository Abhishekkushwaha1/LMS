const express = require('express');
const router = express.Router();
const Issue = require('../models/Issue');
const Book = require('../models/book.js');


// Show issue form
router.get('/issue-book', async (req, res) => {
  const books = await Book.find({});
  res.render('issueBook', { error: null, books });
});

// Handle form
router.post('/issue-book', async (req, res) => {
  const { bookTitle, author, issueDate, returnDate, remarks } = req.body;

  if (!bookTitle || !author || !issueDate || !returnDate) {
    const books = await Book.find({});
    return res.render('issueBook', { error: '❌ All required fields must be filled!', books });
  }

  const today = new Date().setHours(0,0,0,0);
  const issue = new Date(issueDate).setHours(0,0,0,0);
  const returnD = new Date(returnDate).setHours(0,0,0,0);
  const maxReturn = new Date(issueDate);
  maxReturn.setDate(maxReturn.getDate() + 15);

  if (issue < today) {
    const books = await Book.find({});
    return res.render('issueBook', { error: '❌ Issue date cannot be before today!', books });
  }

  if (returnD > maxReturn) {
    const books = await Book.find({});
    return res.render('issueBook', { error: '❌ Return date cannot be more than 15 days from issue date!', books });
  }

  try {
    await Issue.create({ bookTitle, author, issueDate, returnDate, remarks });
    res.render('issueBook', { error: '✅ Book issued successfully!', books: await Book.find({}) });
  } catch (err) {
    console.error(err);
    res.render('issueBook', { error: '❌ Error issuing book.', books: await Book.find({}) });
  }
});

module.exports = router;
