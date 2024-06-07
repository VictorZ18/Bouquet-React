const Caterers = require('../models/caterers.js');

class CaterersController {
    static getAllDoc = async (req, res) => {
        try {
            const result = await Caterers.find()
            res.send(result)
        } catch (error) {
            console.log(error)
        };
    }
    static create_a_caterer = async (req, res) => {
        const newCaterer = new Caterers(req.body)
        try {
            const result = await newCaterer.save()
            res.send(result)
        } catch (error) {
            console.log(error)
        };
    }
    static read_a_caterer = async (req, res) => {
        try {
            const result = await Caterers.findById(req.params.id)
            res.send(result)
        } catch (error) {
            console.log(error)
        };

    }
}

module.exports = CaterersController;