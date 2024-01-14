// render-game.js
export function renderQuestion(question) {
    const gameContainer = document.getElementById('gameContainer');
    const questionElement = document.createElement('p');
    questionElement.textContent = `Solve the following: ${question}`;
    gameContainer.appendChild(questionElement);
  }