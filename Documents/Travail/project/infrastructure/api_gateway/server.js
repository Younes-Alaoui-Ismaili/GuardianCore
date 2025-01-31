const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express(); // Create the Express instance FIRST

// Optional: If you need CORS options from .env
const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS?.split(',') || '*',
};

app.use(cors(corsOptions)); // Now app is defined, so this works

// Example endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' });
});

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
