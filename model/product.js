const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({
        productName:{
            type: String,
            required: true
        },
        productDescription:{
            type: String,
            required: true
        },
        productFarm:{
            type: String,
            required: true
        },
        productImage:{
            type: String,
            required: true
        },
        productPrice:{
            type: Number,
            required:true
        },
        productLocation:{
            type: String,
            required:true
        }
})


const product = mongoose.model('product',productSchema);

module.exports = product;