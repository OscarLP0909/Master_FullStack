/* Se desea conocer el lucky number (número de la suerte) de cualquier persona. */

let fecha = `16-08-1973`
let dia
let mes 
let anio
let suma1 = 0

dia = fecha.slice(0, 2)
mes = fecha.slice(3, 5)
anio = fecha.slice(6, 10)

let diaNum = Number(dia)
let mesNum = Number(mes)
let anioNum = Number(anio)

suma1 = diaNum + mesNum + anioNum
console.log(suma1)

let fechaSumStr = suma1.toString()

let num1 = fechaSumStr.slice(0, 1)
let num2 = fechaSumStr.slice(1, 2)
let num3 = fechaSumStr.slice(2, 3)
let num4 = fechaSumStr.slice(3, 4)
console.log(num1)
console.log(num2)
console.log(num3)
console.log(num4)

let num1Int = Number(num1)
let num2Int = Number(num2)
let num3Int = Number(num3)
let num4Int = Number(num4)

let suma2 = num1Int + num2Int + num3Int + num4Int
console.log(suma2)

let sum2Str = suma2.toString()

let num5 = sum2Str.slice(0,1)
let num6 = sum2Str.slice(1,2)

let num5Int = Number(num5)
let num6Int = Number(num6)

let suma3 = num5Int + num6Int
console.log(suma3)