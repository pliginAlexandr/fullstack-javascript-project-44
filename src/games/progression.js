import { getRandomInt, gamesLogic } from '../index.js';

const rules = 'What number is missing in the progression?';

const generateProgressionRound = () => {
  const progressionLength = getRandomInt(10, 6); // длина арифметической последовательности
  const increment = getRandomInt(10);
  const firstElementOfProgression = getRandomInt(80, 3);
  const questionPosition = getRandomInt(progressionLength - 1, 0);
  const arr = [];
  let question = '';

  for (let i = 0; i < progressionLength; i += 1) {
    const nextElementOfProgression = firstElementOfProgression + (increment * i);
    arr.push(nextElementOfProgression);
  }

  const correctAnswer = arr[questionPosition];
  arr[questionPosition] = '..';
  question = arr.join(' ');

  return [question, String(correctAnswer)];
};

const brainProgressionGame = () => {
  gamesLogic(generateProgressionRound, rules);
};

export default brainProgressionGame;
