// Simular un flujo real de una aplicación que:

// Descarga datos del servidor

// Procesa esos datos

// Guarda el resultado final

// Cada paso debe tardar 1 segundo y devolver una Promesa.

function descargarDatos() {
    return new Promise((resolve, reject) => {
        const exito = Math.random() > 0.3;
        setTimeout(() => {
            if(exito) {
                resolve("Datos descargados")
            } else {
                reject("No hay datos descargados")
            }
        }, 1000);
    })
}

function procesarDatos(datos) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(datos){
                resolve(`Datos procesados: ${datos}`)
            } else {
                reject("No se han podido procesar los datos")
            }
        }, 1000);
    })
}

function guardarDatos(resultado) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(resultado) {
                resolve(`Datos guardados correctamente: ${resultado}`)
            } else {
                reject(`No se ha recibido nada`)
            }
        }, 1000);
    })
}

descargarDatos()
    .then((datosDescargados) => {
        console.log(datosDescargados)
        return procesarDatos(datosDescargados)
    })
    .then((datosProcesados) => {
        console.log(datosProcesados)
        return guardarDatos(datosProcesados)
    })
    .then((datosResultados) => {
        console.log(datosResultados)
    })
    .catch((error) => { console.log(error) });