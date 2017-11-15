const Sequelize = require('sequelize');

const { Op } = Sequelize;

const operatorsAliases = {
  $gt: Op.gt,
  $lt: Op.lt,
};

const config = {
  development: {
    username: 'admin',
    password: 'admin',
    database: 'rufus',
    host: 'postgres',
    port: 5432,
    dialect: 'postgres',
    operatorsAliases,
    define: {
      timestamps: true,
      underscored: true,
    },
  },
  production: {
    username: 'admin',
    password: 'admin',
    database: 'rufus',
    host: 'postgres',
    port: 5432,
    dialect: 'postgres',
    operatorsAliases,
    define: {
      timestamps: true,
      underscored: true,
    },
  },
};

module.exports = config;
