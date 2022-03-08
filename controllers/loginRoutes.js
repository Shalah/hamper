const router = require('express').Router();

const withAuth = require('../utils/auth');

router.post('/homepage', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('homepage');
});

router.post('/', async (req, res) => {
  res.render('login');
});

// Access to one user account
// Use the custom middleware before allowing the user to access the account/page

router.post('/users/:id', withAuth, async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('homepage');
    return;
  }
  res.render('login');
});

router.post('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('homepage');
    return;
  }

  res.render('signup');
});

module.exports = router;
