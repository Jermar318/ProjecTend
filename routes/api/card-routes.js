const express = require('express');
const router = express.Router();
const {Card} = require('../../models');

// GET /cards
router.get('/', async (req, res) => {
  const cards = await Card.findAll();
  res.json(cards);
});

// GET single card by id
router.get('/:id', async (req, res) => {
    const card = await Card.findByPk(req.params.id);
    res.json(card);
    });

// Create a new card
router.post('/', async (req, res) => {
    const card = await Card.create(req.body);
    res.json(card);
});

// Update a card by id
router.put('/:id', async (req, res) => {
    const card = await Card.findByPk(req.params.id);
    await card.update(req.body);
    res.json(card);
});

module.exports = router;