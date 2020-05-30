const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/add-product', (req, res, next) => {
	console.log('in the miidleware');
	res.send('<h1>Add Product</h1>');
	// next();
});

router.post('/add-product', (req, res, next) => {
	console.log(res.body);
	res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

module.exports = router;
