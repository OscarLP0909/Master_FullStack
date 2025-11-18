// A través del document
// let abuelo = document.getElementById("odin")
// let padre = document.getElementById("paternoster")
// let nieto = document.getElementById("boton")


// abuelo.addEventListener("click", (e)=>{imprimir(e)})
// abuelo.addEventListener("click", (e)=>{console.log("Abuelo")})

// padre.addEventListener("click", (e)=>{imprimir(e)})
// padre.addEventListener("click", (e)=>{console.log("Padre")})

// nieto.addEventListener("click", (e)=>{imprimir(e)})
// nieto.addEventListener("click", (e)=>{console.log("Nieto")})


// A través de argumentos (solo podemos tener uno)
// function imprimir(e) {
//     console.log("He sido pulsado")
//     console.log(e)
// }

// Cambiar el color de fondo mediante el click de un boton

let boton = document.getElementById("boton")
boton.addEventListener("click", () => {
    let colorActual = document.getElementById("odin").style.backgroundColor
    if(colorActual === "green") {
        document.getElementById("odin").style.backgroundColor = "red"
    } else {
        document.getElementById("odin").style.backgroundColor = "green"
    }
})