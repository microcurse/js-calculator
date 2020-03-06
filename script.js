// set all numbers
const numbers = document.querySelectorAll('#num');
const operators = document.querySelectorAll('#operator');

// set calculation screen
let calScreen = document.getElementById('calculation');

let a = '';
let currOp    = '';
let operation = '';
let storedVal = [];

// listen for numbers
let inputNum = numbers.forEach(number => {
  number.addEventListener("click", function () {
    a += this.value;
    console.log('number was pressed!');

    calScreen.innerHTML = parseInt(a, 10);
  });
});

// listen for operations
let inputOp = operators.forEach(operator => {
  operator.addEventListener("click", function () {

    console.log('operator was pressed!');

    // collect user input
    currOp += this.value;

    // output to screen
    calScreen.innerHTML = parseInt(a, 10);

  });
});

// math stuff
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
  return a / b;
}