/*Escribe un programa que muestre los números del 1 al 12 en una columna.
En la columna de los números impares mostrar el cuadrado de ese valor y en la de los pares mostrar el cubo.*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 , 12]
let cubo = 0
let cuadrado = 0

for (let i = 0; i < numeros.length; i++) {
    const n = numeros[i]
    if (n % 2 === 0) {
        cubo = n ** 3
        console.log(`${n} -> cubo: ${cubo}`)
    } else {
        cuadrado = n ** 2
        console.log(`${n} -> cuadrado: ${cuadrado}`)
    }
}

