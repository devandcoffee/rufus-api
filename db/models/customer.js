module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('customer', {
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

  Customer.associate = (models) => {
    Customer.User = Customer.belongsTo(models.user, {
      foreignKey: 'user_id',
    });

    Customer.Jobs = Customer.hasMany(models.job, {
      foreignKey: 'customer_id',
    });
  };

  return Customer;
};
