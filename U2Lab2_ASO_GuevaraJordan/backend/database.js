const { Pool } = require('pg');

const pool = new Pool({
    user: 'user',
    host: 'database',
    database: 'appdb',
    password: 'example',
    port: 5432,
});

module.exports = pool;
