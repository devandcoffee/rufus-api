module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('worker_jobs', {
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
    occupation_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'occupations',
        key: 'id',
      },
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
  down: queryInterface => queryInterface.dropTable('worker_jobs'),
};
