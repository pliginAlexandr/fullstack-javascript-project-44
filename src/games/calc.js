import { getRandomInt, gamesLogic } from '../index.js';

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
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  const question = `${num1} ${randomOperator} ${num2}`;
  const correctAnswer = calculateCorrectAnswer(num1, num2, randomOperator);
  return [question, correctAnswer];
};

const brainCalcGame = () => {
  gamesLogic(generateCalcRound, rules);
};

export default brainCalcGame;
