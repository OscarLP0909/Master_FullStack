/*Mostrar el menor de tres valores*/

let num1 = Number(window.prompt(`Introduzca el primer número`))
let num2 = Number(window.prompt(`Introduzca el segundo número`))
let num3 = Number(window.prompt(`Introduzca el tercer número`))

let valores = [num1, num2, num3]
let min = valores[0]

if(valores.length === 0) {
    window.alert(`Introduzca números válidos`)
}

for(let i = 0; i < valores.length; i++) {
    let valor = valores[i]
    if(valor < min) {
        min = valor
    }
}

window.alert(`El número mínimo es ${min}`)