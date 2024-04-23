const router = require('express').Router();
const {
  getBooksList,
  getBookDetails,
  postBookBorrow,
  postBookReturn,
  getBookBorrowSuccess,
  getBookReturnSuccess,
} = require('../controllers/book');

router.get('/', getBooksList);
router.get('/books/:id', getBookDetails);
router.post('/books/borrow/:id', postBookBorrow);
router.post('/books/return/:id', postBookReturn);
router.get('/books/borrow/success', getBookBorrowSuccess);
router.get('/books/return/success', getBookReturnSuccess);

module.exports = router;
