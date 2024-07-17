const { Model, DataTypes } = require('sequelize');
const Status = require('../constants/status');

module.exports = (sequelize) => {
  class Card extends Model {}

  Card.init(
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
        type: DataTypes.TEXT,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: Status.TODO
      },
      boardId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'board',
          key: 'id',
        },
      },
      assignee: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
      }
    },
    {
      sequelize,
      modelName: 'card',
    }
  );

  return Card;
};
