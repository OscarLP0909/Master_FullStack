/* Escribe un programa que indique la fecha del día siguiente a la que el usuario haya introducido por teclado.
Verificar que la fecha introducida es correcta. */

let fecha = window.prompt(`Introduzca una fecha: (dd-mm-yyyy)`)

let dia = fecha.slice(0, 2)
let diaNum = Number(dia) + 1
let mes = fecha.slice(3, 5)
let anio = fecha.slice(6, 10)

window.alert(`${diaNum}/${mes}/${anio}`)