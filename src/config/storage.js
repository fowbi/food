import { Sequelize } from "sequelize";
import config from "./../config/";

const { username, password, options } = config.storage;

export default new Sequelize("food", username, password, options);
