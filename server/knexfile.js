require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: `postgres://squint:${process.env.DBPASS}@localhost/sfdb`,
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }

};
