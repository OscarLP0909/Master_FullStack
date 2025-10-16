/* Escribe un programa que pida al usuario tres números y que diga si la diferencia entre uno de ellos es exactamente 20 menos
que uno de los otros. Por ejemplo, si el usuario introduce 20, 40 y 55, el programa dirá que el primer número es 20 menos que el
segundo.*/

let num1 = Number(window.prompt("Introduzca el primer número"))
let num2 = Number(window.prompt("Introduzca el segundo número"))
let num3 = Number(window.prompt("Introduzca el tercer número"))

if (num1 + 20 === num2) {
    window.alert(`Diferencia de 20 entre num1: ${num1} y num2:40 ${num2}`)
} else if (num1 + 20 === num3){
    window.alert(`Diferencia de 20 entre num1: ${num1} y num3: ${num3}`)
} else if (num2 + 20 === num1) {
    window.alert(`Diferencia de 20 entre num2: ${num2} y num1: ${num1}`)
} else if (num2 + 20 === num3) {
    window.alert(`Diferencia de 20 entre num2: ${num2} y num3: ${num3}`)
} else if (num3 + 20 === num1) {
    window.alert(`Diferencia de 20 entre num3: ${num3} y num1: ${num1}`)
} else if (num3 + 20 === num2) {
    window.alert(`Diferencia de 20 entre num3: ${num3} y num2: ${num2}`)
} else {
    window.alert("No hay ninguna operación que cumpla con lo que se pide")
}
