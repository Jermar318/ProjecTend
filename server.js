const express = require('express');
const routes = require('./routes'); // Assuming you have a routes file
const { sequelize } = require('./models'); // Assuming you have Sequelize models
const exphbs = require('express-handlebars');
const path = require('path');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3002;

// Configure Handlebars
const hbs = exphbs.create();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use(routes); // Assuming routes are defined in a separate file

app.get('/', (req, res) => {
    try {
        res.json({test: 'hi'});
    } catch (err) {
        res.json({error: err});
    }
});

// Sequelize sync
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
});
