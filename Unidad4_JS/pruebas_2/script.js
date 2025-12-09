// Crear una web en la que:

// Se cargue un <select> con todas las razas de perros.

// Cuando el usuario seleccione una raza:

// Haces un fetch a la API para traer imágenes de esa raza.

// Muestras 3 imágenes aleatorias de la raza seleccionada.

const containerDropdown = document.createElement("div")
containerDropdown.id = "containerDropdown"
document.body.appendChild(containerDropdown)


fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(data => {
        console.log(data) 
        const razas = Object.keys(data.message)
        const seleccion = document.createElement("select")
        seleccion.id = "selection"
        razas.forEach(raza => {
            const opciones = document.createElement("option")
            opciones.textContent = raza
            seleccion.appendChild(opciones)
        });
        
        containerDropdown.appendChild(seleccion)

        const divRaza = document.createElement("div")
        divRaza.id = "container"

        // Ahora tenemos que obtener la raza seleccionada del select, una vez obtenida, hacemos un fetch a la otra URL añadiendo la raza que hemos seleccionado
        seleccion.addEventListener("change", () => {
            divRaza.innerHTML = "";
            const razaElegida = seleccion.value
            fetch(`https://dog.ceo/api/breed/${razaElegida}/images`)
                .then(res => res.json())
                .then(datosRaza => {
                    console.log(datosRaza.message)
                    const imagenes = datosRaza.message // Declaramos en una variable el array entero de URLs
                    for (let i = 0; i < 3; i++) { // Bucle for para obetener 3 imágenes aleatorias y añadirlas
                        const index = Math.floor(Math.random() * imagenes.length)
                        const url = imagenes[index]
                        const imgDiv = document.createElement("img")
                        imgDiv.src = url
                        divRaza.appendChild(imgDiv)
                    }
                    document.body.appendChild(divRaza)
                })
        })
        
    })