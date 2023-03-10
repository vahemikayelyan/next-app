import { resolve } from "path";

const env = process.env;

const config = {
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
    host: resolve("./", "database.sqlite"),
    dialect: "sqlite",
  },
};

export default config;
