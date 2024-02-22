const express = require('express');
const UserController = require('../controllers/userController.js');

const router = express.Router();

router.get('/users', UserController.getAllDoc);
router.get('/users/create', UserController.getAllDoc);
router.get('/users/:id', UserController.read_a_user);

router.post('/users/create', UserController.create_a_user);
router.post('/users/login', UserController.loginUserControllerFn);


module.exports = router