const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('./routes'); // Import routes

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: '', // no secret key 
  resave: false,
  saveUninitialized: true
}));

// Handlebars setup
app.engine('hbs', exphbs());
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views')); //  views are in the 'views' directory

// Static files
app.use(express.static(path.join(__dirname, 'public'))); //  files from 'public'

// Use routes
app.use('/login', loginRoutes);
app.use('/signup', require('./routes/signup-routes'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
