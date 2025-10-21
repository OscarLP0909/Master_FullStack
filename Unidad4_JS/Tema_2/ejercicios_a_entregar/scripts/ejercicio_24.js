/*Escribe un programa que dice si los dígitos de un número de tres cifras son todos impares, todos pares o son mezclados. Tu
programa debe pedir un número al usuario, y mostrar el número, seguido del mensaje "Todas las cifras son pares", "Todas las
cifras son impares" o "El número tiene cifras pares e impares"*/

let numero = Number(window.prompt(`Escriba el número de tres cifras: `))

var par = []
var impar = []

let digitos = numero.toString().split('');
console.log(typeof(digitos.length))
if (digitos.length === 3) {
    for (let i = 0; i < digitos.length; i++) {
        let digito = digitos[i]
        if (digito % 2 === 0) {
            par.push(digito)
        } else {
            impar.push(digito)
        }
    }
    if (par.length === 3) {
        window.alert(`Todos los números son pares`)
    } else if (impar.length === 3) {
        window.alert(`Todos los números son impares`)
    } else {
        window.alert(`El número tiene cifras pares e impares`)
    }
} else {
    throw new Error("Introduzca un número de 3 cifras");
    
}

// console.log(`Hay ${par.length} pares y hay ${impar.length} impares`)