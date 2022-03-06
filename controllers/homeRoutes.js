const router = require('express').Router();

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('login');
});

router.get('/homepage', async (req, res) => {
  res.render('homepage');
});

router.get('/item', async (req, res) => {
  res.render('item');
});

router.get('/settings', async (req, res) => {
  res.render('settings');
});

module.exports = router;
