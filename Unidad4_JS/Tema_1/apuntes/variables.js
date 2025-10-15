/* eslint-disable no-unused-vars */
// let patata = 23

// console.log(patata)

// function prueba() {
//     let patata = 25
//     console.log(patata)
// }

// prueba()


// Tipos de datos

// let int = 23 //Int

// let float = 23.1 //Float

// let string = "Hola" //String

// let string2 = "...." //String              Para JavaScript, un String es como un Array

// let string3 = "HOLA" // Para JavaScript no hay ninguna diferencia entres estos 3 Strings

// console.log(string === string2) // Sale falso debido a los ASCII

// let string4 = "Algo ha pasado con 'Lola' yo creo"

// let string5 = `Algo ha pasado con ${string2} creo`

// console.log(string5)

// let boolean = true

// console.log(boolean) // true

// // Null

// let variable = null

// let variable2

// console.log(variable)
// console.log(variable2)
// // console.log(variable3)

// Objetos

let persona = {
    nombre: "pedro",
    edad: 45,
    socio: false,
    mascota: {
        nombre: "bigotitos",
        edad: 12
    }
}

let edad = 234

console.log(persona.edad)
console.log(persona.mascota.edad)


// Arrays
let persona1 = {
    nombre: "pedro",
    edad: 45,
    socio: false,
    mascota: {
        nombre: "bigotitos",
        edad: 12
    }
}

console.log(persona.socio)
console.log(persona.mascota.edad)


let array = ["paco", 45, false, {mascota: {edad:12, nombre: "bigotitos"}}]

console.log(array[1])

let stringRaro = "paco"

console.log(stringRaro[1])

// Conversión Implícita

console.log("4" + 3) //43 lo transforma todo a String y concatena

console.log("4" - 3) // 1 lo tranforma a int y lo resta

// Conversión Explícita

console.log(Number("234") + 2) // Tranforma a Numero y lo suma