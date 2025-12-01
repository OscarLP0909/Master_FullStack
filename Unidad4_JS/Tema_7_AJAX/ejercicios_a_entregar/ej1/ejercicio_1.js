// 1. Proyecto Guttenberg: Haz una llamada a la API gutendex.com/books para que devuelva todos los libros. Muestra en cards las
// portadas y los títulos y autores.

// Llamamos a la API con el fetch
const boton = document.getElementById("boton")
const div = document.getElementById("respuesta")

boton.addEventListener("click", () => {
    fetch('https://gutendex.com/books')
        .then((res) => res.json())
        .then((data) => renderLibros(data.results))
})

function renderLibros(libros) {
    libros.forEach(l => {
        div.innerHTML += `
    <img src="${l.formats["image/jpeg"]}"></img>
    <h3>Título: ${l.title}</h3>
    <p>Autor/a: ${l.authors.map(a => a.name).join(", ")}</p>
    `;
    });
}