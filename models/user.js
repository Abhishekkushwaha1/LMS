const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String, // in production: hashed
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
  name: String
});

module.exports = mongoose.model('User', userSchema);
