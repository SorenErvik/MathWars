/*
This module is responsible for generating the math problems for the user to solve.
*/
let a;
let b;
function determineA() {
  a = Math.floor(Math.random() * 12) + 1;
  return a;
}
function determineB() {
  b = Math.floor(Math.random() * 12) + 1;
  return b;
}

//let a = Math.floor(Math.random() * 12) + 1; // Determining the first number
//let b = Math.floor(Math.random() * 12) + 1; // Determining the second number
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

//determineOperator();
//determineA();
//determineB();

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
  determineA();
  determineB();

  const question = `What is ${a} ${operator} ${b}? Round down to the nearest whole number.`;
  const answer = calculateAnswer(a, b, operator);

  return { question, answer };
}


// You can also export the generateProblem function if needed
export { generateProblem };

