
const Product = require('../models/product')
// accept data in array
// const products = []

exports.getAddProduct = (req, res, next) => {

    // res.sendFile(path.join(__dirname, '../', 'view', 'add-product.html'));
    res.render('admin/add-product', {
        pageTitle: 'add-product',
        path: '/admin/add-product'
    })
}

exports.postAddProduct = (req, res, next) => {
    // const title = req.body.title
    //For Ask
    //multidimensional array
    //             key   :  value
    // object create
    //                          title
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, imageUrl, price, description)
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    //all data insert into  function=products or cd
    const products = Product.fetchAll((products) => {
        res.render('admin/products.ejs', {
            pageTitle: 'Admin Products',
            //variable path
            path: '/admin/products',
            //variable:variable
            prods: products

        });

    });
};