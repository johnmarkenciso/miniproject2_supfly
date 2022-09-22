const express = require('express');
const homeRoute = express.Router();


homeRoute.get('/', (req, res)=>{
    res.render('index',{title: "Supfly"})
})

module.exports = homeRoute;