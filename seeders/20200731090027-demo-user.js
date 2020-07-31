"use strict";

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert("Users", [{
      id: "1af59cd2-27a7-4ec4-913b-2bb1a171da69",
      name: "demo",
      email: "demo@example.com",
      pass: "$2y$12$aiChJRKyDSXAi6pnVGC/kOW8xQpEPNq00wM.jt9wsyX5HaRgiGjxS", // demo
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete("Users", null, {});
  }
};
