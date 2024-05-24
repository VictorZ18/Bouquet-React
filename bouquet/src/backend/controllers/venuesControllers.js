const Venues = require('../models/venues.js');

class VenuesController {
    static getAllDoc = async (req, res) => {
        try {
            const result = await Venues.find()
            res.send(result)
        } catch (error) {
            console.log(error)
        };
    }
    static create_a_venue = async (req, res) => {
        const newVenue = new Venues(req.body)
        try {
            const result = await newVenue.save()
            res.send(result)
        } catch (error) {
            console.log(error)
        };
    }
    static read_a_venue = async (req, res) => {
        try {
            const result = await Venues.findById(req.params.id)
            res.send(result)
        } catch (error) {
            console.log(error)
        };

    }
}

module.exports = VenuesController;