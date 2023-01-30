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
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    email: {
      allowNull: false,
      unique: { msg: "The email is already taken", name: "email" },
      validate: { notEmpty: { msg: "Please enter the email" } },
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      validate: { notEmpty: { msg: "Please enter the password" } },
      type: DataTypes.STRING,
    },
  },
  { sequelize }
);
