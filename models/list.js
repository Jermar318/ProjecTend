module.exports = (sequelize, DataTypes) => {
    const List = sequelize.define('List', {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      boardId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {});
    List.associate = function(models) {
      List.belongsTo(models.Board);
      List.hasMany(models.Card, { onDelete: 'cascade' });
    };
    return List;
  };
  