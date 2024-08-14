'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Account.hasMany(models.Review, {
        foreignKey: 'id_user',
      });
      Account.hasMany(models.ClassificationOrder, {
        foreignKey: 'id_user',
      });
      Account.hasMany(models.DetailOrder, {
        foreignKey: 'id_user',
      });
    }
  }
  Account.init({
    full_name_account: DataTypes.STRING,
    pass_account: DataTypes.STRING,
    email_account: DataTypes.STRING,
    address_account: DataTypes.STRING,
    tel_account: DataTypes.STRING,
    role_account: DataTypes.INTEGER,
    avatar_account: DataTypes.STRING,
    status_account: DataTypes.INTEGER,
    online: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Account',
  });
  return Account;
};