import { resolve } from "path";

const env = process.env;

const config = {
  development: {
    host: resolve("./", "database.sqlite"),
    dialect: "sqlite",
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
