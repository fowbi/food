"use strict";

import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import sequelize from "../Config/database";
import Meal from "./Meal";

const User = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    autoIncrement: false
  },
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true
    }
  },
  pass: {
    type: DataTypes.STRING
  }
}, {});

User.beforeCreate(user => {
  return bcrypt.hash(user.pass, 10)
    .then(hash => {
      user.pass = hash;
    })
    .catch(err => {
      console.log(err);
      throw new Error();
    });
});

export default User;
