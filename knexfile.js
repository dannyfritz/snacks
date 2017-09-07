// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: "postgres://localhost/snacks",
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URI,
  }

};
