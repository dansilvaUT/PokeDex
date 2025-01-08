import axios from 'axios';

const apiUrl = '/api/auth/';

const registerUser = async (data: any) => {
	try {
		const response = await axios.post(`${apiUrl}register`, data);
		if (response.status === 201 && response.data) {
			return { status: response.status, message: 'User registered successfully' };
		}
	} catch (error) {
		console.error(error);
	}
};

export { registerUser };
