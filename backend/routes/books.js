const router = require('express').Router();
let Book = require('../models/book.model');

router.route('/').get((req, res) => {
  Book.find()
    .then((books) => res.json(books))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/new').post((req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const isbn = req.body.isbn;
  const averageRating = req.body.averageRating;
  const numberPages = req.body.numberPages;
  const yearPublished = req.body.yearPublished;
  const genre = req.body.genre;

  const newBook = new Book({
    title,
    author,
    isbn,
    averageRating,
    numberPages,
    yearPublished,
    genre,
  });

  newBook
    .save()
    .then(() => res.json('Book added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Book.findById(req.params.id)
    .then((book) => res.json(book))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then(() => res.json('Book deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/books/edit/:id').post((req, res) => {
  Book.findById(req.params.id)
    .then((book) => {
      book.title = req.body.title;
      book.author = req.body.author;
      book.isbn = req.body.isbn;
      book.averageRating = req.body.averageRating;
      book.numberPages = req.body.numberPages;
      book.yearPublished = req.body.yearPublished;
      book.genre = req.body.genre;

      book
        .save()
        .then(() => res.json('Book updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
