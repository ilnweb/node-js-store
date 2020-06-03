const mongodb = require('mongodb');
const getDB = require('../util/database').getDB;

class Product {
	constructor(title, price, description, imageUrl, id, userId) {
		this.title = title;
		this.price = price;
		this.description = description;
		this.imageUrl = imageUrl;
    this._id = id ? new mongodb.ObjectID(id) : null;
    this.userId = userId;
	}

	save() {
		const db = getDB();
		let dbOp;
		if (this._id) {
			dbOp = db.collection('products').updateOne({ _id: this._id }, { $set: this });
		} else {
			dbOp = db.collection('products').insertOne(this);
		}
		return dbOp.then((result) => console.log(result)).catch((err) => console.log(err));
	}

	static fetchAll() {
		const db = getDB();
		return db
			.collection('products')
			.find()
			.toArray()
			.then((products) => {
				console.log(products);
				return products;
			})
			.catch((err) => console.log(err));
	}
	static findById(prodId) {
		const db = getDB();
		return db
			.collection('products')
			.find({ _id: new mongodb.ObjectID(prodId) })
			.next()
			.then((product) => {
				return product;
			})
			.catch((err) => console.log(err));
	}

	static deleteById(prodId) {
		const db = getDB();
		return db
			.collection('products')
			.deleteOne({ _id: new mongodb.ObjectID(prodId) })
			.then((result) => {
				rconsole.log('Deleted');
			})
			.catch((err) => console.log(err));
	}
}

module.exports = Product;
