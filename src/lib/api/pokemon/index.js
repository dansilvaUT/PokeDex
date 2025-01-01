import axios from 'axios';

const url = `https://pokeapi.co/api/v2/pokemon/`;

const getPokemon = async (name) => {
	try {
		const sanitized = name.toLowerCase().trim();
		const response = await axios.get(`${url}${sanitized}`);
		return response.data;
	} catch (e) {
		console.error(e);
	}
};

export default getPokemon;
