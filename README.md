js-calculator
# JavaScript powered calculator

Currently it works with only two numbers. I need to figure out a way to allow a string of operations.

Some thoughts:

- Create a function to display and update the screen?
- Reconsider what happens when a user clicks a button. I think I need to differentiate when a user clicks a number, operation, clear, decimal, and equals.
- It doesn't feel like firstNum, nextNum, and the rest of those variables are the best way to get this working


Update 03/24/2020

Calculator is now completely functional. The last thing that needs to be done is to capture keydown events for keyboard compatability.