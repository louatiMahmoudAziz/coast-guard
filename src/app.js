const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

console.log("Database URL:", process.env.DATABASE_URL);

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
const emergencyRoutes = require('./routes/emergencyRoutes');
const patrolRoutes = require('./routes/patrolRoutes');
app.use('/api', emergencyRoutes);
app.use('/api', patrolRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
