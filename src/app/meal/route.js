import express from "express";
import addMeal from "./Http/AddMeal";
import { checkSchema } from "express-validator";
import MealValidationSchema from "./MealValidationSchema";

const router = express.Router();

router.post("/addMeal", checkSchema(MealValidationSchema), addMeal);

export default router;
