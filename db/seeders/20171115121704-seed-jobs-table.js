const casual = require('casual');
const { job } = require('../models');

module.exports = {
  up: () => {
    const promises = Array(50).fill().map(() => {
      return job.create({
        worker_id: casual.integer(1, 50),
        customer_id: casual.integer(1, 50),
        date: casual.date('YYYY-MM-DD'),
        address: casual.address,
        rated_worker: casual.integer(10, 50),
        rated_customer: casual.integer(10, 50),
        opinion_worker: casual.short_description,
        opinion_customer: casual.short_description,
      });
    });

    return Promise.all(promises);
  },
  down: () => {
  },
};
