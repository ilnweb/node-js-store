const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
	MongoClient.connect('mongodb+srv://iliyan:codemode8894@cluster0-s4kfe.mongodb.net/test?retryWrites=true&w=majority')
		.then((result) => {
			console.log('connected');
			callback(result);
		})
		.catch((err) => {
			console.log(err);
		});
};

module.exports = mongoConnect;
