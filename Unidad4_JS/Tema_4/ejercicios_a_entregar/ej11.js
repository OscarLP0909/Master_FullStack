// Crea un aplicación que nos convierta una cantidad de euros introducida por teclado a otra moneda, estas pueden ser a dólares,
// yenes o libras. El método tendrá como parámetros, la cantidad de euros y la moneda a pasar que será una cadena, este no
// devolverá ningún valor, mostrará un mensaje indicando el cambio.
// 1. 0.86 libras es un 1 €
// 2. 1.28611 $ es un 1 €
// 3. 129.852 yenes es un 1 €

let cantidadE = Number(prompt(`Introduzca la cantidad de € a cambiar: `))
let moneda = Number(prompt(`Elija la moneda a la que desea cambiar:
    1. Libras
    2. Dólares
    3. Yenes`))

function cambioMoneda(a, b) {
    if (moneda === 1) {
        let conversionL = a * 0.86
        alert(`El paso de ${cantidadE}€ a libras es de ${conversionL}`)
    } else if (moneda === 2) {
        let conversionD = a * 1.28611
        alert(`El paso de ${cantidadE}€ a dólares es de ${conversionD}`)
    } else if (moneda === 3) {
        let conversionY = a * 129.852
        alert(`El paso de ${cantidadE}€ a yenes es de ${conversionY}`)
    } else {
        alert(`Introduzca una moneda válida`)
    }
}

cambioMoneda(cantidadE, moneda)