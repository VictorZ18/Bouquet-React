const mongoose = require('mongoose');

const caterersSchema = new mongoose.Schema({
    caterer_name: { type: String, required: true },
    caterer_picture: { type: String, required: true},
    caterer_speciality: { type: String, required: true },
    caterer_price: { type: String, required: true },
    caterer_review_number: { type: Number, required: true },
    caterer_stars: { type: Number, required: true },
    categories_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Categories', required: true },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
});

const Caterers = mongoose.model('Caterers', caterersSchema);
module.exports = Caterers;