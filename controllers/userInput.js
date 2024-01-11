const userInputModule = () => {
  let userInputElement = document.getElementById('userInput');
  let submitButton = document.getElementById('submitButton');

  function handleButtonClick() {
    return new Promise((resolve, reject) => {
      submitButton.addEventListener('click', () => {
        let userInput = userInputElement.value;
        if (isValidInput(userInput)) {
          console.log('User Input:', userInput);
          resolve(userInput);
        } else {
          console.error('Invalid Input. Please enter a valid response.');
          reject('Invalid Input');
        }
      });
    });
  }

  function isValidInput(input) {
    return typeof input === 'string' && input.trim() !== '';
  }

  return {
    handleButtonClick,
  };
};

export default userInputModule();