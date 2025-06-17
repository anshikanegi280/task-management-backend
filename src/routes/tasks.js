import { Router } from 'express';
const router = Router();
import { createTask, getAllTasks, getTaskById, updateTask, deleteTask, assignTask } from '../controllers/taskController.js';
import authenticate from '../middleware/auth.js';

// Route to create a new task
router.post('/', authenticate, createTask);

// Route to get all tasks
router.get('/', authenticate, getAllTasks);

// Route to get a specific task by ID
router.get('/:id', authenticate, getTaskById);

// Route to update a task by ID
router.put('/:id', authenticate, updateTask);

// Route to delete a task by ID
router.delete('/:id', authenticate, deleteTask);

// Route to assign a task to a user
router.post('/:id/assign', authenticate, assignTask);

export default router;