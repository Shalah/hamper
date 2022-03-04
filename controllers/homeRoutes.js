const router = require('express').Router();

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('login');
});

router.get('/homepage', async (req, res) => {
  res.render('homepage');
});

module.exports = router;