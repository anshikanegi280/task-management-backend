import Project from '../models/Project.js';

// Create a new project
const createProject = async (projectData) => {
    const project = new Project(projectData);
    return await project.save();
};

// Get all projects
const getAllProjects = async () => {
    return await Project.find().populate('tasks teamMembers');
};

// Get a project by ID
const getProjectById = async (projectId) => {
    return await Project.findById(projectId).populate('tasks teamMembers');
};

// Update a project
const updateProject = async (projectId, updateData) => {
    return await Project.findByIdAndUpdate(projectId, updateData, { new: true });
};

// Delete a project
const deleteProject = async (projectId) => {
    return await Project.findByIdAndDelete(projectId);
};

// Add a task to a project
const addTaskToProject = async (projectId, taskId) => {
    return await Project.findByIdAndUpdate(projectId, { $addToSet: { tasks: taskId } }, { new: true });
};

// Remove a task from a project
const removeTaskFromProject = async (projectId, taskId) => {
    return await Project.findByIdAndUpdate(projectId, { $pull: { tasks: taskId } }, { new: true });
};

export default {
    createProject,
    getAllProjects,
    getProjectById,
    updateProject,
    deleteProject,
    addTaskToProject,
    removeTaskFromProject
};