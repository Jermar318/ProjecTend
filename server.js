// server.js
require('dotenv').config();
const express = require('express');
const app = express();
const trelloRoutes = require('./routes/trelloRoutes');
const db = require('./config/database');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/trello', trelloRoutes);

// Connect to Database
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
