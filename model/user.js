const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new 
Schema({
    user_name: {
        type: String,
        required: true,
        max: 150,
        min: 5
    },
    email:{
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        max: 150,
        min: 5
    },
    date :{
        type: Date,
       default: Date.now

    }
})

const user = mongoose.model('user',userSchema);

module.exports = user;