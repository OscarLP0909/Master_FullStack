/*Pide al usuario que escriba un día de la semana (lunes, martes…). Mostrar en pantalla el día que dice que es si es entre lunes y
viernes (Por ejemplo "Hoy es lunes") y si es fin de semana mostrar "Es fin de semana". Hazlo una vez usando switch y otra con if
else.*/

let dia = window.prompt("Introduzca un dia de la semana")

// switch (dia) {
//     case "Lunes": 
//         window.alert("Hoy es Lunes")
//         break
//     case "Martes":
//         window.alert("Hoy es Martes")
//         break
//     case "Miercoles":
//         window.alert("Hoy es Miércoles")
//         break
//     case "Jueves":
//         window.alert("Hoy es viernes")
//         break
//     case "Viernes":
//         window.alert("Hoy es Viernes")
//         break
//     case "Sabado":
//         window.alert("Hoy es Fin de Semana")
//         break
//     case "Domingo":
//         window.alert("Hoy es Fin de Semana")
//         break
//     default:
//         window.alert("No es un día válido")
// }

if (dia === "Lunes") {
    window.alert("Hoy es Lunes")
} else if (dia === "Martes") {
    window.alert("Hoy es Martes")
} else if (dia === "Miercoles") {
    window.alert("Hoy es Miercoles")
} else if (dia === "Jueves") {
    window.alert("Hoy es Jueves")
} else if (dia === "Viernes") {
    window.alert("Hoy es Viernes")
} else if (dia === "Sabado" || dia === "Domingo") {
    window.alert("Hoy es fin de semana")
} else {
    window.alert("No es un día válido")
}