// set all buttons as variable
const buttons = document.querySelectorAll('button');

// set calculation screen
let calScreen = document.getElementById('calculation');

let currInput = '';

// listen for when any button is pressed
let input = buttons.forEach(button => {
  button.addEventListener("click", function () {

    let nextInput = '';

    // collect user input
    currInput += this.value;

    // output to screen
    calScreen.innerHTML = currInput;

  });
});

function operate() {
  
}