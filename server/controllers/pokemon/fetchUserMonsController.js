const { selectUserMons } = require('../../db/pokemon/selectUserMons');

async function fetchUserMonsController(req, res) {
	try {
		const mons = await selectUserMons(req.session.user.id);

		if (!mons) {
			return res.status(400).json({ error: 'No pokemon found!' });
		}
		res.status(200).json(mons);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

module.exports = fetchUserMonsController;
