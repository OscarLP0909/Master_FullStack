// Ejercicio opcional:

// Simular un carrito de compra con:

// agregarProducto()

// calcularTotal()

// procesarPago()

// Todos asíncronos con async/await y errores aleatorios.

async function agregarProducto(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(nombre) {
                resolve(`Producto agregado: ${nombre}`)
            } else {
                reject(`No se pudo agregar el producto`)
            }
        }, 1000);
    })
}

async function calcularTotal() {
    return new Promise((resolve, reject) => {
        const exito = Math.random() > 0.2
        const precio = Math.random() * 180 + 20
        const precioR = Math.floor(precio)
        setTimeout(() => {
            if(exito) {
                resolve(precioR)
            } else {
                reject(`No se ha calculado nada`)
            }
        }, 1000);
    })
}

async function procesarPago(total) {
    return new Promise((resolve, reject) => {
        const exito = Math.random() > 0.2
        setTimeout(() => {
            if(exito) {
                resolve(`Pago procesado correctamente: ${total}`)
            } else {
                reject(`Error al procesar el pago`)
            }
        }, 1000);
    })
}

async function checkout() {
    try{
        const agregar = await agregarProducto("Patatas")
        console.log(agregar)
        const total = await calcularTotal()
        console.log(total)
        const pago = await procesarPago(total + "€")
        console.log(pago)
    } catch(error) {
        console.log(error)
    }
}

checkout()