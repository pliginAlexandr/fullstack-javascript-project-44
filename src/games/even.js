import { getRandomInt, isEven, gamesLogic } from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEvenGenerateRound = () => {
  const question = getRandomInt(100); // значение устанавливает максимальное генерируемое число.
  const correctAnswer = isEven(question);
  return [question, correctAnswer];
};

const brainEvenGame = () => {
  gamesLogic(brainEvenGenerateRound, rules);
};

export default brainEvenGame;
