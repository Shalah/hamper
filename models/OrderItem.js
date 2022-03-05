const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class OrderItem extends Model {}

OrderItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    order_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "order",
        key: "id",
      },
    },
    item_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "items_tb",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "OrderItem",
  }
);

module.exports = OrderItem;
