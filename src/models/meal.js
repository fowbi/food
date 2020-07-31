"use strict";

import { DataTypes } from "sequelize";
import sequelize from "../Config/database";
import { isValidType } from "./MealType";

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
  where: DataTypes.STRING
}, {});


export default Meal;
