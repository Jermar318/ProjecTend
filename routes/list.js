const express = require('express');
const router = express.Router();
const {List, Card} = require('../models');

// GET /lists
router.get('/', async (req, res) => {
  const lists = await List.findAll();
  res.json(lists);
});

// GET single list by id
router.get('/:id', async (req, res) => {
    const list = await List.findByPk(req.params.id, {
        include: [Card]
    });
    res.json(list);
    });

// Create a new list
router.post('/', async (req, res) => {
    const list = await List.create(req.body);
    res.json(list);
});

// Update a list by id
router.put('/:id', async (req, res) => {
    const list = await List.findByPk(req.params.id);
    await list.update(req.body);
    res.json(list);
});

// Delete a list by id
router.delete('/:id', async (req, res) => {
    const list = await List.findByPk(req.params.id);
    await list.destroy();
    res.json({ deleted: true });
});

module.exports = router;
