import { Options, Sequelize } from "sequelize";
import DBconfig from "../config/config";

const env = process.env.NODE_ENV || "development";

const sequelize = new Sequelize(DBconfig[env] as Options);

export default sequelize;
