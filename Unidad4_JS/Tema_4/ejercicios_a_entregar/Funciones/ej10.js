// Crea una aplicación que nos calcule el área de un círculo, cuadrado o triángulo. Pediremos de qué figura queremos calcular su
// área y según lo introducido pedirá los valores necesarios para calcular el área. Crea un método por cada figura para calcular
// cada área, este devolverá un número entero(sin decimales). Muestra el resultado por pantalla
// 1. Circulo: (radio^2)*PI0
// 2. Triángulo: (base * altura) / 2
// 3. Cuadrado: lado * lado

function areaCirculo(a) {
    let area = (a ** 2) * 3.14
    window.alert(`El area del circulo es de ${area}`)
}

function areaTriangulo(b, c) {
    let areaT = (b * c) / 2
    window.alert(`El área del triángulo es de ${areaT}`)
}

function areaCuadrado(d) {
    let areaC = (d * d)
    window.alert(`El área del cuadrado es de ${areaC}`)
}


let eleccion = Number(window.prompt(`Elija del 1 al 3, la figura de la cual quiera conocer su área: `))

switch (eleccion) {
    case 1:
        let radio = Number(window.prompt(`Introduzca el radio del círculo: `))
        areaCirculo(radio)
        break
    case 2:
        let base = Number(prompt(`Introduzca la base: `))
        let altura = Number(prompt(`Introduzca la altura: `))
        areaTriangulo(base, altura)
        break
    case 3:
        let lado = prompt(`Introduzca la longitud del lado: `)
        areaCuadrado(lado)
        break
    default:
        alert(`Introduzca un número entre el 1 y el 3`)

}