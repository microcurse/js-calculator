// set all numbers
const buttons = document.querySelectorAll('button');

// set calculation screen
let calScreen = document.getElementById('calculation');

let currInput = '';
let firstNum  = '';
let nextNum   = '';
let operation = '';
let solution  = '';

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
        operation = '+';
        firstNum  = parseInt(currInput, 10);

        if (firstNum > 0) {
          nextNum = parseInt(currInput, 10);
          firstNum = operate(operation, firstNum, nextNum);
        }
        
        currInput = 0;
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
        solution = operate(operation, firstNum, nextNum);
        calScreen.innerHTML = solution;
        currInput = 0;
        break;
    }


  });
});

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

// operations
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