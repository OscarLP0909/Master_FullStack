"use strict";
let d;
const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
function dateHumano(date) {
    if (typeof date === "string") {
        d = new Date(date);
    }
    else {
        d = date;
    }
    const nombreDia = diasSemana[d.getDay()];
    const numeroDia = d.getDate();
    const nombreMes = meses[d.getMonth()];
    console.log(`${nombreDia}, ${numeroDia} de ${nombreMes}`);
}
dateHumano("02/10"); // Formato MM/dd
