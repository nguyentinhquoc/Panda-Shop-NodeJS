'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Accounts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      full_name_account: {
        type: Sequelize.STRING
      },
      pass_account: {
        type: Sequelize.STRING
      },
      email_account: {
        type: Sequelize.STRING
      },
      address_account: {
        type: Sequelize.STRING
      },
      tel_account: {
        type: Sequelize.STRING
      },
      role_account: {
        type: Sequelize.INTEGER
      },
      avatar_account: {
        type: Sequelize.STRING
      },
      status_account: {
        type: Sequelize.INTEGER
      },
      online: {
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
    await queryInterface.dropTable('Accounts');
  }
};