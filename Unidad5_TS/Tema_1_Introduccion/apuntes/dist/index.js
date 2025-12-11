"use strict";
const myName = "Oscar";
let age = 35;
age = 36;
let isSummer = false;
isSummer = true;
const months = ["enero", "febrero", "marzo"];
months.push("junio");
function sayHello(nombre) {
    return `Hola ${nombre}`;
}
function addNumber(num1, num2) {
    return num1 + num2;
}
console.log(addNumber(3, 5));
function addNumberOrNot(num1, num2) {
    if (num1 > 5) {
        return num1 + num2;
    }
}
const addNumbersArrowFn = (num1, num2) => num1 + num2;
const toUpperCase = (palabra) => palabra.toUpperCase();
console.log(addNumberOrNot(1, 3));
console.log(sayHello("Oscar"));
function logMessage(message) {
    if (typeof message === 'string') {
        return message.toUpperCase();
    }
    else {
        return message.toFixed(2);
    }
}
logMessage(123);
logMessage("Hola");
let msg;
function fnWithAny(param1) {
    console.log(param1);
}
const doubles = [1, 3, 5, 7].map((numero) => numero * 2);
console.log(doubles);
