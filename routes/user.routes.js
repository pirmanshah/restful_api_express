const router = require('express').Router();
const {getUsers, getById, insert, remove, update} = require("../app/controllers/user.controller");
const auth = require('../app/middleware/auth');

router.get('/', auth.isAuthorized, getUsers);
router.get('/:id', getById);
router.post('/', auth.isAuthorized, insert);
router.put('/:id', update);
router.delete('/:id', auth.isAuthorized, remove);

// router.get('/', getUsers);
// router.get('/:id', getById);
// router.post('/', insert);
// router.put('/:id', update);
// router.delete('/:id', remove);

module.exports = router;