const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    category_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    appliances: {
      type: DataTypes.BOOLEAN
    },
    appsGames: {
      type: DataTypes.BOOLEAN
    },
    clothingShoesJewerly: {
      type: DataTypes.BOOLEAN
    },
    beauty: {
      type: DataTypes.BOOLEAN
    },
    electronics: {
      type: DataTypes.BOOLEAN
    },
    outdoor: {
      type: DataTypes.BOOLEAN
    },
    grocery: {
      type: DataTypes.BOOLEAN
    },
    entertainment: {
      type: DataTypes.BOOLEAN
    },
    petSupplies: {
      type: DataTypes.BOOLEAN
    },
    toys: {
      type: DataTypes.BOOLEAN
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
