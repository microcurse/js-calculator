// set all buttons as variable
const nums = document.querySelectorAll('#num');

// set calculation screen
let calScreen = document.getElementById('calculation');

let currInput = '';

// listen for when any button is pressed
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