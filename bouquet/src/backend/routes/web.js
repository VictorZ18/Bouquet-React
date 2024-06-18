const express = require('express');
const UserController = require('../controllers/userController.js');
const CategoriesController = require('../controllers/categoriesController.js');
const SuppliersController = require('../controllers/suppliersController.js');
const ReviewsController = require('../controllers/reviewsController.js');
const CaterersController = require('../controllers/caterersController.js');
const VenuesController = require('../controllers/venuesControllers.js');
const GuestController = require('../controllers/guestsController.js');
const GuestlistController = require('../controllers/guestlistController.js');
const EventsController = require('../controllers/eventsController.js');
const WeddingController = require('../controllers/weddingController.js');
const TaskController = require('../controllers/taskController.js');
const ChecklistController = require('../controllers/checklistController.js');
const TaskPreController = require('../controllers/taskPreController.js');
const FavouritesController = require('../controllers/favouritesController.js');
const BookedController = require('../controllers/bookedController.js');
const imageController = require('../controllers/imageController.js');

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

router.get('/guests', GuestController.getAllDoc);
router.get('/guests/create', GuestController.getAllDoc);
router.get('/guests/:id', GuestController.read_a_guest);

router.post('/guests/create', GuestController.create_a_guest);
router.post('/guests/login', GuestController.loginUserControllerFn);

router.get('/guestlist', GuestlistController.getAllDoc);
router.get('/guestlist/create', GuestlistController.getAllDoc);
router.get('/guestlist/:id', GuestlistController.read_a_guestlist);

router.post('/guestlist/create', GuestlistController.create_a_guestlist);

router.get('/events', EventsController.getAllDoc);
router.get('/events/create', EventsController.getAllDoc);
router.get('/events/:id', EventsController.read_an_event);

router.post('/events/create', EventsController.create_an_event);

router.get('/weddings', WeddingController.getAllDoc);
router.get('/weddings/create', WeddingController.getAllDoc);
router.get('/weddings/:id', WeddingController.read_a_wedding);

router.post('/weddings/create', WeddingController.create_a_wedding);

router.get('/tasks', TaskController.getAllDoc);
router.get('/tasks/create', TaskController.getAllDoc);
router.get('/tasks/:id', TaskController.read_a_task);

router.post('/tasks/create', TaskController.create_a_task);
router.put('/tasks/:id', TaskController.update_a_task);
router.delete('/tasks/:id', TaskController.delete_a_task);

router.get('/checklist', ChecklistController.getAllDoc);
router.get('/checklist/create', ChecklistController.getAllDoc);
router.get('/checklist/:id', ChecklistController.read_a_checklist);

router.post('/checklist/create', ChecklistController.create_a_checklist);

router.get('/taskPre', TaskPreController.getAllDoc);
router.get('/taskPre/create', TaskPreController.getAllDoc);
router.get('/taskPre/:id', TaskPreController.read_a_task);

router.post('/taskPre/create', TaskPreController.create_a_task);

router.get('/favourites', FavouritesController.getAllDoc);
router.get('/favourites/create', FavouritesController.getAllDoc);
router.get('/favourites/:id', FavouritesController.read_a_favourite);

router.post('/favourites/create', FavouritesController.create_a_favourite);
router.put('/favourites/:id', FavouritesController.update_a_favourite);
router.delete('/favourites/:id', FavouritesController.delete_a_favourite);

router.get('/booked', BookedController.getAllDoc);
router.get('/booked/create', BookedController.getAllDoc);
router.get('/booked/:id', BookedController.read_a_booking);

router.post('/booked/create', BookedController.create_a_booking);
router.put('/booked/:id', BookedController.update_a_booking);
router.delete('/booked/:id', BookedController.delete_a_booking);

router.post('/image/upload', imageController.imageUpload);
router.get('/image/get', imageController.getImage);

module.exports = router