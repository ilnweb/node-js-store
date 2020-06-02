const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'codemode8894', { dialect: 'mysql', host: 'localhost' });


module.exports = sequelize;