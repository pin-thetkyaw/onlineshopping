
const express = require('express');

// const path = require('path')
const router = express.Router();

const adminController = require('../controller/admin');

//add prod get
router.get('/add-product', adminController.getAddProduct);

// / app.get('/add - product', (req, res, next) => {
// //     

//add product post
router.post('/add-product', adminController.postAddProduct);
// console.log(req.body);
//product list
router.get('/products', adminController.getProducts);

module.exports = router;

