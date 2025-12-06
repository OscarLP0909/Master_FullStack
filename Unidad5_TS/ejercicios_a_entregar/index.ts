const boton = document.getElementById("boton")


boton?.addEventListener("click", (Event) => {
    Event.preventDefault()
    const nameForm = document.getElementById("nombre") as HTMLInputElement
    function mostrarInfoForm(nombre: string): void {
        console.log(nombre)
    }
    mostrarInfoForm(nameForm.value)
})