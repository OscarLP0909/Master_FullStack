/*Haz un programa que sea el juego de piedra-papel-tijera. Pide al usuario que seleccione una de las 3 posibilidades y haz que el
programa seleccione una de las 3 posibilidades de manera aleatoria. Dependiendo del resultado, muestra el mensaje
correspondiente.*/

let eleccionHumano = Number(window.prompt(`Seleccione:
    1. Piedra
    2. Papel
    3. Tijeras`))

let eleccionMaquina = Math.floor((Math.random() * 3) + 1)

if (eleccionMaquina === 1 && eleccionHumano === 2) {
    window.alert(`Gana el Humano----${eleccionHumano}---${eleccionMaquina}`)
} else if (eleccionMaquina === 1 && eleccionHumano === 3) {
    window.alert(`Gana la máquina---${eleccionHumano}---${eleccionMaquina}`)
} else if (eleccionMaquina === 2 && eleccionHumano === 1) {
    window.alert(`Gana la máquina---${eleccionHumano}---${eleccionMaquina}`)
} else if (eleccionMaquina === 2 && eleccionHumano === 3) {
    window.alert(`Gana el Humano----${eleccionHumano}---${eleccionMaquina}`)
} else if (eleccionMaquina === 3 && eleccionHumano === 1) {
    window.alert(`Gana el Humano----${eleccionHumano}---${eleccionMaquina}`)
} else if (eleccionMaquina === 3 && eleccionHumano === 2) {
    window.alert(`Gana la máquina---${eleccionHumano}---${eleccionMaquina}`)
} else if (eleccionMaquina === eleccionHumano) {
    window.alert(`Empate`)
} else {
    window.alert(`Introduzca un número válido`)
}