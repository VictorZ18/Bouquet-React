mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String},
  email: { type: String},
  password: { type: String},
  role: { type: String, default: 'organizer'},
  accountType: { type: String, required: true, default: 'free'},
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

const User = model('User', userSchema);
module.exports = User;