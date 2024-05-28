// backend/models/conversation.js
const pool = require('../db');

const getMessages = async () => {
  const res = await pool.query('SELECT * FROM messages ORDER BY timestamp ASC');
  return res.rows;
};

const addMessage = async (message) => {
  const res = await pool.query(
    'INSERT INTO messages (text, "user", timestamp) VALUES ($1, $2, $3) RETURNING *',
    [message.text, message.user, message.timestamp]
  );
  return res.rows[0];
};

module.exports = {
  getMessages,
  addMessage,
};
