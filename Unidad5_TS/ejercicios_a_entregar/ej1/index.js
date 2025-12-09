"use strict";
const boton = document.getElementById("boton");
boton === null || boton === void 0 ? void 0 : boton.addEventListener("click", (Event) => {
    Event.preventDefault(); // esto sirve para que cuando se le dé a enviar, no mande nada
    const nameForm = document.getElementById("nombre");
    function mostrarInfoForm(nombre) {
        console.log(nombre);
    }
    mostrarInfoForm(nameForm.value);
});
