import readlineSync from 'readline-sync';
import getRandomInt from './utils.js';
import greetings from './cli.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const roundsCount = 3; // количество раундов для всех игр

const gamesLogic = (generateRound, rules) => {
  const name = greetings();

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = generateRound();
    console.log(rules);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);

  return 0;
};

export { getRandomInt, isEven, gamesLogic };
