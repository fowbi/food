"use strict";

import { DataTypes } from "sequelize";
import sequelize from "../Config/database";
import { v4 as uuidv4 } from "uuid";
import { isValidType } from "./MealType";
import User from "./User";

const Meal = sequelize.define("Meal", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    autoIncrement: false
  },
  type: {
    type: DataTypes.STRING,
    validate: (value) => {
      if (!isValidType(value)) {
        throw new Error(`${value} is not a valid type`);
      }
    },
  },
  what: DataTypes.STRING,
  when: DataTypes.DATE,
  where: DataTypes.STRING,
}, {});

Meal.beforeCreate(meal => meal.id = uuidv4());

Meal.belongsTo(User, {foreignKey: "user", targetKey: "id"});


export default Meal;
