const express = require('express');
const UserController = require('../controllers/userController.js');
const CategoriesController = require('../controllers/categoriesController.js');
const SuppliersController = require('../controllers/suppliersController.js');
const ReviewsController = require('../controllers/reviewsController.js');
const CaterersController = require('../controllers/caterersController.js');
const VenuesController = require('../controllers/venuesControllers.js');

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

router.get('/suppliers', SuppliersController.getAllDoc);
router.get('/suppliers/create', SuppliersController.getAllDoc);
router.get('/suppliers/:id', SuppliersController.read_a_supplier);

router.post('/suppliers/create', SuppliersController.create_a_supplier);

router.get('/reviews', ReviewsController.getAllDoc);
router.get('/reviews/create', ReviewsController.getAllDoc);
router.get('/reviews/:id', ReviewsController.read_a_review);

router.post('/reviews/create', ReviewsController.create_a_review);

router.get('/caterers', CaterersController.getAllDoc);
router.get('/caterers/create', CaterersController.getAllDoc);
router.get('/caterers/:id', CaterersController.read_a_caterer);

router.post('/caterers/create', CaterersController.create_a_caterer);

router.get('/venues', VenuesController.getAllDoc);
router.get('/venues/create', VenuesController.getAllDoc);
router.get('/venues/:id', VenuesController.read_a_venue);

router.post('/venues/create', VenuesController.create_a_venue);

module.exports = router