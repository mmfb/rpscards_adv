var pg = require('pg');

const connectionString = process.env.DATABASE_URL
const Pool = pg.Pool
const pool = new Pool({
    connectionString,
    max: 1,
    ssl: {
        require: true, 
        rejectUnauthorized: false
    }
})

module.exports = pool;
/*
,
    ssl: {
        require: true, 
        rejectUnauthorized: false
    }
*/