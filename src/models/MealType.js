export const BREAKFAST = "breakfast";
export const BRUNCH = "brunch";
export const LUNCH = "lunch";
export const DINNER = "dinner";
export const DRINK = "drink";
export const SNACK = "snack";

export const isValidType = (type) => [BREAKFAST, BRUNCH, LUNCH, DINNER].includes(type.toLowerCase());
