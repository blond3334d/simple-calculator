
// Input
const result = document.getElementById("userInput");
const numberBtn = document.querySelectorAll(".numberBtn");
const operator = document.querySelectorAll(".operator");

let firstInput = "";
let currentOperator = "";
let secondInput = "";

operator.forEach((element) => {
    element.addEventListener("click", e => {
        currentOperator = e.target.textContent;
    })
});

numberBtn.forEach((number) => {
    number.addEventListener("click", btn => {
        if (currentOperator === "") {
            firstInput += btn.target.textContent;
            if (btn.target.textContent === '.' && firstInput.includes('.')) {
                document.querySelector('.dot').disabled = true;
            }
            console.log(`First ${firstInput}`);
        } else {
            document.querySelector('.dot').disabled = false;
            secondInput += btn.target.textContent;
            if (btn.target.textContent === '.' && secondInput.includes('.')) {
                document.querySelector('.dot').disabled = true;
            }
            console.log(secondInput);
        }

        
    })
});

// Operations
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

// Calculate
function operate() {
    switch(currentOperator) {
        case '&plus':
            result.value = add(firstInput, secondInput);
            break;
        case '&minus':
            result.value = subtract(firstInput, secondInput);
            break;
        case '&times':
            result.value = multiply(firstInput, secondInput);
            break;
        case '&divide':
            result.value = divide(firstInput, secondInput);
            break;
    }
}

// Displaying
function appendToDisplay(input) {
    result.value += input;
}

function clearDisplay(){
    result.value = "";
}

function calculateResult() {
    result.value = operate();
}