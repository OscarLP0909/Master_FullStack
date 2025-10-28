// Crear un array. Usar un for para pedir 3 valores al usuario y guardarlos en el mismo. Comparar los 3 valores del array y mostrar
// en pantalla el más pequeño.

let array = []
let valor;
let min;

for (let i = 0; i < 3; i++) {
    valor = Number(window.prompt(`Introduzca un valor: `))
    array.push(valor)
}

console.log(valor)

min = array[0]
for(let j = 0; j < array.length; j++) {
    console.log(array[j])
    if(array[j] < min) {
        min = array[j]
    }
}

window.alert(`El menor del array es el ${min}`)