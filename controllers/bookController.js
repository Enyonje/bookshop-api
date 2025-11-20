const Book = require('../models/Book');

// Task 1: Get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Task 2: Get book by ISBN
exports.getBookByISBN = async (req, res) => {
  try {
    const { isbn } = req.body;
    if (!isbn) return res.status(400).json({ error: 'ISBN is required' });

    const book = await Book.findOne({ isbn });
    if (!book) return res.status(404).json({ error: 'Book not found' });

    res.json(book);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Task 3: Get books by author
exports.getBooksByAuthor = async (req, res) => {
    try {
      const { author } = req.body;
      if (!author) return res.status(400).json({ error: 'Author name is required' });
  
      const books = await Book.find({ author: { $regex: new RegExp(author, 'i') } });
      if (books.length === 0) return res.status(404).json({ error: 'No books found for this author' });
  
      res.json(books);
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  };

  // Task 4: Get books by title
exports.getBooksByTitle = async (req, res) => {
    try {
      const { title } = req.body;
      if (!title) return res.status(400).json({ error: 'Title is required' });
  
      const books = await Book.find({ title: { $regex: new RegExp(title, 'i') } });
      if (books.length === 0) return res.status(404).json({ error: 'No books found with that title' });
  
      res.json(books);
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  };

  // Task 10: Get all books using async callback
exports.getAllBooksCallback = (req, res) => {
    const Book = require('../models/Book');
  
    Book.find({}, (err, books) => {
      if (err) {
        return res.status(500).json({ error: 'Server error' });
      }
      res.json(books);
    });
  };

  const Book = require('../models/Book');

// Task 11: Search by ISBN using Promises
exports.searchByISBNPromise = (req, res) => {
  const { isbn } = req.body;
  if (!isbn) return res.status(400).json({ error: 'ISBN is required' });

  Book.findOne({ isbn })
    .then(book => {
      if (!book) return res.status(404).json({ error: 'Book not found' });
      res.json(book);
    })
    .catch(err => {
      res.status(500).json({ error: 'Server error' });
    });
};

// Task 12: Search books by author
exports.searchByAuthor = async (req, res) => {
    try {
      const { author } = req.body;
      if (!author) return res.status(400).json({ error: 'Author name is required' });
  
      const books = await Book.find({ author: { $regex: new RegExp(author, 'i') } });
      if (books.length === 0) return res.status(404).json({ error: 'No books found for this author' });
  
      res.json(books);
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  };

  // Task 13: Search books by title
exports.searchByTitle = async (req, res) => {
    try {
      const { title } = req.body;
      if (!title) return res.status(400).json({ error: 'Title is required' });
  
      const books = await Book.find({ title: { $regex: new RegExp(title, 'i') } });
      if (books.length === 0) return res.status(404).json({ error: 'No books found with that title' });
  
      res.json(books);
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  };