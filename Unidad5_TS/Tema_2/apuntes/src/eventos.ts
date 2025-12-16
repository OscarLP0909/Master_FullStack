const fecha = new Date();

console.log(fecha.getDay()); // 4 por ser el 4 dia de la semana


//* Type assertion o asercion de tipos

// const btn = document.querySelector('.btn')!; // La exclamacion es para decirle a TS que el boton no es null
// const btn = document.querySelector('.btn') as HTMLButtonElement // Le decimos a TS que el boton es de tipo Boton

// const btn = <HTMLButtonElement>document.querySelector('.btn') // Otra manera de llamarlo pero menos recomendable

const btn = document.querySelector('.btn') as HTMLButtonElement
console.log(btn)

if (btn) {
    btn.addEventListener("click", (event) => {
        console.log(event)
        btn.disabled = true; // Deshabilita el boton
    });
}