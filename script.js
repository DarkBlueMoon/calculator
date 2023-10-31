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