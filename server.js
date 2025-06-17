import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import app from './app.js';
import config from './src/config/config.js';

const PORT = config.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});