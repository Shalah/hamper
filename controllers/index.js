const router = require('express').Router();
const loginRoutes = require('./loginRoutes');
const apiRoutes = require('./api/');
const homeRoutes = require('./homeRoutes');

router.use('/login', loginRoutes);

router.use('/api/', apiRoutes);

router.use('/', homeRoutes);

module.exports = router;
