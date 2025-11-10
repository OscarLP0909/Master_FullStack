// Escribe un programa que pida al usuario dos números. Usa esos 2 números en una función que divide el primero por el segundo
// y devuelve el resultado. Muestra el resultado que devuelve la función en un alert. Después vuelve a pedir los números y hacer
// todo otra vez hasta que el usuario introduzca un 0 como segundo número

let num1 = Number(window.prompt(`Introduzca el primer número: `))
let num2 = Number(window.prompt(`Introduzca el otro número: `))

while (num2 !== 0) {
    function dividir (a, b) {
        return a / b
    }

const resultado = dividir(num1, num2)
alert(`El resultado de la division entre ${num1} y ${num2} es de ${resultado}`)
num1 = Number(window.prompt(`Introduzca el primer número: `))
num2 = Number(window.prompt(`Introduzca el segundo número: `))
}