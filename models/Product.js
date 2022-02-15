// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    },
    brand: {
      type: DataTypes.STRING
    },
    manufacture: {
      type: DataTypes.STRING
    },
    isbn: {
      type: DataTypes.STRING
    },
    price: { 
      type: DataTypes.DECIMAL
    },
    SKU: { //bar code (scan), individual type
      type: DataTypes.STRING
    },
    weight: {
      type: DataTypes.DECIMAL
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
