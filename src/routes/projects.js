import { Router } from 'express';
const router = Router();
import { createProject, getAllProjects, getProjectById, updateProject, deleteProject } from '../controllers/projectController.js';
import { authenticate } from '../middleware/auth.js';

// Create a new project
router.post('/', authenticate, createProject);

// Get all projects
router.get('/', authenticate, getAllProjects);

// Get a specific project by ID
router.get('/:id', authenticate, getProjectById);

// Update a project by ID
router.put('/:id', authenticate, updateProject);

// Delete a project by ID
router.delete('/:id', authenticate, deleteProject);

export default router;