const router = require('express').Router();
const {getUsers, getById, insert, remove, update} = require("../app/controllers/user.controller");

router.get('/', getUsers);
router.get('/:id', getById);
router.post('/', insert);
router.put('/:id', update);
router.delete('/:id', remove);


module.exports = router;