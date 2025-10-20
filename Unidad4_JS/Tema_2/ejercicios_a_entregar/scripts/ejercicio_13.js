/*Escribe un programa que dada una frase sacará su carácter central. Si la largura de la frase es par deberá sacar los dos
caracteres centrales correspondientes pero si es impar deberá sacar su único carácter central.*/

let palabra = window.prompt(`Introduzca una palabra: `)

palabra = palabra.trim()

if (palabra.length === 0) {
    window.alert(`Introduzca una palabra real`)
} else {
        if (palabra.length % 2 === 0) {
            var mid = Math.floor(palabra.length / 2)
            let midIzq = mid - 1;
            let charIzq = palabra.charAt(midIzq)
            let charDer = palabra.charAt(mid)
            window.alert(`Los caracteres centrales son ${charIzq} y ${charDer}`)
        } else {
            mid = Math.floor(palabra.length / 2)
            let char = palabra.charAt(mid)
            window.alert(`El caracter central es ${char}`)
        }
}