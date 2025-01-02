require('dotenv').config();
const express = require('express');
const app = express();
const authCtrls = require('./controllers/auth');

app.use(express.json());

app.get('/api', (req, res) => {
	res.json({ test: 'Hello World!' });
});

app.post('/api/auth', authCtrls.registerUser);

app.listen(3000, () => {
	console.log('Server is running on http://localhost:3000');
});
