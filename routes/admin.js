
const express = require('express');

// const path = require('path')
const router = express.Router();

const productController = require('../controller/product');

//add prod
router.get('/add-product', productController.getAddProduct);

// / app.get('/add - product', (req, res, next) => {
// //     


router.post('/add-product', productController.postAddProduct);
// console.log(req.body);

module.exports = router;

