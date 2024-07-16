const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Card extends Model {}

  Card.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      listId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Card',
    }
  );

  Card.associate = (models) => {
    Card.belongsTo(models.List, { foreignKey: 'listId' });
  };

  return Card;
};
