module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define('job', {
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    rated_customer: {
      type: DataTypes.FLOAT,
    },
    rated_worker: {
      type: DataTypes.FLOAT,
    },
    opinion_customer: {
      type: DataTypes.STRING,
    },
    opinion_worker: {
      type: DataTypes.STRING,
    },
  });

  Job.associate = (models) => {
    Job.Customer = Job.belongsTo(models.customer, {
      foreignKey: 'customer_id',
    });

    Job.Worker = Job.belongsTo(models.worker, {
      foreignKey: 'worker_id',
    });
  };

  return Job;
};
