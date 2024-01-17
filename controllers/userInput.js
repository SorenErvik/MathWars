/*
 This module is responsible for handling user input.
*/

// This function handles the user input
const userInputModule = () => {

  // Declaring userInputElement and submitButton
  let userInputElement = document.getElementById('userInput');
  let submitButton = document.getElementById('submitButton');

  // Creating the handleButtonClick function
  function handleButtonClick() {

    // This returns a promise that will be resolved
    return new Promise((resolve, reject) => {

      // Create the click handler for the user input
      const clickHandler = () => {

        // Declaring userInput and giving it the appropriate value
        let userInput = userInputElement.value;

        // If statement to make sure that the user input is valid
        if (isValidInput(userInput)) {
          // Parse the user input as a number
          userInput = parseFloat(userInput);
          
          console.log('User Input:', userInput);
          resolve(userInput);

          // Handle errors
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

  // Make sure the input is valid
  function isValidInput(input) {
    // Check if the input is a non-empty string
    return typeof input === 'string' && input.trim() !== '';
  }

  // Returning handleButtonClick
  return {
    handleButtonClick,
  };
};

// Export the whole moduele
export default userInputModule();