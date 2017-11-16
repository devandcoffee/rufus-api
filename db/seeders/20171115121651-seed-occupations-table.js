const casual = require('casual');
const { occupation } = require('../models');

module.exports = {
  up: () => {
    const promises = Array(20).fill().map(() => {
      return occupation.create({
        name: casual.words(2),
        description: casual.short_description,
      });
    });

    return Promise.all(promises);
  },
  down: () => {
  },
};
