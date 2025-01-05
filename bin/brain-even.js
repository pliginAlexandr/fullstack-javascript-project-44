#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetings from '../src/cli.js';
import { getRandomInt, isEven, gamesLogic } from '../src/index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';


const brainEvenGenerateRound = () => {
  const question = getRandomInt(100); //значение в скобках устанавливает максимально возможное генерируемое число.
  const correctAnswer = isEven(question);
  return [question, correctAnswer];
};

gamesLogic(brainEvenGenerateRound, rules);

export default gamesLogic;
