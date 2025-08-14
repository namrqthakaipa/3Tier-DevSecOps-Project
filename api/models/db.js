require('dotenv').config();
const mysql = require('mysql2');

function createDbPool() {
  return mysql.createPool({
    host: process.env.DB_HOST || 'mysql',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || 'crud_app',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : undefined
  });
}

const db = createDbPool();

// Test initial connection with retries
let retries = 5;
(function connectWithRetry() {
  db.getConnection((err, conn) => {
    if (err) {
      console.error(`MySQL connection failed: ${err.message}`);
      retries -= 1;
      if (retries > 0) {
        console.log(`Retrying in 5 seconds... (${retries} retries left)`);
        setTimeout(connectWithRetry, 5000);
      } else {
        console.error('Out of retries — exiting.');
        process.exit(1);
      }
    } else {
      console.log(`✅ Connected to MySQL at ${process.env.DB_HOST || 'mysql'}`);
      conn.release();
    }
  });
})();

module.exports = db;
