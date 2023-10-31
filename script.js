let leftOperand = 0;
let operator = '';
let rightOperand = 0;

function operate(num1, op, num2) {
  switch (op) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      break;
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) { return "Cannot Divide By Zero"; }
  return Math.round((a / b) * 10000) / 10000; // round to 4 decimal points
}