type fecha = string | Date
let d: Date;
const diasSemana: string[] = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]; 
const meses: string[] = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]

function dateHumano(date: fecha): void {
    if(typeof date === "string"){
        d = new Date(date)
    } else {
        d = date
    }
    const nombreDia = diasSemana[d.getDay()];
    const numeroDia = d.getDate();
    const nombreMes = meses[d.getMonth()];

    console.log(`${nombreDia}, ${numeroDia} de ${nombreMes}`)
}

dateHumano("02/10") // Formato MM/dd