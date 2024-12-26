import readlineSync from "readline-sync";
const greetings = () => {
  const name = readlineSync.question("May I have you name? ");
  console.log(`Hello, ${name}!`);
};

export default greetings;