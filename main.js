import { generateProblem } from './controllers/problemGenerator.js';
import userInputModule from './controllers/userInput.js';

// Game loop or function
async function playGame() {
  // Generate a problem
  const { question, answer: expectedAnswer } = generateProblem();

  // Display the problem to the user
  console.log(`Solve the following: ${question}`);

  // Get user input using async/await
  try {
    const userAnswer = await userInputModule.handleButtonClick();
    // Check the user's answer using the answerChecker module
    if (userAnswer == expectedAnswer) {
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