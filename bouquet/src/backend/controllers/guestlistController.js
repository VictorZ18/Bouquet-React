const Guestlist = require('../models/guestList');

class GuestlistController {
    static getAllDoc = async (req, res) => {
        try {
            const result = await Guestlist.find()
            res.send(result)
        } catch (error) {
            console.log(error)
        };
    }
    static create_a_guestlist = async (req, res) => {
        const newGuestlist = new Guestlist(req.body)
        try {
            const result = await newGuestlist.save()
            res.send(result)
        } catch (error) {
            console.log(error)
        };
    }
    static read_a_guestlist = async (req, res) => {
        try {
            const result = await Guestlist.findById(req.params.id)
            res.send(result)
        } catch (error) {
            console.log(error)
        };

    }
}

module.exports = GuestlistController;