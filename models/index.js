require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
});

// Import models
const User = require('./user')(sequelize);
const Card = require('./card')(sequelize);

Card.hasOne(User, {
  foreignKey: 'email',
  onDelete: 'SET NULL',
});

// This might be wrong
User.belongsTo(Card, {
  foreignKey: 'email',
});

module.exports = { sequelize,
  User, Card, 
};
