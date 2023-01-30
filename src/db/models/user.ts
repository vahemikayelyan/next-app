import { DataTypes, Model } from "sequelize";
import sequelize from "./index";

export class User extends Model {
  declare id: number;
  declare email: string;
  declare password: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: { msg: "The email is already taken", name: "email" },
      validate: { notEmpty: { msg: "Please enter the email" } },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: { msg: "Please enter the password" } },
    },
  },
  { sequelize }
);
