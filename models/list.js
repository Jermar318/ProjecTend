const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class List extends Model {}

  List.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      boardId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'List',
    }
  );

  List.associate = (models) => {
    List.belongsTo(models.Board, { foreignKey: 'boardId' });
    List.hasMany(models.Card, { foreignKey: 'listId', onDelete: 'CASCADE' });
  };

  return List;
};
