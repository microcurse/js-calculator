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
  if( target.classList.contains('number' )) {
    inputNumber(target.value);
    updateDisplay();
  }

  if( target.classList.contains('operator' )) {
    handleOperator(target.value);
    updateDisplay();
  }

});

// checks if theres a value in the screen, if there isn't, then just append the next number
function inputNumber(number) {
  const { displayValue, waitingForNextNumber } = calculator;

  if( waitingForNextNumber === true ) {
    calculator.displayValue = number;
    calculator.waitingForNextNumber = false;
  } else {
    calculator.displayValue = displayValue === '0' ? number : displayValue + number;
  }

  // checks the current status of the calculator when a button is pressed
  console.log(calculator);
}

function handleOperator(nextOperator) {
  const {firstNumber, displayValue, operator } = calculator;
  const inputValue = parseFloat(displayValue);

  if( firstNumber === null ) {
    calculator.firstNumber = inputValue;
  } else  if ( operator ) {
    const result = performCalculation[operator](firstNumber, inputValue);

    calculator.displayValue = String(result);
    calculator.firstNumber = result;
  }

  calculator.waitingForNextNumber = true;
  calculator.operator = nextOperator;

  // checks the current status of the calculator when a button is pressed
  console.log(calculator);
}

// calculation object
const performCalculation = {
  '/': (firstNumber, nextNumber) => firstNumber / nextNumber,
  '+': (firstNumber, nextNumber) => firstNumber + nextNumber,
  '-': (firstNumber, nextNumber) => firstNumber - nextNumber,
  '*': (firstNumber, nextNumber) => firstNumber * nextNumber,
  '=': (firstNumber, nextNumber) => nextNumber
}