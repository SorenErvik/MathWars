//Import statements
import { generateProblem } from './controllers/problemGenerator.js';
import { renderGameOver, renderHighscore, renderLives, renderQuestion, renderScore } from './controllers/render-game.js';
import userInputModule from './controllers/userInput.js';

// Initializing the highscore variable
let highscore = 0;
// Game loop or function

// Creating the playGmae function
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

    // Render the highscore of the user
    renderHighscore(highscore);

    // Get user input using async/await
    try {
      const userAnswer = await userInputModule.handleButtonClick();
      // Check the user's answer using the answerChecker module
      if (userAnswer == expectedAnswer) {
        console.log('Correct!'); // Handle correct answer logic
        score++; // Increment score on correct answer
        document.getElementById('userInput').value = ""; // Clear the user input
      } else {
        console.log('Incorrect!'); // Handle incorrect answer logic
        lives--; // Decrement lives on incorrect answer
        document.getElementById('userInput').value = ""; // Clear the user input
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  // If statement to determine if the score will be the new highscore
  if (score > highscore) {
    highscore = score;
    renderHighscore(highscore);
    console.log(`New highscore: ${highscore}`);
  }

  // Our styling of the game container
  userInput.classList.toggle('hidden');
  submitButton.classList.toggle('hidden');
  gameOverContainer.classList.toggle('hidden');
  restartGameButton.classList.toggle('hidden');
  questionContainer.classList.toggle('hidden');
  livesContainer.classList.toggle('hidden');
  scoreContainer.classList.toggle('hidden');
  highscoreContainer.classList.toggle('hidden');
  gameContainer.classList.toggle('gameOverFlex');

  // Render the GameOver function
  renderGameOver(score);
}

// Add event listener to restart the game when the button is clicked
document.getElementById('restartGameButton').addEventListener('click', () => {
  playGame();
  restartGameButton.classList.toggle('hidden');
  gameOverContainer.classList.toggle('hidden');
  userInput.classList.toggle('hidden');
  submitButton.classList.toggle('hidden');
  gameContainer.classList.toggle('gameOverFlex');
  highscoreContainer.classList.toggle('hidden');
  scoreContainer.classList.toggle('hidden');
  livesContainer.classList.toggle('hidden');
  questionContainer.classList.toggle('hidden');
});

// Add event listener to start the game when the button is clicked
document.getElementById('startGameButton').addEventListener('click', () => {
  playGame();
    startGameButton.classList.add('hidden');
    gameContainer.classList.toggle('flex-startGameButton');
    // Toggle visibility of other game elements
    questionContainer.classList.toggle("hidden");
    livesContainer.classList.toggle("hidden");
    scoreContainer.classList.toggle("hidden");
    userInput.classList.toggle("hidden");
    submitButton.classList.toggle("hidden");
    highscoreContainer.classList.toggle("hidden");
});