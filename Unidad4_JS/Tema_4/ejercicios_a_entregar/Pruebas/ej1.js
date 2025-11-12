// function temporizador(segundos, callback) {
//     let tiempo = segundos;

//     const intervalo = setInterval(() => {
//         console.log(tiempo);
//         tiempo--;

//         if (tiempo === 0) {
//             console.log(0)
//             clearInterval(intervalo);
//             👉 aquí debería ejecutarse el callback
//             callback();
//         }
//     }, 1000);
// }

// temporizador(3, () => console.log("⏰ ¡Tiempo terminado!"));



function mostrarMensajeConRetraso(mensaje, segundos) {
    setTimeout(() => {
        console.log(mensaje)
    }, segundos * 1000)
    
}

mostrarMensajeConRetraso("Mensaje A", 2);
mostrarMensajeConRetraso("Mensaje B", 5);

