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

// Set the second operand
// Pass the two values to operate()
function evaluate() {
  secondOperand = display.value;
  totalVal = operate(firstOperand, secondOperand, operator);
  display.value = totalVal;
  operator = "";
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
  if (b === 0) {
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

// function operate(num1, num2, op) {
//   // The user has entered a value POST operator that will be evaluated
//   // with the previously saved value.
//   if (num2 !== "") {
//     console.log(num1, num2, op);
//     num1 = parseFloat(num1);
//     switch (op) {
//       case "+":
//         // return add(num1, num2);
//         totalVal = add(num2, num1);
//       case "-":
//         // return subtract(num1, num2);
//         totalVal = subtract(num2, num1);
//         break;
//       case "*":
//         // return multiply(num1, num2);
//         break;
//       case "/":
//         // return divide(num1, num2);
//         break;
//       default:
//         // return "Invalid operator. Valid operators are '+', '-', '*', '/'";
//         break;
//     }
//     num2 = totalVal;
//     display.value = num2;
//   } else if (num1 !== "") {
//     num2 = parseFloat(num1);
//   }
//   firstOperand = "";
//   // The user has entered a value that needs to be saved.
// }

// wrapper.addEventListener("click", (e) => {
//   const isButton = e.target.nodeName === "BUTTON";
//   if (!isButton) {
//     return;
//   }

//   if (e.target.classList.contains("number")) {
//     appendNumber(e.target.innerText);
//     // firstOperand += e.target.innerText;
//     // display.value += e.target.innerText;
//   } else if (e.target.classList.contains("clear")) {
//     clearAll();
//   } else if (e.target.classList.contains("operator")) {
//     setOperator(e.target.innerText);
//     // First, if operator is blank, set the operator
//     // If not, set the second operand.
//     if (operator === "") {
//       operator = e.target.innerText;
//     } else {
//     }

//     // operator = e.target.innerText;

//     // operator = e.target.innerText;
//     // operate(firstOperand, secondOperand, operator);
//   }
// });
