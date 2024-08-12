'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.Variant, {
        foreignKey: 'id_variants',
      });
      Review.belongsTo(models.Account, {
        foreignKey: 'id_user',
      });
    }
  }
  Review.init({
    id_user: DataTypes.INTEGER,
    content_review: DataTypes.STRING,
    id_variants: DataTypes.INTEGER,
    star: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};