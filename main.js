import { generateProblem } from './controllers/problemGenerator.js';
import { renderLives, renderQuestion, renderScore } from './controllers/render-game.js';
import userInputModule from './controllers/userInput.js';

// Game loop or function
async function playGame() {
  let lives = 3;
  let score = 0;

  while (lives > 0) {
    // Generate a problem
    const { question, answer: expectedAnswer } = generateProblem();

    // Display the problem to the user
    console.log(`Solve the following: ${question}`);

    // Display the problem to the user
    renderQuestion(question);

    // Render the number of lives to the user
    renderLives(lives);

    // Render the score of the user
    renderScore(score);

    // Get user input using async/await
    try {
      const userAnswer = await userInputModule.handleButtonClick();
      // Check the user's answer using the answerChecker module
      if (userAnswer == expectedAnswer) {
        console.log('Correct!'); // Handle correct answer logic
        score++; // Increment score on correct answer
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
document.getElementById('startGameButton').addEventListener('click', playGame);