// Crear un array. Pedir al usuario 3 veces que escriba un string. Guardar cada uno de esos strings en las posiciones 0, 1 y 2.
// Mostrar en pantalla en el orden: primero posición 1, después posición 2 y por último posición 0.

let array = []

let palabra1 = window.prompt(`Escriba la primera palabra: `)
let palabra2 = window.prompt(`Escriba la segunda palabra: `)
let palabra3 = window.prompt(`Escriba la tercera palabra: `)

array = [palabra1, palabra2, palabra3]

window.alert(`[${array}]`)