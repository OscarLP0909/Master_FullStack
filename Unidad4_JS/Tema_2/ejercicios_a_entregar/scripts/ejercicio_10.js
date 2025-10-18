/*Escribe un programa que pida dos valores al usuario y
1. Si los dos valores son iguales muestre 0
2. Si los dos valores tienen el mismo resto al dividir entre 6 mostrar el más pequeño
3. Si no que muestre el más grande de los dos*/

let num1 = Number(window.prompt("Introduzca el primer número"))
let num2 = Number(window.prompt("Introduzca el segundo número"))

let resto1 = num1 % 6
let resto2 = num2 % 6

if (num1 === num2) {
    window.alert(`0. ${num1} y ${num2}`)
} else if (resto1 === resto2){
    if(num1 < num2){
        window.alert(`Ambos números tienen mismo resto, el más pequeño es el primer número ${num1}`)
    } else if (num2 < num1) {
        window.alert(`Ambos núneros tienen el mismo resto, el segundo número es el más pequeño, ${num2}`)
    } else {
        window.alert(`Tienen mismo resto y son iguales los números`)
    }
} else if (resto1 !== resto2) {
    if(num1 > num2){
        window.alert(`Tienen distinto resto, y el primer número es el mayor ${num1}`)
    } else if (num2 > num1) {
        window.alert(`Tienen distinto resto, el segundo número es mayor ${num2}`)
    }
}