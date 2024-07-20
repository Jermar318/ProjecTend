const express = require('express');
const router = express.Router();
const Task = require('../../models/task'); 

// Get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Get a single task by id
router.get('/:id', async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (task) {
      res.json(task);
    } else {
      res.status(404).send('Task not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Create a new task
router.post('/', async (req, res) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Update a task
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Task.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedTask = await Task.findByPk(req.params.id);
      res.status(200).json(updatedTask);
    } else {
      res.status(404).send('Task not found');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Delete a task
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Task.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send('Task deleted');
    } else {
      res.status(404).send('Task not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;