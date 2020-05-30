const path = require('path');
const express = require('express');
const router = express.Router();
const productsControll = require('../controllers/products');


router.get('/', productsControll.getProducts);

module.exports = router;
