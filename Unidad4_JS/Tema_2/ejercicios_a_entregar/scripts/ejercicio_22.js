/*Escribe un programa para una empresa de alquiler de coches. Tendremos que preguntar al usuario la edad. Si el usuario es
menor de 18, no podrá alquilar un vehículo y se lo diremos en pantalla. En caso de ser mayor de edad, le preguntamos si tiene
carnet de conducir. Si la respuesta es negativa, no podrá alquilar un coche y se lo advertiremos por pantalla. Si es mayor de
edad le pediremos tanto nombre como apellido , ciudad de recogida del vehículo y número de días que quiere alquilar el coche
(el alquiler del coche por día tiene un coste de 25 euros y en caso que lo alquile una semana, el coste será de 150 euros).
Imprimir por pantalla los datos del cliente que vaya a alquilar el coche y el coste total del alquiler.*/

let edad = Number(window.prompt(`Introduzca su edad: `))


if (edad < 18) {
    window.alert(`No puede alquilar un vehículo`)
    throw new Error("Edad insuficiente");
    
}



let carnet = window.prompt(`¿Tiene carné de conducir?`)

carnet.toLowerCase

if (carnet === "no") {
    window.alert(`No puede alquilar porque no tiene carnet`)
} else {
    let nombre = window.prompt(`Introduzca nombre: `)
    let apellido = window.prompt(`Introduzca apellido: `)
    let ciudad = window.prompt(`Introduzca ciudad de recogida del vehiculo: `)
    let dias = Number(window.prompt(`Introduzca nº de días de alquiler: `))
    
    if(dias === 7) {
        let costeTotal = 150
        window.alert(`Nombre: ${nombre}, Apellido: ${apellido}, Ciudad: ${ciudad}, Días: ${dias}, Coste Total: ${costeTotal}`)
    } else {
        let costeTotal = 25 * dias
        window.alert(`Nombre: ${nombre}, Apellido: ${apellido}, Ciudad: ${ciudad}, Días: ${dias}, Coste Total: ${costeTotal}`)
    }
}


