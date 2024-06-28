var express = require('express');
var router = express.Router();

const userService = require('../services/userService');

router.post('/register', userService.register);
router.post('/login', userService.login);
router.get('/all', userService.getAll);

module.exports = router;
