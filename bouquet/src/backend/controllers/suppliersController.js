const Suppliers = require('../models/suppliers.js');

class SuppliersController {
    static getAllDoc = async (req, res) => {
        try {
            const result = await Suppliers.find()
            res.send(result)
        } catch (error) {
            console.log(error)
        };
    }
    static create_a_supplier = async (req, res) => {
        const newSupplier = new Suppliers(req.body)
        try {
            const result = await newSupplier.save()
            res.send(result)
        } catch (error) {
            console.log(error)
        };
    }
    static read_a_supplier = async (req, res) => {
        try {
            const result = await Suppliers.findById(req.params.id)
            res.send(result)
        } catch (error) {
            console.log(error)
        };

    }
}

module.exports = SuppliersController;