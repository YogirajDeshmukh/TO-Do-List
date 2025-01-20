const express = require('express');
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController');

const router = express.Router();

router.get('/api/tasks', getTasks);
router.post('/api/task', createTask);
router.put('/api/task/:id', updateTask);
router.delete('/api/task/:id', deleteTask);

module.exports = router;
