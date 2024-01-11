const userInputModule = () => {
  let userInputElement = document.getElementById('userInput');
  let submitButton = document.getElementById('submitButton');

  function handleButtonClick() {
    return new Promise((resolve, reject) => {
      const clickHandler = () => {
        let userInput = userInputElement.value;
        if (isValidInput(userInput)) {
          // Parse the user input as a number
          userInput = parseFloat(userInput);
          
          console.log('User Input:', userInput);
          resolve(userInput);
        } else {
          console.error('Invalid Input. Please enter a valid response.');
          reject('Invalid Input');
        }

        // Remove the event listener after processing the click event
        submitButton.removeEventListener('click', clickHandler);
      };

      // Add the event listener for the click event
      submitButton.addEventListener('click', clickHandler);
    });
  }

  function isValidInput(input) {
    // Check if the input is a non-empty string
    return typeof input === 'string' && input.trim() !== '';
  }

  return {
    handleButtonClick,
  };
};

export default userInputModule();