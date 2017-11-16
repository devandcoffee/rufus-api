const casual = require('casual');
const { user } = require('../models');
const services = require('../../services');

module.exports = {
  up: () => {
    const promises = Array(100).fill().map(() => {
      return services.encryptPassword('secret').then((hash) => {
        return user.create({
          email: casual.email,
          password: hash,
        });
      });
    });

    return Promise.all(promises);
  },
  down: () => {
  },
};
