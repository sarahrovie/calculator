const btns = document.querySelectorAll('.btn');
let display = document.querySelector('#display');

let num1 = '';
let num2 = '';
let operator = '';
const operators =  '+-*/';
const numbers = '123456789';
let values = [];
let result = 0;
const error = 'Why???';

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
    const value = btn.id 

    if (value === 'clear') {
        resetValues();
    } else if (display.textContent === error) {
        resetValues();
        display.textContent += value;
        values.push(value);
    } else if (value == '.') {
        if (values.includes('.')) {
            return;
        } else {
            display.textContent += value;
            values.push(value);
        }
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

function operate(num1, operator, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (operator === '+') {
        result = add(num1, num2);
    } else if (operator === '-') {
        result = subtract(num1, num2);
    } else if (operator === '*') {
        result = multiply(num1, num2);
    } else if (operator === '/') {
        if (num2 === 0) {
            display.textContent = error;
            return;
        }
        result = divide(num1, num2);
    }
    result = parseFloat(result.toFixed(2))
    display.textContent = '';
    display.textContent += result;
}

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const btnVal = btn.id;

        if (numbers.includes(btnVal)
            && display.textContent === result.toString()) {
            resetValues();
        }

        addToDisplay(btn);


        if (btnVal === '=') {
            getValues();
            if (!num1 || !operator || !num2) {
                alert('Please input at least two numbers and an operator!');
                resetValues();
            }
            else {
                operate(num1, operator, num2);      
            }
        }
        
        if (operators.includes(btnVal)) {
            getValues();
            if (num1 && operator && num2) {
                resetValues();
                operate(num1, operator, num2);
                num1 = result;
                operator = btnVal;
                display.textContent += operator;
                values.push(num1, operator);
            }
        }
    })
})