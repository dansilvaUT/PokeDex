async function logoutUser(req, res) {
	try {
		req.session.destroy();
		res.status(200).json({ message: 'Session destroyed' });
	} catch (error) {
		console.log(error);
	}
}

module.exports = logoutUser;
