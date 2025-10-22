/*Escribe un programa que pida 10 valores.
Al final, mostrar la media de esos valores.*/

let num1 = Number(window.prompt(`Introduzca un número: `))
let num2 = Number(window.prompt(`Introduzca un número: `))
let num3 = Number(window.prompt(`Introduzca un número: `))
let num4 = Number(window.prompt(`Introduzca un número: `))
let num5 = Number(window.prompt(`Introduzca un número: `))
let num6 = Number(window.prompt(`Introduzca un número: `))
let num7 = Number(window.prompt(`Introduzca un número: `))
let num8 = Number(window.prompt(`Introduzca un número: `))
let num9 = Number(window.prompt(`Introduzca un número: `))
let num10 = Number(window.prompt(`Introduzca un número: `))

let arrayNum = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10]

console.log(arrayNum.length)

let suma = 0

for (let i = 0; i < arrayNum.length; i++) {
    suma += arrayNum[i];
}

console.log(suma)

let media = suma / arrayNum.length

console.log(media)

window.alert(`La media de [${arrayNum}], es de: ${media}`)

