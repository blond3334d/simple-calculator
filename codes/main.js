let currentDisplay = document.getElementById("userInput");
const numberBtns = document.querySelectorAll(".numberBtn");
const operators = document.querySelectorAll(".operator");
let hasDot = document.querySelector('.dot');

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

// Getting the operator
operators.forEach(op => {
    op.addEventListener("click", e => {
        expression.currentOperator = e.target.textContent;
        expression.waitForSecondOperand = true;
        currentDisplay.value = "";
        hasDot.disabled = false;
        expression.displayValue = "";

        console.log(expression.currentOperator);
    })
});

// Getting the numbers
numberBtns.forEach(num => {
    num.addEventListener("click", e => {
        if (expression.waitForSecondOperand === true) {
            if (e.target.textContent.includes('.')) {
                hasDot.disabled = true;
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

// Calculate result
function operate() {
    let a = expression.firstOperand;
    let b = expression.secondOperand;
    let op = expression.currentOperator;

    if (operations[op]) {
        currentDisplay.value = operations[op](a, b);
    }

    return null;
}

function clearDisplay() {
    currentDisplay.value = "";
    for (key in expression) {
        expression[key] = '0';
    }
}