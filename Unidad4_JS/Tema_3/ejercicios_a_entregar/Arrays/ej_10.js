// Crear un array con 11 ceros. Pedir al usuario que introduzca valores entre 0 y 10. Cada vez que introduzca un dígito, añadir uno
// al valor en esa posición del array. Si por ejemplo introduce un 3, sumar uno a la posición 3. Mostrar en pantalla los valores. Si
// introduce un número mayor que 10, decir que ese número es incorrecto. Si introduce un número negativo, mostrar en pantalla el
// número de cada posición y el valor que contiene.

let ar = new Array(11).fill(0)
let entrada = Number(window.prompt(`Introduzca entre 0 y 10 (negativo para terminar): `))




while(entrada >= 0 && entrada <= 10) {

    if(entrada === null){
        break
    } 

    // Pasarlo a Número
    const usuario = Number(entrada)

    // Si se introduce otra cosa que no sea un entero
    if(!Number.isFinite(usuario) || !Number.isInteger(usuario)){
        window.alert(`Entrada no válida. Introduzca un entero: `)
        continue
    }

    // Si es menor que 0
    if (usuario < 0) {
        let mensaje = `Contenido del array: \n`
        for(let i = 0; i <= ar.length; i++) {
            mensaje += `${i} -> ${ar[i]}\n`
        }
        window.alert(mensaje)
        break
    }

    // Si es mayor que 10
    if(usuario > 10) {
        window.alert(`Número incorrecto: `)
        continue
    }

    // Numero entre el 0 y el 10
    window.alert(`Valor actual en posicion ${usuario}: ${ar[usuario]}`)
    ar[usuario] += 1
    window.alert(`Nuevo valor en posicion ${usuario}: ${ar[usuario]}`)

    entrada = Number(window.prompt(`Introduzca entre 0 y 10 (negativo para terminar):`))
}

