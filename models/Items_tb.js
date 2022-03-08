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

    item_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    item_tone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    item_size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    item_material: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    item_brand: {
      type: DataTypes.STRING,
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
