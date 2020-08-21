const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * max) + min;
};

const MIN = 1;
const MAX = 40;
const LAST_NUMBERS_TO_SHOW = 5;

export { generateRandomNumber, MIN, MAX, LAST_NUMBERS_TO_SHOW };
