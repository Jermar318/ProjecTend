const express = require('express');
const router = express.Router();
const { Board, Card } = require('../../models');

// GET /boards
router.get('/', async (req, res) => {
    try {
        const boards = await Board.findAll();
        res.json(boards);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while retrieving boards', error });
    }
});

// POST single board by id
router.get('/:id', async (req, res) => {
    try {
        const board = await Board.findByPk(req.params.id, {
            include: [Card]
        });

        if (!board) {
            res.status(404).json({ message: 'Board not found', error });
            return;
        }

        res.json(board);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while retrieving board', error });
    }
});

// Create a new board
router.post('/', async (req, res) => {
    try {
        const board = await Board.create(req.body);
        res.json(board);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while creating board', error });
    }
});

// Update a board by id
router.put('/:id', async (req, res) => {
    try {
        const board = await Board.findByPk(req.params.id);
        await board.update(req.body);
        res.json(board);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while creating board', error });
    }
});

// Delete a board by id
router.delete('/:id', async (req, res) => {
    try {
        const board = await Board.findByPk(req.params.id);
        await board.destroy();
        res.json({ deleted: true });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while creating board', error });
    }
});

module.exports = router;