'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name_product: {
        type: Sequelize.STRING
      },
      price_product: {
        type: Sequelize.INTEGER
      },
      price_sale: {
        type: Sequelize.INTEGER
      },
      rating_product: {
        type: Sequelize.FLOAT
      },
      image_product: {
        type: Sequelize.STRING
      },
      description_product: {
        type: Sequelize.STRING
      },
      view_product: {
        type: Sequelize.INTEGER
      },

      id_category: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories',
          key: 'id'
        }
      },
      status_product: {
        type: Sequelize.INTEGER
      },
      code_product: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};