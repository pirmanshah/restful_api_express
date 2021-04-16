const router = require('express').Router();
const users = require('./user.routes');

router.get('/halo', (req, res) => {
  const name = req.query.name;
  res.send(`Halo, ${name}!`);
});

router.use('/users',users);

module.exports = router;