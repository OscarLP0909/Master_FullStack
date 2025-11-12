// Crea tres funciones: operacion1 , operacion2 y operacion3 . Cada función devuelve una Promesa que se resuelve después
// de 1 segundo con un mensaje indicando el resultado de la operación. Encadena las tres funciones usando .then y muestra los
// mensajes en orden.

function operacion1() {
    return new Promise((resolve) => {
        setTimeout(() => {
                resolve("Operacion 1 completada")
        }, 1000);
    })
}

function operacion2() {
    return new Promise((resolve) => {
        setTimeout(() => {
                resolve("Operacion 2 completada")
        }, 1000);
    })
}

function operacion3() {
    return new Promise((resolve) => {
        setTimeout(() => {
                resolve("Operacion 3 completada")
        }, 1000);
    })
}


operacion1()
    .then((mensaje) => {
        console.log(mensaje);
        return operacion2(); // El return hace que el segundo .then espere a que operacion2() termine antes de ejecutarse
})
    .then((mensaje2) => {
        console.log(mensaje2);
        return operacion3();
    })
    .then((mensaje3) => {
        console.log(mensaje3);
    });