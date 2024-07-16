const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Board extends Model {}

  Board.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Board',
    }
  );

  Board.associate = (models) => {
    Board.hasMany(models.List, { foreignKey: 'boardId', onDelete: 'CASCADE' });
  };

  return Board;
};
