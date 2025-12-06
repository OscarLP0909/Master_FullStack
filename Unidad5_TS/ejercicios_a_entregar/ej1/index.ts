const boton = document.getElementById("boton")


boton?.addEventListener("click", (Event) => {
    Event.preventDefault() // esto sirve para que cuando se le dé a enviar, no mande nada
    const nameForm = document.getElementById("nombre") as HTMLInputElement
    function mostrarInfoForm(nombre: string): void {
        console.log(nombre)
    }
    mostrarInfoForm(nameForm.value)
})