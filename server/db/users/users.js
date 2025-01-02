const sql = require('../db');
const bcrypt = require('bcryptjs');

async function createUser({ username, password, email }) {
	const salt = bcrypt.genSaltSync(10);
	const hash = bcrypt.hashSync(password, salt);

	const [user] = await sql`
    INSERT INTO pokedex.USERS
      (username, email, password)
    VALUES
      (${username}, ${email}, ${hash})
    RETURNING *;
  `;

	return user;
}

module.exports = {
	createUser
};
