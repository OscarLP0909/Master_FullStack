type Person = {
    name: string,
    birthYear: number,
    city?: string
}

const Oscar = {
    name: "Oscar",
    birthYear: 2001,
}

function showInfo(currentYear: number, persona: Person): [string, number]{
    const edad = currentYear - persona.birthYear
    return [persona.name, edad]
}

console.log(showInfo(2025, Oscar))