import { Sequelize } from "sequelize";
import config from "../config/config";

const sequelize = new Sequelize(config.development);

export default sequelize;
