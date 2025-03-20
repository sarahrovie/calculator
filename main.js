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

function storeValues(val) {
    return values.push(val)
}

function addToDisplay(btn) {
    let value = btn.id 

    if (value === 'clear') {
        display.textContent = ''
        result = 0;
        values = [];
    } else {
        display.textContent += value
        storeValues(value)
    }
    console.log(values)
}

function getValues() {
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
            getValues();
            operate(num1, operator, num2)
        }
    })
})

function operate(num1, operator, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (operator === '+') {
        result += add(num1, num2);
    } else if (operator === '-') {
        result += subtract(num1, num2);
    } else if (operator === '*') {
        result += multiply(num1, num2);
    } else if (operator === '/') {
        result += divide(num1, num2);
    }
    display.textContent += result;
}