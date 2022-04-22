'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nick_name: {
        type: Sequelize.TEXT
      },
      mistakes: {
        type: Sequelize.INTEGER
      },
      correct_answers: {
        type: Sequelize.INTEGER
      },
      total_plays: {
        type: Sequelize.INTEGER
      },
      total_scores: {
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
    await queryInterface.dropTable('Users');
  }
};