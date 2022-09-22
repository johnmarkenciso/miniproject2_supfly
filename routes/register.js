const express = require('express');
const registerRoute = express.Router();
const userController = require('../controller/userController');


registerRoute.post('/', userController.addUser);


module.exports = registerRoute;