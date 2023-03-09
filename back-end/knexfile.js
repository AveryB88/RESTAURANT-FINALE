/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require('dotenv').config();
const path = require("path");

const {
  DATABASE_URL = "postgres://ksxhhiix:kaGakCk8srk3lAGCR-_2iw2DtGaLZRdv@ziggy.db.elephantsql.com/ksxhhiix",
  DATABASE_URL_DEVELOPMENT = "postgres://axgcnifu:uZOBWODp9htvLTx-qAgjH80auFQuGJms@raja.db.elephantsql.com/axgcnifu",
  DATABASE_URL_TEST = "postgres://iiiurjas:hep66TuL9cDEd4rmvvHz9jMnqju4su1F@ziggy.db.elephantsql.com/iiiurjas",
  DATABASE_URL_PREVIEW = "postgres://xreoctad:zXvQT9dpcGnSD-SMzraDYn9xYCdTkGqB@ziggy.db.elephantsql.com/xreoctad",
  DEBUG,
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
