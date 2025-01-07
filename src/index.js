import readlineSync from 'readline-sync';
import greetings from './cli.js';

const getRandomInt = (max, min = 1) => Math.floor(Math.random() * (max - min + 1) + min);

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const roundsCount = 3; // количество раундов для всех игр

const gamesLogic = (generateRound, rules) => {
  const name = greetings();
  let scores = 0;

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = generateRound();
    console.log(rules);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      scores += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again. ${name}!`);
      break;
    }
  }
  if (scores === 3) {
    console.log(`Congratulations, ${name}!`);
  }
  return 0;
};

export { getRandomInt, isEven, gamesLogic };
