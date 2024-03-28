const Categories = require('../models/categories.js');

class CategoriesController {
    static getAllDoc = async (req, res) => {
        try {
            const result = await Categories.find()
            res.send(result)
        } catch (error) {
            console.log(error)
        };
    }
    static create_a_category = async (req, res) => {
        const newCategory = new Categories(req.body)
        try {
            const result = await newCategory.save()
            res.send(result)
        } catch (error) {
            console.log(error)
        };
    }
    static read_a_category = async (req, res) => {
        try {
            const result = await Categories.findById(req.params.id)
            res.send(result)
        } catch (error) {
            console.log(error)
        };

    }
}

module.exports = CategoriesController;