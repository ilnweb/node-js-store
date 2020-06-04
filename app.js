const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controllers/error');
const User = require('./models/user');
const mongoose = require('mongoose');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
	User.findById('5ed8bd7d02c023566c8c6968')
		.then((user) => {
			req.user = user;
			next();
		})
		.catch((err) => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
	.connect('mongodb+srv://iliyan:codemode8894@cluster0-s4kfe.mongodb.net/shop?retryWrites=true&w=majority')
	.then((result) => {
		User.findOne().then((user) => {
			if (!user) {
				const user = new User({
					name: 'iliyan',
					email: 'iliyan@gmail.com',
					cart: {
						items: []
					}
				});
				user.save();
			}
		});
		app.listen(4000);
	})
	.catch((err) => {
		console.log(err);
	});
