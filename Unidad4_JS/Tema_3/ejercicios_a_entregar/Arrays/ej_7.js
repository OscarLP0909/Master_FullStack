// Haz un programa que realice la media de los valores que contiene un array de 10 números y lo muestre por consola. No es
// necesario pedir los números al usuario.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let suma = 0
let media = 0

array.forEach(n => {
    suma += n
});

console.log(suma)

media = suma / array.length
console.log(media)