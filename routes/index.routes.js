const router = require('express').Router();
const {login, register} = require('../app/controllers/auth.controller');
const users = require('./user.routes');
const auth = require('../app/middleware/auth');

router.get('/halo', (req, res) => {
  const name = req.query.name;
  res.send(`Halo, ${name}!`);
});

router.post('/login', login);
router.post('/register', register);
router.use('/users', auth.isAuth, users);

// router.post('/login', login);
// router.post('/register', register);
// router.use('/users', users);

module.exports = router;