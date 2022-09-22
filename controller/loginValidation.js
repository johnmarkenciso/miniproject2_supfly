const Joi = require('joi');
const User = require('../model/user');

const validationLogin = (data)=>{
    const schema = Joi.object({
        email : Joi.string().email().required(),
        password: Joi.string().min(5).required()
    })
    return schema.validate(data);
}

module.exports = validationLogin;