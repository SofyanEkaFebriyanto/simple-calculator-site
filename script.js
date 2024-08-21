let displayValue = ``; // for save user input

//function for adding number or simbol to display
function pressKey(key) {
    displayValue += key;
    document.getElementById(`display`).value = displayValue;
}

//function for cleaning display
function clearDisplay() {
    displayValue = ``;
    document.getElementById(`display`).value = displayValue;
}

//function for counting and displaying the result
function calculate() {
    try {
        displayValue = eval(displayValue); //using eval for calculate
        document.getElementById(`display`).value = displayValue;
    } catch (e) {
        document.getElementById(`display`).value = `Error`; //if getting Error
        displayValue = ``;
    }
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        if (displayValue === Infinity || displayValue === -Infinity) {
            throw "Division by zero";
        }
        document.getElementById("display").value = displayValue;
    } catch (e) {
        document.getElementById("display").value = "Error";
        displayValue = "";
    }
}

function calculatePercentage() {
    displayValue = displayValue / 100;
    document.getElementById("display").value = displayValue;
}

function kuadrat() {
    displayValue = displayValue * displayValue;
    document.getElementById("display").value = displayValue;
}
