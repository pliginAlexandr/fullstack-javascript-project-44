#!/usr/bin/env node

import { getRandomInt, gamesLogic } from '../src/index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const brainGcdGenerateRound = () => {
  let num1 = getRandomInt(50);
  let num2 = getRandomInt(50);

  const question = `${num1} ${num2}`;

  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  const correctAnswer = String(num1 + num2);

  return [question, correctAnswer];
};

gamesLogic(brainGcdGenerateRound, rules);
