const express = require('express');
const adminRouter = express.Router();
const  productController = require('../controller/productController.js');
const Products = require('../model/product')
const user = require('../model/user')
const verify = require('../middleware/auth');

adminRouter.get('/',verify, async(req,res)=>{
    const userCount = await user.count();
    const productCount = await Products.count();
    Products.find().sort({createdAt: -1}).then((products)=>{
        res.render('admin',{products: products, userCount, productCount});
    })
} )


// //add product
// adminRouter.post('/product/add', productController.addProducts);

// //edit
// adminRouter.get('/product/edit', productController.updateProductsPage);
// adminRouter.put('/product/add', productController.toupdateProducts);

// //delete
// adminRouter.delete('product/delete', productController.deleteProducts);

module.exports = adminRouter;

