'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Category, {
        foreignKey: 'id_category',
      });
      Product.hasMany(models.Variant, {
        foreignKey: 'id_product',
      });
    }
  }
  Product.init({
    name_product: DataTypes.STRING,
    price_product: DataTypes.INTEGER,
    price_sale: DataTypes.INTEGER,
    image_product: DataTypes.STRING,
    description_product: DataTypes.STRING,
    view_product: DataTypes.INTEGER,
    id_category: DataTypes.INTEGER,
    status_product: DataTypes.INTEGER,
    code_product: DataTypes.INTEGER,
    rating_product: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};