import axios from 'axios';
interface CustomError {
	response?: {
		data?: {
			error?: string;
		};
	};
}

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

const loginUser = async (data: any) => {
	try {
		const response = await axios.post(`${apiUrl}login`, data);
		if (response.status === 200 && response.data) {
			return { status: response.status, data: response.data };
		}
	} catch (error) {
		console.error(error);
	}
};

const checkUser = async () => {
	try {
		const response = await axios.get(`${apiUrl}session`);
		if (response.status === 200 && response.data) {
			return { status: response.status, data: response.data };
		}
	} catch (error) {
		const typedError = error as CustomError;
		console.error(`No Session Found ${typedError.response?.data?.error ?? 'Unknown error'}`);
	}
};

export { registerUser, loginUser, checkUser };
