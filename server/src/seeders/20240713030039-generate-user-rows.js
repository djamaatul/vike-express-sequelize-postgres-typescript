'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const bcrypt = require('bcrypt');
    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash('123', salt)
    await queryInterface.bulkInsert('TM_USER', [{
      name: 'Dika Jamaatul Anbiya',
      username: 'dika',
      password,
      createdAt: sequelize.fn('NOW'),
      updatedAt: sequelize.fn('NOW')
    }], {});
  },

  async down (queryInterface) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('TM_USER', null, {})
  }
};
