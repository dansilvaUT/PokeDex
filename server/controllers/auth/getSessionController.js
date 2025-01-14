async function getSession(req, res) {
	try {
		if (req.session.user) {
			res.status(200).json({
				id: req.session.user.id,
				username: req.session.user.username,
				email: req.session.user.email
			});
		} else {
			res.status(404).json({ error: 'No session found' });
		}
	} catch (error) {
		console.log(error);
	}
}

module.exports = getSession;
