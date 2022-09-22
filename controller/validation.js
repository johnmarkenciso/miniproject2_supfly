const Joi = require('joi');
const User = require('../model/user');

const validationReg = (data)=>{
    const schema = Joi.object({
        user_name: Joi.string().min(5).required(),
        email : Joi.string().email().required(),
        password: Joi.string().min(5).required()
    })
    return schema.validate(data);
}

module.exports = validationReg;