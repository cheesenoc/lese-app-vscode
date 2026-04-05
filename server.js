#!/usr/bin/env node
require('dotenv').config();
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const FormData = require('form-data');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static('.'));
app.use(express.json());

// Simple speech recognition using a free API (AssemblyAI has a free tier)
app.post('/speech', upload.single('audio'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No audio file provided' });
    }

    // For demo purposes, using a simple mock response
    // In production, you'd integrate with a real speech recognition service
    const mockTranscripts = [
      req.body.expectedWord || 'TEST',
      req.body.expectedWord ? req.body.expectedWord.toUpperCase() : 'BEISPIEL'
    ];

    // Simulate some processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Return a mock transcript (in real implementation, this would be from the API)
    const transcript = mockTranscripts[Math.floor(Math.random() * mockTranscripts.length)];

    // Clean up uploaded file
    fs.unlinkSync(req.file.path);

    res.json({ transcript: transcript.toUpperCase() });
  } catch (error) {
    console.error('Speech recognition error:', error);
    res.status(500).json({ error: 'Speech recognition failed' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Speech recognition available at http://localhost:' + PORT);
});