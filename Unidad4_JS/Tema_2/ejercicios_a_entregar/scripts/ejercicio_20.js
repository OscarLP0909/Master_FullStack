let valor = Number(window.prompt(`Introduzca la temperatura`))
let grados = window.prompt(`Lo quiere convertir en Centígrados o en Fahrenheit`)

if (grados === "C") {
    let valorConvertido = (valor-32) * 5 / 9
    window.alert(`El valor de ${valor} convertido a Centígrados es de ${valorConvertido}`)
} else {
    let valorConvertido = (valor * 9) / 5 + 32
    window.alert(`El valor de ${valor} convertido a Fahrenheit es de ${valorConvertido}`)
}

