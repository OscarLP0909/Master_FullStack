const form = document.getElementById("form") as HTMLFormElement

form.addEventListener("submit", (event: Event) => {
    event.preventDefault();
    
    const input = document.getElementById("name") as HTMLInputElement

    const value: string = input.value

    console.log(value)
})