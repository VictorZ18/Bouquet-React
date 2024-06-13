const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    deadline: { type: Date },
    description: { type: String },
    completed: { type: Boolean, default: false },
    checklistId: { type: mongoose.Schema.Types.ObjectId, ref: 'Checklist', required: true },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
});

const Task = mongoose.model('Task', taskSchema, 'task');
module.exports = Task;