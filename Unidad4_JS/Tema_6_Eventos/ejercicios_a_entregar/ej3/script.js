let contadorMartillos = 0;
let contadorLlaves = 0;
let contadorBrochas = 0;
let contadorTronco = 0;

let cesta = document.getElementById("cesta")

let botonMartillo = document.getElementById("martilloBtn")
let martilloQuitar = document.getElementById("restarMartillo")

function actualizarCesta() {
    cesta.innerHTML = "";
    if(contadorMartillos > 0) {
    cesta.innerHTML += `
    <p>Martillo: ${contadorMartillos}</p>
    ${"<img class='icono' src='martillo.svg'>".repeat(contadorMartillos)}`
    }
    if(contadorLlaves > 0) {
        cesta.innerHTML += `
        <p>Llaves: ${contadorLlaves}</p>
        ${"<img class='icono' src='llave.svg'>".repeat(contadorLlaves)}
        `
    }
    if(contadorBrochas > 0){
        cesta.innerHTML += `
        <p>Brochas: ${contadorBrochas}</p>
        ${"<img class='icono' src='brocha.svg'>".repeat(contadorBrochas)}
        `
    }
    if(contadorTronco > 0) {
        cesta.innerHTML += `
        <p>Troncos: ${contadorTronco}</p>
        ${"<img class='icono' src='tronco.svg'>".repeat(contadorTronco)}
        `
    }
}

botonMartillo.addEventListener("click", () => {
    contadorMartillos++;
    actualizarCesta()
})

martilloQuitar.addEventListener("click", () => {
    if(contadorMartillos > 0) {
        contadorMartillos--;
    }
    actualizarCesta()
})

let botonLlave = document.getElementById("llaveBtn")
let llaveQuitar = document.getElementById("quitarLlave")

botonLlave.addEventListener("click", () => {
    contadorLlaves++;
    actualizarCesta()
})

llaveQuitar.addEventListener("click", () => {
    if(contadorLlaves > 0){
    contadorLlaves--;
    }
    actualizarCesta()
})

let botonBrocha = document.getElementById("brochaBtn")
let brochaQuitar = document.getElementById("quitarBrocha")

botonBrocha.addEventListener("click", () => {
    contadorBrochas++;
    actualizarCesta()
})

brochaQuitar.addEventListener("click", () => {
    if(contadorBrochas > 0){
        contadorBrochas--;
    }
    actualizarCesta()
})

let botonTronco = document.getElementById("troncoBtn")
let troncoQuitar = document.getElementById("quitarTronco")

botonTronco.addEventListener("click", () => {
    contadorTronco++;
    actualizarCesta()
})

troncoQuitar.addEventListener("click", () => {
    if(contadorTronco > 0) {
        contadorTronco--;
    }
    actualizarCesta()
})