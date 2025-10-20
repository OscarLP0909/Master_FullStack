/*Decir el número de helados que queremos comprar. Cada helado vale 2 euros. Si compramos más de 10 helados, nos
regalan uno. Mostrar en pantalla el número de helados que nos dan y cuánto hemos pagado por ellos. (Sólo damos un
helado gratuito aunque compren muchos más helados que 10)*/

let numHelados = Number(window.prompt(`¿Cuantos helados has comprado?`))
let heladosGratis

if(numHelados < 0 || numHelados === null) {
    window.alert(`Introduzca un número válido`)
}

if (numHelados > 10) {
    const totalHelados = numHelados * 2
    numHeladosReg = numHelados + 1
    heladosGratis = 1
    window.alert(`Nos han dado ${numHeladosReg}, nos ha regalado ${heladosGratis} y nos ha costado ${totalHelados}`)
} else {
    const totalHelados = numHelados * 2
    window.alert(`No nos han dado ningún helado gratuito y nos ha costado ${totalHelados}`)
}