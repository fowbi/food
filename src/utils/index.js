Number.isInteger = Number.isInteger || function(value) {
  return typeof value === "number" && 
    isFinite(value) && 
    Math.floor(value) === value;
};

export const isPositiveNumber = (value) => Number.isInteger(value) && value > 0;;
