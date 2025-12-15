"use strict";
const form = document.getElementById("form");
if (form instanceof HTMLFormElement) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const input = document.getElementById("name");
        if (input instanceof HTMLInputElement) {
            const value = input.value;
            console.log(value);
        }
    });
}
