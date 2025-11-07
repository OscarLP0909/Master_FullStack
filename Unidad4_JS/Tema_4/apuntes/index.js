// let a = 2
// let b = 4

function suma(primero, segundo) {       // Dentro del paréntesis van los parámetros, es decir, los datos que entran en la función, el orden de los parámetros importa
    console.log(primero + segundo)
}

suma(2, 4)

suma (4,4)

suma (4,7)

function saludar(texto, nombre) {
    console.log(`${texto}, ${nombre}`)
}
saludar("Buenos días", "Paco")


function esPar(numero) {
    return numero % 2 === 0
}

if(esPar(7)) {
    console.log("El número es par")
} else if (!esPar(7)) {
    console.log("El número no es par")
} else {
    console.log("No has introducido un número")
}


