const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', 'tc&Hv=&#XcwbL_', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = connection;
