/*Escribe un programa que pida dos números enteros entre 25 y 75 y que diga si hay un dígito en común entre los dos números*/

let num1 = Number(window.prompt("Introduzca el primer número entre 25 y 75"));
let num2 = Number(window.prompt("Introduzca el segundo número entre 25 y 75"));

if (num1 < 25 || num1 > 75 || num2 < 25 || num2 > 75) {
    window.alert("Introduzca un número mayor que 25 y menor que 75");
} else {
    let str1 = num1.toString();
    let str2 = num2.toString();

    let arrayFound = [];

    for (let i = 0; i < str1.length; i++) {
        var digito = str1[i];

        if (str2.includes(digito) && !arrayFound.includes(digito)) {
            arrayFound.push(digito);
        }
    }
    if (arrayFound.length === 0) {
        window.alert(`No tienen dígitos en común`);
    } else {
        window.alert(`Si tienen digitos en común: [${arrayFound}]`);
    }
}
