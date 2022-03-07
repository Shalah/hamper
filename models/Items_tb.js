const { Model, DataTypes } = require("sequelize");
const { Order } = require(".");
const sequelize = require("../config/connection");

class Items_tb extends Model {}

Items_tb.init(


  {
    id:{
      type:DataTypes.INTEGER,
      autoIncrement: true,
      allowNull:false,
      primaryKey:true
    },

      description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "items_tb",
  }
);

module.exports = Items_tb;
