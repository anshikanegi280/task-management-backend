import { body, validationResult } from 'express-validator';

const validateTask = [
    body('title').notEmpty().withMessage('Title is required'),
    body('description').optional().isString().withMessage('Description must be a string'),
    body('status').optional().isIn(['pending', 'in-progress', 'completed']).withMessage('Status must be one of: pending, in-progress, completed'),
    body('assignedTo').optional().isMongoId().withMessage('Assigned user must be a valid MongoDB ID'),
];

const validateProject = [
    body('name').notEmpty().withMessage('Project name is required'),
    body('description').optional().isString().withMessage('Description must be a string'),
    body('teamMembers').optional().isArray().withMessage('Team members must be an array of user IDs'),
];

const validateUser = [
    body('username').notEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

export default {
    validateTask,
    validateProject,
    validateUser,
    validate,
};