const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
	// next();
});

router.post('/add-product', (req, res, next) => {
	res.redirect('/');
	// next();
});

module.exports = router;
