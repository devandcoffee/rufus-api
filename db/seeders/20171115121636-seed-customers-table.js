const casual = require('casual');
const { customer } = require('../models');

module.exports = {
  up: () => {
    const promises = Array(50).fill().map((_, i) => {
      return customer.create({
        user_id: i + 51,
        identity_id: casual.integer(1000, 9999),
        firstname: casual.first_name,
        lastname: casual.last_name,
        birthdate: casual.date('YYYY-MM-DD'),
        photo: '',
        rated: casual.integer(10, 50),
      });
    });

    return Promise.all(promises);
  },
  down: () => {
  },
};
