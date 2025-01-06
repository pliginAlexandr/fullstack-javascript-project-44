#!/usr/bin/env node
import { getRandomInt, gamesLogic } from '../src/index.js';

const rules = 'What is the result of the expression?';

const calculateCorrectAnswer = (num1, num2, operator) => {
  switch (operator) {
    case '+': return String(num1 + num2);
    case '-': return String(num1 - num2);
    case '*': return String(num1 * num2);
    default: console.log('Error, wrong operator!');
      return null;
  }
};

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};

const generateCalcRound = () => {
  const randomOperator = getRandomOperator();
  const num1 = getRandomInt(50);
  const num2 = getRandomInt(50);
  const question = `${num1} ${randomOperator} ${num2}`;
  const correctAnswer = calculateCorrectAnswer(num1, num2, randomOperator);
  return [question, correctAnswer];
};

gamesLogic(generateCalcRound, rules);
