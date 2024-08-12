'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Variants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_product: {
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id'
        }
      },
      id_color: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Colors',
          key: 'id'
        }
      },
      id_size: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Sizes',
          key: 'id'
        }
      },
      quantity_variant: {
        type: Sequelize.INTEGER
      },
      code_variant: {
        type: Sequelize.STRING
      },
      image_variant: {
        type: Sequelize.STRING
      },
      sales: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Variants');
  }
};