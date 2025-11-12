// Con Promise

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("✅ Datos recibidos");
    }, 2000);
});

promesa.then((resultado) => {
    console.log(resultado);
});
console.log("⏳ Esperando...");


// Con async/await

// async function ejemplo() {
//     const resultado = await promesa;
//     console.log(resultado);
// }
// ejemplo();
// console.log("⏳ Esperando...");

function obtenerDatosDelServidor() {
    return new Promise((resolve, reject) => {
        const exito = Math.random() > 0.5; // 50% de éxito
        setTimeout(() => {
            if (exito) {
                resolve("📦 Datos recibidos del servidor");
            } else {
                reject("🚫 Error de conexión");
            }
        }, 1500);
    });
}

// 👉 Tu función asíncrona va aquí

async function consultarServidor() {
    try {
        const resultado = await obtenerDatosDelServidor();
        console.log(resultado)
    } catch (error) {
        console.log(error)
    }
}

consultarServidor()
