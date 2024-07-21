const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Board extends Model {}

  Board.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        }
      }
    },
    {
      sequelize,
      modelName: 'board',
      tableName: 'boards',
      timestamps: true
    }
  );

  return Board;
};
