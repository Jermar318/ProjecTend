const router = require('express').Router();
const User = require('../../models/users'); 
// const bcrypt = require('bcrypt');

// Handle signup form submission
router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
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
    const newUser = await User.create({ email, password: hashedPassword });

    req.session.user_id = newUser.id;
    req.session.logged_in = true;

    res.status(200).json({ message: 'Signup successful. You can now log in.' });
  } catch (error) {
    res.status(500).render('signup', {
      layout: 'main',
      title: 'Signup',
      error: 'An error occurred during signup', error
    });
  }
});

module.exports = router;
