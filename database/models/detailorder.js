'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetailOrder extends Model {
    static associate(models) {
      DetailOrder.belongsTo(models.Account, {
        foreignKey: 'id_user',
      });
    }
  }
  DetailOrder.init({
    full_name_user: DataTypes.STRING,
    tel_user: DataTypes.STRING,
    address_user: DataTypes.STRING,
    id_user: DataTypes.INTEGER,
    code_oders: DataTypes.STRING,
    price_total: DataTypes.INTEGER,
    payment_method: DataTypes.INTEGER,
    code_status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DetailOrder',
  });
  return DetailOrder;
};