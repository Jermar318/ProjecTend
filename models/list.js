const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const List = sequelize.define('List', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    boardId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});

  List.associate = (models) => {
    List.belongsTo(models.Board, { foreignKey: 'boardId' });
    List.hasMany(models.Card, { foreignKey: 'listId', onDelete: 'CASCADE' });
  };

  return List;
};
