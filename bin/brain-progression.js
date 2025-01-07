import { getRandomInt } from "../src";

const generateProgressionRound = () => {
    let progressionLength = 10; //длина арифметической последовательности
    let increment = getRandomInt(10); 
    let questionPosition = getRandomInt(progressionLength - 1, 0);
    let correctAnswer = 0;
    const question = [];
    
    let firstElementOfProgression = getRandomInt(70); //диапазон первого элемента прогрессии
    for (let i = 0; i < progressionLength; i += 1) {
        if (questionPosition === i) {
            question.push('..');
        }
        question.push(firstElementOfProgression);
        firstElementOfProgression += increment;
    }
    return []
}