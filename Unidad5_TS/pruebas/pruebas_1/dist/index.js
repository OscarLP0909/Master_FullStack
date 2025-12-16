"use strict";
let t;
let horasFinal;
let minutosFinal;
function formatTime(input) {
    if (typeof input === "string") {
        const [hh, mm] = input.split(":");
        const hora = Number(hh);
        const minuto = Number(mm);
        if (hora < 0 || hora > 23 || minuto < 0 || minuto > 59) {
            console.warn(`Hora y minutos no válidos`);
            return;
        }
        else {
            t = new Date();
            horasFinal = hora;
            minutosFinal = minuto;
            t.setHours(horasFinal);
            t.setMinutes(minutosFinal);
            t.setSeconds(0);
        }
    }
    else {
        t = input;
        if (isNaN(t.getTime())) {
            console.warn(`Formato inválido`);
            return;
        }
        horasFinal = t.getHours();
        minutosFinal = t.getMinutes();
    }
    console.log(`Son las ${horasFinal} horas y ${minutosFinal} minutos`);
}
formatTime("14:50");
