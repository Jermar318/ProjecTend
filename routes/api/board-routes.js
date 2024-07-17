const express = require('express');
const router = express.Router();
const {Board, List, Card} = require('../../models');

// GET /boards
router.get('/', async (req, res) => {
  const boards = await Board.findAll();
  res.json(boards);
});

// POST single board by id
router.get('/:id', async (req, res) => {
    const board = await Board.findByPk(req.params.id, {
        include: [{
        model: List,
        include: [Card]
        }]
    });
    res.json(board);
    });

// Create a new board
router.post('/', async (req, res) => {
    const board = await Board.create(req.body);
    res.json(board);
});

// Update a board by id
router.put('/:id', async (req, res) => {
    const board = await Board.findByPk(req.params.id);
    await board.update(req.body);
    res.json(board);
});

// Delete a board by id
router.delete('/:id', async (req, res) => {
    const board = await Board.findByPk(req.params.id);
    await board.destroy();
    res.json({ deleted: true });
});

module.exports = router;