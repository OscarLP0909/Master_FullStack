/* Escribe un programa que pregunte al usuario su edad.
Mostrar en pantalla “Feliz cumpleaños” repetido tantas veces como años tenga.*/

let edad = Number(window.prompt(`¿Cuántos años tienes?`))

for (let i = 0; i < edad; i++) {
    document.write(`<br>Feliz Cumpleaños<br>`)
}