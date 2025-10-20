/*En una clase tienes tres exámenes, con un valor de 5 puntos máximo en cada uno. La nota final es la mejor nota de los dos
primeros exámenes más la nota del tercer examen. Crea un programa que con tres notas calcula el resultado de nota final con
los siguientes rangos:
1. 10 es matrícula
2. 9 y hasta 10 es sobresaliente
3. 7 y hasta 9 es notable
4. 6 y hasta 7 es bien
5. 5 y hasta 6 es suficiente
6. 0 hasta 5 es suspenso*/

let nota1 = Number(window.prompt(`Introduzca la primera nota sobre 5`))
let nota2 = Number(window.prompt(`Introduzca la segunda nota sobre 5`))
let nota3 = Number(window.prompt(`Introduzca la tercera nota sobre 5`))

let mejorNotas = [nota1, nota2]

let mejor = mejorNotas[0]

if (mejorNotas.length === 0) {
    window.alert(`Introduzca las notas`)
}

for (let i = 0; i < mejorNotas.length; i++) {
    let valor = mejorNotas[i];
    if (valor > mejor) {
        mejor = valor
    }
}

let notaTotal = (mejor + nota3)

if(notaTotal === 10) {
    window.alert(`Matrícula`)
} else if (notaTotal >= 9) {
    window.alert(`Sobresaliente`)
} else if (notaTotal >= 7) {
    window.alert(`Notable`)
} else if (notaTotal >= 6) {
    window.alert(`Bien`)
} else if (notaTotal >= 5) {
    window.alert(`Suficiente`)
} else {
    window.alert(`Suspenso`)
}