/*Escribe un programa que muestre el número entero positivo que el usuario introduzca pero al revés.
Por ejemplo, si introduce 1478 que muestre 8741. Repetir hasta que el usuario introduzca 0. Si introduce 0 la primera vez,
debería mostrarlo al revés (es decir, mostrar 0) y acabar el programa.*/

let num = window.prompt(`Introduzca un número positivo: `)
let reverse = ""

while (num > 0) {
    for (let i = num.length; i >= 0; i--) {
        reverse += num.substring(i, i-1)
    }
    window.alert(reverse)
    num = window.prompt(`Introduzca otro número: (marque 0 si desea salir)`)
}