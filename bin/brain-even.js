#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetings from '../src/cli.js';

const getRandomInt = (max) => Math.floor(Math.random() * max);
const isEval = (num) => (num % 2 === 0 ? 'yes' : 'no');

const brainEven = () => {
  const name = greetings();

  const rounds = 3;
  let scores = 0;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < rounds; i += 1) {
    const randomNumber = getRandomInt(100);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Answer: ');
    const correctAnswer = isEval(randomNumber);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      scores += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${name}`);
      break;
    }
  }
  if (scores === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

brainEven();
export default brainEven;
