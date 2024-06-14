const mongoose = require('mongoose');

const taskPreSchema = new mongoose.Schema({
    name: { type: String, required: true },
    deadline: { type: Date },
    description: { type: String },
    completed: { type: Boolean, default: false },
    checklistId: { type: mongoose.Schema.Types.ObjectId, ref: 'Checklist'},
    user_ids: { type: Array, default: [] },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
});

const TaskPre = mongoose.model('TaskPre', taskPreSchema, 'taskpre');
module.exports = TaskPre;