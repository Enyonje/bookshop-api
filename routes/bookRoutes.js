const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Task 1: Get all books
router.get('/', bookController.getAllBooks);

// Task 2: Get book by ISBN
router.post('/isbn', bookController.getBookByISBN);
router.post('/author', bookController.getBooksByAuthor);
router.post('/title', bookController.getBooksByTitle);
router.get('/callback', bookController.getAllBooksCallback); // Task 10
router.post('/search-author', bookController.searchByAuthor);
router.post('/isbn-promise', bookController.searchByISBNPromise);
router.post('/search-title', bookController.searchByTitle);
module.exports = router;