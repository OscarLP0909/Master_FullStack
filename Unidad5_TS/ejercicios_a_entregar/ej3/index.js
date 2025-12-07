"use strict";
// Escribir una función que calcule un precio con impuestos. Tanto el precio como el valor del
// impuesto serán dados por parámetros, aunque en el segundo caso deberá establecerse que el
// valor del impuesto es el 21% si no se informa
function calcularImpuestos(precio, valorImpuesto) {
    if (valorImpuesto === null || valorImpuesto === undefined) {
        valorImpuesto = 21;
    }
    const total = (precio * valorImpuesto) / 100;
    console.log(total);
}
calcularImpuestos(15);
