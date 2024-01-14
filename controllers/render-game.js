// render-game.js
// renderGame.js
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