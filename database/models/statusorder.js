'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StatusOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StatusOrder.init({
    status_order: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'StatusOrder',
  });
  return StatusOrder;
};