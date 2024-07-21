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
      assignee: {
        type: DataTypes.STRING,
        allowNull: true,
        references: {
          model: 'user',
          key: 'email',
        }
      }
    },
    {
      sequelize,
      modelName: 'card',
      timestamps: false,
    }
  );

  return Card;
};
