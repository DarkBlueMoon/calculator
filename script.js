// const wrapper = document.querySelector("#button-wrapper");
const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector(".equals");
const backspaceButton = document.querySelector(".backspace");
const pointButton = document.querySelector(".point");

let firstOperand = "";
let secondOperand = "";
let operator = "";
let totalVal = 0;
let shouldClearDisplay = false;
let decimalClicked = false;

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
    decimalClicked = false;
  });
});

clearButton.addEventListener("click", clearAll);
equalsButton.addEventListener("click", evaluate);
backspaceButton.addEventListener("click", () => {
  display.value = display.value.slice(0, -1);
});
pointButton.addEventListener("click", () => {
  if (!decimalClicked) {
    decimalClicked = true;
    display.value += ".";
  }
});

// Set the second operand
// Pass the two values to operate()
function evaluate() {
  if (operator === "") return;
  secondOperand = display.value;
  totalVal = operate(firstOperand, secondOperand, operator);
  display.value = totalVal;
  operator = "";
  shouldClearDisplay = true;
  decimalClicked = false;
}

// TODO:
// 3) Allow the user to enter decimals.
//    If a decimal is already in the display, don't let the user enter another one.

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
  let ans = 0;
  switch (op) {
    case "+":
      ans = add(num1, num2);
      break;
    case "-":
      ans = subtract(num1, num2);
      break;
    case "*":
      ans = multiply(num1, num2);
      break;
    case "/":
      ans = divide(num1, num2);
      break;
    default:
      return "Invalid operator. Valid operators are '+', '-', '*', '/'";
  }

  return ans.toFixed(5);
  // return Math.round(ans * 100) / 100;
}
