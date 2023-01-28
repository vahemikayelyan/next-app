import { Options } from "sequelize";

interface ConfigDB {
  development: Options;
  test: Options;
  production: Options;
}

const env = process.env;

const config: ConfigDB = {
  development: {
    database: env.DB_NAME,
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    host: env.DB_HOST,
    dialect: "mysql",
  },
  test: {
    database: env.DB_NAME,
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    host: env.DB_HOST,
    dialect: "mysql",
  },
  production: {
    database: env.DB_NAME,
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    host: env.DB_HOST,
    dialect: "mysql",
  },
};

export default config;
