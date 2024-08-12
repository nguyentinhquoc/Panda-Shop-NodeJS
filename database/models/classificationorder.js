'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClassificationOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ClassificationOrder.belongsTo(models.Variant, {
        foreignKey: 'id_variants',
      });
      ClassificationOrder.belongsTo(models.Account, {
        foreignKey: 'id_user',
      });
    }
  }
  ClassificationOrder.init({
    id_user: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    code_status: DataTypes.INTEGER,
    id_variants: DataTypes.INTEGER,
    code_oders: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ClassificationOrder',
  });
  return ClassificationOrder;
};