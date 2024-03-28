const express = require('express');
const UserController = require('../controllers/userController.js');
const CategoriesController = require('../controllers/categoriesController.js');
const CaterersController = require('../controllers/caterersController.js');
const ReviewsController = require('../controllers/reviewsController.js');

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

router.get('/caterers', CaterersController.getAllDoc);
router.get('/caterers/create', CaterersController.getAllDoc);
router.get('/caterers/:id', CaterersController.read_a_caterer);

router.post('/caterers/create', CaterersController.create_a_caterer);

router.get('/reviews', ReviewsController.getAllDoc);
router.get('/reviews/create', ReviewsController.getAllDoc);
router.get('/reviews/:id', ReviewsController.read_a_review);

router.post('/reviews/create', ReviewsController.create_a_review);


module.exports = router