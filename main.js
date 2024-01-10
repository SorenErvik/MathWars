import { checkAnswer } from './answerChecker.js';
import { generateProblem } from './problemGenerator.js';
import { getUserInput } from './userInput.js';

// Game loop or function
function playGame() {
  // Generate a problem
  const { problem, answer } = generateProblem();

  // Display the problem to the user
  console.log(`Solve the following: ${problem}`);

  // Get user input
  const userAnswer = getUserInput();

  // Check the user's answer
  if (checkAnswer(userAnswer, answer)) {
    console.log('Correct!'); // Handle correct answer logic
  } else {
    console.log('Incorrect!'); // Handle incorrect answer logic
  }
}

// Call the playGame function to start the game
playGame();