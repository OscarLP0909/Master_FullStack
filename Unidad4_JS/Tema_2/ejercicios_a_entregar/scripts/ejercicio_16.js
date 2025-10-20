/*Con if else if: Mostrar en pantalla un menú con varias opciones. Dependiendo de lo que el usuario elija, mostrar en pantalla la
selección. Hacerlo tanto con if else como con switch.*/

let seleccion = window.prompt(`Introduzca un número para seleccionar: `)

if(seleccion === 1){
    window.alert(`Has elegido la opción 1`)
} else if(seleccion === 2) {
    window.alert(`Has elegido la opción 2`)
} else if (seleccion === 3) {
    window.alert(`Has elegido la opción 3`)
} else {
    window.alert(`Elija una opción válida`)
}

switch (seleccion) {
    case 1:
        window.alert(`Has elegido la opción 1`)
        break;
    case 2:
        window.alert(`Has elegido la opción 2`)
        break;
    case 3:
        window.alert(`Has elegido la opciónn 3`)
        break;
    default:
        window.alert(`Elija una opción válida`)
}