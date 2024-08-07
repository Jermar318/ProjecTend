const express = require('express');
const router = express.Router();
const { Card } = require('../../models');

// GET /cards
router.get('/', async (req, res) => {
    try {
        const cards = await Card.findAll();
        res.json(cards);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while retrieving cards', error });
    }
});

// GET single card by id
router.get('/:id', async (req, res) => {

    try {
        const card = await Card.findByPk(req.params.id, {include: 'user'});

        if (!card) {
            res.status(404).json({ message: 'Card not found' });
            return;
        }
        res.json(card);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while retrieving card' });
    }
});

// Create a new card
router.post('/', async (req, res) => {
    try {
        const card = await Card.create({
            boardId: 1,
            title: req.body.title,
            assignee: req.body.assignee,
            description: req.body.description,
            status: req.body.status
        });
        res.json(card);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while creating card', error});
    }
});

// Update a card by id
router.put('/:id', async (req, res) => {
    try {
    const card = await Card.findByPk(req.params.id);
    await card.update(req.body);
    res.json(card);
    }
    catch (error) {
        res.status(500).json({ message: 'An error occurred while updating card', error });
    }
});

// Delete a card by id
router.delete('/:id', async (req, res) => {
    try {
    const card = await Card.findByPk(req.params.id);
    await card.destroy();
    res.json({ deleted: true });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while deleting card', error });
    }
});

module.exports = router;