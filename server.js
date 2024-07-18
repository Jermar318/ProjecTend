const express = require('express');
const routes = require('./routes');
const { sequelize }  = require('./models');
const exphbs = require('express-handlebars');


require('dotenv').config();

const hbs = exphbs.create();

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
