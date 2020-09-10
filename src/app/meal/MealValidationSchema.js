import { isValidType } from "../../models/MealType";

export default {
  type: {
    isString: true,
    in: ["body"],
    custom: {
      options: value => isValidType(value),
    },
  },
  what: {
    isString: true,
    in: ["body"],
  },
  when: {
    isString: true,
    in: ["body"],
  },
  location: {
    isString: true,
    in: ["body"],
  },
  quantity: {
    isNumber: true,
    in: ["body"],
  },
};
