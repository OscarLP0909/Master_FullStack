/* Escribe un programa que pida un número de 3 dígitos y muestre el resultado de sumar sus dígitos. */

let num = 123
let numStr = num.toString()
let suma = 0

for (let i of numStr) {
    suma += Number(i)
}
console.log(suma)

// for of itera sobre los valores de las propiedades

// for in itera sobre los nombres de las propiedades