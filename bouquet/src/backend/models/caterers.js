const mongoose = require('mongoose');

const caterersSchema = new mongoose.Schema({
    supplier_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Suppliers', required: true },
    category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Categories', required: true },
    caterer_speciality: { type: Array, required: true },
});

const Caterers = mongoose.model('Caterers', caterersSchema);
module.exports = Caterers;
