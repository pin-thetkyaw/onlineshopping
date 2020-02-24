
const Product = require('../models/product')
const mongodb = require('mongodb');
// accept data in array
// const products = []

exports.getAddProduct = (req, res, next) => {

    // res.sendFile(path.join(__dirname, '../', 'view', 'add-product.html'));
    res.render('admin/product-form.ejs', {
        pageTitle: 'add-product',
        path: '/admin/add-product',
        editing: false
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
            res.redirect('/admin/products');
        })
        .catch(err => {
            console.log(err);
        });


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
exports.postDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId
    Product.deleteById(prodId).then(() => {
        console.log('Your product is been deleted');
        res.redirect('/admin/products')
    })
        .catch(err => {
            console.log(err);
        })

}
exports.getEditProduct = (req, res, next) => {
    const prodId = req.params.productId;
    const editMode = req.query.edit;
    Product.findById(prodId)
        .then(product => {
            res.render('admin/product-form', {
                pageTitle: 'Edit',
                path: '/admin/edit-product',
                product: product,
                editing: editMode
            });
        })
        .catch(err => {
            console.log(err)
        })

}

exports.postEditProduct = (req, res, next) => {
    const prodId = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedimageUrl = req.body.imageUrl;
    const updatedprice = req.body.price;
    const updateddescription = req.body.description;

    const product = new Product(updatedTitle, updatedimageUrl, updatedprice, updateddescription, new mongodb.ObjectId(prodId))
    product.save().then(result => {
        console.log("Your updated is sucessful")
        res.redirect('/admin/products')
    }).catch(err => {
        console.log(err)
    })

};

