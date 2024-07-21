// signup-routes.js
const router = require('express').Router();
const { User } = require('../../models'); 

// Handle signup form submission
router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findByPk(email);

    if (existingUser) {
      res.status(400).render('signup', {
        // title: 'Signup',
        error: 'Email already in use'
      });
      console.log("existing user found")
      return;
    }

    const newUser = await User.create({
      email,
      password
    });

    req.session.save(() => {
      req.session.user_id = newUser.email;
      req.session.logged_in = true;
      });

      res.render('homepage', { logged_in: true });
    
  } catch (error) {
    res.status(500).render('signup', {
      error: 'An error occurred during signup', error
    });
  }

  //   const hashedPassword = await bcrypt.hash(password, 10);

  //   // create new user
  //   const newUser = await User.create({
  //     email,
  //     password: hashedPassword
  //   });

  //   req.session.user_id = newUser.id;
  //   req.session.logged_in = true;

  //   res.redirect('/signup');
  // } catch (error) {
  //   res.status(500).render('signup', {
  //     layout: 'main',
  //     title: 'Signup',
  //     error: 'An error occurred during signup', error
  //   });
  // }
});

module.exports = router;
