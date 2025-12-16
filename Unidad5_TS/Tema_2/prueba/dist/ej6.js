"use strict";
const Oscar = {
    name: "Oscar",
    birthYear: 2001,
};
function showInfo(currentYear, persona) {
    const edad = currentYear - persona.birthYear;
    return [persona.name, edad];
}
console.log(showInfo(2025, Oscar));
