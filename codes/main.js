const numberBtns = document.querySelectorAll('.numberBtn');
const operatorBtns = document.querySelectorAll('.operatorBtn');
const equalBtn = document.querySelector('.equalBtn');
const allClearBtn = document.querySelector('.all-clear');
const deleteBtn = document.querySelector('.delete');
const display = document.querySelector('.displaySpace');

const operations = {
    '+': (firstNum, secondNum) => firstNum + secondNum,
    '−': (firstNum, secondNum) => firstNum - secondNum,
    '×': (firstNum, secondNum) => firstNum * secondNum,
    '÷': (firstNum, secondNum) => firstNum / secondNum,
};

// Factory function
let expression = mathExpresion();
function mathExpresion() {
    return {
        firstOperand: '',
        currentOperator: '',
        secondOperand: '',
    };
}

// Calculate result
function operate() {
    let result
    let a = parseFloat(expression.secondOperand);
    let b = parseFloat(expression.firstOperand); 
    let op = expression.currentOperator;

    if (operations[op]) {
        result = operations[op](a, b);
        if (b === 0) return display.value = 'ERROR';
        return display.value = +result.toFixed(7);
    } else {
        return;
    }
}

// Select/display the number
function selectNumber(number) {
    if (display.value == operate()) {
        clearAll();
    }

    if (number === '.' && expression.firstOperand.includes('.')) return;
    expression.firstOperand = expression.firstOperand.toString() + number.toString();
}

// Update the display
function updateDisplay() {
    display.value = expression.firstOperand;
}

// Clear all
function clearAll() {
    expression = mathExpresion();
}

// Delete a number
function deleteNum() {
    expression.firstOperand = expression.firstOperand.toString().slice(0, -1);
}

// Select operator
function selectOperator(operation) {
    if (expression.firstOperand === '') return
    if (expression.secondOperand !== '') {
        display.value = operate();
        expression.firstOperand = operate();
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
        updateDisplay();
        selectOperator(e.target.innerText);

        if(e.target.innerText !== '' && expression.secondOperand !== '') {
            display.value = expression.secondOperand;
            expression.currentOperator = e.target.innerText;
        }
    })
})

allClearBtn.addEventListener("click", clear => {
    clearAll();
    updateDisplay();
})

equalBtn.addEventListener("click", () => {
    updateDisplay();
    operate();
})

deleteBtn.addEventListener("click", () => {
    if (display.value == operate()) {
       clearAll();
    }
    deleteNum();
    updateDisplay();
})

// Keyboard Support
document.body.addEventListener("keydown", (e) => {
    const validInput = e.key.replace(/[^0-9.]/g,"");
    const validOp = e.key.replace(/[^+\/*-]/g, "");

    // Operand Input
    if (expression !== '' && validInput) {
        if (e.key === '.' && expression.firstOperand.includes('.')) return;
        expression.firstOperand += e.key;
        updateDisplay();
    }

    // Operator Input
    switch(validOp) {
        case '+':
            selectOperator();
            expression.currentOperator = '+';
            break;
        case '-':
            selectOperator();
            expression.currentOperator = '−';
            break;
        case '*':
            selectOperator();
            expression.currentOperator = '×';
            break;
        case '/':
            selectOperator();
            expression.currentOperator = '÷';
            break;
    }

    // Backspace Key 
    if (e.key === "Backspace") {
        expression.firstOperand = expression.firstOperand.toString().slice(0, -1);
        display.value = expression.firstOperand;
    }

    // Clear All
    if (e.key === "Control" && e.key === "Backspace") {
        display.value = '';
    }

    // Enter Key
    if (e.key === "Enter" & expression !== '') {
        if (expression.firstOperand === '') return;
        console.log(expression.secondOperand);
        operate();
    }

});