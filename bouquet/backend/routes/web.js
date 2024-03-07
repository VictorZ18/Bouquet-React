const express = require('express');
const UserController = require('../controllers/userController.js');
const CategoriesController = require('../controllers/categoriesController.js')

const router = express.Router();

router.get('/users', UserController.getAllDoc);
router.get('/users/create', UserController.getAllDoc);
router.get('/users/:id', UserController.read_a_user);

router.post('/users/create', UserController.create_a_user);
router.post('/users/login', UserController.loginUserControllerFn);

router.get('/categories', CategoriesController.getAllDoc);
router.get('/categories/create', CategoriesController.getAllDoc);
router.get('/categories/:id', CategoriesController.read_a_category);

router.post('categories/create', CategoriesController.create_a_category);


module.exports = router