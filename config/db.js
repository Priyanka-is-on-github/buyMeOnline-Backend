const Pool = require('pg').Pool;
require('dotenv').config();



//console.log(username, password);

// const pool = new Pool({
//     user: username,
//     password: password,
//     host: "localhost",
//     port: 5432,
//     database: "buymeonline_db"
// });

const pool = new Pool({
  host : 'ep-soft-bush-a15lasbq.ap-southeast-1.aws.neon.tech',
database : 'neondb',
user :'neondb_owner',
password : 'u1ZnGzO2FdLP',
  port: parseInt('5432'), // Neon typically uses 5432
    ssl: {
        rejectUnauthorized: false,  // Required for Neon DB SSL connection
    }
})


module.exports = pool;
