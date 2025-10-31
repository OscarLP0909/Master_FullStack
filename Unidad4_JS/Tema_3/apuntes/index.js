// const frutas = ['manzana', 'banana', 'naranja']; 
// console.log(frutas); // ['manzana', 'banana', 'naranja']

const frutas = ['manzana', 'banana']; 

frutas.push('naranja'); 
console.log(frutas); // ['manzana', 'banana', 'naranja'] 
frutas.pop(); 
console.log(frutas); // ['manzana', 'banana'] 
frutas.shift(); 
console.log(frutas); // ['banana'] 
frutas.unshift('pera'); 
console.log(frutas); // ['pera', 'banana']

// const numeros = [1, 2, 3, 4, 5]; 
// const subArray = numeros.slice(1, 4); 
// console.log(subArray); // [2, 3, 4]

const numeros = [1, 2, 3, 4, 5]; 
numeros.splice(2, 1, 10); 
console.log(numeros); // [1, 2, 10, 4, 5]

const palabras = ['Hola', 'mundo']; 
const frase = palabras.join(' ');
console.log(frase)

const array1 = [1, 2, 3]; 
const array2 = [4, 5, 6]; 
const combinado = array1.concat(array2); 
console.log(combinado); // [1, 2, 3, 4, 5, 6]

// const numeros = [10, 20, 30, 40]; 
// console.log(numeros[0]); // 10 (primer elemento) console.log(numeros.length); // 4 (longitud del array)

const matriz = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]; 
console.log(matriz[0][1]); // 2 (elemento de la primera fila, segunda columna) 
console.log(matriz[2][0]); // 7 (elemento de la tercera fila, primera columna)

const numeros2 = [1,2,3,4];

for (let i = 0; i < numeros2.length; i++) {
    console.log(numeros2[i]) // Imprime cada elemento
}

const frutas2 = ['manzana', 'banana', 'naranja'];

frutas2.forEach(function(fruta, indice) {
    console.log(`Fruta en posicion ${indice}: ${fruta}`)
});