const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String},
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  email: { type: String},
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

const Guest = mongoose.model('Guest', guestSchema, 'guest');
module.exports = Guest;