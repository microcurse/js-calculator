// set all buttons as variable
const buttons = document.querySelectorAll('button');

// set calculation screen
let calScreen = document.getElementById('calculation');

// listen for when any button is pressed
let calInput = buttons.forEach(button => {
  button.addEventListener("click", function () {
    collectInput(this.value);
  });
});

// this is where we take the input from the calculator and do something with it
function collectInput(input) {
  switch (input) {
    // clear all current inputs
    case 'clear':
      console.log('You hit the Clear button');
      break;
    case '=':
      console.log('You hit the equals button');
      break;
  }
}