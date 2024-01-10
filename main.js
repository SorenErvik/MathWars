import { generateProblem } from './controllers/problemGenerator.js';
import userInputModule from './controllers/userInput.js';

// Game loop or function
async function playGame() {
  // Generate a problem
  const { problem, answer } = generateProblem();

  // Display the problem to the user
  console.log(`Solve the following: ${problem}`);

  // Get user input using async/await
  try {
    const userAnswer = await userInputModule.handleButtonClick();
    // Check the user's answer using the answerChecker module
    if (userInput == answer) {
      console.log('Correct!'); // Handle correct answer logic
    } else {
      console.log('Incorrect!'); // Handle incorrect answer logic
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the playGame function to start the game
playGame();