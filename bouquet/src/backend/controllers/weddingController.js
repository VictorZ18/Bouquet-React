const Weddings = require('../models/wedding');

class WeddingController {
    static getAllDoc = async (req, res) => {
        try {
            const result = await Weddings.find()
            res.send(result)
        } catch (error) {
            console.log(error)
        };
    }
    static create_a_wedding = async (req, res) => {
        const newWedding = new Weddings(req.body)
        try {
            const result = await newWedding.save()
            res.send(result)
        } catch (error) {
            console.log(error)
        };
    }
    static read_a_wedding = async (req, res) => {
        try {
            const result = await Weddings.findById(req.params.id)
            res.send(result)
        } catch (error) {
            console.log(error)
        };

    }
}

module.exports = WeddingController;