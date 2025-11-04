// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Serve your HTML file from "public"
app.use(express.static('public'));

// API endpoint for the contact form
app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log('📩 New Message Received:', req.body);

  // (Later you can save this data to a database or send an email)
  res.json({ success: true, message: 'Form received successfully!' });
});

// Start the server
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
