export const BREAKFAST = "breakfast";
export const BRUNCH = "brunch";
export const ELEVENSES = "elevenses";
export const LUNCH = "lunch";
export const TEA = "tea";
export const SUPPER = "supper";
export const DINNER = "dinner";

export const isValidType = (type) => [BREAKFAST, BRUNCH, ELEVENSES, LUNCH, TEA, SUPPER, DINNER].includes(type.toLowerCase());
