const btns = document.querySelectorAll('.btn');
let display = document.querySelector('#display');

let num1 = '';
let num2 = '';
let operator = '';
const operators =  ['+', '-', '*', '/'];
let values = [];
let result = 0;

function add(a, b) { return a + b; }

function subtract(a, b) { return a - b; }

function multiply(a, b) { return a * b; }

function divide(a, b) { return a / b; }

function resetValues() {
    values = [];
    result = 0;
    display.textContent = '';
}

function addToDisplay(btn) {
    let value = btn.id 

    if (value === 'clear') {
        resetValues();
    } else {
        display.textContent += value;
        values.push(value);
    }
}

function getValues() {
    const operatorIndex = values.findIndex(v => operators.includes(v));
    operator = values[operatorIndex];
    num1 = values.slice(0, operatorIndex).join('');
    num2 = values.slice(operatorIndex + 1, -1).join('');
}

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        addToDisplay(btn);

        if (btn.id === '=') {
            getValues();
            if (!num1 || !operator || !num2) {
                alert('Please input at least two numbers and an operator!');
                resetValues();
            }
            else {
                operate(num1, operator, num2);
            }
        }

        if (operators.includes(btn.id)) {
            getValues();
            if (num1 && operator && num2) {
                resetValues();
                operate(num1, operator, num2);
                num1 = result;
                operator = btn.id;
                display.textContent += operator;
                values.push(num1, operator);
            }
        }
    })
})

function operate(num1, operator, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (operator === '+') {
        result = add(num1, num2);
    } else if (operator === '-') {
        result = subtract(num1, num2);
    } else if (operator === '*') {
        result = multiply(num1, num2);
    } else if (operator === '/') {
        result = divide(num1, num2);
    }

    display.textContent = '';
    display.textContent += result;
}