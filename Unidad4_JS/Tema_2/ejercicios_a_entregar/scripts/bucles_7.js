/*Escribe un programa que pida valores.
Si introduce un valor negativo, mostrar un mensaje diciendo que se ignoran los valores negativos.
Seguir pidiendo hasta que el usuario introduzca un 0, entonces mostrar la suma de los valores introducidos.*/

let num = Number(window.prompt(`Introduzca un valor: `))
var arraySuma = [];
let suma = 0;

    while (num !== 0) {
        if(isNaN(num)){
            window.alert(`Entrada no válida, tiene que ser un número`)
        } else if (num < 0) {
            window.alert(`No introduzca valores negativos`)
        } else {    
        arraySuma.push(num);
    }
    num = Number(window.prompt(`Introduzca otro número (0 si quiere salir): `))
}
    
    if(num === 0) {
        for (let i = 0; i < arraySuma.length; i++){
            suma += arraySuma[i];
    }
    window.alert(`La suma de ${arraySuma} es de ${suma}`)
}
