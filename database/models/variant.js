'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Variant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Variant.belongsTo(models.Product, {
        foreignKey: 'id_product',
      });
      Variant.hasMany(models.ClassificationOrder, {
        foreignKey: 'id_variants',
      });
      Variant.hasMany(models.Review, {
        foreignKey: 'id_variants',
      });
      Variant.belongsTo(models.Color, {
        foreignKey: 'id_color',
      });
      Variant.belongsTo(models.Size, {
        foreignKey: 'id_size',
      });

    }
  }
  Variant.init({
    id_product: DataTypes.INTEGER,
    id_color: DataTypes.INTEGER,
    id_size: DataTypes.INTEGER,
    quantity_variant: DataTypes.INTEGER,
    code_variant: DataTypes.STRING,
    image_variant: DataTypes.STRING,
    sales: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Variant',
  });
  return Variant;
};