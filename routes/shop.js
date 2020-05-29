const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	console.log('in the other');
	res.send('<h1>Hello From express</h1>');
});

module.exports = router;
