// Dada una función que utiliza un callback para manejar tareas asincrónicas, conviértela para que utilice una promesa en su lugar

/*
function leerArchivo(nombreArchivo, callback) {
setTimeout(() => {
if (nombreArchivo) {
callback(null, `Contenido del archivo: ${nombreArchivo}`);
} else {
callback("Error: No se proporcionó un nombre de archivo", null);
}
*/


function leerArchivo(nombreArchivo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (nombreArchivo) {
                resolve(`Contenido del archivo: ${nombreArchivo}`)
            } else {
                reject(`Error: No se proporcionó un nombre de Archivo`)
            }
        }, 1000)
    })
}

// Con async/await

async function consultarArchivo() {
    try {
        const resultado = await leerArchivo("datos.txt")
        console.log(resultado)
    } catch (error) {
        console.log(error)
    }
    
}

consultarArchivo()

// Con promesas

// leerArchivo("datos.txt")
//     .then((contenido) => console.log(contenido))
//     .catch((error) => console.log(error))