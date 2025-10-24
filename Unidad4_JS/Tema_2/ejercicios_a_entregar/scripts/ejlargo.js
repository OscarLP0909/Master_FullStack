let eleccionOp = Number(window.prompt(`************************
Calculadora
************************
1. Suma
2. Resta
3. Multiplicación
4. Potencia
5. División
6. Raíz
7. Salir
Introduce la opción deseada:`))

while (eleccionOp !== 7) {
    

    switch(eleccionOp){
        case 1:
            let num1Sum = Number(window.prompt(`Introduzca el primer número: `))
            let num2Sum = Number(window.prompt(`Introduzca el segundo número: `))
            let suma = num1Sum + num2Sum
            window.alert(`La suma de ${num1Sum} y ${num2Sum} es de ${suma}`)
            break
        case 2:
            let num1Resta = Number(window.prompt(`Introduzca el primer número: `))
            let num2Resta = Number(window.prompt(`Introduzca el segundo número: `))
            let resta = num1Resta - num2Resta
            window.alert(`La resta de ${num1Resta} y ${num2Resta} es de ${resta}`)
            break
        case 3:
            let num1Mult = Number(window.prompt(`Introduzca el primer número: `))
            let num2Mult = Number(window.prompt(`Introduzca el segundo número: `))
            let multi = num1Mult * num2Mult
            window.alert(`La multiplicación de ${num1Mult} y ${num2Mult} es de ${multi}`)
            break 
        case 4:
            let numPotencia1 = Number(window.prompt(`Introduzca un número: `))
            let numPotencia2 = Number(window.prompt(`Introduzca la potencia: `))
            let potencia = numPotencia1 ** numPotencia2
            window.alert(`La potencia ${numPotencia2} de ${numPotencia1} es de ${potencia}`)
            break
        case 5:
            let numDiv1 = Number(window.prompt(`Introduzca el primer número: `))
            let numDiv2 = Number(window.prompt(`Introduzca el segundo número: `))
            let div = numDiv1 / numDiv2
            window.alert(`La división de ${numDiv1} entre ${numDiv2} es de ${div}`)
            break
        case 6:
            let numRaiz1 = Number(window.prompt(`Introduzca el número: `))
            let raiz = Math.sqrt(numRaiz1)
            window.alert(`La raiz de ${numRaiz1} es de ${raiz}`)
            break
        default:
            window.alert(`Elija un número del 1 al 7`)
    }
    eleccionOp = Number(window.prompt(`************************
    Calculadora
    ************************
    1. Suma
    2. Resta
    3. Multiplicación
    4. Potencia
    5. División
    6. Raíz
    7. Salir
    Introduce la opción deseada:`))
}