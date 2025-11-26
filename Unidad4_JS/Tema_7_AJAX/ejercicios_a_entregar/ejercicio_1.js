// 1. Proyecto Guttenberg: Haz una llamada a la API gutendex.com/books para que devuelta todos los libros. Muestra en cards las
// portadas y los títulos y autores.

// Llamamos a la API con el fetch

fetch('https://gutendex.com')
    .then((res) => (res.json()))

const boton = document.getElementById("boton")

boton.addEventListener("click", pedirLibro)

function pedirLibro() {
    fetch('https://gutendex.com/books')
        .then((res) => (res.json()))
        .then((datos) => { imprimir(datos) })
}

function imprimir(datos) {
    let salida = "";

    datos.results.forEach(libro => {
        salida += `<div class="card">
        <img src="${libro.results[formats.image/jpeg]}" alt="${libro.results[title]}
        </div>`
    });
}