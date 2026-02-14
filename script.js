function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function squareRoot(a) {
    return Math.sqrt(a);
}

function powerOf(a, b) {
    return a**b;
}

let a;
let operat;
let b;

function operator(a, operat, b) {
    if (operat === "+") {return add(a,b)};
    if (operat === "-") {return substract(a,b)};
    if (operat === "*") {return multiply(a,b)};
    if (operat === "/") {return divide(a,b)};
    if (operat === "sqrt") {return squareRoot(a)};
    if (operat === "**") {return powerOf(a, b)};
}

let firstOrSecond;

const display = document.querySelector(".display");
display.textContent = "0";


const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
    display.texContent = "0";
    console.log(display.textContent)
});

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if (display.textContent === "0") {
            display.textContent = number.textContent;
        } else {
            display.textContent += number.textContent;
        }
    })
});


