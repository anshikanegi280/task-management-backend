import Task from '../models/Task.js';
import taskService from '../services/taskService.js';

// Create a new task
export async function createTask(req, res) {
    try {
        const taskData = {
            ...req.body,
            assignedTo: req.user._id // Automatically assign to authenticated user
        };
        const newTask = await taskService.createTask(taskData);
        res.status(201).json({
            success: true,
            message: 'Task created successfully',
            task: newTask
        });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            message: 'Error creating task', 
            error: error.message 
        });
    }
}

// Get all tasks
export async function getAllTasks(req, res) {
    try {
        const { status, priority, page = 1, limit = 10 } = req.query;
        const filters = { assignedTo: req.user._id }; // Only get user's tasks
        
        if (status) filters.status = status;
        if (priority) filters.priority = priority;
        
        const tasks = await taskService.getAllTasks(filters, page, limit);
        res.status(200).json({
            success: true,
            tasks: tasks.tasks,
            pagination: tasks.pagination
        });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            message: 'Error fetching tasks', 
            error: error.message 
        });
    }
}

// Update a task
export async function updateTask(req, res) {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        
        // Check if task belongs to user
        const existingTask = await taskService.getTaskById(id);
        if (!existingTask || existingTask.assignedTo.toString() !== req.user._id.toString()) {
            return res.status(404).json({ 
                success: false,
                message: 'Task not found or unauthorized' 
            });
        }
        
        const updatedTask = await taskService.updateTask(id, updatedData);
        res.status(200).json({
            success: true,
            message: 'Task updated successfully',
            task: updatedTask
        });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            message: 'Error updating task', 
            error: error.message 
        });
    }
}

// Delete a task
export async function deleteTask(req, res) {
    try {
        const { id } = req.params;
        
        // Check if task belongs to user
        const existingTask = await taskService.getTaskById(id);
        if (!existingTask || existingTask.assignedTo.toString() !== req.user._id.toString()) {
            return res.status(404).json({ 
                success: false,
                message: 'Task not found or unauthorized' 
            });
        }
        
        await taskService.deleteTask(id);
        res.status(200).json({
            success: true,
            message: 'Task deleted successfully'
        });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            message: 'Error deleting task', 
            error: error.message 
        });
    }
}

// Get a task by ID
export async function getTaskById(req, res) {
    try {
        const { id } = req.params;
        const task = await taskService.getTaskById(id);
        
        if (!task || task.assignedTo.toString() !== req.user._id.toString()) {
            return res.status(404).json({ 
                success: false,
                message: 'Task not found or unauthorized' 
            });
        }
        
        res.status(200).json({
            success: true,
            task: task
        });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            message: 'Error fetching task', 
            error: error.message 
        });
    }
}

// Assign a task to a user
export async function assignTask(req, res) {
    try {
        const { id } = req.params;
        const { userId } = req.body;
        
        // Check if task belongs to user
        const existingTask = await taskService.getTaskById(id);
        if (!existingTask || existingTask.assignedTo.toString() !== req.user._id.toString()) {
            return res.status(404).json({ 
                success: false,
                message: 'Task not found or unauthorized' 
            });
        }
        
        const assignedTask = await taskService.assignTaskToUser(id, userId);
        res.status(200).json({
            success: true,
            message: 'Task assigned successfully',
            task: assignedTask
        });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            message: 'Error assigning task', 
            error: error.message 
        });
    }
}