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
        console.log(err);
        res.status(400).json(err);
    }
});

router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll();
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id);
        if (!userData) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const userData = await User.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!userData) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const userData = await User.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!userData) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
