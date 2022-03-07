const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Order_status extends Model {}

Order_status.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    notes:{
      type:DataTypes.STRING,
      allowNull:false
   },
   order_id:{
     type: DataTypes.INTEGER,
     allowNull: false
   }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "order_status",
  }
);

module.exports = Order_status;
