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

      brand_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_leather: {
      type: DataTypes.BOOLEAN,
    },
    is_linen: {
      type: DataTypes.BOOLEAN,
    },
    is_cotton: {
      type: DataTypes.BOOLEAN,
    },

    is_XL: {
      type: DataTypes.BOOLEAN,
    },
    is_L: {
      type: DataTypes.BOOLEAN,
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



// const itemtype = () => {
//   let userChoice;
//   let 
//   if (userChoice === 'shirt'){
    
//   }
// }