const mongoose = require('mongoose');
const logger = require('../utils/logger');
require('dotenv').config();

const mongodbUri = process.env.MONGODB_URI;
console.log('MongoDB URI:', mongodbUri);

const connectDB = async () => {
    try {
        await mongoose.connect(mongodbUri, { useNewUrlParser: true, useUnifiedTopology: true });
        logger.info('🚀 Connected to MongoDB');
    } catch (error) {
        console.error(error);
        logger.error(error);
    }
};

module.exports = connectDB;
