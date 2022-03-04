const router = require('express').Router();
const userRoutes = require('./userRoutes');
const homeRoutes = require('./homeRoutes');
const itemRoutes = require('./itemRoutes')

router.use('/users', userRoutes);
router.use('/home', homeRoutes);
router.use('/item', itemRoutes);

module.exports = router;
