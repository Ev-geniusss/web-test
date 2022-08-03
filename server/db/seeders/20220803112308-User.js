/* eslint-disable no-unused-vars */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
    name: 'John Doe',
    amount: 5,
    distance: 100,
    createdAt: new Date(),
    updatedAt: new Date()
      }, 
      {
        name: 'John Doe',
        amount: 10,
        distance: 111,
        createdAt: new Date(),
        updatedAt: new Date()
          }], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
