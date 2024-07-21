// signup-routes.js
const router = require('express').Router();
const User = require('../../models/user'); 
// const bcrypt = require('bcrypt');

// Render signup page
router.get('/signup', (req, res) => {
  res.render('signup', {
    layout: 'signup',
    title: 'Signup'
  });
});

// Handle signup form submission
router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      res.status(400).render('signup', {
        layout: 'signup',
        title: 'Signup',
        error: 'Email already in use', error
      });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // create new user
    const newUser = await User.create({
      email,
      password: hashedPassword
    });

    req.session.user_id = newUser.id;
    req.session.logged_in = true;

    res.redirect('/signup');
  } catch (error) {
    res.status(500).render('signup', {
      layout: 'main',
      title: 'Signup',
      error: 'An error occurred during signup', error
    });
  }
});

module.exports = router;
