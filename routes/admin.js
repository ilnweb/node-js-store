const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
	console.log('in the miidleware');
	res.send('<h1>Add Product</h1>');
	// next();
});

router.post('/add-product', (req, res, next) => {
	console.log(res.body);
	res.redirect('/');
	// next();
});

module.exports = router;
