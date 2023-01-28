import { Options, Sequelize } from "sequelize";
import config from "../config/config.mjs";

const env = process.env.NODE_ENV || "development";

const sequelize = new Sequelize(config[env] as Options);

export default sequelize;
