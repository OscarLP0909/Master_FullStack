/*Un programa que te pregunta la temperatura que hace donde estás y te sugiere qué hacer dependiendo de ella. Las
recomendaciones son:
1. Si hace más de 40 grados, vete a otro sitio
2. Entre 30 y 40 grados, enciende el aire acondicionado
3. Entre 30 y 20 grados, no hagas nada
4. Entre 10 y 20 grados, enciende la calefacción
5. Si hace menos de 10 grados, vete a otro sitio*/

let temp = Number(window.prompt("Introduzca la temperatura actual"))

if (temp >= 40) {
    window.alert(`Vete a otro sitio, hace demasiada calor ${temp}`)
} else if (temp >= 30) {  // Entre 30 y 40
    window.alert(`Encienda el aire acondicionado, hace ${temp} grados.`)
} else if (temp >= 20) {  // Entre 20 y 30
    window.alert(`No hagas nada, hace buena temperatura ${temp}`)
} else if (temp >= 10) {  // Entre 10 y 20
    window.alert(`Encienda la calefacción, hace ${temp} grados.`)
} else {  // Menos de 10
    window.alert(`Hace mucho frío, vaya a otro sitio. ${temp}`)
}