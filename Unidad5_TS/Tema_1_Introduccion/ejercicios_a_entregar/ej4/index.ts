function addAllThisNumbers(num1: number, num2: number, ...restOfNumbers: number[]): void {
    let total: number = 0;
    total = num1 + num2;
    for (let i: number = 0; i < restOfNumbers.length; i++) {
        total += restOfNumbers[i]
    }
    console.log(total)
}

addAllThisNumbers(5, 7)
addAllThisNumbers(5, 7, 12)