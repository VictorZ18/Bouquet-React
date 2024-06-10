const Events = require('../models/events');

class EventsController {
    static getAllDoc = async (req, res) => {
        try {
            const result = await Events.find()
            res.send(result)
        } catch (error) {
            console.log(error)
        };
    }
    static create_an_event = async (req, res) => {
        const newEvent = new Events(req.body)
        try {
            const result = await newEvent.save()
            res.send(result)
        } catch (error) {
            console.log(error)
        };
    }
    static read_an_event = async (req, res) => {
        try {
            const result = await Events.findById(req.params.id)
            res.send(result)
        } catch (error) {
            console.log(error)
        };

    }
}

module.exports = EventsController;