// comment-routes.js
const express = require('express');
const router = express.Router();
const { Comment, Card, User } = require('../../models');

// get all comments
router.get('/', async (req, res) => {
  try {
    const comments = await Comment.findAll();
    res.json(comments);
  } catch (err) {
    console.error('Error fetching comments', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// get single comment by id
router.get('/:id', async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.id);
    if (!comment) {
      res.status(404).json({ message: 'Comment not found' });
      return;
    }
    res.json(comment);
  } catch (err) {
    console.error('Error fetching comment', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// create a new comment
router.post('/', async (req, res) => {
  try {
    const { cardId, userId, content } = req.body;
    const newComment = await Comment.create({ cardId, userId, content });
    res.status(201).json(newComment);
  } catch (err) {
    console.error('Error creating comment', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// update a comment by id
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;

    const comment = await Comment.findByPk(id);
    if (!comment) {
      res.status(404).json({ message: 'Comment not found' });
      return;
    }

    comment.content = content;
    await comment.save();

    res.json(comment);
  } catch (err) {
    console.error('Error updating comment', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// delete a comment by id
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findByPk(id);
    if (!comment) {
      res.status(404).json({ message: 'Comment not found' });
      return;
    }

    await comment.destroy();
    res.json({ deleted: true });
  } catch (err) {
    console.error('Error deleting comment', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
