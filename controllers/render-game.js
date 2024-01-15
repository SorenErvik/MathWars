// render-game.js
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

export function renderLives(lives) {
    const livesContainer = document.getElementById('livesContainer');
    
    // Clear existing content
    livesContainer.innerHTML = '';

    const livesElement = document.createElement('p');
    livesElement.textContent = `Remaining Lives: ${lives}`;

    livesContainer.appendChild(livesElement);
}

export function renderScore(score) {
    const scoreContainer = document.getElementById('scoreContainer');

    // Clear existing content
    scoreContainer.innerHTML = '';

    const scoreElement = document.createElement('p');
    scoreElement.textContent = `Score: ${score}`;

    scoreContainer.appendChild(scoreElement);
}



export function renderHighscore(highscore) {
  const highscoreContainer = document.getElementById('highscoreContainer');

    // Clear existing content
    highscoreContainer.innerHTML = '';

    const highscoreElement = document.createElement('p');
    highscoreElement.textContent = `Highscore: ${highscore}`;

    highscoreContainer.appendChild(highscoreElement);
}