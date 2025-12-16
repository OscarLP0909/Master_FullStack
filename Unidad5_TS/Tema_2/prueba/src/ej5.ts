type date = string | Date
let d: Date
const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

function formatFecha(fecha: date): void {
    if (typeof fecha === "string"){
        d = new Date(fecha)
    } else {
        d = fecha 
    }
    const numeroDia = d.getDate() // Devuelve el numero del dia (1, ...31)
    const nombreDia = dias[d.getDay()]
    const mesDia = meses[d.getMonth()]
    
    console.log(`La fecha que has puesto es de ${nombreDia} ${numeroDia}, de ${mesDia}`)
}
formatFecha("02/10")