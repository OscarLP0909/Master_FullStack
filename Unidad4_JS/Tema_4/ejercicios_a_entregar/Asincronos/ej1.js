// Crea una función llamada temporizador que reciba un número de segundos y un callback. La función debe utilizar setTimeout
// para esperar los segundos indicados y luego ejecutar el callback que muestra un mensaje en la consola.

function temporizador(segundos, callback) {
    setTimeout(() => {
        callback();
    }, segundos * 1000)
}

temporizador(3, () => {
    console.log("Han pasado 3 segundos")
})


