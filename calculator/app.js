let currentInput = "";
let display = document.querySelector(".display h1"); 
function appendNumber(number) {
  currentInput += number.toString();
  updateDisplay();
}
function appendoperator(operator) {
  if (/[+\-*/.=]$/.test(currentInput)) return;
  if (operator === "=") {
    calculateResult();
    return;
  }
  currentInput += operator;
  updateDisplay();
}
function clearDisplay() {
  currentInput = "";
  updateDisplay();
}
function calculateResult() {
  try {
    let result = eval(currentInput);
    currentInput = result.toString();
  } catch (error) {
    currentInput = "Error";
  }
  updateDisplay();
}
function updateDisplay() {
  display.textContent = currentInput || "0";
}

