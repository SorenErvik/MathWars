/*
This module is responsible for generating the math problems for the user to solve.
*/


const problemGenerator = () => {
  let a = Math.floor(Math.random() * 100) + 1;
  let b = Math.floor(Math.random() * 100) + 1;
  let operator;

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

  return {
    getQuestion: () => question,
    getAnswer: () => calculateAnswer(a, b, operator),
  };
};

export default problemGenerator;