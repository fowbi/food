import { DataTypes, Sequelize } from "sequelize";
import config from "./../config/";
import UserModel from "../models/user";
import MealModel from "../models/meal";

const { username, password, options } = config.storage;

const sequelize = new Sequelize("food", username, password, options);

export const models = {
  meal: MealModel(sequelize, DataTypes),
  user: UserModel(sequelize, DataTypes),
};

Object.values(models)
  .filter(model => typeof model.associate === "function")
  .forEach(model => model.associate(models));

export const operation = Sequelize.Op;

export default sequelize;
