const sql = require('../db');

async function checkUserExists(username) {
	const [user] = await sql`
    SELECT * FROM pokedex.USERS
    WHERE username = ${username};
  `;

	return user;
}

module.exports = {
	checkUserExists
};
