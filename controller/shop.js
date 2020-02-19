const Product = require('../models/product');





exports.getIndex = (req, res, next) => {
    //all data insert into  function=products or cd
    Product.fetchAll().then(products => {
        res.render('shop/index.ejs', {
            pageTitle: 'Shop',
            //variable path
            path: '/',
            //variable:variable
            prods: products

        });





    });


};

exports.getProducts = (req, res, next) => {
    //all data insert into  function=products or cd
    Product.fetchAll().then(products => {
        res.render('shop/product-list.ejs', {
            pageTitle: 'All Products',
            //variable path
            path: '/products',
            //variable:variable
            prods: products

        });

    });
};






exports.getCarts = (req, res, next) => {
    //all data insert into  function=products or cd
    Product.fetchAll((cb) => {
        res.render('shop/cart.ejs', {
            pageTitle: 'Your Cart',
            //variable path
            path: '/cart',
            //variable:variable
            prods: cb

        });

    });
};
exports.getOrders = (req, res, next) => {
    //all data insert into  function=products or cd
    Product.fetchAll((cb) => {
        res.render('shop/orders.ejs', {
            pageTitle: 'Your Orders',
            //variable path
            path: '/orders',
            //variable:variable
            prods: cb

        });

    });
};
exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;

    Product.findById(prodId)
        .then(product => {
            res.render('shop/product-detail.ejs', {
                pageTitle: 'Product Deatils',
                path: '/products',
                product: product
            })
        })
        .catch(err => {
            console.log(err)
        })



};


