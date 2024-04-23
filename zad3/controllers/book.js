const Book = require('../models/Book');
const User = require('../models/User');

const getBooksList = (req, res) => {
  if (req.session.userId) {
    const books = Book.getAll();
    return res.render('books', { title: "Books", userId: req.session.userId, books });
  }
  return res.render('books', { title: "Books", userId: null, books: [] });
}

const getBookDetails = (req, res) => {
  const user = User.getById(+req.session.userId);
  const { id } = req.params;
  res.render('book-details', {
    didUserBorrowTheBook: user.findBorrowedBookById(+id),
    book: Book.getById(+id),
  })
}

const postBookBorrow = (req, res) => {

}

const postBookReturn = (req, res) => {

}

const getBookBorrowSuccess = (_, res) => {

}

const getBookReturnSuccess = (_, res) => {

}

module.exports = {
  getBooksList,
  getBookDetails,
  postBookBorrow,
  postBookReturn,
  getBookBorrowSuccess,
  getBookReturnSuccess,
}
