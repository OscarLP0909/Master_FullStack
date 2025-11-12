// Crea una función descargarDatos que devuelva una Promesa. La promesa debe simular la descarga de datos usando un
// setTimeout de 2 segundos. Si el proceso tiene éxito, resuelve la promesa con un mensaje de éxito. Si hay un error (simulado
// con una probabilidad del 30%), rechaza la promesa con un mensaje de error

function descargarDatos() {
    return new Promise((resolve, reject) => {
        const exito = Math.random() > 0.7 // 70% de exito
        setTimeout(() => {
            if (exito) {
                resolve("Datos descargados")
            } else {
                reject("Error al obtener datos")
            }
        }, 2000);
    });
}

async function consultarDatos() {
    try {
        const resultado = await descargarDatos();
        console.log(resultado)
    } catch (error){
        console.log(error)
    }
}

consultarDatos()