let num = window.prompt("Introduzca un número")

if (num < 1) {
    window.alert("Introduzca un número mayor que 1")
} else {
    let cuadrado = num ** 2
    let cubo = num * num * num
    window.alert(`El cuadrado de ${num} es ${cuadrado} y el cubo de ${num} es ${cubo}`)
}