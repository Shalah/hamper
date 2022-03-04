const router = require('express').Router();
const loginRoutes = require('./loginRoutes');
const apiRoutes = require('./api/');

router.use('/', loginRoutes);

router.use('/api/', apiRoutes);

module.exports = router;
