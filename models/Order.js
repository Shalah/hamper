const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const Order_status = require('./Order_status');

class Order extends Model {}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    notes:{
      type:DataTypes.STRING,
      allowNull:false
    },
    order_status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model: "order_status",
        key: "id"
      }
      
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Order",
  }
);

module.exports = Order;
