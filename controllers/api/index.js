const router = require('express').Router();
const userRoutes = require('./userRoutes');
const homeRoutes = require('./homeRoutes');

router.use('/users', userRoutes);
router.use('/home', homeRoutes);

module.exports = router;
