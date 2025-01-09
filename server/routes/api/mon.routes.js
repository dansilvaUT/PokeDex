const router = require('express').Router();

const monCtrls = require('../../controllers/pokemon');

//api/pokemon

router.route('/add-mon').post(monCtrls.addMon);
router.route('/fetch-user-mons').get(monCtrls.fetchUserMons);

module.exports = router;
