const express = require('express');
const loginRoute = express.Router();
const loginController = require('../controller/loginController')
const auth = require("../middleware/auth");

loginRoute.get('/', (req, res)=>{
    res.render('login')
})

loginRoute.post('/', loginController.login)

loginRoute.get('/logout', loginController.logout)





module.exports = loginRoute;