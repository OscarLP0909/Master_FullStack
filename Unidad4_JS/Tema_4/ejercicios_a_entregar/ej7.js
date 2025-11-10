// Diseña una función esPar() que reciba como parámetro un número y devuelva si ese número es par o no. Utilízalo en un
// programa que lea un número por prompt y determine si es par o no y muestre un mensaje al respecto en un alert.

let numero = Number(window.prompt(`Escriba el número: `))

function esPar(a) {
    if(a % 2 == 0) {
        alert(`El ${numero} es par`)
        return true
    } else {
        alert(`El ${numero} no es par`)
    }
}

const resultado = esPar(numero)
