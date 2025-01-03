require('dotenv').config();
const express = require('express');
const app = express();
const session = require('express-session');
const routes = require('./routes');

app.use(express.json());
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: true,
		cookie: { maxAge: 1000 * 60 * 60 * 24 * 365 }
	})
);

app.use(routes);

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
