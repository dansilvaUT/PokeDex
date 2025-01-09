const sql = require('../db');

async function insertMon(pokemon) {
	const [mon] = await sql`
        INSERT INTO pokedex.OWNED_MONS
            (pokemon_name, poke_data, owner)
        VALUES
            (${pokemon.pokemon_name}, ${pokemon.poke_data}, ${pokemon.owner_id})
        RETURNING *;
    `;
	return mon;
}

module.exports = {
	insertMon
};
