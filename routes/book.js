const express = require('express');
const router = express.Router();
const Book = require('../models/book.js');

// Show Add Book Form
router.get('/add-book', (req, res) => {
  res.render('addBook', { error: null });
});

// Handle Book Submission
router.post('/add-book', async (req, res) => {
  const { title, author, serialNo, category } = req.body;

  // Validate that all fields are filled
  if (!title || !author || !serialNo || !category) {
    return res.render('addBook', { error: 'All fields are required!' });
  }

  try {
    // Check if a book with the same serial number already exists
    const existingBook = await Book.findOne({ serialNo });
    if (existingBook) {
      return res.render('addBook', { error: 'A book with this serial number already exists!' });
    }

    // Create a new book and save it
    const newBook = new Book({ title, author, serialNo, category });
    await newBook.save();
    res.send("✅ Book added successfully.");
  } catch (err) {
    console.error(err);
    res.render('addBook', { error: 'Error adding book. Please try again later.' });
  }
});

module.exports = router;
