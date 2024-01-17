/*
 This module is responsible for rendering the game onto the game.ejs page
*/

// This function renders the question
export function renderQuestion(question) {
    const questionContainer = document.getElementById('questionContainer');
  
    // Clear existing content
    questionContainer.innerHTML = '';
  
    // Create a new paragraph element for the question
    const questionElement = document.createElement('p');
    questionElement.textContent = `Solve the following: ${question}`;
  
    // Append the new question to the container
    questionContainer.appendChild(questionElement);
  }

  // This function renders the number of lives
export function renderLives(lives) {
    const livesContainer = document.getElementById('livesContainer');
    
    // Clear existing content
    livesContainer.innerHTML = '';
    
    // Create a new paragraph element for the lives
    const livesElement = document.createElement('p');
    livesElement.textContent = `Remaining Lives: ${lives}`;

    // Append the new lives to the container
    livesContainer.appendChild(livesElement);
}

// This function renders the score
export function renderScore(score) {
    const scoreContainer = document.getElementById('scoreContainer');

    // Clear existing content
    scoreContainer.innerHTML = '';

    // Create a new paragraph element for the score
    const scoreElement = document.createElement('p');
    scoreElement.textContent = `Score: ${score}`;

    // Append the new score to the container
    scoreContainer.appendChild(scoreElement);
}


// This function renders the highscore
export function renderHighscore(highscore) {
  const highscoreContainer = document.getElementById('highscoreContainer');

    // Clear existing content
    highscoreContainer.innerHTML = '';

    // Create a new paragraph element for the highscore
    const highscoreElement = document.createElement('p');
    highscoreElement.textContent = `Highscore: ${highscore}`;

    // Append the new highscore to the container
    highscoreContainer.appendChild(highscoreElement);
}

// This function renders the game over containers
export function renderGameOver(score) {
  const gameOverContainer = document.getElementById('gameOverContainer');

  // Clear existing content
  gameOverContainer.innerHTML = '';

  // Create a new paragraph element for the game over message
  const gameOverElement = document.createElement('p');
  gameOverElement.textContent = `Game over! Your score was ${score}`;

  // Append the new game over to the container
  gameOverContainer.appendChild(gameOverElement);
}