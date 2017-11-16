module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('jobs', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    worker_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'workers',
        key: 'id',
      },
    },
    customer_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'customers',
        key: 'id',
      },
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    rated_worker: {
      type: Sequelize.FLOAT,
    },
    rated_customer: {
      type: Sequelize.FLOAT,
    },
    opinion_worker: {
      type: Sequelize.STRING,
    },
    opinion_customer: {
      type: Sequelize.STRING,
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('jobs'),
};
