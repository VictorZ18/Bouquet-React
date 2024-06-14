const Task = require('../models/task');

class TaskController {
    static getAllDoc = async (req, res) => {
        try {
            const result = await Task.find()
            res.send(result)
        } catch (error) {
            console.log(error)
        };
    }
    static create_a_task = async (req, res) => {
        const newTask = new Task(req.body)
        try {
            const result = await newTask.save()
            res.send(result)
        } catch (error) {
            console.log(error)
        };
    }
    static read_a_task = async (req, res) => {
        try {
            const result = await Task.findById(req.params.id)
            res.send(result)
        } catch (error) {
            console.log(error)
        };

    }
}

module.exports = TaskController;