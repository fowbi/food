"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Meals", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING
      },
      what: {
        allowNull: false,
        type: Sequelize.STRING
      },
      when: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      where: {
        allowNull: false,
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Meals");
  }
};
