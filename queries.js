const Pool = require('pg').Pool
const pool = new Pool({
    user: 'auliaagustin',
    host: 'localhost',
    database: 'dvdrental',
    password: '',
    port: 5432
})

module.exports = pool;