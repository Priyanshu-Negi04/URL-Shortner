require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const urlRoutes = require('./routes/urlRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();


// Global Middleware BEFORE routes
app.use(cors());
app.use(express.json());

// Register API routes
app.use('/api', urlRoutes);
app.use('/api/admin', adminRoutes);

// Test root route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// DB connection and server startup
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected successfully!');
    const PORT = 5000;
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
