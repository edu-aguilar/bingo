const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * max) + min;
};

const MIN = 1;
const MAX = 90;

export { generateRandomNumber, MIN, MAX };
