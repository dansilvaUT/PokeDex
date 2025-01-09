const sql = require('../db');

async function selectUserMons(user_id) {
	const mons = await sql`
        SELECT * FROM pokedex.OWNED_MONS
        WHERE owner = ${user_id};
    `;
	return mons;
}

module.exports = {
	selectUserMons
};
