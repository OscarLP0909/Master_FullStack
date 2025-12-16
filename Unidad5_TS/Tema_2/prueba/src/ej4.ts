function sumTotal(num1: number, num2: number, ...restOfNumbers: number[]): number {
    let total: number = 0;
    total = num1 + num2;
    for(let i = 0; i < restOfNumbers.length; i++) {
        total +=  restOfNumbers[i]
    }
    console.log(total)
    return total
}

sumTotal(5, 7)
sumTotal(5, 7, 12)