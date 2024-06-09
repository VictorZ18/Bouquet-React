const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String},
  email: { type: String},
  password: { type: String},
  role: { type: String, default: 'organizer'},
  accountType: { type: String, default: 'free'},
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema, 'users');
module.exports = User;