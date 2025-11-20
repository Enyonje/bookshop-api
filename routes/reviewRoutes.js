const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

router.get('/:bookId', reviewController.getReviewsByBook);     // Task 5
router.post('/', reviewController.addOrUpdateReview);          // Task 8
router.delete('/', reviewController.deleteReview);             // Task 9

module.exports = router;