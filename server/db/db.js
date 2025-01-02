const postgres = require('postgres');
require('dotenv').config();

const sql = postgres({
	host: process.env.SQL_HOST,
	port: process.env.SQL_PORT,
	database: process.env.SQL_DATABASE,
	username: process.env.SQL_USER,
	password: process.env.SQL_PASSWORD
});

module.exports = sql;
