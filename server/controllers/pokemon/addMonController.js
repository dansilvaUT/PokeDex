const { insertMon } = require('../../db/pokemon/insertMon');

async function addMonController(req, res) {
	try {
		const mon = await insertMon(req.body);

		if (!mon) {
			return res.status(400).json({ error: 'Pokemon not added!' });
		}

		res.status(201).json({ message: 'Pokemon added!' });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

module.exports = addMonController;
