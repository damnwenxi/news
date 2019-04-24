const mysql = require('mysql');
const co = require('co-mysql');
const config = require('./config');

let connection = mysql.createConnection(config);
module.exports = co(connection);
