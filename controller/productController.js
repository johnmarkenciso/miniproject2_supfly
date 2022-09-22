const Products = require('../model/product')


const getProducts = async(req,res)=>{
    const token = req.cookies['auth-token'];
    Products.find().sort({createdAt: -1}).then((products)=>{
        res.render('marketplace', {products:products, token:token});
    })
}

const getProductsID = async (req,res) => {
    const id = req.params.id;
    Products.findById(id)
    .then((result) => {
        res.render('view', {products: result, title: "Product Detail"})
    })
    .catch(err => console.log(err))
}


const addProducts = async(req,res) =>{
    
    const product = new Products(req.body)
    await product.save()
    .then(result => res.redirect('/admin'))
    .catch(err => console.log(err));
}

const updateProductsPage = (req, res) => {
    const id = req.params.id;
    Products.findById(id)
    .then((result) => {
        // res.render('update', {products: result, title: "Product Detail"})
        res.render('edit', {products:result, title:"Edit Product"});
    })
    .catch(err => console.log(err))
}

const toupdateProducts = async (req,res) =>{
    let id = req.params.id;

    let producUpdate = await Products.findByIdAndUpdate(id, {
          productName: req.body.productName,
          productDescription: req.body.productDescription,
          productFarm: req.body.productFarm,
          productImage: req.body.productImage,
          productPrice: req.body.productPrice,
          productLocation: req.body.productLocation
      })
  
      if(!producUpdate) return res.status(404).send(`Product not found, can't be updated`);
      res.redirect('/admin')
}

const deleteProducts = async (req, res) =>{
   
      const id = req.params.id;
      const deleteProduct = await  Products.findByIdAndDelete(id)
      
      if(!deleteProduct){
        return res.status(404).send(`Book not found ,can't be deleted`);
      }
      res.redirect('/admin')
    
}
module.exports = {
    getProducts,
    addProducts,
    updateProductsPage,
    toupdateProducts,
    deleteProducts
}