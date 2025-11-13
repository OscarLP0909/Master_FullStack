// Crear un flujo asíncrono completo usando async/await donde:

// Se obtiene un usuario desde un servidor.

// Se obtienen los posts de ese usuario.

// Se muestra el resultado final.

async function obtenerUsuario() {
    return new Promise((resolve, reject) => {
        const exito = Math.random() > 0.3
        setTimeout(() => {
            if(exito) {
            resolve({id : 1,
                nombre: "Juan"
                })
            } else {
                reject(`No se ha obtenido ningún usuario`)
            }   
        }, 1000);
        
    })
    
}

async function obtenerPosts(idUsuario) {
    return new Promise((resolve, reject) => {
        const resultado = Math.random() > 0.2
        setTimeout(() => {
            if(resultado) {
                resolve(["Post 1", "Post 2", "Post 3"])
            } else {
                reject("No hay ningun post")
            }
        }, 1000);
    })
}

async function mostrarInfo() {
    try{
    const usuario = await obtenerUsuario();
    console.log(usuario)
    const posts = await obtenerPosts(usuario.id);
    console.log(posts)
    } catch (error) {
        console.log(error)
    }
}

mostrarInfo()