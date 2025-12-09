"use strict";
function addAllThisNumbers(num1, num2, ...restOfNumbers) {
    let total = 0;
    total = num1 + num2;
    for (let i = 0; i < restOfNumbers.length; i++) {
        total += restOfNumbers[i];
    }
    console.log(total);
}
addAllThisNumbers(5, 7);
addAllThisNumbers(5, 7, 12);
