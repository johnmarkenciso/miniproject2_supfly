const express = require('express');
const marketRoute = express.Router();
const producController = require('../controller/productController');
const verify = require('../middleware/auth');



// create
marketRoute.post('/add', producController.addProducts)

//read
marketRoute.get('/',producController.getProducts)

//update
marketRoute.get('/update/:id', producController.updateProductsPage)
marketRoute.put('/update/:id', producController.toupdateProducts);

//delete
marketRoute.delete('/delete/:id', producController.deleteProducts);

module.exports = marketRoute;