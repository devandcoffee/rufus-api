module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  User.associate = (models) => {
    User.Worker = User.hasOne(models.worker, {
      foreignKey: 'user_id',
    });
  };

  User.associate = (models) => {
    User.Customer = User.hasOne(models.customer, {
      foreignKey: 'user_id',
    });
  };

  return User;
};
