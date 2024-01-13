import { generateProblem } from './controllers/problemGenerator.js';
import userInputModule from './controllers/userInput.js';

// Game loop or function
async function playGame() {
  let lives = 3;

  while (lives > 0) {
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
        lives--; // Decrement lives on incorrect answer
        console.log(`Remaining Lives: ${lives}`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  console.log('Out of lives. Game over!');
}

// Call the playGame function to start the game
//playGame();

// Add event listener to start the game when the button is clicked
document.getElementById('startGameButton').addEventListener('click', playGame());