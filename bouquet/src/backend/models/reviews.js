const mongoose = require('mongoose');

const reviewsSchema = new mongoose.Schema({
    reviewer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
    caterer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Caterers', required: true },
    review: { type: String, required: true },
    stars: { type: Number, required: true },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
});

const Reviews = mongoose.model('Reviews', reviewsSchema);
module.exports = Reviews;