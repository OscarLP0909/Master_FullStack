// Crea una aplicación que nos cuente el número de cifras de un número entero positivo (hay que confirmar que no haya
// introducido un número negativo y deberemos quitar los decimales) pedido por teclado. Crea un método que realice esta acción:
// pasando el número por parámetro, devolverá el número de cifras. Después mostrar ese número en un alert

let numero = Number(window.prompt(`Introduzca un número: `))
let cont = 0
let conta = 0

function contador(a) {
    if (a < 0) {
        alert(`Introduzca un número positivo: `)
    } else if (!Number.isInteger(a)){
        let aSinDecimal = Math.trunc(a)
        let aStrD = aSinDecimal.toString()
        for (let j = 0; j < aStrD.length; j++){
            conta++
        }
        console.log(conta)
        alert(`Hay un total de ${conta} cifras sin contar decimales`)
    } else {
        let aStr = a.toString()
        for (let i = 0; i < aStr.length; i++){
            cont++
        }
        alert(`Hay un total de ${cont} cifras`)
    }
}

contador(numero)

