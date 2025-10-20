/*Resultado de carrera. Hacer varios programas en los que se le pregunta al usuario el puesto en el que acabó. Después:
1. Si el valor de puesto es 1 mostramos mensaje con "Ganaste", si no "Lo importante es participar”.
2. Si el valor de puesto es 1, mostramos mensaje con "Medalla de oro", si el valor de puesto es 2, mostramos el mensaje con
"Medalla de plata", si es 3 "Medalla de bronce" y al resto "Lo importante es participar.
3. Con switch: Si el valor de puesto es 1, mostramos mensaje con "Medalla de oro", si el valor de puesto es 2, mostramos el
mensaje con "Medalla de plata", si es 3 "Medalla de bronce" y al resto "Lo importante es participar.
4. Los puestos 1, 2 y 3 ven el mensaje "Sube al podium", el resto ven el mensaje "Se acabó la carrera". Hazlo usando un
if/else.*/

let posicion = Number(window.prompt("Introduzca el puesto en el que ha quedado:"))

if (posicion === 1) {
    window.alert(`Ganaste la carrera`)
} else {
    window.alert(`Lo importante es participar`)
}

if (posicion === 1) {
    window.alert(`Medalla de oro`)
} else if (posicion === 2) {
    window.alert(`Medalla de plata`)
} else if (posicion === 3) {
    window.alert(`Medalla de bronce`)
} else {
    window.alert(`Lo importante es participar`)
}

switch (posicion) {
    case 1:
        window.alert(`Medalla de oro`)
        break;
    case 2: 
        window.alert(`Medalla de plata`)
        break;
    case 3: 
        window.alert(`Medalla de bronce`)
        break;
    default:
        window.alert(`Lo importante es participar`)
    
}

if(posicion <= 3 && posicion > 0) {
    window.alert(`Sube al podium`)
} else if(posicion > 3){
    window.alert(`Se acabó la carrera`)
} else {
    window.alert(`Introduzca una posición válida`)
}

