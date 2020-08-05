import express from "express";
import getMeals from "./Http/GetMeals";

const router = express.Router();

router.get("/meals/:when?", getMeals);

export default router;
