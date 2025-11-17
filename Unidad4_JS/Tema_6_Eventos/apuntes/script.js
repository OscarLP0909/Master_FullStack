// A través del document
let abuelo = document.getElementById("odin")
let padre = document.getElementById("paternoster")
let nieto = document.getElementById("boton")


abuelo.addEventListener("click", (e)=>{imprimir(e)})
abuelo.addEventListener("click", (e)=>{console.log("Abuelo")})

padre.addEventListener("click", (e)=>{imprimir(e)})
padre.addEventListener("click", (e)=>{console.log("Padre")})

nieto.addEventListener("click", (e)=>{imprimir(e)})
nieto.addEventListener("click", (e)=>{console.log("Nieto")})


// A través de argumentos (solo podemos tener uno)
function imprimir(e) {
    console.log("He sido pulsado")
    console.log(e)
}