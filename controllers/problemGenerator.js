/*
This module is responsible for generating the math problems for the user to solve.
*/
// Declaring our a and b variables
let a;
let b;

// Creating the function that randomly determines what number that a will represent
function determineA() {
  a = Math.floor(Math.random() * 12) + 1;
  return a;
}

// Creating the function that randomly determines what number that b will represent
function determineB() {
  b = Math.floor(Math.random() * 12) + 1;
  return b;
}

// Declare the operator variable outside the function
let operator;

// Creating the function that randomly determines what operator will be used
function determineOperator() {
  let num = Math.random();
  if (num < 0.26) {
    operator = "+";
  } else if (num < 0.51 && num > 0.25) {
    operator = "-";
  } else if (num < 0.76 && num > 0.5) {
    operator = "*";
  } else if (num > 0.75) {
    operator = "/";
  }
}

// Creating the function that will determine the answer to the problem
function calculateAnswer(a, b, operator) {
  switch (operator) {
    case "+":
      return Math.floor(a + b);
    case "-":
      return Math.floor(a - b);
    case "*":
      return Math.floor(a * b);
    case "/":
      // Ensure b is not 0 to avoid division by zero
      return Math.floor(a / b);
    default:
      return "Invalid operator";
  }
}

//Calling our functions to get the logic for the game going
function generateProblem() {
  determineOperator();
  determineA();
  determineB();

  // Here we declare question and answer variables and assign them the appropriate values
  const question = `What is ${a} ${operator} ${b}? Round down to the nearest whole number.`;
  const answer = calculateAnswer(a, b, operator);

  return { question, answer };
}


// Exporting the generateProblem function
export { generateProblem };

