const router = require('express').Router();

const authCtrls = require('../../controllers/auth');

router.route('/register').post(authCtrls.registerUser);
router.route('/login').post(authCtrls.authenticateUser);
router.route('/logout').post(authCtrls.logoutUser);
router.route('/session').get(authCtrls.getSession);

module.exports = router;
