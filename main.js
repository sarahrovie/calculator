const btns = document.querySelectorAll('.btn');
let display = document.querySelector('#display');

let num1 = '';
let num2 = '';
let operator = '';
const operators =  ['+', '-', '*', '/', '='];

function add(a, b) { return a + b; }

function subtract(a, b) { return a - b; }

function multiply(a, b) { return a * b; }

function divide(a, b) { return a / b; }

function operate(num1, operator, num2) {
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1, num2);
    } else if (operator === '*') {
        return multiply(num1, num2);
    } else if (operator === '/') {
        return divide(num1, num2);
    }
}

function addToDisplay(btn) {
    value = btn.id 

    if (value === 'clear') {
        display.textContent = ''
    } else {
        display.textContent += value
    }
}

btns.forEach((btn) => {
    btn.addEventListener('click', () => addToDisplay(btn))
})
