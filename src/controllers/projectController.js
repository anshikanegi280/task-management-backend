import Project from '../models/Project.js';
import projectService from '../services/projectService.js';

// Create a new project
export async function createProject(req, res) {
    try {
        const projectData = req.body;
        const newProject = await projectService.createProject(projectData);
        res.status(201).json(newProject);
    } catch (error) {
        res.status(500).json({ message: 'Error creating project', error: error.message });
    }
}

// Get all projects
export async function getAllProjects(req, res) {
    try {
        const projects = await projectService.getAllProjects();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving projects', error: error.message });
    }
}

// Get a project by ID
export async function getProjectById(req, res) {
    try {
        const projectId = req.params.id;
        const project = await projectService.getProjectById(projectId);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving project', error: error.message });
    }
}

// Update a project
export async function updateProject(req, res) {
    try {
        const projectId = req.params.id;
        const updatedData = req.body;
        const updatedProject = await projectService.updateProject(projectId, updatedData);
        if (!updatedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.status(200).json(updatedProject);
    } catch (error) {
        res.status(500).json({ message: 'Error updating project', error: error.message });
    }
}

// Delete a project
export async function deleteProject(req, res) {
    try {
        const projectId = req.params.id;
        const deletedProject = await projectService.deleteProject(projectId);
        if (!deletedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting project', error: error.message });
    }
}