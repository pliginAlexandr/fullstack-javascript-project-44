import { gamesLogic, getRandomInt } from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return 'no';
  if (num === 2) return 'yes';
  if (num % 2 === 0) return 'no';

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return 'no';
  }

  return 'yes';
};

const generatePrimeRound = () => {
  const question = getRandomInt();
  const correctAnswer = String(isPrime(question));
  return [question, correctAnswer];
};

const brainPrimeGame = () => {
  gamesLogic(generatePrimeRound, rules);
};

export default brainPrimeGame;
