// set all buttons as variable
const buttons = document.querySelectorAll('button');

// set calculation screen
let calScreen = document.getElementById('calculation');

// listen for when any button is pressed
let input = buttons.forEach(button => {
  button.addEventListener("click", function () {

    // collect user input
    let currInput = this.value;
    
    // output to screen
    calScreen.innerHTML += currInput;

    // do something with the input
    if ( currInput === '+' ) {
      add(currInput);
    }

  });
});

function add(num) {
  return num + num;
}

function subctract(num) {
  return num - num;
}

function multiple(num) {
  return num * num;
}

function divide(num) {
  return num / num;
}