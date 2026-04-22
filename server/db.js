require('dotenv').config(); //load var from .env file into process.env locally
const Pool = require("pg").Pool;

const pool = new Pool({
    connectionString: process.env.DB_URL, //Render use this config connect string
    ssl:{
        rejectUnauthorized: false
    }
});

module.exports = pool;