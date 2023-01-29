const express = require('express');
const route = express.Router();
const userControler = require('../Controllers/UserController');

// @route POST api/registration
// @desc Register user
// @access Public
route.post('/registration',userControler.register);
module.exports = route;