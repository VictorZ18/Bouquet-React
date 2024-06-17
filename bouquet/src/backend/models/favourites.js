const mongoose = require('mongoose');

const FavouritesSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
    supplier_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Suppliers', required: true },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
});

const Favourites = mongoose.model('Favourites', FavouritesSchema, 'favourites');

module.exports = Favourites;