import express from "express";
import getMeals from "./Http/GetMeals";
import register from "./Http/Register";
import login from "./Http/Login";
import { authMiddleware } from "../../utils/authentication";

const router = express.Router();

const checkDate = (request, response, next) => {
  if (isNaN(Date.parse(request.params.when))) {
    throw new Error(`Invalid Date ${request.params.when}`);
  }
  next();
};


//router.get("/meals/:when?", [authMiddleware, checkDate], getMeals);
router.get("/meals/:when?", [authMiddleware, checkDate], getMeals);
router.post("/register", register);
router.post("/login", login);

export default router;
