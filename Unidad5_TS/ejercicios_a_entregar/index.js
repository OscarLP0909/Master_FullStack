"use strict";
const boton = document.getElementById("boton");
boton === null || boton === void 0 ? void 0 : boton.addEventListener("click", (Event) => {
    Event.preventDefault();
    const nameForm = document.getElementById("nombre");
    function mostrarInfoForm(nombre) {
        console.log(nombre);
    }
    mostrarInfoForm(nameForm.value);
});
