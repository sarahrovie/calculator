const btns = document.querySelectorAll('.btn');
let display = document.querySelector('#display');

let num1 = '';
let num2 = '';
let operator = '';
const operators =  ['+', '-', '*', '/'];
let values = [];

function add(a, b) { return a + b; }

function subtract(a, b) { return a - b; }

function multiply(a, b) { return a * b; }

function divide(a, b) { return a / b; }

function getValues(val) {
    return values.push(val)
}

function addToDisplay(btn) {
    let value = btn.id 

    if (value === 'clear') {
        display.textContent = ''
    } else {
        display.textContent += value
        getValues(value)
    }
    console.log(values)
}

function getNumbers() {
    const operatorIndex = values.findIndex(v => operators.includes(v))
    operator = values[operatorIndex];
    num1 = values.slice(0, operatorIndex).join('')
    num2 = values.slice(operatorIndex + 1, -1).join('')
    console.log(num1, operator, num2)
}

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        addToDisplay(btn);

        if (btn.id === '=') {
            getNumbers();
            operate(num1, operator, num2)
        }
    })
})

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