const mongoose = require('mongoose');

const eventsSchema = new mongoose.Schema({
    wedding_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Weddings', required: true },
    event_name: { type: String, required: true },
    start_hour: { type: String },  
    end_hour: { type: String },
    address_latitude: { type: String },
    address_longitude: { type: String },
    event_address: { type: String },
    event_information: { type: String, required: true },
    parking_address: { type: String },
    extra_info: { type: String },
});

const Events = mongoose.model('Events', eventsSchema);
module.exports = Events;
