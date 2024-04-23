const router = require('express').Router();
const {
  getSetUserSession,
  setUserSession,
} = require('../controllers/user');

router.get('/set', getSetUserSession);
router.post('/set', setUserSession);

module.exports = router;
