'use strict';

const faker = require("faker");
const bcrypt = require("bcrypt");
const salt = 12;

module.exports = {
  up: (queryInterface, Sequelize) => {

    let users = [];
    for (let i = 0; i < 10; i++) {
      let name = faker.name.findName();
      let email = faker.internet.email();
      let password = bcrypt.hashSync('secret',salt);
      let role = 'member';
      users.push({
        email: email,
        name: name,
        password: password,
        role: role,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    let password = bcrypt.hashSync('secret',salt);
    users.push({
      email: 'admin@gmail.com',
      name: 'admin',
      password: password,
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return queryInterface.bulkInsert('Users', users, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
