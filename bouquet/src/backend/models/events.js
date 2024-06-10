const mongoose = require('mongoose');

const eventsSchema = new mongoose.Schema({
    wedding_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Weddings', required: true },
    event_name: { type: String, required: true },
    event_address: { type: String },
    event_information: { type: String, required: true },
});

const Events = mongoose.model('Events', eventsSchema);
module.exports = Events;
