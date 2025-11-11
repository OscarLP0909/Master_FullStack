// Crea una aplicación que nos calcule el factorial de un número pedido por teclado, lo realizará mediante una función al que le
// pasamos el número como parámetro. Para calcular el factorial, se multiplica los números anteriores hasta llegar a uno. Por
// ejemplo, si introducimos un 5, realizará esta operación 54321=120. Mostrar el resultado en un alert


let numero = Number(window.prompt(`Introduzca un número para sacar su factorial: `))
let fact = 1

function factorial (a) {
if (a === 0 || a === 1) {
    return 1;
} else {
    for (let i = 1; i <= a; i++) {
        fact = fact * i
    }
    console.log(fact)
    alert(`El resultado del factorial de ${numero} es ${fact}`)
    }
}

factorial(numero)