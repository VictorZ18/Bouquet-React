const { get } = require('mongoose');
const imageSchema = require('../models/image');

class imageController {
    static async imageUpload(req, res) {
        try {
            const { name, imageUrl } = req.body;
            const image = new imageSchema({ name, imageUrl });
            await image.save();
            console.log(image);
            res.status(201).json({ message: 'Image uploaded successfully' });
        } catch (err) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    static async getImage(req, res) {
        try {
            const images = await imageSchema.find();
            res.status(200).json(images);
        } catch (err) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
};

module.exports = imageController;