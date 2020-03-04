// set all numbers
const buttons = document.querySelectorAll('button');

// set calculation screen
let calScreen = document.getElementById('calculation');

let currInput = '';
let nextInput = '';

// listen for numbers
let input = buttons.forEach(button => {
  button.addEventListener("click", function () {
    
    if ( this.value === 'clear' ) {
      // clears all and sets to 0
      currInput = 0;
      calScreen.innerHTML = parseInt(currInput, 10);
    } else {

      // collect user input
      currInput += this.value;

      // output to screen
      calScreen.innerHTML = currInput;
    }

    if ( currInput === '+' ) {
      operate( '+', currInput, nextInput );
    }

    

    

  });
});

function operate(operator, currInput, nextInput) {
  if ( operator === '+' ) {
    console.log(add(currInput, nextInput));
  }
}

// operations
function add(currInput, nextInput) {
  return currInput + nextInput;
}

function subtract(currInput, nextInput) {
  return currInput - nextInput;
}

function multiply(currInput, nextInput) {
  return currInput * nextInput;
}

function divid(currInput, nextInput) {
  return currInput / nextInput;
}