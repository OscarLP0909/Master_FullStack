/*Bob es un adolescente vago, en una conversación sus contestaciones son muy limitadas:
1. Bob responde: “¡Claro!” si le haces una pregunta.
2. Bob responde “¡Eh!, tranquilízate.” si le gritas
3. Bob responde “¡Eh, tranquilízate! Yo sé lo que hago.” Si le haces una pregunta gritándole.
4. Bob responde “Vale con que esas tenemos...” Si no le dices nada
5. Bob responde “Sin más.” a cualquier otra cosa*/

let esPregunta = window.prompt(`¿Estás preguntando?`)
let esGrito = window.prompt(`¿Estás gritando?`)


if (esPregunta === "si" && esGrito === "si") {
    window.alert(`¡Eh, tranquilízate! Yo sé lo que hago.!`)
} else {

let nada = window.prompt(`¿Has dicho algo?`)

if (esGrito === "si") {
    window.alert(`¡Eh!, tranquilízate`)
} else if (esPregunta === "si") {
    window.alert(`¡Claro!`)

} else if (nada === "si") {
    window.alert(`Vale con que esas tenemos...`)
} else {
    window.alert(`Sin más.`)
}
}