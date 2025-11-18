// Array SistemaSolar
let sistemaSolar = [
    {
        nombre: "mercurio",
        color: "gris",
        fondo: "grey",
        temperatura: 350,
        imagen:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mercury_in_color_-_Prockter07_centered.jpg/1024px-Mercury_in_color_-_Prockter07_centered.jpg",
    },
    {
        nombre: "venus",
        color: "blanco",
        fondo: "white",
        temperatura: 460,
        imagen:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/220px-Venus-real_color.jpg",
    },
    {
        nombre: "tierra",
        color: "morado",
        fondo: "purple",
        temperatura: 14,
        imagen:
            "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5a0ab2a75bafe87f4d3f9a63/acaba-tiempo_0.jpg",
    },
    {
        nombre: "marte",
        color: "rojo",
        fondo: "red",
        temperatura: -46,
        imagen:
            "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/55365b6b34099b0279c8fb2e/slide-marte.jpg",
    },
    {
        nombre: "jupiter",
        color: "marrón",
        fondo: "brown",
        temperatura: -121,
        imagen:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jupiter_by_Cassini-Huygens.jpg/280px-Jupiter_by_Cassini-Huygens.jpg",
    },
    {
        nombre: "saturno",
        color: "amarillo",
        fondo: "yellow",
        temperatura: -130,
        imagen:
            "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/558d2b15010e26221b57df75/saturno.jpg",
    },
    {
        nombre: "urano",
        color: "azul",
        fondo: "blue",
        temperatura: -205,
        imagen: "http://www.manzanares.es/v2/sites/paseo/img/urano/urano1.jpg",
    },
    {
        nombre: "neptuno",
        color: "azul",
        fondo: "blue",
        temperatura: -220,
        imagen:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/280px-Neptune_Full.jpg",
    },
    {
        nombre: "plutón",
        color: "blanco",
        fondo: "white",
        temperatura: -229,
        imagen:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Nh-pluto-in-true-color_2x_JPEG.jpg/1200px-Nh-pluto-in-true-color_2x_JPEG.jpg",
    },
];

// Pedimos al usuario los 3 planetas
let planeta1 = prompt(`Introduzca el primer planeta: `).toLowerCase()
let planeta2 = prompt(`Introduzca el segundo planeta: `).toLowerCase()
let planeta3 = prompt(`Introduzca el tercer planeta: `).toLowerCase()

// Guardamos en una variable el planeta escrito y que se encuentre dentro del array
let planetaEncontrado1 = sistemaSolar.find((p) => p.nombre === planeta1)
let planetaEncontrado2 = sistemaSolar.find((p) => p.nombre === planeta2)
let planetaEncontrado3 = sistemaSolar.find((p) => p.nombre === planeta3)

// Si existe en el array
if (planetaEncontrado1 === undefined || planetaEncontrado2 === undefined || planetaEncontrado3 === undefined) {
    alert(`Introduzca un planeta válido`)
    // Si se repite alguno
} else if (planeta1 === planeta2 || planeta2 === planeta3 || planeta1 === planeta3) {
    alert(`No introduzca planetas anteriormente escritos`)
} else {

    // Funcion para crear el HTML sin necesidad de escribirlo 3 veces
    function mostrarPlaneta(planetaEncontrado, divId){
        let div = document.getElementById(divId)
        div.innerHTML = `
        <h3>Nombre: ${planetaEncontrado.nombre}</h3>
        <img src="${planetaEncontrado.imagen}">
        <p>Color: ${planetaEncontrado.color}</p>
        <p>Temperatura: ${planetaEncontrado.temperatura}</p>
        <button>Cambiar fondo</button>`

        let boton = div.querySelector("button")
        boton.addEventListener("click", () => {
            div.style.backgroundColor = planetaEncontrado.fondo
        })
    }

    // Ejecutar funcion para crear los 3 divs de los 3 planetas que se piden
    mostrarPlaneta(planetaEncontrado1, "planeta1")
    mostrarPlaneta(planetaEncontrado2, "planeta2")
    mostrarPlaneta(planetaEncontrado3, "planeta3")

}
