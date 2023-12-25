'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '12345',
      firstName: 'Duy',
      lastName: 'Lee',
      address: 'Ha Nam',
      phoneNumber: '0352846368',
      image: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/11/cam-nang-dtcl-cach-de-nang-cap-jhin-len-4-sao-trong-mua-10-2.jpg',
      gender: 1,
      roleId: 'R1',
      positionId: 'P1'
    }]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
