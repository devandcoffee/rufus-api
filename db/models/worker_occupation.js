module.exports = (sequelize, DataTypes) => {
  const WorkerOccupation = sequelize.define('worker_occupation', {
  });

  WorkerOccupation.associate = (models) => {
    WorkerOccupation.Worker = WorkerOccupation.belongsTo(models.worker, {
      foreignKey: 'worker_id',
    });
  };

  WorkerOccupation.associate = (models) => {
    WorkerOccupation.Occupation = WorkerOccupation.belongsTo(models.occupation, {
      foreignKey: 'occupation_id',
    });
  };

  return WorkerOccupation;
};
