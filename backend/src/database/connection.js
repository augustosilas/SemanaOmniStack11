const knex = require("knex");

const configuration = require("../../knexfile");

// Acessando váriavel ambiente NODE_ENV
const config =
  process.env.NODE_ENV === "test"
    ? configuration.test
    : configuration.development;

const connection = knex(config);

module.exports = connection;
