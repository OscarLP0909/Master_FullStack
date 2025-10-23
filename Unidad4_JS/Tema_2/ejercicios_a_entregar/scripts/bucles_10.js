/*Realiza un programa que muestre por pantalla los números del 1 al 100 sin mostrar aquellos números múltiplos de 5.*/

for (let i = 1; i <= 100; i++) {
    if (i % 5 !== 0){
        console.log(i)
    }
}