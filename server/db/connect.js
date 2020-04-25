const knex = require('knex');

const env = process.env.DB_ENV || 'development';
const config = require('../knexfile.js');

module.exports = knex(config[env]);