/*Un año es bisiesto si se puede dividir por 4. Pero un año que se pueda dividir por 100 NO es bisiesto a no ser que se pueda
dividir por 400. A partir de un año, mostrar en pantalla si es bisiesto o no.*/

let anio = Number(window.prompt(`Introduzca el año: `))

if (anio % 4 === 0 && (anio % 400 === 0 || anio % 100 !== 0)) {
    window.alert(`El año es bisiesto`)
} else {
    window.alert(`El año no es bisiesto`)
}