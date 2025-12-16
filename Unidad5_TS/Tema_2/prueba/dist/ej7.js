"use strict";
var Rangos;
(function (Rangos) {
    Rangos["Junior"] = "Junior";
    Rangos["Mid"] = "Mid";
    Rangos["Senior"] = "Senior";
})(Rangos || (Rangos = {}));
function showRank(rank) {
    const rango = Rangos[rank];
    return `Tu rango en la empresa es de ${rango}`;
}
console.log(showRank("Junior"));
