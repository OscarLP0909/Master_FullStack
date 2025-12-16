let total: number

function calculatePrice(precio: number, impuesto?: number): number {
    if (!impuesto) {
        total = (precio * 21) / 100
    } else {
        total = (precio * impuesto) / 100
    }

    return total
}

console.log(calculatePrice(20, 10))
console.log(calculatePrice(20))