const express = require('express');

// # routes for sending users to the various html pages
const router = express.Router();

// Route for the home page
router.get('/', (req, res) => {
    res.render('homepage'); // Assuming you have a "home" Handlebars file
});

// Route for the about page
router.get('/login', (req, res) => {
    res.render('login'); // Assuming you have an "about" Handlebars file
});

// Route for the contact page
router.get('/contact', (req, res) => {
    res.render('project'); // Assuming you have a "contact" Handlebars file
});

module.exports = router;