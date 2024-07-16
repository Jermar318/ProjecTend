require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
});

// Import models
const Board = require('./board')(sequelize);
const List = require('./list')(sequelize);
const Card = require('./card')(sequelize);

// Define associations
Board.associate({ List });
List.associate({ Board, Card });
Card.associate({ List });

module.exports = { sequelize, Board, List, Card };
