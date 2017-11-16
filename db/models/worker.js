module.exports = (sequelize, DataTypes) => {
  const Worker = sequelize.define('worker', {
    identity_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rated: {
      type: DataTypes.FLOAT,
    },
  });

  Worker.associate = (models) => {
    Worker.User = Worker.belongsTo(models.user, {
      foreignKey: 'user_id',
    });

    Worker.Jobs = Worker.hasMany(models.job, {
      foreignKey: 'worker_id',
    });

    Worker.WorkerOccupations = Worker.hasMany(models.worker_occupation, {
      foreignKey: 'worker_id',
    });
  };

  return Worker;
};
