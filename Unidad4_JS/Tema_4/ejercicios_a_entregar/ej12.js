// Escribe una función a la que le pasamos un año y devuelve true si es bisiesto. En el programa principal, pídele al usuario un
// número y muestra en pantalla “El año … es bisiesto” o “El año … no es bisiesto” y sigue pidiendo números y diciendo si es o no
// bisiesto hasta que introduzca un 0. Un año es bisiesto si es divisible entre 4, pero no si es divisible entre 100 pero si es divisible
// entre 400 sí lo es.

let anio = Number(prompt(`Introduzca el año: `))

function esBisiesto (a) {
    if (a % 4 === 0 || a % 400 === 0)
        return true
}

while (anio !== 0) {
    esBisiesto(anio)
    if(esBisiesto(anio)) {
        alert(`El año ${anio} es bisiesto`)
    } else {
        alert(`El anio no es bisiesto`)
    }
    anio = Number(prompt(`Introduzca el año: `))
}