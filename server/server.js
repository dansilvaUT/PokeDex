require('dotenv').config();
const express = require('express');
const app = express();
const session = require('express-session');
const authCtrls = require('./controllers/auth');

app.use(express.json());
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: true,
		cookie: { maxAge: 1000 * 60 * 60 * 24 * 365 }
	})
);

app.get('/api', (req, res) => {
	res.json({ test: 'Hello World!' });
});

app.post('/api/auth/register', authCtrls.registerUser);
app.post('/api/auth/login', authCtrls.authenticateUser);
app.post('/api/auth/logout', authCtrls.logoutUser);
app.get('/api/auth/session', authCtrls.getSession);

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
