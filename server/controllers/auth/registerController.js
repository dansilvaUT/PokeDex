const { createUser } = require('../../db/users/users');

async function registerUser(req, res) {
	try {
		const user = await createUser(req.body);
		res.status(201).json(user);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

module.exports = registerUser;
