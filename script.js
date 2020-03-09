// set all numbers
const buttons = document.querySelectorAll('button');

// set calculation screen
let calScreen = document.getElementById('calculation');

let currInput = '';
let firstNum  = '';
let nextNum   = '';
let operation = '';

// listen for numbers
let input = buttons.forEach(button => {
  button.addEventListener("click", function () {

    // collect user input
    currInput += this.value;

    // output current number to screen
    calScreen.innerHTML = parseInt(currInput, 10);

    // operators
    switch (this.value) {
        // clears all and sets to 0
      case 'clear':
        currInput = 0;
        firstNum  = '';
        nextNum   = '';
        calScreen.innerHTML = currInput;
        break;
      case '+':
        firstNum  = parseInt(currInput, 10);
        currInput = 0;
        operation = '+';
        break;
      case '-':
        firstNum  = parseInt(currInput, 10);
        currInput = 0;
        operation = '-';
        break;
      case '*':
        firstNum  = parseInt(currInput, 10);
        currInput = 0;
        operation = '*';
        break;
      case '/':
        firstNum  = parseInt(currInput, 10);
        currInput = 0;
        operation = '/';
        break;
      case '=':
        nextNum = parseInt(currInput, 10);
        calScreen.innerHTML = operate(operation, firstNum, nextNum);
        currInput = 0;
        break;
    }


  });
});

function operate(operation, firstNum, nextNum) {
  if ( operation === '+' ) {
   return add( firstNum, nextNum );
  } else if (operation === '-') {
    return subtract(firstNum, nextNum);
  } else if (operation === '*') {
    return multiply(firstNum, nextNum);
  } else if (operation === '/') {
    return divide(firstNum, nextNum);
  }
}

// operations
function add(firstNum, nextNum) {
  return firstNum + nextNum;
}

function subtract(currInput, nextInput) {
  return currInput - nextInput;
}

function multiply(currInput, nextInput) {
  return currInput * nextInput;
}

function divide(currInput, nextInput) {
  return currInput / nextInput;
}