
const Product = require('../models/product')
// accept data in array
const products = []

exports.getAddProduct = (req, res, next) => {

    // res.sendFile(path.join(__dirname, '../', 'view', 'add-product.html'));
    res.render('add-product', {
        pageTitle: 'add-product',
        path: '/admin/add-product'
    })
}

exports.postAddProduct = (req, res, next) => {
    //For Ask
    //multidimensional array
    //             key   :  value
    // object
    //                          title
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll();
    res.render('shop', {
        pageTitle: 'Shop',
        //variable path
        path: '/',
        //variable:variable
        prods: products
    });
};