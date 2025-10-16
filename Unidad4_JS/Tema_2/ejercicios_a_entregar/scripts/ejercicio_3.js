let num1 = Number(window.prompt("Introduzca el primer número"))
let num2 = Number(window.prompt("Introduzca el segundo núemro"))
let num3 = Number(window.prompt("Introduzca el tercer número"))

let resultado = num1 + num2

if (resultado == num3) {
    window.alert(`El resultado es igual que el tercer número ${resultado} - ${num3}`)
} else {
    window.alert(`No es el mismo numero enre resultado y el tercewr número ${resultado} - ${num3}`)
}