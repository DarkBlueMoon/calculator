const wrapper = document.querySelector("#button-wrapper");
const display = document.querySelector("#display");
let preOperValue = "";
let postOperValue = "";
let currentOp = "";
let totalVal = 0;

/*
Two vars to store the #s, one var to store the operator, one var to store the result.
  The operator isn't used until the second number comes in.
  User enters num1, that's stored. User presses operator, that's stored.
  User enters num2, two outcomes:
    User presses operator: 1 + 2 +
      Store #1 (op) #2 in first variable: 3
      Clear (op) and #2: "", ""
      Update display w/ first variable: 3
      User presses num then op again: 4 +
        Store #1 (op) #2 in first var: 7
        Clear (op) and #2: "", ""
        Update display w/ first var: 7
    User presses equals: 1 + 2 =
      Store #1 (op) #2 in first variable: 3
      Clear (op) and #2: "", ""
      Update display w/ first var: 3
      End this chain of calculations: clear var1 (?)
*/

wrapper.addEventListener("click", (e) => {
  const isButton = e.target.nodeName === "BUTTON";
  if (!isButton) {
    return;
  }

  if (e.target.classList.contains("number")) {
    preOperValue += e.target.innerText;
    display.value = preOperValue;
  } else {
    currentOp = e.target.innerText;
  }

  // if (e.target.classList.contains("operator")) {
  //   // If operator is empty, we are calculating for the first time. Wait for second number.
  //   if (currentOp === "") {

  //   } else {

  //   }
  //   // totalVal += parseInt(display.value) || 0;
  //   // totalVal += operate(totalVal, parseInt(display.value), e.target.innerText);
  //   // display.value = "";
  //   // console.log(totalVal);
  // }
});

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  if (b === 0) {
    return "Cannot divide by zero.";
  }
  return a / b;
};

const operate = function (num1, num2, op) {
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
};
