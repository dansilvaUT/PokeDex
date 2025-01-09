const router = require('express').Router();
const authRoutes = require('./auth.routes');
const monRoutes = require('./mon.routes');

router.use('/auth', authRoutes);
router.use('/pokemon', monRoutes);

module.exports = router;
