// models/Book.js
// const mongoose = require('mongoose');

// const bookSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   author: { type: String, required: true },
//   serialNo: { type: String, required: true, unique: true },
//   category: { type: String, required: true },
// });

// const Book = mongoose.model('Book', bookSchema);

// module.exports = Book;

// models/Book.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  // serialNo: { type: String, required: true, unique: true },
  genre: { type: String },
  available: { type: Boolean, default: true }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
