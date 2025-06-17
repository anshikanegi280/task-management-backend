console.log('Raw MONGODB_URI from env:', process.env.MONGODB_URI);

const config = {
    PORT: process.env.PORT || 3000,
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb+srv://negianshi5:anshi1234@anshika.h51fj.mongodb.net/?retryWrites=true&w=majority&appName=anshika',
    JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',
    API_KEY: process.env.API_KEY || 'your_api_key',
    NODE_ENV: process.env.NODE_ENV || 'development',
};

console.log('Config MONGODB_URI:', config.MONGODB_URI);

export default config;