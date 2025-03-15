const btns = document.querySelectorAll('.btn');
let display = document.querySelector('#display');

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let btnValue = btn.id;

        if (btnValue === 'clear') {
            display.textContent = '';
        } else {
            display.textContent += btnValue;
        };
    })
})

function add(a, b) { return a + b; }

function subtract(a, b) { return a - b; }

function multiply(a, b) { return a * b; }

function divide(a, b) { return a / b; }

let num1;
let num2;
let operator;

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