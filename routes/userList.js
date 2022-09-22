const express = require('express');
const userListRoute = express.Router();
const userController = require('../controller/userController');
const verify = require('../middleware/auth');

userListRoute.get('/',verify, userController.getUser);


module.exports = userListRoute;
