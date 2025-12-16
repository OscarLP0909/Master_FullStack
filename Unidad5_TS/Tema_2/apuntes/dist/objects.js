"use strict";
const yo = {
    nombre: "Oscar",
    city: "Malaga",
    age: 24
};
console.log(yo.nombre);
console.log(yo.age > 50),
    console.log(yo.city);
function printPersonData(person) {
    console.log(person.age);
}
printPersonData(yo);
const otraPersona = {
    nombre: "Other",
    age: 52
};
const madrid = {
    name: "Madrid",
    country: "España",
    isCapital: true,
    location: {
        latitude: "45,56",
        longitude: "34,45"
    }
};
console.log(madrid);
const employee = {
    role: "Software Developer"
};
const jefe = {
    role: "Jefe",
    isAdmin: true
};
