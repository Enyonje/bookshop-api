const Review = require('../models/Review');

// Task 5: Get reviews for a book
exports.getReviewsByBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    if (!bookId) return res.status(400).json({ error: 'Book ID is required' });

    const reviews = await Review.find({ bookId });
    if (reviews.length === 0) return res.status(404).json({ error: 'No reviews found for this book' });

    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

const Review = require('../models/Review');

// Task 8: Add or modify a review
exports.addOrUpdateReview = async (req, res) => {
  try {
    const { bookId, reviewer, rating, comment } = req.body;
    if (!bookId || !reviewer) {
      return res.status(400).json({ error: 'bookId and reviewer are required' });
    }

    const existingReview = await Review.findOne({ bookId, reviewer });

    if (existingReview) {
      // Modify existing review
      existingReview.rating = rating ?? existingReview.rating;
      existingReview.comment = comment ?? existingReview.comment;
      await existingReview.save();
      return res.json({ message: 'Review updated', review: existingReview });
    }

    // Add new review
    const newReview = new Review({ bookId, reviewer, rating, comment });
    await newReview.save();
    res.status(201).json({ message: 'Review added', review: newReview });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

const Review = require('../models/Review');

// Task 9: Delete review by reviewer and bookId
exports.deleteReview = async (req, res) => {
  try {
    const { bookId, reviewer } = req.body;
    if (!bookId || !reviewer) {
      return res.status(400).json({ error: 'bookId and reviewer are required' });
    }

    const deleted = await Review.findOneAndDelete({ bookId, reviewer });
    if (!deleted) {
      return res.status(404).json({ error: 'Review not found or already deleted' });
    }

    res.json({ message: 'Review deleted successfully', review: deleted });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};