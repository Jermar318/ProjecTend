
const router = require('express').Router();
const apiRoutes = require("./api");

router.use('/api', apiRoutes);

router.get('/', async (req, res) => {
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

router.get('/members', async (req, res) => {
    try {
        res.render('members', {});
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/project', async (req, res) => {
    try {
        res.render('project', {});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;