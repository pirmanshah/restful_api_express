const router = require('express').Router();
const {login, register, logout} = require('../app/controllers/auth.controller');
const users = require('./user.routes');
const auth = require('../app/middleware/auth');

router.get('/halo', (req, res) => {
  const name = req.query.name;
  res.send(`Halo, ${name}!`);
});

router.post('/login', login);
router.post('/logout', logout);
router.post('/register', register);
router.use('/users', auth.isAuth, users);

module.exports = router;