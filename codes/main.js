let currentDisplay = document.getElementById("userInput");
const numberBtns = document.querySelectorAll(".numberBtn");
const operators = document.querySelectorAll(".operator");
let equalBtn = document.querySelector('.equalBtn');
let hasDot = document.querySelector('.dot');

let clearIsClicked = false;
let equalIsClicked = false;
let opIsClicked = false;
let on = false;
let newOperator = null;
let result = 0;

const operations = {
    '+': (firstNum, secondNum) => firstNum + secondNum,
    '−': (firstNum, secondNum) => firstNum - secondNum,
    '×': (firstNum, secondNum) => firstNum * secondNum,
    '÷': (firstNum, secondNum) => firstNum / secondNum,
};

const expression = {
    displayValue: '0',
    firstOperand: null,
    currentOperator: null,
    secondOperand: null,
    waitForSecondOperand: false,
};

// Calculate result
function operate() {
    let a = expression.firstOperand;
    let b = expression.secondOperand;
    let op = expression.currentOperator;

    if (operations[op]) {
        result = operations[op](a, b);
        return currentDisplay.value = result;
    } else {
        return null;
    }
}

// Clear display
function clearDisplay() {
    currentDisplay.value = "";
    clearExpressionValue();

    clearIsClicked = true;
    console.log(Object.values(expression));
}

// Clear key values
function clearExpressionValue() {
    for (key in expression) {
        expression[key] = '0';
    }

    return expression;
}




// Getting the operator
operators.forEach(op => {
    op.addEventListener("click", e => {
        if (
            expression.firstOperand !== null &&
            expression.currentOperator !== null &&
            expression.secondOperand !== null
        ) {
            operate();

            // for (key in expression) {
            //     expression[key] = '0';
            // }
            expression.currentOperator = null;
            expression.secondOperand = null;
            expression.waitForSecondOperand = false;
            expression.displayValue = '0';

            if (clearIsClicked !== true) {
                expression.firstOperand = result;
            }

            newOperator = e.target.textContent; 
            expression.currentOperator = newOperator;

            console.log(Object.values(expression));

            // return currentDisplay.value = result;
        } else {
            expression.currentOperator = e.target.textContent;
            expression.waitForSecondOperand = true;
            expression.displayValue = "";
            hasDot.disabled = false;
            on = true;
        }

        // console.log(expression.currentOperator);
    })
});

// Getting the numbers
numberBtns.forEach(num => {
    num.addEventListener("click", e => {
        if (expression.waitForSecondOperand === true) {
            if (e.target.textContent.includes('.')) {
                hasDot.disabled = true;
            }

            if (on === true) {
                currentDisplay.value = "";
                on = false;
            }

            expression.displayValue += e.target.textContent;
            currentDisplay.value += e.target.textContent;
            expression.secondOperand = parseFloat(expression.displayValue);
            console.log(`Second ${expression.secondOperand}`);
        } else {
            if (e.target.textContent.includes('.')) {
                hasDot.disabled = true;
            }
            expression.displayValue += e.target.textContent;
            currentDisplay.value += e.target.textContent;
            expression.firstOperand = parseFloat(expression.displayValue);

            console.log(`First ${expression.firstOperand}`);
        }

    });
});

equalBtn.addEventListener("click", e => {
    operate();
    clearExpressionValue();
    console.log(Object.values(expression));

    equalIsClicked = true;
});




