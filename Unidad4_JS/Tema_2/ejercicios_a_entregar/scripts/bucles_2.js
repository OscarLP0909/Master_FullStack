/*Crear un programa que muestre el valor de sumar todos los números desde 1 hasta el número que introduzca el
usuario.
Por ejemplo, si introduce el 8 debería mostrar 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8).*/

let numero = Number(window.prompt(`Introduzca un número: `))

let suma = 0

for (let i = 1; i <= numero; i++) {
    console.log(suma += i);
}

alert(`La suma de los números del 1 al ${numero} es de ${suma}`)