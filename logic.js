function add(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
}
function substract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}

let number1;
let number2;
let operator;

function operate(number1, number2, operator) {
    let result;
    if (operator == "+") {
        result = add(number1, number2);
    } else if (operator == "-") {
        result = substract(number1, number2);
    } else if (operator == "*") {
        result = multiply(number1, number2);
    } else if (operator == "/") {
        result = divide(number1, number2);
    } else return "ERROR";
    return result;
}

const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operation");
const result = document.querySelector("#equ");
const clear = document.querySelector("#clear");

let newOperationPossible = true;
let equalsPress = false;

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if (equalsPress == true) {
            display.textContent = "";
            equalsPress = false;
        }
        display.textContent += number.textContent;
    })
})

clear.addEventListener("click", () => {
    display.textContent = "";
    newOperationPossible = true;
});

operators.forEach((operation) => {
    operation.addEventListener("click", () => {
        if (newOperationPossible && display.textContent != '') {
            display.textContent += operation.textContent;
            operator = operation.textContent;
            newOperationPossible = false;
            equalsPress = false;
        }
    })
});

result.addEventListener("click", () => {
    let ecuation = display.textContent.split(operator);
    let result = operate(ecuation[0], ecuation[1], operator);
    display.textContent = result % 1 === 0 ? result : parseFloat(result).toFixed(4).replace(/\.?0+$/, '');
    newOperationPossible = true;
    equalsPress = true;
});
