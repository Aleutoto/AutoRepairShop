const dotenv = require('dotenv');
dotenv.config();

const config = {
    dbURI: process.env.DATABASE_URI || 'mongodb://localhost:27017/autorepairshop',
    port: process.env.PORT || 3000,
};

const logLevels = {
    INFO: 'INFO',
    WARN: 'WARN',
    ERROR: 'ERROR',
};

const logger = (level, message) => {
    const timestamp = new Date().toISOString();
    if (Object.values(logLevels).includes(level)) {
        console.log(`${timestamp} - ${level}: ${message}`);
    } else {
        console.log(`${timestamp} - INFO: ${message}`);
    }
};

logger(logLevels.INFO, 'AutoRepairShop application started');
logger(logLevels.WARN, 'This is a warning message');
logger(logLevels.ERROR, 'Error encountered in application');

config.logger = logger;

module.exports = config;