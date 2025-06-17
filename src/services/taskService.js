import Task from '../models/Task.js';

const createTask = async (taskData) => {
    const task = new Task(taskData);
    return await task.save();
};

const getTaskById = async (taskId) => {
    return await Task.findById(taskId).populate('assignedTo', 'username email');
};

const updateTask = async (taskId, updateData) => {
    return await Task.findByIdAndUpdate(taskId, updateData, { new: true })
        .populate('assignedTo', 'username email');
};

const deleteTask = async (taskId) => {
    return await Task.findByIdAndDelete(taskId);
};

const getAllTasks = async (filters = {}, page = 1, limit = 10) => {
    const skip = (page - 1) * limit;
    const tasks = await Task.find(filters)
        .populate('assignedTo', 'username email')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(parseInt(limit));
    
    const total = await Task.countDocuments(filters);
    
    return {
        tasks,
        pagination: {
            currentPage: parseInt(page),
            totalPages: Math.ceil(total / limit),
            totalTasks: total,
            hasNext: page < Math.ceil(total / limit),
            hasPrev: page > 1
        }
    };
};

const assignTaskToUser = async (taskId, userId) => {
    return await Task.findByIdAndUpdate(taskId, { assignedTo: userId }, { new: true });
};

const updateTaskStatus = async (taskId, status) => {
    return await Task.findByIdAndUpdate(taskId, { status }, { new: true });
};

export default {
    createTask,
    getTaskById,
    updateTask,
    deleteTask,
    getAllTasks,
    assignTaskToUser,
    updateTaskStatus,
};