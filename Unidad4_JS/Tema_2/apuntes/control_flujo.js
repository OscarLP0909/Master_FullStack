// let edad = 18;

// if(edad >= 18) {
//     console.log("Mayor de edad")
// } else {
//     console.log("Menor de edad")
// }


// // Operador terniario

// console.log(edad < 18 
//     ? "Eres menor de edad" 
//     : edad > 18
//         ? "Eres mayor de edad"
//         : "No es una edad válida"
//     )


// La sentencia Switch se utiliza para valores exactos, no rangos o condiciones booleanas


let pulsacion = 1

switch(pulsacion) {
    case 1:
        console.log("has pulsado 1")
        break;
    case 2:
        console.log("has pulsado 2")
        break;
    default:
        console.log("introduzca uno válido")
}


// Bucle For

for (let i = 0; i < 5; i++) {
    console.log(i)
}


let contador = 0
while (contador < 5) {
    console.log("patata")
    contador++;
}

let array = ["paco", "maria", "lucia", "jose", "benito"]

let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

// for in

for (let clave in persona){
    console.log(persona[clave])
}

for (let clave in array){
    console.log(array[clave])
}


// for of

for (let nombre of array) {
    console.log(nombre)
}