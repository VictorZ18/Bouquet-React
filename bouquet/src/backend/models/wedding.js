const mongoose = require('mongoose');

const weddingsSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    wedding_date: { type: Date },
    wedding_theme: { type: String },
});

const Weddings = mongoose.model('Weddings', weddingsSchema);
module.exports = Weddings;
