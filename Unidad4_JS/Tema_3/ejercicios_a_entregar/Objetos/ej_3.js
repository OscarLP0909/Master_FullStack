// Crea una página con un div vacío. Al entrar en la página, pide al usuario que introduzca un número. Inserta ese número en el
// div . Si el número es menor que 100, el número tendrá color verde; si está entre 100 y 200, tendrá color amarillo; si es mayor
// que 200, tendrá color rojo.

let usuario = Number(window.prompt(`Introduzca un número: `))

document.getElementById(`div`).innerHTML = usuario

if (usuario < 100) {
    document.getElementById(`div`).style.color = "green"
} else if (usuario >= 100 && usuario <= 200) {
    document.getElementById(`div`).style.color = "yellow"
} else {
    document.getElementById(`div`).style.color = "red"
}