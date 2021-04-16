const router = require('express').Router();
const {getUsers} = require("../app/controllers/user.controller");

router.get('/', getUsers);


module.exports = router;