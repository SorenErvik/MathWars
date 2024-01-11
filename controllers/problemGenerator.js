/*
This module is responsible for generating the math problems for the user to solve.
*/

let a = Math.floor(Math.random() * 100) + 1; // Determining the first number
let b = Math.floor(Math.random() * 100) + 1; // Determining the second number
let operator; // Declare the operator variable outside the function

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

determineOperator();

let question = `What is ${a} ${operator} ${b}? Round down to the nearest whole number.`;

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

function generateProblem() {
  determineOperator();

  const question = `What is ${a} ${operator} ${b}? Round down to the nearest whole number.`;
  const answer = calculateAnswer(a, b, operator);

  // Log to console for testing purposes
  console.log("Generated Problem:", question);
  console.log("Expected Answer:", answer);

  return { question, answer };
}


// You can also export the generateProblem function if needed
export { generateProblem };

