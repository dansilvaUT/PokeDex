module.exports = {
	registerUser: require('./registerController'),
	authenticateUser: require('./authenticateController'),
	logoutUser: require('./logoutController'),
	getSession: require('./getSessionController')
};
