/*
This module is responsible for grabbing the user's input.
*/

const userInputModule = () => {
    // Assuming you have an input element with an id "userInput" and a button with an id "submitButton"
    let userInputElement = document.getElementById('userInput');
    let submitButton = document.getElementById('submitButton');
  
    // Event listener for the button click
    submitButton.addEventListener('click', handleButtonClick);
  
    // Function to handle the button click event
    function handleButtonClick() {
      // Get the user input when the button is clicked
      let userInput = userInputElement.value;
  
      // Validate the input (you can customize this based on your requirements)
      if (isValidInput(userInput)) {
        // Now you can use the userInput variable for further processing or validation
        console.log('User Input:', userInput);
      } else {
        console.error('Invalid Input. Please enter a valid response.');
      }
    }
  
    // Function to validate the user input (customize this based on your requirements)
    function isValidInput(input) {
      // Example: Check if the input is a non-empty string
      return typeof input === 'string' && input.trim() !== '';
    }
  
    return {
      // You can expose additional functions or properties here if needed
    };
  };
  
  export default userInputModule();
  