/*Escribe un programa que muestre el resultado de sumar todos los números del 1 hasta el número introducido y que
vuelva a pedirle al usuario otro número hasta que el usuario introduzca un 0.*/

let num = Number(window.prompt(`Introduzca un número: `))

while (num > 0) {
    let suma = 0
    for (let i = 1; i <= num; i++){
        suma += i
    }
    window.alert(`La suma del 1 al ${num} es de ${suma}`)
    num = window.prompt(`Vuelva a introducir otro número: `)
}

