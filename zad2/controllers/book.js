const Book = require('../models/Book');

const getBooksList = (req, res) => {
  if (req.session.userId) {
    const books = Book.getAll();
    return res.render('books', { title: "Books", userId: req.session.userId, books });
  }
  return res.render('books', { title: "Books", userId: null, books: [] });
}

module.exports = {
  getBooksList,
}
