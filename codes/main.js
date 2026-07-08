let currentDisplay = document.getElementById("userInput");
const numberBtns = document.querySelectorAll(".numberBtn");
const operators = document.querySelectorAll(".operator");
let equalBtn = document.querySelector('.equalBtn');
let hasDot = document.querySelector('.dot');

let isClicked = false;
let result = 0;

equalBtn.addEventListener("click", e => {
    operate();
    isClicked = true;
});

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

const temp = {
    tempValue: '0',
    tempFirstOperand: null,
    tempCurrentOperator: null,
    tempSecondOperand: null,
};

// Getting the operator
operators.forEach(op => {
    op.addEventListener("click", e => {
        expression.currentOperator = e.target.textContent;
        expression.waitForSecondOperand = true;
        currentDisplay.value = "";
        expression.displayValue = "";
        hasDot.disabled = false;

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



// if (expression.secondOperand !== '0' && isClicked === false) {
//     operate();
//     for (key in expression) {
//         expression[key] = '0';
//     }
//     expression.currentOperator = op.textContent;
//     expression.firstOperand = result;
// }





// if (isClicked != true) {
//     for (key in expression) {
//         if (expression[key] !== '0') {
//             temp.tempFirstOperand = expression.firstOperand;
//             temp.tempCurrentOperator = expression.currentOperator;
//             temp.secondOperand = expression.secondOperand;
//         }
//         expression[key] = '0';
//     }

//     operate();
//     expression.firstOperand = currentDisplay.value;
// }

// Calculate result
function operate() {
    let a = expression.firstOperand;
    let b = expression.secondOperand;
    let op = expression.currentOperator;
    // let a = temp.tempFirstOperand;
    // let b = temp.tempSecondOperand;
    // let op = temp.tempCurrentOperator;

    if (operations[op]) {
        result = operations[op](a, b);
        currentDisplay.value = result;
    }

    return null;
}

function clearDisplay() {
    currentDisplay.value = "";
    for (key in expression) {
        expression[key] = '0';
    }
}