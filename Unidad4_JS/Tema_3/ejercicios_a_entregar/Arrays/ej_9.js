// Crear un array de 10 valores. Pon el valor 1 en cada una de las posiciones. Pedir al usuario que introduzca un número entre 0 y
// 9. Cada vez que introduzca un valor entre 0 y 9, mostrar el valor de esa posición del array y modificarlo multiplicándolo por 2.

let arrayValor = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

let usuario = Number(window.prompt(`Introduzca un valor entre 0 y 9: `))

let modif = 0


while (usuario >= 0 && usuario <= 9) {

    window.alert(arrayValor[usuario])

    modif = arrayValor[usuario] * 2

    arrayValor[usuario] = modif

    window.alert(modif)

    window.alert(arrayValor)

    usuario = Number(window.prompt(`Introduzca un valor entre 0 y 9: `))
}