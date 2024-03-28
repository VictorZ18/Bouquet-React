const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema({
  category_name: { type: String, required: true },
  category_picture: { type: String, required: true},
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

const Categories = mongoose.model('Categories', categoriesSchema);
module.exports = Categories;