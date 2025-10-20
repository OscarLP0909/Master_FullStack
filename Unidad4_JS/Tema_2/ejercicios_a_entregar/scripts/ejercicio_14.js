/*Escribe un programa que muestre la fecha de hoy*/

let date = new Date()

let anio = date.getFullYear() 
let mes = date.getMonth() + 1
let dia = date.getDate()

window.alert(`La fecha de hoy es:  ${dia}-${mes}-${anio}`)