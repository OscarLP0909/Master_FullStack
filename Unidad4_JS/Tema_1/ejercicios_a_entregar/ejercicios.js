// 1. Declara una variable con let que almacene tu edad y reasígnala con un nuevo valor.

// let miEdad = 24

// miEdad = 40

// console.log(miEdad)

// 2. Declara una constante const para representar el valor de la velocidad de la luz (299792458 m/s). Intenta reasignar su valor y observa qué ocurre.

// const velocidadLuz = 299792458

// velocidadLuz = 1

// console.log(velocidadLuz)

// No se puede reasignar un valor de una variable que es constante.

// 3. Declara variables usando la notación camelCase para los siguientes conceptos: Intenta declarar una variable con un número al inicio de su nombre. ¿Qué ocurre?
/*
1. Tu nombre completo
2. Tu color favorito
3. Tu ciudad actual
*/

// let 1nombreCompleto = "Oscar Luque Porca" // No se puede declarar una variable que empiece con un número, ya que nos avisa de que no está permitido

// let colorFav = "Rojo"

// let ciudadActual = "Málaga"


// 4.  Declara variables de los siguientes tipos y escribe un ejemplo para cada uno:
// Número entero
// Número decimal
// Cadena (string)
// Booleano
// Null


// let numEntero = 20

// let numDecimal = 20.1

// let cadena = "Ejemplo"

// let boolean = false

// let variable = null

// 5. Usa console.log() para imprimir el tipo de cada variable utilizando typeof .

// console.log(typeof(numEntero))
// console.log(typeof(numDecimal))
// console.log(typeof(cadena))
// console.log(typeof(boolean))
// console.log(typeof(variableNull))



// 6. Declara una variable sin asignarle ningún valor y verifica su tipo

// let sinValor;

// console.log(typeof(sinValor)) // Undefined

// let vacio = null;

// console.log(typeof(vacio)) // object

// Undefined se refiere a que una variable está sin valor, mientras que si se asigna null, sale que es de tipo objeto


// 7. Declara dos variables x y y con valores 10 y 3 respectivamente.

// let x = 10
// let y = 3

//  8. Usa los operadores aritméticos para realizar:
//  Suma

// let resultado = x + y
// console.log(resultado)

//  Resta

// let resta = x - y
// console.log(resta)

//  Multiplicación

// let multi = x * y
// console.log(x * y)

//  División

// let div = x / y
// console.log(div)

//  Módulo (resto de la división)

// let mod = x % y
// console.log(mod)


// 9. Declara una variable z con valor inicial 20. Usa los operadores de asignación ( += , -= , *= , /= , %= ) para modificar su valor y muestra los resultados:

let z = 20;
z += 5 // 25
z -= 10 // 15
z *= 2 // 30
z /= 3 // 10
z %= 4 // 2     Valor final


// 10.  Declara dos variables a y b con valores 5 y "5" respectivamente. Usa los siguientes operadores para comparar las variables y explica los resultados:

let a = 5;
let b = "5";

console.log(a == b) // true
console.log(a === b) // false
console.log(a != b) // false
console.log(a !== b) // true


// 11.  Declara tres variables:
let esMayorDeEdad = true;
let tieneLicencia = false;
let puedeConducir = esMayorDeEdad && tieneLicencia;

// Responde: ¿Qué valor tiene puedeConducir y por qué? Cambia tieneLicencia a true . ¿Qué ocurre?

// Tiene valor false porque en el AND el resultado de false y true, va a salir false

// Si se cambia a true, al ser ambos true, en el AND termina saliendo como true


// 12. Crea una nueva condición usando el operador OR ( || ):
let tieneCarnetProvisional = true;
let acceso = tieneLicencia || tieneCarnetProvisional;
console.log(acceso);

// 13. ¿Qué imprime acceso ?

// Imprime true ya que en los OR, el resultado de false + true, es true. Siempre que haya un true, el resultado será true.


// 14. Declara dos variables nombre y edad con tu nombre y tu edad.

let nombre = "Oscar"
let edad = 24

// 15. Usa template literals para construir una frase:
let saludo = `Hola, me llamo ${nombre} y tengo ${edad} años.`;
console.log(saludo);


// 16. Declara una variable que almacene un número como texto ( "123" ). Realiza una operación matemática directamente con esa variable y observa qué ocurre.
let numeroTexto = "123";
let suma = 10 + numeroTexto; // ¿Qué resultado da? 12310
let resta = numeroTexto - 10; // ¿Qué resultado da? 113

// El oprador + concatena Strings siempre y cuando haya un operador que sea un String, mientras que en la resta lo convierte ya que deduce que se está haciendo una operación


// 17.  Crea un objeto llamado `persona` con las propiedades `nombre`, `edad` y `ciudad`.

let persona = {
    nombre: "paco",
    edad: 40,
    ciudad: "Malaga"
}


// 18.  Declara una variable que almacene el número `"42"` como cadena.

let numero = "42"

// 19. Convierte esta variable a un número usando `Number()` y verifica el tipo:

let numeroConvertido = Number(numero)

console.log(typeof(numeroConvertido))


// 20. Declara otra variable booleana y conviértela en cadena usando `String()`:

let boolean = false

let booleanConvertido = String(boolean)

console.log(typeof(booleanConvertido))