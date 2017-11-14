module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('jobs', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    customer_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'customers',
        key: 'id',
      },
    },
    worker_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'workers',
        key: 'id',
      },
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
    },
    rated_customer: {
      type: Sequelize.FLOAT,
    },
    rated_worker: {
      type: Sequelize.FLOAT,
    },
    opinion_customer: {
      type: Sequelize.STRING,
    },
    opinion_worker: {
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
