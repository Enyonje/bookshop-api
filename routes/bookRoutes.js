const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Task 1 route
router.get('/', bookController.getAllBooks);

module.exports = router;