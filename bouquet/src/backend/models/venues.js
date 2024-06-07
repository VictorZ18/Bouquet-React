const mongoose = require('mongoose');

const venuesSchema = new mongoose.Schema({
    supplier_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Suppliers', required: true },
    category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Categories', required: true },
    venue_longitude: { type: String, required: true },
    venue_latitude: { type: String, required: true },
    venue_address: { type: String, required: true },
});

const Venues = mongoose.model('Venues', venuesSchema);
module.exports = Venues;
