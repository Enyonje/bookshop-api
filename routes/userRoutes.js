const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.registerUser); // Task 6
router.post('/login', userController.loginUser);       // Task 7

module.exports = router;