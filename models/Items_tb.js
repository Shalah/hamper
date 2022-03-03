const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Items_tb extends Model {}

Items_tb.init(
  {
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    item: {
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
