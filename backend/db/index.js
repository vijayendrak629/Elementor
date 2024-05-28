// backend/db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'Chatbot',
  password: 'admin@123',
  port: 5432,
});

module.exports = pool;
