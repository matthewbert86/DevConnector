// Set up express server
const express = require('express');
// bring in database
const connectDB = require('./config/db');

// Initialize app variable with express
const app = express();

// Connect Database
connectDB();

// res.send will send data to the browser
app.get('/', (req, res) => res.send('API Running'));

// Set up PORT
const PORT = process.env.PORT || 5000;

// Listen on a port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
