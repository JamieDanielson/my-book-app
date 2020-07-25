const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    isbn: { type: String },
    averageRating: { type: Number },
    numberPages: { type: Number },
    yearPublished: { type: Number },
    genre: { type: String },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
