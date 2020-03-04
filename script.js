// set all numbers
const nums = document.querySelectorAll('#num');

// set calculation screen
let calScreen = document.getElementById('calculation');

let currInput = '';

// listen for numbers
let input = nums.forEach(num => {
  num.addEventListener("click", function () {

    let nextInput = '';

    // collect user input
    currInput += this.value;

    // output to screen
    calScreen.innerHTML = currInput;

  });
});

function operate() {
  
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