#!/usr/bin/env node
import { getRandomInt, isEven, gamesLogic } from '../../src/index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEvenGenerateRound = () => {
  const question = getRandomInt(100); // значение устанавливает максимальное генерируемое число.
  const correctAnswer = isEven(question);
  return [question, correctAnswer];
};

gamesLogic(brainEvenGenerateRound, rules);

export default gamesLogic;
