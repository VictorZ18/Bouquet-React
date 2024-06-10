const mongoose = require('mongoose');

const GuestlistSchema = new mongoose.Schema({
    event_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Events', required: true },
    list_name: { type: String, required: true },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
});

const Guestlist = mongoose.model('Guestlist', GuestlistSchema, 'guestlist');
module.exports = Guestlist;