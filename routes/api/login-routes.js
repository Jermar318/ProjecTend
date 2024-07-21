const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');

// Render login page
// router.get('/', (req, res) => {
//     res.render('login', {
//         layout: 'main',
//         title: 'Login',
//         logged_in: req.session.logged_in || false
//     });
// });

// Handle login form submission
router.post('/', async (req, res) => {
    const { email, password } = req.body;

    const userData = await User.findByPk(email);

    if (!userData) {
        res.status(400).render('signup', {
            // title: 'Signup',
            error: 'Incorrect email or password'
        });
        return;
    }

    // Verify the posted password with the password store in the database
    const validPassword = await userData.checkPassword(password);

    if (!validPassword) {
        res.status(400).render('signup', {
            // title: 'Signup',
            error: 'Incorrect email or password'
        });
        return;
    }

    // Create session variables based on the logged in user
    req.session.save(() => {
        req.session.user_id = userData.email;
        req.session.logged_in = true;
        res.render('homepage', { logged_in: true });
    });

    // try {
    //     // Find user by email
    //     const user = await User.findOne({ where: { email } });

    //     if (user && await bcrypt.compare(password, user.password)) {
    //         // Set up user session
    //         req.session.user_id = user.id;
    //         req.session.logged_in = true;
    //         res.redirect('/');
    //     } else {
    //         res.status(401).render('login', {
    //             layout: 'main',
    //             title: 'Login',
    //             error: 'Invalid email or password', error,
    //             logged_in: false
    //         });
    //     }
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).render('login', {
    //         layout: 'main',
    //         title: 'Login',
    //         error: 'An error occurred during login', error,
    //         logged_in: false
    //     });
    // }
});

module.exports = router;
