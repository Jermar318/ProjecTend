require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
});

// Import models
const User = require('./users')(sequelize);
const Board = require('./board')(sequelize);
const Card = require('./card')(sequelize);
// const Comment = require('./comment')(sequelize);
const Comment = require('./comment')(sequelize);
const Task = require('./task.js')(sequelize);

// Define relationships

Board.hasMany(Card, {
  foreignKey: 'boardId',
  onDelete: 'CASCADE',
});

Card.belongsTo(Board, {
  foreignKey: 'boardId',
});

User.hasMany(Board, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

Board.belongsTo(User, {
  foreignKey: 'userId',
});

// Card.hasOne(User, {
//   foreignKey: 'assignee',
//   onDelete: 'SET NULL',
// });

// This might be wrong
// User.belongsTo(Card, {
//   foreignKey: 'assignee',
// });

// Define Comment relationships
// Comment.belongsTo(Card, {
//   foreignKey: 'cardId',
//   onDelete: 'CASCADE',
// });

// Comment.belongsTo(User, {
//   foreignKey: 'userId',
//   onDelete: 'CASCADE',
// });

Task.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

Task.belongsTo(Card, {
  foreignKey: 'cardId',
  onDelete: 'CASCADE',
});

Task.belongsTo(Board, {
  foreignKey: 'boardId',
  onDelete: 'CASCADE',
});


module.exports = { sequelize, Board, User, Card, Comment, Task }; // Added Task to the exports
module.exports = { sequelize, Board, User, Card, 
  // Comment 
};
