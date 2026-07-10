const numberBtns = document.querySelectorAll('.numberBtn');
const operatorBtns = document.querySelectorAll('.operatorBtn');
const equalBtn = document.querySelector('.equalBtn');
const allClearBtn = document.querySelector('.all-clear');
const deleteBtn = document.querySelector('.delete');
const display = document.querySelector('.displaySpace');

// const operations = {
//     '+': (firstNum, secondNum) => firstNum + secondNum,
//     '−': (firstNum, secondNum) => firstNum - secondNum,
//     '×': (firstNum, secondNum) => firstNum * secondNum,
//     '÷': (firstNum, secondNum) => firstNum / secondNum,
// };

function add(firstNum, secondNum) {
    return firstNum + secondNum;
}
function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
}
function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}
function divide(firstNum, secondNum) {
    return firstNum / secondNum;
}

// Factory function
let expression = mathExpresion();
function mathExpresion() {
    return {
        displayValue: '',
        firstOperand: '',
        currentOperator: undefined,
        secondOperand: '',
        waitForSecondOperand: false,
    };
}

// Calculate result
function operate() {
    let a = parseFloat(expression.secondOperand);
    let b = parseFloat(expression.firstOperand); 
    let op = expression.currentOperator;

    // if (operations[op]) {
    //     result = operations[op](a, b);
    //     return display.value = result;
    // } else {
    //     return null;
    // }

    let result

    if (isNaN(a) || isNaN(b)) {
        return;
    } else {
        switch(op) {
            case '+':
                result = add(a, b);
                break;
            case '−':
                result = subtract(a, b);
                break;
            case '×':
                result = multiply(a, b);
                break;
            case '÷':
                result = divide(a, b);
                break;
            default:
                return;
        }
    }

    return display.value = result;
}

// Select/display the number
function selectNumber(number) {
    if (number === '.' && expression.firstOperand.includes('.')) return;
    expression.firstOperand = expression.firstOperand.toString() + number.toString();

    // if (expression.currentOperator !== undefined) {
    //     expression.secondOperand = expression.secondOperand.toString() + number.toString();
    //     console.log(`Second ${expression.secondOperand}`);
    // }
}

// Update the display
function updateDisplay() {
    display.value = expression.firstOperand;

    if (expression.firstOperand !== '') {
        
        display.value = expression.firstOperand;
    }
}

// Clear all
function clearAll() {
    expression = mathExpresion();
    // display.value = "";
}

// Delete a number
function deleteNum() {
    expression.firstOperand = expression.firstOperand.toString().slice(0, -1);
}

// Select operator
function selectOperator(operation) {
    if (expression.firstOperand === '') return
    if (expression.secondOperand !== '') {
        operate();
    }

    expression.currentOperator = operation;
    expression.secondOperand = expression.firstOperand;
    expression.firstOperand = '';
}


// Get user's input
numberBtns.forEach(btn => {
    btn.addEventListener("click", e => {
        selectNumber(e.target.innerText);
        updateDisplay();
    })
})

operatorBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        selectOperator(e.target.innerText);
        updateDisplay();
    })
})

allClearBtn.addEventListener("click", clear => {
    clearAll();
    updateDisplay();
})

equalBtn.addEventListener("click", () => {
    operate();
    updateDisplay();
})

deleteBtn.addEventListener("click", () => {
    deleteNum();
    updateDisplay();
})