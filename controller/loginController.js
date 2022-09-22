const routerLogin = require('express').Router();
const User = require('../model/user');
const loginValidation = require('../controller/loginValidation')
const bcrypt = require('bcrypt');
const jwt = require ('jsonwebtoken');
const cookie = require('cookie-parser')
require('dotenv/config');


const login = async (req, res) => {
    const {error} = loginValidation(req.body);

    

    if(error){
        const alert = error.details[0].message;
        return res.render('login',{errors:alert});
    } 
    
    

    const user = await User.findOne({email:req.body.email});
    if(!user) return  res.render('login',{errors:"Email Invalid"});
    const userPassword = await bcrypt.compare(req.body.password, user.password)
    if(!userPassword) return res.render('login',{errors:"Passwod not match"});

    try {
        const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET);
        res.cookie('auth-token', token, { maxAge: 360000, httpOnly: true });
        res.redirect('/admin')
    } catch (error) {
        console.log(error)
    }


}

const logout = async (req,res) => {
    res.clearCookie('auth-token');
    res.redirect('/')
    res.end()
  

}

module.exports = {
    login,
    logout
}



