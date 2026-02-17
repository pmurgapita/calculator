
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
const values = "1234567890+-*/.="

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
let turn;

const display = document.querySelector(".display");
display.textContent = "0";

// When pressing a number:

const numbers = document.querySelectorAll(".number");
const dot = document.querySelector(".number.dot");
numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if (firstOrSecond != "1") {
            turn = "turnA";
            dot.disabled = (a.toString().includes(".")) ? true : false
            display.textContent = (display.textContent === "0") ? "" : display.textContent;
            if (Number(display.textContent) === sol) {
                a = "";
                sol = "";
                display.textContent = "";
            }
            display.textContent += number.textContent;
            a += number.textContent;
        } else {
            turn = "turnB";
            dot.disabled = (b.toString().includes(".")) ? true : false
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
        turn = "turnOp";
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
    turn = "turnSol";
})

// When pressing backspace

const backspace = document.querySelector(".erase");
backspace.addEventListener("click", () => {
    if (display.textContent === "" || display.textContent === "0") {
        display.textContent = "0"
    } else {
        let lastDeleted = display.textContent.split("");
        lastDeleted.splice(lastDeleted.length-1,1);
        newNumber = lastDeleted.join("")
        display.textContent = newNumber;
        if (turn === "turnA") {
            arrayA = a.split("");
            arrayA.splice(a.length-1,1);
            a = arrayA.join("");
        } else if (turn === "turnB") {
            arrayB = b.split("");
            arrayB.splice(b.length-1,1);
            b = arrayB.join("");
            if (b === "") {
                turn = "turnOp"
            }
        } else if (turn === "turnOp") {
            operat = "";
            firstOrSecond = "0";
            if (operat === "") {
                turn = "turnA"
            }
        } else if (turn === "turnSol") {
            display.textContent = "0";
            firstOrSecond = "0";
            a = "";
            b = "";
            sol = "";
        }
    }
})

//Keyboard support

document.addEventListener("keydown", (event) => {
    if (values.includes(event.key)) {
        document.getElementById(`${event.key}`).click();
    } else if (event.key === "Backspace"){
        document.getElementById(`${event.key}`).click();
    } else if (event.key === "Enter") {
        document.getElementById("=").click();
    }
})


