const express = require('express');
const router = express.Router();
const {User} = require('../../models');

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        // req.session.save(() => {
            // req.session.user_id = userData.id;
            // req.session.logged_in = true;

        if (!userData) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(200).json(userData);
        // });
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
