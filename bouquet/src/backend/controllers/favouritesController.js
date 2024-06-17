const Favourites = require('../models/favourites');

class FavouritesController {
    static getAllDoc = async (req, res) => {
        try {
            const result = await Favourites.find()
            res.send(result)
        } catch (error) {
            console.log(error)
        };
    }
    static create_a_favourite = async (req, res) => {
        const newFavourite = new Favourites(req.body)
        try {
            const result = await newFavourite.save()
            res.send(result)
        } catch (error) {
            console.log(error)
        };
    }
    static read_a_favourite = async (req, res) => {
        try {
            const result = await Favourites.findById(req.params.id)
            res.send(result)
        } catch (error) {
            console.log(error)
        };

    }
    static update_a_favourite = async (req, res) => {
        try {
            const result = await Favourites
                .findByIdAndUpdate(req
                    .params.id, req.body
                    , { new: true })
            res.send(result)
                }
        catch (error) {
            console.log(error)
        };
    }
    static delete_a_favourite = async (req, res) => {
        try {
            const result = await Favourites.findByIdAndDelete(req.params.id)
            res.send(result)
        } catch (error) {
            console.log(error)
        };
    }
};

module.exports = FavouritesController;