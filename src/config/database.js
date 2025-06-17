import pkg from 'mongoose';
const { connect } = pkg;
import config from './config.js';

const connectDB = async () => {
    try {
        await connect(config.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

export default connectDB;