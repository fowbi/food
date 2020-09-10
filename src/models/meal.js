"use strict";

import { v4 as uuidv4 } from "uuid";
import { isValidType } from "./MealType";
import { isValidQuality } from "./MealQuality";

const isValidQuantity = (quantity) => Number.isInteger(quantity) && quantity > 0;

export default (sequelize, DataTypes) => {
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
    location: DataTypes.STRING,
    quality: {
      type: DataTypes.INTEGER,
      validate: (value) => {
        if (!isValidQuality(value)) {
          throw new Error(`${value} is not a valid quality`);
        }
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      validate: (value) => {
        if (!isValidQuantity(value)) {
          throw new Error(`${value} is not a valid quantity`);
        }
      },
    },
  }, {});

  Meal.beforeCreate(meal => meal.id = uuidv4());

  Meal.associate = models => {
    Meal.belongsTo(models.user, {foreignKey: "user", targetKey: "id"});
  };

  return Meal;
};
