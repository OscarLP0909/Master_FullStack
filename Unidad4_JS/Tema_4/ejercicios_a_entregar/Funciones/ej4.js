// Escribe una función que devuelva el resultado de sumar los dos parámetros que le pasamos. Pide al usuario 2 números. Usa
// esos 2 números como parámetros de la función y después asigna el valor que devuelve la función a una tercera variable.
// Finalmente, muestra el valor de la variable en la consola.

let num1 = Number(window.prompt(`Introduzca un número: `))
let num2 = Number(window.prompt(`Introduzca otro número: `))

function sumar (a, b) {
    return a + b
}

const resultado = sumar(num1, num2)
console.log("Resultado: " + resultado)

alert(`La suma entre ${num1} y ${num2} es de ${resultado}`)


