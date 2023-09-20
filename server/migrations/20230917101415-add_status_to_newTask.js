'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('newTask', 'status', {
      type: Sequelize.ENUM('inProgress', 'done'),
      allowNull: false,
      defaultValue: 'inProgress'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('newTask', 'status');
    await queryInterface.sequelize.query('DROP TYPE "enum_newTask_status";');
  }
};

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up (queryInterface, Sequelize) {
//     /**
//      * Add altering commands here.
//      *
//      * Example:
//      * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
//      */
//   },

//   async down (queryInterface, Sequelize) {
//     /**
//      * Add reverting commands here.
//      *
//      * Example:
//      * await queryInterface.dropTable('users');
//      */
//   }
// };
