const router = require('express').Router();
const {
  getBooksList,
} = require('../controllers/book');

router.get('/', getBooksList);

module.exports = router;
