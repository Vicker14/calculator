function add(num1, num2) {
    return num1 + num2;
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
}