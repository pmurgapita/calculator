
// Functions for the math:

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


let a = "";
let operat;
let b = "";

function operator(a, operat, b) {
    if (operat === "+") {return add(a,b)};
    if (operat === "-") {return substract(a,b)};
    if (operat === "*") {return multiply(a,b)};
    if (operat === "/") {return divide(a,b)};
    if (operat === "sqrt") {return squareRoot(a)};
    if (operat === "**") {return powerOf(a, b)};
}

// Variables:

let firstOrSecond;
let sol;

const display = document.querySelector(".display");
display.textContent = "0";

// When pressing a number:

const numbers = document.querySelectorAll(".number");
const dot = document.querySelector(".number.dot");
numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if (firstOrSecond != "1") {
            dot.disabled = (a.includes(".")) ? true : false
            display.textContent = (display.textContent === "0") ? "" : display.textContent;
            if (Number(display.textContent) === sol) { 
                display.textContent = "";
                a = ""; 
            }
            display.textContent += number.textContent;
            a += number.textContent;
        } else {
            dot.disabled = (b.includes(".")) ? true : false
            display.textContent += number.textContent;
            b += number.textContent
        }
    })
})

// When pressing clear:

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    display.textContent = "0";
    firstOrSecond = "0";
    a = "";
    b = "";
    sol = "";
})

// When pressing an operator:

const operators = document.querySelectorAll(".operator");
operators.forEach((oper) => {
    oper.addEventListener("click", () => {
        dot.disabled = false;
        if (firstOrSecond === "1") {
            a = Number(a);
            b = Number(b);
            sol = operator(a, operat, b);
            a = sol;
            b = "";
            display.textContent = sol;
        }
        firstOrSecond = (display.textContent != "0") ? "1" : "0";
        if (display.textContent != "0" || oper.textContent === "-"){
            a = (display.textContent === "0" && oper.textContent === "-") ? oper.textContent : a;
            display.textContent = (display.textContent === "0") ? "" : display.textContent;
            display.textContent += oper.textContent;
            operat = oper.textContent;
        }
    })
})

// When pressing equals

const equals = document.querySelector(".equals");
equals.addEventListener("click", () => {
    a = Number(a);
    b = Number(b);
    x = operator(a, operat, b);
    sol = (x.toString().split("").length > 10) ? x.toFixed(6) : x;
    a = sol;
    b = "";
    display.textContent = sol;
    firstOrSecond = "0";
})




