type align = "left" | "center" | "right"

const div = document.getElementById("div") as HTMLDivElement

function setTextAlign (orientation: align): void {
    div.style.textAlign = orientation;
}

setTextAlign("center")