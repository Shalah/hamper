const router = require('express').Router();

const withAuth = require('../utils/auth')

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('homepage');
});

// Access to one user account
// Use the custom middleware before allowing the user to access the account/page

router.get('/users/:id', withAuth, async (req, res) => {
  try {
    
  } 
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router; 
