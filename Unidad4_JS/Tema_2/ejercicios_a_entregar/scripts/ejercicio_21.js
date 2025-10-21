/*Crea un programa para ver si los comerciales reciben un extra. Si venden más de 500 euros, les damos un extra del 5% del total
de lo que han vendido. El usuario introduce su nombre y el precio de las ventas. Muestra en pantalla su nombre, seguido de las
ventas y en el caso de que las ventas superen 500 euros el 5% de las ventas como extra.*/

let nombre = window.prompt(`Introduzca su Nombre: `)
let ventas = Number(window.prompt(`Introduzca la cantidad generada de las ventas`))

if (ventas > 500) {
    let extra = (ventas * 5) / 100
    let totalRecibir = ventas + extra
    window.alert(`${nombre} este mes vas a recibir ${totalRecibir} por haber superado los 500€ en ventas`)
} else {
    window.alert(`${nombre} este mes vas a recibir ${ventas}€ al no haber superado los 500€ en ventas`)
}