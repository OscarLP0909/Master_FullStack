"use strict";
const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("name");
    const value = input.value;
    console.log(value);
});
