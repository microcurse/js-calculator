const calculator = {
  displayValue: '0',
  firstNumber: null,
  operator: null,
  waitingForNextNumber: false
}

// set calculator screen and update display
function updateDisplay() {
  const calculatorScreen = document.querySelector('.calculator-screen');
  calculatorScreen.value = calculator.displayValue;
}
updateDisplay();

// listen for key presses with event delegation
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {

  // this lets us set up the current clicked key as a destructured object
  const { target } = event;
  
  // TODO: need to catch when numbers, operators, equals, decimals, and clear are pressed
  if(target.classList.contains('number')) {
    inputNumber(target.value);
    updateDisplay();
  }

});

//TODO: need to create a numbers input function to handle what happens when numbers are input.
function inputNumber(number) {
  const { displayValue } = calculator;
  calculator.displayValue = displayValue === '0' ? number : displayValue + number;
}

function operate(operation, a, b) {

  switch(operation) {
    case '+':
      return add( a, b );
    case '-':
      return subtract( a, b );
    case '*':
      return multiply( a, b );
    case '/':
      return divide( a, b );
  }

}

// math operations
function add(a, b) {
  return a + b;
}

function subtract(a , b) {
  return a - b;
}

function multiply(a , b) {
  return a * b;
}

function divide(a , b) {
  return a / b;
}