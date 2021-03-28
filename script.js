// const wrapper = document.querySelector("#button-wrapper");
const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector(".equals");

let firstOperand = "";
let secondOperand = "";
let operator = "";
let totalVal = 0;
let shouldClearDisplay = false;

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (shouldClearDisplay) display.value = "";
    display.value += button.textContent;
    shouldClearDisplay = false;
  });
});

// If op not set, three steps:
//  1: Set the operator var
//  2: Clear display on next number click
//  3: Set firstOperand var
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (operator !== "") evaluate();
    firstOperand = display.value;
    operator = button.textContent;
    shouldClearDisplay = true;
  });
});

clearButton.addEventListener("click", clearAll);
equalsButton.addEventListener("click", evaluate);

// Set the second operand
// Pass the two values to operate()
function evaluate() {
  secondOperand = display.value;
  totalVal = operate(firstOperand, secondOperand, operator);
  display.value = totalVal;
  operator = "";
  shouldClearDisplay = true;
}

// Bugs:
// 1) After pressing operator, each # press clears the display.

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
  if (b === 0) {
    setTimeout(clearAll, 1000);
    return "Cannot divide by zero.";
  }
  return a / b;
}

function clearAll() {
  display.value = "";
  firstOperand = "";
  secondOperand = "";
  operator = "";
  totalVal = 0;
}

function operate(num1, num2, op) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
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
      return "Invalid operator. Valid operators are '+', '-', '*', '/'";
  }
}
