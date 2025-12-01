//Fetch es una promesa
fetch(' https://randomuser.me/api')
    .then((res) => (res.json()))
    .then((datos) => { console.log(datos.results[0].gender) })


const boton = document.getElementById("boton")

boton.addEventListener("click", pedir)

function pedir() {
    fetch(' https://randomuser.me/api/?results=3')
        .then((res) => (res.json()))
        .then((datos) => { imprimir(datos) })
}

function imprimir(datos) {

    let salida = "";

    datos.results.forEach(persona => {
        salida += `<div class="card">
  <img src="${persona.picture.thumbnail}" alt="Avatar" style="width:100%">
  <div class="container">
    <h4><b>${persona.name.first + " " + persona.name.last}</b></h4>
    <p>${persona.phone}</p>
  </div>
</div>`
    });

    document.getElementById("respuesta").innerHTML = salida

    return
}

// let persona = {
//     name : "paco",
//     edad: 23
// }

{/* <xml>
    <persona>
        <name>Paco</name>
        <edad>23</edad>
    </persona>
</xml> */}