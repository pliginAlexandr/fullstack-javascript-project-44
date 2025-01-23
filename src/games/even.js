import getRandomInt from '../utils.js';
import gamesLogic from '../index.js';

const isEven = (num) => num % 2 === 0;

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEvenGenerateRound = () => {
  const question = getRandomInt();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const brainEvenGame = () => {
  gamesLogic(brainEvenGenerateRound, rules);
};

export default brainEvenGame;
