"use strict";
var Medallas;
(function (Medallas) {
    Medallas["First"] = "Oro";
    Medallas["Second"] = "Plata";
    Medallas["Third"] = "Bronce";
})(Medallas || (Medallas = {}));
function showMedal(classification) {
    const medal = Medallas[classification];
    return `Has ganado la medalla de ${medal.toLowerCase()}`;
}
console.log(showMedal("First"));
console.log(showMedal("Second"));
