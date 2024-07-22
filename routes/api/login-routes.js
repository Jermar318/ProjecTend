const router = require('express').Router();
const { User } = require('../../models');

// Handle login form submission
router.post('/', async (req, res) => {
    const { email, password } = req.body;

    const userData = await User.findByPk(email);

    if (!userData) {
        res.status(400).render('login', {
            error: 'Incorrect email or password'
        });
        return;
    }

    // Verify the posted password with the password store in the database
    const validPassword = await userData.checkPassword(password);

    if (!validPassword) {
        res.status(400).render('login', {
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
});

module.exports = router;
