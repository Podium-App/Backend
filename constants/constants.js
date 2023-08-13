require('dotenv').config(); 

module.exports = {
    SERVER_PORT: process.env.PORT || 6000,
    SERVER_DB_URI: process.env.mongo, 
}