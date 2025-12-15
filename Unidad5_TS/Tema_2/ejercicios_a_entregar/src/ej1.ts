// Ejercicio 1

const form = document.getElementById("form")

if(form instanceof HTMLFormElement) { // Comprobamos que form es del elemento Form
    form.addEventListener("submit", (event: SubmitEvent) => {
        event.preventDefault() // Para no enviar el formulario

        const input = document.getElementById("name")

        if(input instanceof HTMLInputElement) { // Comprobamos que el input sea un elemento input
            const value: string = input.value
            console.log(value)
        }
    })
}

