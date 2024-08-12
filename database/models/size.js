'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Size extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Size.hasMany(models.Variant, {
        foreignKey: 'id_size',
      });
    }
  }
  Size.init({
    name_size: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Size',
  });
  return Size;
};