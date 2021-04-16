const router = require('express').Router();
const {getUsers, getById, insert, update} = require("../app/controllers/user.controller");

router.get('/', getUsers);
router.get('/:id', getById);
router.post('/', insert);
router.put('/:id', update);


module.exports = router;