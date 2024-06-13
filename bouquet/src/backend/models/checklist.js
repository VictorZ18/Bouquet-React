const mongoose = require('mongoose');

const ChecklistSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
});

const Checklist = mongoose.model('Checklist', ChecklistSchema, 'checklist');
module.exports = Checklist;