/*Un número factorial es el resultado de multiplicar todos los números de 1 a ese mismo número.
Por ejemplo, el factorial de 4 es 1 x 2 x 3 x 4 = 24.
Haz un programa que muestre los números del 1 al 10 en una columna con el resultado de su factorial en la columna de al lado.*/

let num = 10

for (let i = 1; i <= num; i++) {
    let multi = 1;
    for (var n = 1; n <= i; n++){
    multi *= n;
    }
    console.log(`${i} -> ${multi}`)
}