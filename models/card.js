module.exports = (sequelize, DataTypes) => {
    const Card = sequelize.define('Card', {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
      },
      listId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {});
    Card.associate = function(models) {
      Card.belongsTo(models.List);
    };
    return Card;
  };
  