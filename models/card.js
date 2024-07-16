const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Card = sequelize.define('Card', {
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
  }, {});

  Card.associate = (models) => {
    Card.belongsTo(models.List, { foreignKey: 'listId' });
  };

  return Card;
};
