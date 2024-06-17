const Booked = require('../models/booked'); 

class BookedController {
    static getAllDoc = async (req, res) => {
        try {
            const result = await Booked.find()
            res.send(result)
        } catch (error) {
            console.log(error)
        };
    }
    static create_a_booking = async (req, res) => {
        const newBooking = new Booked(req.body)
        try {
            const result = await newBooking.save()
            res.send(result)
        } catch (error) {
            console.log(error)
        };
    }
    static read_a_booking = async (req, res) => {
        try {
            const result = await Booked.findById(req.params.id)
            res.send(result)
        } catch (error) {
            console.log(error)
        };

    }
    static update_a_booking = async (req, res) => {
        try {
            const result = await Booked.findByIdAndUpdate(req
                .params.id, req.body
            )
            res.send(result)
        } catch (error) {
            console.log(error)
        };
    }
    static delete_a_booking = async (req, res) => {
        try {
            const result = await Booked.findByIdAndDelete(req.params.id)
            res.send(result)
        } catch (error) {
            console.log(error)
        };
    }
}

module.exports = BookedController;