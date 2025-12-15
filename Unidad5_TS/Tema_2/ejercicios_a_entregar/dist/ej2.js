"use strict";
const yo = {
    nombre: "Oscar",
    birthYear: 2001,
    city: "Malaga"
};
function getPersonInfo(currentYear, persona) {
    let edad;
    const anio = persona.birthYear;
    edad = currentYear - anio;
    const data = [persona.nombre, edad];
    console.log(data);
}
getPersonInfo(2025, yo);
