const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database');

const TrelloCard = db.define('TrelloCard', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING
  },
  listId: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = TrelloCard;
