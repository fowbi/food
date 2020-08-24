import express from "express";
import { checkSchema } from "express-validator";
import { validate as uuidValidate } from "uuid";
import addMeal from "./Http/AddMeal";
import deleteMeal from "./Http/DeleteMeal";
import MealValidationSchema from "./MealValidationSchema";

const checkUuid = (request, response, next) => {
  console.log(request.params.id);
  if (!uuidValidate(request.params.id)) {
    throw new Error(`Invalid ID ${request.params.id}`);
  }
  next();
};

const router = express.Router();

router.post("/", checkSchema(MealValidationSchema), addMeal);
router.delete("/:id", [checkUuid], deleteMeal);

export default router;
