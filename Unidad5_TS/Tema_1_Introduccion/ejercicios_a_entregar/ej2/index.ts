const container = document.getElementById("container")

type align = 'center' | 'left' | 'right'

function alignHTMLElement(direction: align): boolean {
    if(!container) {
        console.warn(`No se ha encontrado el elemento container`)
        return false
    }
    container.style.textAlign = direction
    return true
}

alignHTMLElement("center")