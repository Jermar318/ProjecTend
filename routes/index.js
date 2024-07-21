const router = require('express').Router();
const apiRoutes = require("./api/connector.js");
const isAuthenicated = require('./config/middleware/isAuthenicated.js');

router.use('/api', apiRoutes);

router.get('/', isAuthenicated, async (req, res) => {
    try {
        res.render('homepage', {});
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    try {
        res.render('login', {});
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/signup', async (req, res) => {
    try {
        res.render('signup', {});
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/logout', async (req, res) => {
    try {
        if (req.session?.logged_in) {
            req.session.destroy(() => {
                res.redirect('/');
                return;
            });
        }
        res.render('logout');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;