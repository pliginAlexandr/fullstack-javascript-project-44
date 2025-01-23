import gamesLogic from '../index.js';
import getRandomInt from '../utils.js';

const rules = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
};

const generateProgressionRound = () => {
  const progressionLength = getRandomInt(6, 10);
  const increment = getRandomInt(1, 10);
  const firstElementOfProgression = getRandomInt();
  const questionPosition = getRandomInt(0, progressionLength - 1);

  const progression = generateProgression(firstElementOfProgression, increment, progressionLength);
  const correctAnswer = progression[questionPosition];
  progression[questionPosition] = '..';
  const question = progression.join(' ');
  return [question, String(correctAnswer)];
};

const brainProgressionGame = () => {
  gamesLogic(generateProgressionRound, rules);
};

export default brainProgressionGame;
