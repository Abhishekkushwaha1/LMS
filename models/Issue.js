const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
  bookTitle: { type: String, required: true },
  author: { type: String, required: true },
  issueDate: { type: Date, required: true },
  returnDate: { type: Date, required: true },
  remarks: { type: String },
});

module.exports = mongoose.model('Issue', issueSchema);
