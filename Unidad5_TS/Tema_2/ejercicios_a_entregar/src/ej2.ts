type Person = {
    nombre: string,
    birthYear: number,
    city?: string
}

const yo: Person = {
    nombre: "Oscar",
    birthYear: 2001,
    city: "Malaga"
}

function getPersonInfo(currentYear: number, persona: Person): void {
    let edad: number

    const anio: number = persona.birthYear

    edad = currentYear - anio

    const data = [persona.nombre, edad]

    console.log(data)
}

getPersonInfo(2025, yo)