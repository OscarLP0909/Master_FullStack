// Escribe una función a la que le damos dos números y que devuelva true si el primer número es más grande que el segundo
// número y false en el caso contrario. Pide dos números al usuario, y pasalos a la función. Muestra en consola “El primer número
// es más grande” o “El primer número no es más grande”

let num1 = Number(prompt(`Escriba el primer número: `))
let num2 = Number(prompt(`Escriba el segundo número: `))

function esMayor (a, b) {
    if (a > b){
        console.log("El primer número es más grande")
        alert(`El primer número es más grande`)
        return true
    } else {
        console.log("El primer número no es más grande")
        alert(`El primer número no es más grande`)
        return false
    }
}

const resultado = esMayor(num1, num2)
console.log("Resultado: " + resultado)

