/* Pedir al usuario un número.
Mostrar en pantalla el siguiente dibujo con tantas líneas como las que haya introducido:
/*
**
*** 
*/

let num = 10//Number(window.prompt(`Introduzca un número: `))

for (let i = 1; i <= num; i++) {
    console.log('*'.repeat(i))
}