module.exports = (sequelize, DataTypes) => {
  const Occupation = sequelize.define('occupation', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
    },
  });

  Occupation.associate = (models) => {
    Occupation.WorkerOccupations = Occupation.hasMany(models.worker_occupation, {
      foreignKey: 'occupation_id',
    });
  };

  return Occupation;
};
