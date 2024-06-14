const TaskPre = require('../models/taskPre');

class TaskPreController {
    static getAllDoc = async (req, res) => {
        try {
            const result = await TaskPre.find()
            res.send(result)
        } catch (error) {
            console.log(error)
        };
    }
    static create_a_task = async (req, res) => {
        const newTask = new TaskPre(req.body)
        try {
            const result = await newTask.save()
            res.send(result)
        } catch (error) {
            console.log(error)
        };
    }
    static read_a_task = async (req, res) => {
        try {
            const result = await TaskPre.findById(req.params.id)
            res.send(result)
        } catch (error) {
            console.log(error)
        };

    }
}

module.exports = TaskPreController;