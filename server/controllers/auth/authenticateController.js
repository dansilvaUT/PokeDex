const bcrypt = require('bcryptjs');
const { checkUserExists } = require('../../db/users/checkUser');

async function authenticateUser(req, res) {
	const { username, password } = req.body;

	console.log(req.body);

	try {
		const user = await checkUserExists(username);
		if (!user) {
			res.status(404).json({ error: 'User not found' });
		}

		const authenticate = await bcrypt.compare(password, user.password);

		if (!authenticate) {
			res.status(401).json({ error: 'Invalid password' });
		}

		req.session.user = user;
		res.status(200).json(user);
	} catch (error) {
		console.log(error);
	}
}

module.exports = authenticateUser;
