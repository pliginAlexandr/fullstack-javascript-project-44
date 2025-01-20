import getRandomInt from '../utils.js';
import gamesLogic from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const calculateGcd = (firstNumber, secondNumber) => {
  let num1 = firstNumber;
  let num2 = secondNumber;
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  const gcd = num1 + num2;
  return gcd;
};

const brainGcdGenerateRound = () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt();

  const question = `${num1} ${num2}`;

  const correctAnswer = String(calculateGcd(num1, num2));

  return [question, correctAnswer];
};
const brainGcdGame = () => {
  gamesLogic(brainGcdGenerateRound, rules);
};
export default brainGcdGame;
