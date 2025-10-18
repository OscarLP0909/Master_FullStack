/*Tenemos dos números, un numerador y un denominador. Si el denominador no es cero, mostramos el resultado de dividir el
numerador por el denominador. Si el denominador es cero, mostramos el mensaje "No se puede dividir por cero".*/

let numerador = Number(window.prompt("Introduzca el numerador"))
let denominador = Number(window.prompt("Introduzca el denominador"))

if (denominador <= 0) {
    window.alert("No se puede dividir por 0")
} else {
    let resultado = numerador/denominador
    let resultadoRedond = Math.round(resultado*100)/100
    window.alert(`El resultado de la división entre ${numerador} y ${denominador} es de ${resultadoRedond}`)
}