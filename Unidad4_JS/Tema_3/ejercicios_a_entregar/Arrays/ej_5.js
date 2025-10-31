// Poner los nombres de los meses en un array de 12 posiciones. Cuando el usuario introduce un número del 1 al 12, mostrar el
// nombre de ese mes en pantalla.

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

let mes = Number(window.prompt(`Introduzca un número del 1 al 12: `))

switch(mes) {
    case 1:
        window.alert(`Has elegido el mes de ${meses[0]}`)
        break
    case 2:
        window.alert(`Has elegido el mes de ${meses[1]}`)
        break
    case 3:
        window.alert(`Has elegido el mes ${meses[2]}`)
        break
    case 4:
        window.alert(`Has elegido el mes ${meses[3]}`)
        break
    case 5:
        window.alert(`Has elegido el mes ${meses[4]}`)
        break
    case 6:
        window.alert(`Has elegido el mes ${meses[5]}`)
        break
    case 7:
        window.alert(`Has elegido el mes ${meses[6]}`)
        break
    case 8:
        window.alert(`Has elegido el mes ${meses[7]}`)
        break
    case 9:
        window.alert(`Has elegido el mes ${meses[8]}`)
        break
    case 10:
        window.alert(`Has elegido el mes ${meses[9]}`)
        break
    case 11:
        window.alert(`Has elegido el mes ${meses[10]}`)
        break
    case 12:
        window.alert(`Has elegido el mes ${meses[11]}`)
        break
    default:
        window.alert(`Elija un número del 1 al 12`)
}