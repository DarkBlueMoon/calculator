const wrapper = document.querySelector("#button-wrapper");
const display = document.querySelector("#display");

wrapper.addEventListener("click", (e) => {
  const isButton = e.target.nodeName === "BUTTON";
  if (!isButton) {
    return;
  }

  if (e.target.classList.contains("number")) {
    // console.log(e);
    display.value += e.target.innerText;
  }
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
