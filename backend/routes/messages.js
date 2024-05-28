// backend/routes/messages.js
const express = require('express');
const router = express.Router();
const conversationModel = require('../models/conversation');

router.get('/messages', async (req, res) => {
  try {
    const messages = await conversationModel.getMessages();
    res.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).send(error.message);
  }
});

router.post('/messages', async (req, res) => {
  console.log('Received message:', req.body);
  try {
    const userMessage = req.body;
    
    // Save the user message to the database
    const savedUserMessage = await conversationModel.addMessage(userMessage);

    // Check if the received message is from a user
    if (userMessage.user === 'user') {
      // Simulate a chatbot response only for user messages
      const botResponse = {
        text: 'This is an automated response.',
        user: 'bot',
        timestamp: new Date().toISOString(),
        conversationId: userMessage.conversationId, // Match the conversation ID of the user message
        parentId: savedUserMessage.id, // Set the parent ID to the ID of the user message
      };

      // Do not save the bot response to the database
      // await conversationModel.addMessage(botResponse);

      console.log('Bot response:', botResponse);
      // Return the bot response to the frontend
      res.json(botResponse);
    } else {
      // Return the saved user message to the frontend if it's not a user message
      res.json(savedUserMessage);
    }
  } catch (error) {
    console.error('Error in /messages POST:', error);
    res.status(500).send(error.message);
  }
});

router.get('/case', (req, res) => {
  const caseDetails = {
    productName: 'Elementor Hosting - Basic',
    status: 'Open',
    lastUpdated: new Date().toISOString(),
  };
  res.json(caseDetails);
});

module.exports = router;
