export const GOOD = 10;
export const MEH = 5;
export const BAD = 0;

export const isValidQuality = (quality) => [GOOD, MEH, BAD].includes(quality);
