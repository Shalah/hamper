const router = require('express').Router();
const { User } = require('../../models');


// This is used to create a new user
router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    const newUser = await User.create({
      name: req.body.name,
      email:req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.name = newUser.name;
      req.session.email = newUser.email;
      req.session.loggedIn = true;

      res.json(newUser);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
    
  }
});

// This is used to login using matching username
router.post('/login', async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email
      },
    });

    if (!user) {
      console.log(user, 'L 44');
      res.status(400).json({ message: 'There is no user associated with this account' });
      return;
      
    }

    const validPassword = user.checkPassword(req.body.password);

    if (!validPassword) {
      console.log(validPassword, 'L 53');
      res.status(400).json({ message: 'There is no user associated with this account' });
      return;
    }

    req.session.save(() => {
      req.session.userId = user.id;
      req.session.name = user.name;
      req.session.email = user.email;
      req.session.loggedIn = true;

      res.json({ user, message: 'You are logged in' });
    });
  } catch (err) {
    res.status(400).json({ message: 'There is no user associated with this account. Try again' });
  }
});

// This is used to log out
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
