/*Mostrar en pantalla los números del 10 al 20 (incluidos los dos) con una línea vacía entre ellos.*/

let numFinal = 20

for (let i = 10; i <= numFinal; i++) {
    process.stdout.write(i + "-") // la funcion se encarga de que a la hora de imprimir en la consola, se imprima en una misma linea, pudiendo añadir un elemento separador, si no se añade nada, aparrecerá sin separación
}
