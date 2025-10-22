/*Escribe un programa que muestre todos los valores pares o impares entre 1 y 100 dependiendo de si el usuario
introduce P o I .
Si introduce otra cosa, decir que ese valor no es correcto y pedirle otra vez.*/

let eleccion = window.prompt(`Quiere Pares (P) o Impares (I)`)
let arrayPar = []
let arrayImpar = []

if (eleccion === 'P') {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0){
            arrayPar.push(i)
        }
    }
    window.alert(`Lista de números pares: [${arrayPar}]`)
} else if (eleccion === 'I') {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 !== 0) {
            arrayImpar.push(i)
        }
    }
    window.alert(`Lista de números impares: [${arrayImpar}]`)
} else {
    window.alert(`Introduce un valor correcto`)
}

