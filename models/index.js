require('dotenv').config();
const { Sequelize } = require('sequelize');

let sequelize;

if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, { 
    host: process.env.DB_HOST, 
    port: process.env.DB_PORT, 
    dialect: 'postgres', 
    logging: false, 
    
  });
  
}
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

module.exports = {
  sequelize,
  User, Card,
};
