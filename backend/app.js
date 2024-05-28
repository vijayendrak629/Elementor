// backend/app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const messagesRoutes = require('./routes/messages');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', messagesRoutes);

module.exports = app;
