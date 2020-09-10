import express from "express";
import { checkSchema } from "express-validator";
import { validate as uuidValidate } from "uuid";
import addMeal from "./Http/AddMeal";
import deleteMeal from "./Http/DeleteMeal";
import setMealQuality from "./Http/SetMealQuality";
import setMealQuantity from "./Http/SetMealQuantity";
import MealValidationSchema from "./MealValidationSchema";
import { isValidQuality } from "./../../models/MealQuality";
import { authMiddleware } from "../../utils/authentication";
import { isPositiveNumber } from "../../utils";

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

const checkQuantity = (request, response, next) => {
  if (!request.body.quantity) {
    throw new Error("Missing quantity");
  }

  if (!isPositiveNumber(request.body.quantity)) {
    throw new Error("Invalid value for quantity");
  }
  next();
};

const router = express.Router();

router.post("/setQuality/:id", [authMiddleware, checkUuid, checkQuality], setMealQuality);
router.post("/setQuantity/:id", [authMiddleware, checkUuid, checkQuantity], setMealQuantity);
router.post("/addMeal", [authMiddleware, checkSchema(MealValidationSchema)], addMeal);
router.delete("/:id", [authMiddleware, checkUuid], deleteMeal);

export default router;
