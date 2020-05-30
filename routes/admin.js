const path = require('path');
const express = require('express');
const router = express.Router();
const productsControll = require('../controllers/products');

// /admin/add-product => GET
router.get('/add-product', productsControll.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productsControll.postAddProduct);

module.exports = router;
