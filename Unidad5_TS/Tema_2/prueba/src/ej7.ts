enum Rangos {
    Junior = "Junior",
    Mid = "Mid",
    Senior = "Senior"
}

function showRank(rank: keyof typeof Rangos): string {
    const rango = Rangos[rank]
    return `Tu rango en la empresa es de ${rango}`
}

console.log(showRank("Junior"))