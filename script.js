const btnContainer = document.querySelector("#button-container");
const numberDisplay = document.querySelector("#display");

let leftOperand = 0;
let operator = "";
let rightOperand = 0;

let displayValue = "";
let clearDisplayFlag = false;
let resetFlag = false;

btnContainer.addEventListener("mousedown", (e) => {
  const target = e.target;

  if (target.classList.contains("number")) {
    if (clearDisplayFlag) {
      numberDisplay.value = "";
      clearDisplayFlag = false;
    }

    numberDisplay.value += target.textContent;
  } else if (target.classList.contains("operator")) {

    if (checkForCalculation()) {
      let result = calculateResult(leftOperand, operator);
      updateDisplay(result);
      // rightOperand = +numberDisplay.value;
      // numberDisplay.value = operate(leftOperand, operator, rightOperand);
      // leftOperand = numberDisplay.value;
      // operator = "";
      // rightOperand = 0;
    }

    clearDisplayFlag = true;

    leftOperand = +numberDisplay.value;
    operator = target.textContent;

  } else if (target.classList.contains("equals")) {
    if (leftOperand && operator) {
      rightOperand = +numberDisplay.value;
      numberDisplay.value = operate(leftOperand, operator, rightOperand);
      leftOperand = numberDisplay.value;
      operator = "";
      rightOperand = 0;
    }
    resetFlag = true;
  }
});

function checkForCalculation() {
  return leftOperand && operator;
}

function updateDisplay(res) {
  numberDisplay.value = res;
  leftOperand = numberDisplay.value;
  operator = "";
  rightOperand = 0;
}

function calculateResult(leftOperand, operator) {
  rightOperand = +numberDisplay.value;
  return operate(leftOperand, operator, rightOperand);
  // updateDisplay(result);
  // leftOperand = numberDisplay.value;
  // operator = "";
  // rightOperand = 0;
}

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