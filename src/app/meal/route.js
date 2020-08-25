import express from "express";
import { checkSchema } from "express-validator";
import { validate as uuidValidate } from "uuid";
import addMeal from "./Http/AddMeal";
import deleteMeal from "./Http/DeleteMeal";
import setMealQuality from "./Http/SetMealQuality";
import MealValidationSchema from "./MealValidationSchema";
import { isValidQuality } from "./../../models/MealQuality";

const checkUuid = (request, response, next) => {
  if (!uuidValidate(request.params.id)) {
    throw new Error(`Invalid ID ${request.params.id}`);
  }
  next();
};

const checkQuality = (request, response, next) => {
  if (!request.body.quality) {
    throw new Error("Missing quality");
  }

  if (!isValidQuality(request.body.quality)) {
    throw new Error("Unknown value for quality");
  }
  next();
};

const router = express.Router();

router.post("/setQuality/:id", [checkUuid, checkQuality], setMealQuality);
router.post("/addMeal", checkSchema(MealValidationSchema), addMeal);
router.delete("/:id", [checkUuid], deleteMeal);

export default router;
