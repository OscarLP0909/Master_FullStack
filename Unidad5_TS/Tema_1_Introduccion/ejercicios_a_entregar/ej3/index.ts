// Escribir una función que calcule un precio con impuestos. Tanto el precio como el valor del
// impuesto serán dados por parámetros, aunque en el segundo caso deberá establecerse que el
// valor del impuesto es el 21% si no se informa


function calcularImpuestos(precio: number, valorImpuesto?: number | null): void { // Con el ? después del parámetro, le estamos diciendo a TS que ese parámetro es opcional
    
    if(valorImpuesto === null || valorImpuesto === undefined){
        valorImpuesto = 21
    }
    const total: number = (precio * valorImpuesto) / 100

    console.log(total)

}

calcularImpuestos(15)