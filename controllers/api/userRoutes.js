const router = require("express").Router();
const { User } = require("../../models");

// THis part create the new user
// 
router.post("/", async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } 
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// This is for the login
// it looks in the databse to find the exact email

router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "This is an incorrect email and/or password.\n Enter a valid email and password" });
      return;
    }

    // This checks the user password to see if it matches
    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "This is an incorrect email and/or password.\n Enter a valid email and password" });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbUserData, message: "You are logged in to your account" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// This is for logging out
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
