/*Escribe un programa que pida dos números al usuario. Después muestra un mensaje que dice cómo se relacionan entre los dos.
Por ejemplo si escribe 5 y 7 , muestra "5 es menor que 7".*/

let num1 = window.prompt("Escriba el primer número")
let num2 = window.prompt("Escriba el segundo número")

if (num1 > num2){
    window.alert(`El primer número ${num1} es mayor que el segundo número ${num2}`)
} else if (num2 > num1) {
    window.alert(`El segundo número ${num2} es mayor que el primer número ${num1}`)
} else {
    window.alert(`Ambos números son iguales ${num1} y ${num2}`)
}