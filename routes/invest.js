const express = require('express');
const investRoute = express.Router();


investRoute.get('/', (req, res)=>{
    res.render('invest',{title: "Invest"})
})

module.exports = investRoute;