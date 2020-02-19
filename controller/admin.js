
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
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const title = req.body.title;
    const product = new Product(title, imageUrl, price, description)
    product.save()
        .then(result => {
            console.log(result)
            res.redirect('/');
        })
        .catch(err => {
            console.log(err);
        });
    res.redirect('/admin/add-product')

}

// //all data insert into  function=products or cd
// const products = Product.fetchAll((products) => {
//     res.render('admin/products.ejs', {
//         pageTitle: 'Admin Products',
//         //variable path
//         path: '/admin/products',
//         //variable:variable
//         prods: products

//     });

// });

exports.getProducts = (req, res, next) => {
    Product.fetchAll()
        .then(products => {
            res.render('admin/products.ejs', {
                pageTitle: 'Admin Products',
                //variable path
                path: '/admin/products',
                //variable:variable
                prods: products

            })
        })
        .catch(err => {
            console.log(err)
        })
}
