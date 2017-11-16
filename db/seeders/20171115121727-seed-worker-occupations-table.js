const casual = require('casual');
const workerOccupation = require('../models').worker_occupation;

module.exports = {
  up: () => {
    const promises = Array(50).fill().map((_, i) => {
      return workerOccupation.create({
        worker_id: i + 1,
        occupation_id: casual.integer(1, 20),
      });
    });

    return Promise.all(promises);
  },
  down: () => {
  },
};
