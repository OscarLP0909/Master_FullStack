"use strict";
const container = document.getElementById("container");
function alignHTMLElement(direction) {
    if (!container) {
        console.warn(`No se ha encontrado el elemento container`);
        return false;
    }
    container.style.textAlign = direction;
    return true;
}
alignHTMLElement("center");
