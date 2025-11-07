// let array = [1,2,3,4,5,6,7,8]
// let array2 = []

// array.forEach(function(elemento){
//     array2.push(elemento + 1)
// })

// console.log(array2)


// let mensaje = "Hola Mundo!"

// function saludar(msn) {
//     let mensaje = "hola mundo"
//     console.log(mensaje)
// }

// saludar("patata")


// if(true) {
//     var x = 0
//     let y = 20
//     const z = 45
// }

// console.log(x) // Se imprime
// console.log(y) // No se imprime
// console.log(z) // No se imprime


// pedirUsuario(usr, pass)
// saludar(nombre, edad)


// Funciones asíncronas
// Callback: es una llamada de vuelta, una función que le pasamos a otra función

function datosUsuario(nombre, callback) {
    console.log("procesando usuario: " + nombre)
    callback(nombre, saludo2)
}

function saludar(nombre, callback) {
    console.log("hola " + nombre)
    callback(nombre)
}

function saludo2(nombre) {
    console.log("¿Como estás " + nombre + "?")
}

datosUsuario("Luis", saludar) // De segundo arg le estamos pasando una funcion


console.log("Inicio")

setTimeout(() => { console.log("Estoy procesando") }, 2000)

console.log("Fin")

let promesa = new Promise((resolve, reject) => {  // Resolve: cumple la promesa   Reject: fallar la promesa
    if (2 + 3 == 4) {
        resolve("todo guay")
    } else {
        reject("Todo mal")
    }
})

promesa.then((respuesta) => { console.log(respuesta) })
    .catch((error) => { console.log(error) })
    .then(() => { console.log("pues ya estaría") }) // Este se va a cumplir siempre y no depende de que la promesa falle
// .catch((error) => { console.log("Todo se pudrió") }) // Nunca se va a ejecutar


// Funciones asincronas
async function llamarDatos(usr) {
    try {
        const llamada1 = await api1(usr) // Espera a que los datos lleguen
        console.log("patata") // Se ejecuta sin esperar a nada
        const llamadaFinal = await api2(llamada1)
        let alfalfa = 2+3 // Se ejecuta sin esperar a nada
        const imprimir = await imprimir(llamadaFinal)

        console.log(imprimir)

    } catch (error) {
        console.error(error)
    }
}