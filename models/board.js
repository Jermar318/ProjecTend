const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Board = sequelize.define('Board', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});

  Board.associate = (models) => {
    Board.hasMany(models.List, { foreignKey: 'boardId', onDelete: 'CASCADE' });
  };

  return Board;
};
