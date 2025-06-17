import express from 'express';
import pkg from 'mongoose';
const { connect } = pkg;
import cors from 'cors';
import config from './src/config/config.js';
import authRoutes from './src/routes/auth.js';
import taskRoutes from './src/routes/tasks.js';
import projectRoutes from './src/routes/projects.js';
import userRoutes from './src/routes/users.js';
import errorHandler from './src/middleware/errorHandler.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Welcome to the Task Management API');
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/users', userRoutes);

// Error handling middleware
app.use(errorHandler);

// Database connection
console.log('Connecting to MongoDB with URI:', config.MONGODB_URI);
connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connection established'))
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });

export default app;