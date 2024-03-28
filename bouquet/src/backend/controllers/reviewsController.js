const Reviews = require('../models/reviews.js');

class ReviewsController {
    static getAllDoc = async (req, res) => {
        try {
            const result = await Reviews.find()
            res.send(result)
        } catch (error) {
            console.log(error)
        };
    }
    static create_a_review = async (req, res) => {
        const newReview = new Reviews(req.body)
        try {
            const result = await newReview.save()
            res.send(result)
        } catch (error) {
            console.log(error)
        };
    }
    static read_a_review = async (req, res) => {
        try {
            const result = await Reviews.findById(req.params.id)
            res.send(result)
        } catch (error) {
            console.log(error)
        };

    }
}

module.exports = ReviewsController;