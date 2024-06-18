const mongoose = require('mongoose');

const suppliersSchema = new mongoose.Schema({
    supplier_name: { type: String, required: true },
    supplier_picture: { type: mongoose.Schema.Types.ObjectId, ref: 'SuppliersImages' ,required: true },
    supplier_price: { type: String, required: true },
    supplier_review_number: { type: Number },
    supplier_stars: { type: Number },
    categories_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Categories', required: true },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
});

const Suppliers = mongoose.model('Suppliers', suppliersSchema);
module.exports = Suppliers;