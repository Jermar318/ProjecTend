const router = require('express').Router();
const User = require('../../models/users');
// const bcrypt = require('bcrypt');

// Render login page
router.get('/', (req, res) => {
  res.render('login', {
    layout: 'main', 
    title: 'Login'
  });
});

// Handle login form submission
router.post('/', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find user by username or email
    const user = await User.findOne({
      where: {
        // Allow user to log in with either username or email
        [sequelize.Op.or]: [{ username }, { email: username }]
      }
    });

    if (user && await bcrypt.compare(password, user.password)) {
      // Set up user session
      req.session.user_id = user.id;
      req.session.logged_in = true;
      res.redirect('/');
    } else {
      res.status(401).render('login', {
        layout: 'main',
        title: 'Login',
        error: 'Invalid username or password' // Updated error message
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).render('login', {
      layout: 'main', 
      title: 'Login',
      error: 'An error occurred during login'
    });
  }
});

module.exports = router;