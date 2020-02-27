const express = require('express');
// const path = require('path');

const router = express.Router();

const shopController = require('../controller/shop');

// const adminData = require('./admin');

router.get('/', shopController.getIndex);
router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/carts', shopController.getCart);
router.post('/carts', shopController.postCart);
router.post('/delete-cart-item', shopController.postDeleteCartItem);

module.exports = router
