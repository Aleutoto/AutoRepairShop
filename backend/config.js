const dotenv = require('dotenv');
dotenv.config();

const config = {
    dbURI: process.env.DATABASE_URI || 'mongodb://localhost:27017/autorepairshop',
    port: process.env.PORT || 3000,
};

module.exports = config;