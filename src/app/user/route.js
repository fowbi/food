import express from "express";
import getMeals from "./Http/GetMeals";

const router = express.Router();

const checkDate = (request, response, next) => {
  if (isNaN(Date.parse(request.params.when))) {
    throw new Error(`Invalid Date ${request.params.when}`);
  }
  next();
};

router.get("/meals/:when?", [checkDate], getMeals);

export default router;
