"use strict";
const fecha = new Date();
console.log(fecha.getDay());
const btn = document.querySelector('.btn');
console.log(btn);
if (btn) {
    btn.addEventListener("click", (event) => {
        console.log(event);
        btn.disabled = true;
    });
}
