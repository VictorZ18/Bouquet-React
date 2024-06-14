const Checklist = require('../models/checklist');

class ChecklistController {
    static getAllDoc = async (req, res) => {
        try {
            const result = await Checklist.find()
            res.send(result)
        } catch (error) {
            console.log(error)
        };
    }
    static create_a_checklist = async (req, res) => {
        const newChecklist = new Checklist(req.body)
        try {
            const result = await newChecklist.save()
            res.send(result)
        } catch (error) {
            console.log(error)
        };
    }
    static read_a_checklist = async (req, res) => {
        try {
            const result = await Checklist.findById(req.params.id)
            res.send(result)
        } catch (error) {
            console.log(error)
        };

    }
}

module.exports = ChecklistController;