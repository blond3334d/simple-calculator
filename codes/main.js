const userInput = document.getElementById("userInput");

function appendToDisplay(input) {
    userInput.value += input;
}

function clearDisplay(){
    userInput.value = "";
}

function calculateResult() {
    userInput.value = eval(userInput.value);
}