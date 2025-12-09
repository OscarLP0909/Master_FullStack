// Crear una web en la que:

// Se cargue un dropdown (<select>) con todos los tipos de Pokémon (fire, water, grass, etc.)

// Cuando el usuario selecciona un tipo:

// Se muestra un lista de Pokémon pertenecientes a ese tipo

// Cada Pokémon se muestra con:

// su nombre y su imagen oficial


const containerDropdown = document.createElement("div")
const divInfo = document.createElement("div")
divInfo.id = "divInfo"

// DropDown con los tipos de los Pokemon
fetch(`https://pokeapi.co/api/v2/type`)
    .then((res) => res.json())
    .then(data => {
        console.log(data.results)
        const select = document.createElement("select")
        data.results.forEach(tipo => {
            const opcion = document.createElement("option")
            opcion.textContent = tipo.name
            select.appendChild(opcion)
        });
        containerDropdown.appendChild(select)
        document.body.appendChild(containerDropdown)
        document.body.appendChild(divInfo)

        // Evento cada vez que cambiemos de tipo en el dropdown
        select.addEventListener("change", () => {
            divInfo.innerHTML = "";
            const tipoSeleccionado = data.results.find(tipo => tipo.name === select.value)
            console.log(tipoSeleccionado)

            // Hacemos Fetch sobre el tipo seleccionado y obtenemos la url de los pokemon
            fetch(tipoSeleccionado.url)
                .then(res => res.json())
                .then(tipoCompleto => {
                    console.log(tipoCompleto.pokemon)
                    tipoCompleto.pokemon.forEach(p => {

                        // Hacemos otro fetch para obtener otra url donde se encuentra toda la informacion del pokemon
                        fetch(p.pokemon.url)
                            .then(res => res.json())
                            .then(infoCompleta => {
                                const imagen = document.createElement("img")
                                imagen.src = infoCompleta.sprites.front_default
                                const nombre = document.createElement("p")
                                nombre.textContent = infoCompleta.name
                                const card = document.createElement("div")
                                card.appendChild(imagen)
                                card.appendChild(nombre)
                                divInfo.appendChild(card)
                                card.classList.add("poke-card")
                            })
                    })
                })
        })
    })

